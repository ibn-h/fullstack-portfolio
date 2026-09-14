import { Tailwind } from "@react-email/components";

import type { Content } from "@/lib/content";
import { site } from "@/lib/site";

interface ContactConfirmationProps {
  name: string;
  copy: Content["emails"]["confirmation"];
  role: string;
}

export default function ContactConfirmation({
  name,
  copy,
  role,
}: ContactConfirmationProps) {
  return (
    <Tailwind>
      <div className="max-w-120 mx-auto my-10 p-8 bg-surface border border-border rounded-xl">
        <h2 className="m-0 mb-6 text-2xl font-semibold text-text">
          {copy.heading}
        </h2>

        <p className="m-0 mb-4 text-base leading-relaxed text-muted">
          {copy.greeting.replace("{name}", name)}
        </p>

        {copy.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={`m-0 ${index === copy.paragraphs.length - 1 ? "mb-6" : "mb-4"} text-base leading-relaxed text-muted`}
          >
            {paragraph}
          </p>
        ))}

        <a
          href="https://jouwdomein.com"
          className="inline-block px-4.5 py-2.5 bg-primary text-bg text-sm font-medium no-underline rounded-lg"
        >
          {copy.cta}
        </a>

        <hr className="border-none border-t border-border my-8 mb-4" />

        <p className="m-0 text-sm leading-normal text-muted">
          {site.name} — {role}
          <br />
          <a
            href="https://jouwdomein.com"
            className="text-primary no-underline"
          >
            jouwdomein.com
          </a>
        </p>
      </div>
    </Tailwind>
  );
}
