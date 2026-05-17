from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from contextlib import asynccontextmanager
from app.core.database import engine, Base

from app.core.scheduler import start_scheduler
from app.api.auth import router as auth_router
from app.api.posts import router as posts_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    start_scheduler()
    yield
app = FastAPI(title=settings.PROJECT_NAME, lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(posts_router, prefix="/api/posts", tags=["Posts"])
app.include_router(auth_router, prefix="/api/auth", tags=["Auth"])

@app.get("/")
async def root():
    return {"message": "Productivity Gourmet API is running", "status": "healthy"}