import { Tailwind } from "@react-email/components";

export default function ContactConfirmation({ name }: { name: string }) {
  return (
    <Tailwind>
      <div className="max-w-120 mx-auto my-10 p-8 bg-surface border border-border rounded-xl">
        <h2 className="m-0 mb-6 text-2xl font-semibold text-text">
          Thanks for reaching out
        </h2>

        <p className="m-0 mb-4 text-base leading-relaxed text-muted">
          Hi {name},
        </p>

        <p className="m-0 mb-4 text-base leading-relaxed text-muted">
          I&apos;ve received your message and will get back to you within 24
          hours.
        </p>

        <p className="m-0 mb-6 text-base leading-relaxed text-muted">
          In the meantime, feel free to check out my recent projects or connect
          with me on LinkedIn.
        </p>

        <a
          href="https://jouwdomein.com"
          className="inline-block px-4.5 py-2.5 bg-primary text-bg text-sm font-medium no-underline rounded-lg"
        >
          View my work
        </a>

        <hr className="border-none border-t border-border my-8 mb-4" />

        <p className="m-0 text-sm leading-normal text-muted">
          Badr — Full-stack developer
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
