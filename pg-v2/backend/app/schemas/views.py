from pydantic import BaseModel

class ViewPayload(BaseModel):
    referrer: str = "Direct"