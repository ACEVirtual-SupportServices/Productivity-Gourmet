"""
Scheduling / date tests.

Tests marked "BUG PROBE" assert the behavior you'd WANT. Based on the code reviewed, they are
expected to FAIL today; a failure is the confirmation that the problem is in the code, not in
Render's free tier. Everything else should pass and proves the current pipeline is sound.
"""
from datetime import datetime, timezone

import pytest

from app.core import scheduler as scheduler_module

UTC = timezone.utc


def payload(**overrides):
    base = dict(
        title="Scheduling test",
        summary="summary",
        category="Operations",
        content="<p>hello</p>",
        cover_image=None,
        read_time=1,
        is_published=False,
        analytics_public=False,
        scheduled_at=None,
    )
    base.update(overrides)
    return base


def parse(iso: str) -> datetime:
    return datetime.fromisoformat(iso.replace("Z", "+00:00"))


# --------------------------------------------------------------------------------------
# 1. Datetime round trip: frontend -> API -> DB -> API
#    (the frontend sends new Date(localValue).toISOString(), i.e. UTC with a Z suffix)
# --------------------------------------------------------------------------------------

async def test_schedule_utc_roundtrip(client, stored_utc):
    r = await client.post("/api/posts/", json=payload(scheduled_at="2026-11-20T08:00:00.000Z"))
    assert r.status_code == 201, r.text
    post = r.json()

    assert parse(post["scheduled_at"]) == datetime(2026, 11, 20, 8, 0, tzinfo=UTC)
    assert await stored_utc(post["id"]) == datetime(2026, 11, 20, 8, 0)

    r2 = await client.get(f"/api/admin/posts/{post['id']}")
    assert parse(r2.json()["scheduled_at"]) == datetime(2026, 11, 20, 8, 0, tzinfo=UTC)


async def test_schedule_with_lagos_offset_is_same_instant(client, stored_utc):
    """09:00 in Lagos (+01:00) must be stored as 08:00 UTC."""
    r = await client.post("/api/posts/", json=payload(scheduled_at="2026-11-20T09:00:00+01:00"))
    assert r.status_code == 201, r.text
    assert await stored_utc(r.json()["id"]) == datetime(2026, 11, 20, 8, 0)


@pytest.mark.parametrize(
    "sent, expected_utc",
    [
        ("2026-11-20T23:30:00+01:00", datetime(2026, 11, 20, 22, 30)),  # late evening Lagos
        ("2026-11-21T00:30:00+01:00", datetime(2026, 11, 20, 23, 30)),  # just after midnight Lagos = previous day in UTC
        ("2026-11-21T00:00:00+01:00", datetime(2026, 11, 20, 23, 0)),
    ],
)
async def test_midnight_edge_cases_preserve_the_instant(client, stored_utc, sent, expected_utc):
    r = await client.post("/api/posts/", json=payload(scheduled_at=sent))
    assert r.status_code == 201, r.text
    assert await stored_utc(r.json()["id"]) == expected_utc


async def test_naive_datetime_is_rejected(client):
    r = await client.post("/api/posts/", json=payload(scheduled_at="2026-11-20T09:00:00"))
    assert r.status_code == 422


# --------------------------------------------------------------------------------------
# 2. Editing: repeated saves must not shift the schedule
#    (the edit page PUTs to /api/admin/posts/{id}; /api/posts/{id} also has a PUT)
# --------------------------------------------------------------------------------------

@pytest.mark.parametrize("route", ["/api/admin/posts/{id}", "/api/posts/{id}"])
async def test_repeated_saves_do_not_drift(client, stored_utc, route):
    created = (await client.post("/api/posts/", json=payload(scheduled_at="2026-11-20T08:00:00.000Z"))).json()

    for _ in range(3):
        r = await client.put(route.format(id=created["id"]), json={"scheduled_at": "2026-11-20T08:00:00.000Z"})
        assert r.status_code == 200, r.text

    assert await stored_utc(created["id"]) == datetime(2026, 11, 20, 8, 0)


