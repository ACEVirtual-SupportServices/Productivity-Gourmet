import resend
from fastapi import APIRouter, HTTPException
from app.core.config import settings
from app.schemas.resend import ContactFormSchema

router = APIRouter()

resend.api_key = settings.RESEND_API_KEY
RECIPIENT = settings.CONTACT_RECIPIENT_EMAIL


def build_email_html(form: ContactFormSchema) -> str:
    return f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: #00a8a8; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; color: white; font-size: 1.25rem;">New Contact Form Submission</h1>
        <p style="margin: 4px 0 0; color: rgba(255,255,255,0.85); font-size: 0.9rem;">
          Productivity Gourmet — productivitygourmet.com
        </p>
      </div>

      <div style="background: #f9f9f9; padding: 32px; border: 1px solid #e5e5e5; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; width: 40%;">
              <strong style="color: #555; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</strong>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
              {form.full_name}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
              <strong style="color: #555; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Email</strong>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
              <a href="mailto:{form.email}" style="color: #00a8a8;">{form.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
              <strong style="color: #555; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Budget Range</strong>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">{form.budget_range}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
              <strong style="color: #555; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Service Interested In</strong>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">{form.service_interested}</td>
          </tr>
        </table>

        <div style="margin-top: 24px;">
          <strong style="color: #555; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Their Message</strong>
          <div style="margin-top: 12px; padding: 16px; background: white; border-left: 4px solid #00a8a8; border-radius: 0 4px 4px 0; line-height: 1.6;">
            {form.message}
          </div>
        </div>
      </div>

      <div style="padding: 16px 32px; background: #f0f0f0; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
        <p style="margin: 0; font-size: 0.8rem; color: #888;">
          Reply directly to this email to respond to {form.full_name}.
        </p>
      </div>
    </div>
    """


@router.post("")
async def submit_contact_form(form: ContactFormSchema):
    if not resend.api_key or not RECIPIENT:
        raise HTTPException(status_code=500, detail="Email service not configured.")

    try:
        params: resend.Emails.SendParams = {
            "from": "Productivity Gourmet <hello@productivitygourmet.com>",
            "to": [RECIPIENT],
            "reply_to": form.email,
            "subject": f"New Enquiry from {form.full_name} — {form.service_interested}",
            "html": build_email_html(form),
        }
        resend.Emails.send(params)
        return {"success": True}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to send message. Please try again.")