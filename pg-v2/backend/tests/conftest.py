"""
Test fixtures for the Productivity Gourmet backend.

Place this file at tests/conftest.py (next to test_scheduling.py) in your backend repo.

Requirements: pytest, pytest-asyncio, httpx, asyncpg
Run against a throwaway LOCAL Postgres only (not Neon, not production):

    docker run -d --name pgtest -e POSTGRES_PASSWORD=test -e POSTGRES_DB=app_test -p 5433:5432 postgres:16
    export TEST_DATABASE_URL=postgresql+asyncpg://postgres:test@localhost:5433/app_test
    pytest -v

Postgres matters here: SQLite ignores timezones, which would hide the exact bugs we are hunting.
"""
import asyncio
import os
import uuid
from datetime import datetime, timezone
from urllib.parse import urlparse

import httpx
import pytest
import pytest_asyncio
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.pool import NullPool

TEST_DATABASE_URL = os.environ.get("TEST_DATABASE_URL")
if not TEST_DATABASE_URL:
    pytest.exit("Set TEST_DATABASE_URL to a local throwaway Postgres (see conftest.py docstring).", returncode=2)

# Safety guard: these tests DROP and TRUNCATE tables. Only run against a database whose
# name contains "test" (e.g. app_test), never your dev or production database.
_parsed = urlparse(TEST_DATABASE_URL.replace("+asyncpg", ""))
_dbname = (_parsed.path or "").lstrip("/")
if "test" not in _dbname.lower():
    pytest.exit(f"Refusing to run: database name '{_dbname}' must contain 'test'.", returncode=2)
if _parsed.hostname and "neon" in _parsed.hostname:
    pytest.exit("Refusing to run against a Neon host.", returncode=2)

# Point the app's own engine at the test DB *before* the app is imported.
os.environ["DATABASE_URL"] = TEST_DATABASE_URL

from app.main import app  # noqa: E402
from app.api.auth import get_current_admin  # noqa: E402
from app.core import scheduler as scheduler_module  # noqa: E402
from app.core.database import Base, get_db  # noqa: E402
from app.models.post import Post  # noqa: E402


@pytest.fixture(scope="session", autouse=True)
def _schema():
    """Create a fresh schema once per test session."""

    async def _create():
        engine = create_async_engine(TEST_DATABASE_URL, poolclass=NullPool)
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)
            await conn.run_sync(Base.metadata.create_all)
        await engine.dispose()

    async def _drop():
        engine = create_async_engine(TEST_DATABASE_URL, poolclass=NullPool)
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)
        await engine.dispose()

    asyncio.run(_create())
    yield
    asyncio.run(_drop())


@pytest_asyncio.fixture
async def session_factory(monkeypatch):
    """A session factory bound to the test DB, with the posts table emptied first.
    Also points the scheduler at it: the app's global engine keeps pooled connections that
    belong to earlier tests' (now closed) event loops, which breaks the scheduler randomly."""
    engine = create_async_engine(TEST_DATABASE_URL, poolclass=NullPool)
    factory = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False, autoflush=False)
    async with engine.begin() as conn:
        await conn.execute(text("TRUNCATE posts CASCADE"))
    monkeypatch.setattr(scheduler_module, "AsyncSessionLocal", factory)
    yield factory
    await engine.dispose()


@pytest.fixture(autouse=True)
def _fail_on_swallowed_scheduler_errors(caplog):
    """publish_scheduled_posts() catches and logs its own exceptions, so a broken run looks like
    'nothing happened'. That would let 'post is NOT published' tests pass for the wrong reason."""
    yield
    errors = [r.getMessage() for r in caplog.records if r.getMessage().startswith("Scheduler error")]
    assert not errors, f"scheduler swallowed an error: {errors}"


@pytest_asyncio.fixture
async def client(session_factory, monkeypatch):
    """HTTP client wired to the test DB, with admin auth bypassed and the scheduler
    pointed at the test DB too. Lifespan is NOT run, so no background scheduler starts."""

    async def _get_db():
        async with session_factory() as session:
            yield session

    app.dependency_overrides[get_db] = _get_db
    app.dependency_overrides[get_current_admin] = lambda: "test-admin"
    monkeypatch.setattr(scheduler_module, "AsyncSessionLocal", session_factory)

    transport = httpx.ASGITransport(app=app)
    async with httpx.AsyncClient(transport=transport, base_url="http://test") as c:
        yield c

    app.dependency_overrides.clear()


@pytest.fixture
def freeze_scheduler_clock(monkeypatch):
    """Freeze the `datetime.now(UTC)` the scheduler sees. Call freeze(aware_datetime)."""

    def _freeze(moment: datetime):
        assert moment.tzinfo is not None, "freeze with a timezone-aware datetime"

        class Frozen(datetime):
            @classmethod
            def now(cls, tz=None):
                return moment.astimezone(tz) if tz else moment.replace(tzinfo=None)

        monkeypatch.setattr(scheduler_module, "datetime", Frozen)

    return _freeze


@pytest_asyncio.fixture
async def make_post(session_factory):
    """Insert a post straight into the DB (bypassing the API) and return its id."""

    async def _make(**overrides) -> uuid.UUID:
        slug = overrides.pop("slug", f"post-{uuid.uuid4().hex[:8]}")
        data = dict(
            title="Test post",
            slug=slug,
            content="<p>body</p>",
            summary="summary",
            category="Operations",
            is_published=False,
            is_archived=False,
        )
        data.update(overrides)
        async with session_factory() as session:
            post = Post(**data)
            session.add(post)
            await session.commit()
            return post.id

    return _make


@pytest_asyncio.fixture
async def fetch_post(session_factory):
    """Re-read a post from the DB."""

    async def _fetch(post_id) -> Post:
        async with session_factory() as session:
            return await session.get(Post, post_id)

    return _fetch


@pytest_asyncio.fixture
async def stored_utc(session_factory):
    """Return scheduled_at exactly as Postgres holds it, rendered in UTC (naive datetime)."""

    async def _stored(post_id):
        async with session_factory() as session:
            row = await session.execute(
                text("SELECT scheduled_at AT TIME ZONE 'UTC' FROM posts WHERE id = :id"),
                {"id": post_id},
            )
            return row.scalar_one()

    return _stored


UTC = timezone.utc