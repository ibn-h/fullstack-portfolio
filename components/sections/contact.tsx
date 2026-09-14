"use client";

import { useState } from "react";
import { IconCircleCheck, IconSend } from "@tabler/icons-react";

import { socialIcons } from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Content } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import { visibleSocials } from "@/lib/site";

type ContactCopy = Content["contact"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Values = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { name: "", email: "", message: "" };

const fieldClassName =
  "h-auto border-border bg-bg px-md py-sm text-body placeholder:text-muted focus-visible:border-primary focus-visible:ring-primary/20";

function validate(
  values: Values,
  errorCopy: ContactCopy["form"]["errors"],
): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = errorCopy.nameRequired;
  }

  if (!values.email.trim()) {
    errors.email = errorCopy.emailRequired;
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = errorCopy.emailInvalid;
  }

  if (!values.message.trim()) {
    errors.message = errorCopy.messageRequired;
  }

  return errors;
}

interface ContactProps {
  copy: ContactCopy;
  /** Sent along with the form, so the confirmation email is in the same language. */
  locale: Locale;
}

export default function Contact({ copy: contact, locale }: ContactProps) {
  const { fields, errors: errorCopy, success } = contact.form;

  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function update(key: keyof Values, value: string) {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  }

  async function handleSubmit() {
    const nextErrors = validate(values, errorCopy);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");

    try {
      const response = await fetch("/api/resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });

      if (!response.ok) throw new Error("Request failed");

      setValues(EMPTY);
      setStatus("sent");
    } catch {
      setStatus("idle");
      setErrors({ message: errorCopy.sendFailed });
    }
  }

  return (
    <section
      id="contact"
      className="-scroll-mt-lg px-6 py-xl sm:-scroll-mt-[calc(var(--spacing-xl)+var(--spacing-lg))] sm:px-xl sm:py-2xl"
    >
      <div className="flex flex-col items-center gap-lg">
        <div className="inline-flex items-center gap-sm rounded-full border border-primary/20 bg-primary/10 px-md py-xs">
          <span
            className="size-sm shrink-0 rounded-full bg-primary"
            aria-hidden="true"
          />
          <small className="text-primary">{contact.badge}</small>
        </div>

        <div className="flex flex-col items-center gap-md text-center">
          <h2 className="text-h2 text-text">{contact.heading}</h2>
          <p className="text-body text-muted max-w-[50ch]">
            {contact.subtitle}
          </p>
        </div>

        <Card className="w-full max-w-120 rounded-lg border border-border bg-surface ring-0 [--card-spacing:var(--spacing-lg)]">
          <CardContent>
            {status === "sent" ? (
              <div
                className="flex flex-col items-center gap-md text-center"
                role="status"
              >
                <IconCircleCheck className="size-lg text-primary" />
                <p className="text-h4 text-text">{success.heading}</p>
                <p className="text-body text-muted">{success.body}</p>
                <Button
                  variant="ghost"
                  className="text-muted hover:bg-bg hover:text-text"
                  onClick={() => setStatus("idle")}
                >
                  {success.reset}
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-md">
                <div className="flex flex-col gap-xs">
                  <label
                    htmlFor="contact-name"
                    className="text-small text-text"
                  >
                    {fields.name.label}
                  </label>
                  <Input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder={fields.name.placeholder}
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
                    {fields.email.label}
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={fields.email.placeholder}
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
                    {fields.message.label}
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder={fields.message.placeholder}
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
                  className="w-full"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? contact.form.submitting
                    : contact.form.submit}
                  <IconSend aria-hidden="true" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex w-full max-w-120 flex-col items-stretch justify-center gap-md sm:w-auto sm:flex-row">
          {visibleSocials.map(({ label, href, icon }) => {
            const Icon = socialIcons[icon];

            return (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
