import { Tailwind } from "@react-email/components";

interface ContactNotificationProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  message,
}: ContactNotificationProps) {
  return (
    <Tailwind>
      <div className="max-w-120 mx-auto my-10 p-8 bg-surface border border-border rounded-lg font-sans">
        <h2 className="m-0 mb-6 text-2xl font-semibold leading-tight text-text">
          New project request
        </h2>

        <div className="mb-6">
          <p className="m-0 mb-1 text-xs uppercase tracking-wide text-muted">
            From
          </p>
          <p className="m-0 text-base text-text">{name}</p>
        </div>

        <div className="mb-6">
          <p className="m-0 mb-1 text-xs uppercase tracking-wide text-muted">
            Email
          </p>
          <a
            href={`mailto:${email}`}
            className="text-base text-primary no-underline"
          >
            {email}
          </a>
        </div>

        <div>
          <p className="m-0 mb-1 text-xs uppercase tracking-wide text-muted">
            Message
          </p>
          <p className="m-0 p-4 bg-bg border border-border rounded-md text-base leading-relaxed text-text whitespace-pre-wrap">
            {message}
          </p>
        </div>

        <hr className="border-none border-t border-border my-8 mb-4" />

        <p className="m-0 text-sm text-muted">
          Sent from your portfolio contact form
        </p>
      </div>
    </Tailwind>
  );
}
