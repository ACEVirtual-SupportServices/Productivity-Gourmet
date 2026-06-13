from pydantic import EmailStr, BaseModel

class ContactFormSchema(BaseModel):
    full_name: str
    email: EmailStr
    budget_range: str
    service_interested: str
    message: str