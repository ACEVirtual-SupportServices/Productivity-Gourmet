import hashlib
from urllib.parse import urlparse
from datetime import datetime, timedelta, timezone
from fastapi import APIRouter, Depends, Request, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.database import get_db
from app.models.post import Post
from app.models.post_view import PostView
from app.schemas.views import ViewPayload

router = APIRouter()

@router.post("/posts/{slug}/view")
async def track_post_view(
    slug: str, 
    payload: ViewPayload,
    request: Request, 
    db: AsyncSession = Depends(get_db)
):
    if request.cookies.get("access_token"):
        return {"tracked": False, "reason": "admin_ignored"}

    stmt = select(Post).where(Post.slug == slug, Post.is_published == True)
    result = await db.execute(stmt)
    post = result.scalar_one_or_none()

    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    client_ip = request.client.host if request.client else "unknown_ip"
    user_agent = request.headers.get("user-agent", "unknown_ua")
    
    raw_fingerprint = f"{client_ip}-{user_agent}"
    ip_hash = hashlib.sha256(raw_fingerprint.encode('utf-8')).hexdigest()

    twenty_four_hours_ago = datetime.now(timezone.utc) - timedelta(hours=24)
    
    dup_stmt = select(PostView).where(
        PostView.post_id == post.id,
        PostView.ip_hash == ip_hash,
        PostView.created_at >= twenty_four_hours_ago
    )
    dup_result = await db.execute(dup_stmt)

    if dup_result.scalar_one_or_none():
        return {"tracked": False, "reason": "duplicate_prevented"}

    raw_referrer = payload.referrer
    clean_referrer = "Direct"

    if raw_referrer and raw_referrer != "Direct":
        try:
            parsed_url = urlparse(raw_referrer)
            domain = parsed_url.netloc.replace("www.", "")
            
            if "productivitygourmet.com" in domain or "localhost" in domain:
                clean_referrer = "Internal"
            else:
                clean_referrer = domain if domain else "Direct"
        except Exception:
            clean_referrer = "Direct"
    
    new_view = PostView(
        post_id=post.id,
        ip_hash=ip_hash,
        referrer=clean_referrer,
        user_agent=user_agent
    )
    
    db.add(new_view)
    await db.commit()

    return {"tracked": True}