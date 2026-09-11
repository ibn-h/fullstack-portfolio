"use client";

import { useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCircleCheck,
  IconMail,
  IconSend,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// TODO: swap in your own profile URLs and address.
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jouwusername",
    icon: IconBrandLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/jouwusername",
    icon: IconBrandGithub,
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: IconMail,
  },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Values = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { name: "", email: "", message: "" };

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "That doesn't look like a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell me a bit about your project.";
  }

  return errors;
}

const fieldClassName =
  "h-auto border-border bg-bg px-md py-sm text-body placeholder:text-muted focus-visible:border-primary focus-visible:ring-primary/20";

export function Contact() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function update(key: keyof Values, value: string) {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  }

  async function handleSubmit() {
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");

    try {
      // TODO: create app/api/contact/route.ts that sends this with Resend,
      // then uncomment the call below.
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(values),
      // });
      // if (!response.ok) throw new Error("Request failed");

      setValues(EMPTY);
      setStatus("sent");
    } catch {
      setStatus("idle");
      setErrors({ message: "Something went wrong — please try again." });
    }
  }

  return (
    <section id="contact" className="px-6 py-xl sm:px-xl sm:py-2xl">
      <div className="flex flex-col items-center gap-lg">
        <div className="inline-flex items-center gap-sm rounded-full border border-primary/20 bg-primary/10 px-md py-xs">
          <span
            className="size-sm shrink-0 rounded-full bg-primary"
            aria-hidden="true"
          />
          <small className="text-primary">Available for new projects</small>
        </div>

        <div className="flex flex-col items-center gap-md text-center">
          <h2 className="text-h2 text-text">Have something in mind?</h2>
          <p className="text-body text-muted max-w-[50ch]">
            Tell me about your project and I&apos;ll get back to you within 24
            hours.
          </p>
        </div>

        <Card className="w-full max-w-[480px] rounded-lg border border-border bg-surface ring-0 [--card-spacing:var(--spacing-lg)]">
          <CardContent>
            {status === "sent" ? (
              <div
                className="flex flex-col items-center gap-md text-center"
                role="status"
              >
                <IconCircleCheck className="size-lg text-primary" />
                <p className="text-h4 text-text">Message sent</p>
                <p className="text-body text-muted">
                  Thanks for reaching out — I&apos;ll reply within 24 hours.
                </p>
                <Button
                  variant="ghost"
                  className="text-muted hover:bg-bg hover:text-text"
                  onClick={() => setStatus("idle")}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-md">
                <div className="flex flex-col gap-xs">
                  <label
                    htmlFor="contact-name"
                    className="text-small text-text"
                  >
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={values.name}
                    onChange={(event) => update("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                    className={fieldClassName}
                  />
                  {errors.name ? (
                    <small id="contact-name-error" className="text-destructive">
                      {errors.name}
                    </small>
                  ) : null}
                </div>

                <div className="flex flex-col gap-xs">
                  <label
                    htmlFor="contact-email"
                    className="text-small text-text"
                  >
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={values.email}
                    onChange={(event) => update("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "contact-email-error" : undefined
                    }
                    className={fieldClassName}
                  />
                  {errors.email ? (
                    <small
                      id="contact-email-error"
                      className="text-destructive"
                    >
                      {errors.email}
                    </small>
                  ) : null}
                </div>

                <div className="flex flex-col gap-xs">
                  <label
                    htmlFor="contact-message"
                    className="text-small text-text"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={values.message}
                    onChange={(event) => update("message", event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className={fieldClassName + " min-h-2xl"}
                  />
                  {errors.message ? (
                    <small
                      id="contact-message-error"
                      className="text-destructive"
                    >
                      {errors.message}
                    </small>
                  ) : null}
                </div>

                <Button
                  size="lg"
                  className="w-full text-bg"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                  <IconSend aria-hidden="true" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex w-full max-w-[480px] flex-col items-stretch justify-center gap-md sm:w-auto sm:flex-row">
          {socials.map(({ label, href, icon: Icon }) => (
            <Button
              key={label}
              variant="outline"
              nativeButton={false}
              className="border-border bg-surface text-text hover:bg-bg hover:text-text"
              render={
                <a href={href} target="_blank" rel="noopener noreferrer" />
              }
            >
              <Icon aria-hidden="true" />
              {label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
