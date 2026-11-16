from datetime import datetime, UTC


def sync_publish_state(post, *, was_published: bool = False, schedule_sent: bool = False) -> None:
    """Keep `published_at` and `scheduled_at` consistent. Call after any create or update,
    before commit.

    - A live post gets a published_at (set once) and no pending schedule.
    - A post moved back to draft loses published_at. If it was live before and the request did
      not send a new schedule, its old schedule is cleared so the scheduler cannot republish it.
    """
    if post.is_published:
        if post.published_at is None:
            post.published_at = datetime.now(UTC)
        post.scheduled_at = None
    else:
        post.published_at = None
        if was_published and not schedule_sent:
            post.scheduled_at = None