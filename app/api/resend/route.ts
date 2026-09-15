import ContactNotification from "@/emails/contact-notification";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  try {
    const notificationEmail = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New project request from ${name}`,
      react: ContactNotification({ name, email, message }),
    });

    if (notificationEmail.error) {
      console.error("Resend error: ", notificationEmail.error);
      return NextResponse.json(
        { error: "Failed to send notification message" },
        { status: 500 },
      );
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
