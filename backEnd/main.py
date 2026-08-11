import os
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv()

sender_email = os.getenv("GMAIL_ADDRESS")
app_password = os.getenv("GMAIL_APP_PASSWORD")

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

    msg = EmailMessage()

    msg["Subject"] = "Message coming from portfolio website"
    msg["From"] = sender_email
    msg["To"] = receiver_email
    msg["Reply-To"] = email.email

    msg.set_content(email.message)

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(sender_email, app_password)
        server.send_message(msg)

    return{
        "success" : True,
        "message" : "Email successfully delivered"
    }
