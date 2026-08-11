import os
import resend
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
# import smtplib
# from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv()

# sender_email = os.getenv("GMAIL_ADDRESS")
# app_password = os.getenv("GMAIL_APP_PASSWORD")
resend.api_key = os.getenv("RESEND_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class emailRequest(BaseModel):
    name: str
    email: str
    message: str


@app.post("/sendEmail")
def send_email(email: emailRequest):

    receiver_email = "supasreymark@gmail.com"

    params = {
        "from": "onboarding@resend.dev",
        "to": [receiver_email],
        "subject": "Message coming from portfolio website",
        "reply-to": email.email,
        "html": f"""
        <h2>New message from your portfolio</h2>

        <p><strong>Name:</strong>{email.name}</p>

        <p><strong>Email:</strong>{email.email}</p>

        <p><strong>Message:</strong></p>

        <p>{email.message}</p>
        """
    }

    response = resend.Emails.send(params)

    # msg = EmailMessage()

    # msg["Subject"] = "Message coming from portfolio website"
    # msg["From"] = sender_email
    # msg["To"] = receiver_email
    # msg["Reply-To"] = email.email

    # msg.set_content(email.message)

    # with smtplib.SMTP("smtp.gmail.com", 587) as server:
    #     server.starttls()
    #     server.login(sender_email, app_password)
    #     server.send_message(msg)

    return{
        "success" : True,
        "message" : "Email successfully delivered"
    }
