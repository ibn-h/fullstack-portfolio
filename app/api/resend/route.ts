import ContactNotification from "@/emails/contact-notification";
import ContactConfirmation from "@/emails/contact-confirmation";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { contentByLocale } from "@/lib/content";
import { defaultLocale, hasLocale } from "@/lib/i18n/config";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, message, locale } = await request.json();

  // The contact form sends the page's locale; the confirmation email uses the same language.
  const content =
    contentByLocale[
      typeof locale === "string" && hasLocale(locale) ? locale : defaultLocale
    ];

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

    const confirmationEmail = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: email,
      subject: content.emails.confirmation.subject,
      react: ContactConfirmation({
        name,
        copy: content.emails.confirmation,
        role: content.meta.role,
      }),
    });

    if (confirmationEmail.error) {
      console.error("Resend error: ", confirmationEmail.error);
      return NextResponse.json(
        { error: "Failed to send confirmation message" },
        { status: 500 },
      );
    }

    console.log(
      `Notification email (${notificationEmail.data.id}) has been sent`,
    );
    console.log(
      `Confirmation email (${confirmationEmail.data?.id}) has been sent`,
    );

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
