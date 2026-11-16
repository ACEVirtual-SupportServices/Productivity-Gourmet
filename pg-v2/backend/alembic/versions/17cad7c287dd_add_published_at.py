"""add published_at

Revision ID: 17cad7c287dd
Revises: c001a06de950
Create Date: 2026-11-16 10:48:45.753139

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '17cad7c287dd'
down_revision: Union[str, Sequence[str], None] = 'c001a06de950'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column("posts", sa.Column("published_at", sa.DateTime(timezone=True), nullable=True))
    # Give existing live posts a sensible publish date
    op.execute("""
        UPDATE posts SET published_at =
            CASE WHEN scheduled_at IS NOT NULL AND scheduled_at <= now()
                 THEN scheduled_at ELSE created_at END
        WHERE is_published = true
    """)
    # A live post has no pending schedule; this stops old posts being republished
    op.execute("UPDATE posts SET scheduled_at = NULL WHERE is_published = true")


def downgrade() -> None:
    op.drop_column("posts", "published_at")