async def test_clearing_schedule_stores_null(client, stored_utc):
    created = (await client.post("/api/posts/", json=payload(scheduled_at="2026-11-20T08:00:00.000Z"))).json()
    r = await client.put(f"/api/admin/posts/{created['id']}", json={"scheduled_at": None})
    assert r.status_code == 200
    assert await stored_utc(created["id"]) is None


# --------------------------------------------------------------------------------------
# 3. Scheduler logic (frozen clock). Sleeping on Render == scheduler not running for a while.
# --------------------------------------------------------------------------------------

async def test_due_post_is_published_exactly_once(make_post, fetch_post, freeze_scheduler_clock):
    pid = await make_post(is_published=False, scheduled_at=datetime(2026, 11, 20, 8, 59, tzinfo=UTC))
    freeze_scheduler_clock(datetime(2026, 11, 20, 9, 0, tzinfo=UTC))

    await scheduler_module.publish_scheduled_posts()
    first = await fetch_post(pid)
    assert first.is_published is True

    await scheduler_module.publish_scheduled_posts()  # second tick must be a no-op
    second = await fetch_post(pid)
    assert second.is_published is True
    assert second.updated_at == first.updated_at


async def test_future_post_is_not_published(make_post, fetch_post, freeze_scheduler_clock):
    pid = await make_post(scheduled_at=datetime(2026, 11, 20, 9, 1, tzinfo=UTC))
    freeze_scheduler_clock(datetime(2026, 11, 20, 9, 0, tzinfo=UTC))

    await scheduler_module.publish_scheduled_posts()
    assert (await fetch_post(pid)).is_published is False


async def test_post_due_exactly_now_is_published(make_post, fetch_post, freeze_scheduler_clock):
    moment = datetime(2026, 11, 20, 9, 0, tzinfo=UTC)
    pid = await make_post(scheduled_at=moment)
    freeze_scheduler_clock(moment)

    await scheduler_module.publish_scheduled_posts()
    assert (await fetch_post(pid)).is_published is True


async def test_post_missed_while_server_slept_is_published_on_next_tick(
    make_post, fetch_post, freeze_scheduler_clock
):
    """Scheduled for 09:00 UTC; server slept and the first tick runs at 15:00 UTC.
    The post must still go live (late), and its stored dates must be untouched."""
    scheduled = datetime(2026, 11, 20, 9, 0, tzinfo=UTC)
    pid = await make_post(scheduled_at=scheduled)
    before = await fetch_post(pid)

    freeze_scheduler_clock(datetime(2026, 11, 20, 15, 0, tzinfo=UTC))
    await scheduler_module.publish_scheduled_posts()

    after = await fetch_post(pid)
    assert after.is_published is True
    assert after.published_at == scheduled  # public date = intended go-live time, not the late tick
    assert after.scheduled_at is None       # schedule is used up
    assert after.created_at == before.created_at


async def test_drafts_without_schedule_are_never_published(make_post, fetch_post, freeze_scheduler_clock):
    pid = await make_post(scheduled_at=None)
    freeze_scheduler_clock(datetime(2030, 1, 1, tzinfo=UTC))

    await scheduler_module.publish_scheduled_posts()
    assert (await fetch_post(pid)).is_published is False


# --------------------------------------------------------------------------------------
# 4. BUG PROBES - behaviors the client would expect that the current code does not provide
# --------------------------------------------------------------------------------------

