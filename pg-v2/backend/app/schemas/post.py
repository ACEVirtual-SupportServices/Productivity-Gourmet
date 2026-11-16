import uuid
from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field, field_validator
from typing import Optional


def _require_timezone(value: datetime | None) -> datetime | None:
    """Reject datetimes with no timezone. Without an offset, the server would have to guess
    what 09:00 means, and a wrong guess silently shifts the schedule."""
    if value is not None and value.tzinfo is None:
        raise ValueError(
            "scheduled_at must include a timezone, e.g. 2026-11-20T09:00:00+01:00 or 2026-11-20T08:00:00Z"
        )
    return value


class PostBase(BaseModel):
    title: str = Field(..., max_length=300)
    slug: str = Field(..., max_length=350)
    content: str
    cover_image: str | None = None
    summary: str | None = Field(None, max_length=500)
    category: str = Field(..., max_length=100)
    read_time: int = 1
    is_published: bool = False
    analytics_public: bool = False
    scheduled_at: datetime | None = None
    published_at: datetime | None = None


class PostCreate(BaseModel):
    title: str = Field(..., max_length=300)
    slug: Optional[str] = None
    content: str
    cover_image: str | None = None
    summary: str | None = Field(None, max_length=500)
    category: str = Field(..., max_length=100)
    read_time: int = 1
    is_published: bool = False
    analytics_public: bool = False
    scheduled_at: datetime | None = None

    _check_tz = field_validator("scheduled_at")(_require_timezone)


class PostUpdate(BaseModel):
    title: Optional[str] = Field(None, max_length=300)
    slug: Optional[str] = None
    content: Optional[str] = None
    cover_image: Optional[str] = None
    summary: Optional[str] = Field(None, max_length=500)
    category: Optional[str] = Field(None, max_length=100)
    read_time: Optional[int] = None
    is_published: Optional[bool] = None
    analytics_public: Optional[bool] = None
    scheduled_at: Optional[datetime] = None

    _check_tz = field_validator("scheduled_at")(_require_timezone)


class PostResponse(PostBase):
    id: uuid.UUID
    created_at: datetime
    updated_at: datetime | None = None

    model_config = ConfigDict(from_attributes=True)