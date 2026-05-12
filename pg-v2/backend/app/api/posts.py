from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List

from app.core.database import get_db
from app.models.post import Post
from app.schemas.post import PostCreate, PostResponse

router = APIRouter()

@router.post("/", response_model=PostResponse, status_code=status.HTTP_201_CREATED)
async def create_post(post_in: PostCreate, db: AsyncSession = Depends(get_db)):
    """
    Create a new blog post.
    """
    stmt = select(Post).where(Post.slug == post_in.slug)
    result = await db.execute(stmt)
    existing_post = result.scalars().first()
    
    if existing_post:
        raise HTTPException(status_code=400, detail="A post with this slug already exists.")
    
    db_post = Post(**post_in.model_dump())
    
    db.add(db_post)
    await db.commit()
    await db.refresh(db_post)
    
    return db_post


@router.get("/", response_model=List[PostResponse])
async def get_posts(db: AsyncSession = Depends(get_db)):
    """
    Fetch all blog posts. 
    Returns a list of posts directly translated to JSON via our PostResponse schema.
    """
    stmt = select(Post).order_by(Post.created_at.desc())
    result = await db.execute(stmt)
    
    posts = result.scalars().all()

    # if not posts:
    #     raise HTTPException(status_code=404, detail="There are no posts yet")
    
    return posts


@router.get("/{slug}", response_model=PostResponse)
async def get_post_by_slug(slug: str, db: AsyncSession = Depends(get_db)):
    """
    Fetch a single blog post by its URL-friendly slug.
    """
    stmt = select(Post).where(Post.slug == slug)
    result = await db.execute(stmt)
    post = result.scalars().first()
    
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
        
    return post