async def test_public_post_exposes_a_publish_date(make_post, client, freeze_scheduler_clock):
    """BUG PROBE: the public API only returns created_at, so the blog shows the day the post was
    WRITTEN, not the day it went live. Expected fix: add a published_at column, set it when
    publishing (immediately or via the scheduler), and have the frontend display it."""
    pid = await make_post(
        slug="scheduled-one",
        scheduled_at=datetime(2026, 11, 20, 9, 0, tzinfo=UTC),
        created_at=datetime(2026, 11, 10, 12, 0, tzinfo=UTC),
    )
    freeze_scheduler_clock(datetime(2026, 11, 20, 9, 5, tzinfo=UTC))
    await scheduler_module.publish_scheduled_posts()

    r = await client.get("/api/posts/scheduled-one")
    assert r.status_code == 200, r.text
    data = r.json()
    assert "published_at" in data, "public API has no publish date; blog falls back to created_at"
    assert parse(data["published_at"]) == datetime(2026, 11, 20, 9, 0, tzinfo=UTC)


async def test_public_list_orders_by_go_live_time_not_creation_time(make_post, client):
    """BUG PROBE: A was written first but went live LATER (scheduled Nov 20). The public list sorts
    by created_at, so A is buried below B even though it is the newest post."""
    await make_post(
        slug="post-a-scheduled",
        is_published=True,
        scheduled_at=None,
        published_at=datetime(2026, 11, 20, 9, 0, tzinfo=UTC),
        created_at=datetime(2026, 11, 10, 12, 0, tzinfo=UTC),
    )
    await make_post(
        slug="post-b-immediate",
        is_published=True,
        scheduled_at=None,
        published_at=datetime(2026, 11, 15, 12, 0, tzinfo=UTC),
        created_at=datetime(2026, 11, 15, 12, 0, tzinfo=UTC),
    )

    r = await client.get("/api/posts/")
    slugs = [p["slug"] for p in r.json()]
    assert slugs == ["post-a-scheduled", "post-b-immediate"]


async def test_unpublishing_an_already_published_scheduled_post_sticks(
    make_post, client, fetch_post, freeze_scheduler_clock
):
    """BUG PROBE: scheduled_at stays on the row after a post goes live. If the admin switches it back
    to Draft in the edit page, the scheduler sees (unpublished + past scheduled_at) and republishes it
    within a minute."""
    pid = await make_post(
        is_published=True,
        scheduled_at=datetime(2026, 11, 20, 9, 0, tzinfo=UTC),
    )
    r = await client.put(f"/api/admin/posts/{pid}", json={"is_published": False})
    assert r.status_code == 200

    freeze_scheduler_clock(datetime(2026, 11, 21, 9, 0, tzinfo=UTC))
    await scheduler_module.publish_scheduled_posts()

    assert (await fetch_post(pid)).is_published is False


async def test_double_submit_does_not_create_duplicates(client, session_factory):
    """BUG PROBE: a cold-start timeout makes admins click Save twice. The create endpoint dedupes slugs
    by appending a suffix, so the retry silently creates a second post."""
    body = payload(title="Retry me")
    first = await client.post("/api/posts/", json=body)
    second = await client.post("/api/posts/", json=body)
    assert first.status_code == 201 and second.status_code == 201

    from sqlalchemy import text

    async with session_factory() as s:
        count = (await s.execute(text("SELECT count(*) FROM posts WHERE title = 'Retry me'"))).scalar_one()
    assert count == 1


# --------------------------------------------------------------------------------------
# 5. Publish-state rules added by the fix
# --------------------------------------------------------------------------------------

async def test_publish_now_sets_published_at_and_clears_schedule(client):
    r = await client.post("/api/posts/", json=payload(is_published=True, scheduled_at="2026-11-20T08:00:00.000Z"))
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["published_at"] is not None
    assert data["scheduled_at"] is None


async def test_drafts_have_no_published_at(client):
    r = await client.post("/api/posts/", json=payload())
    assert r.status_code == 201, r.text
    assert r.json()["published_at"] is None


async def test_moving_back_to_draft_clears_published_at(client):
    created = (await client.post("/api/posts/", json=payload(is_published=True))).json()
    r = await client.put(f"/api/posts/{created['id']}", json={"is_published": False})
    assert r.status_code == 200, r.text
    assert r.json()["published_at"] is None