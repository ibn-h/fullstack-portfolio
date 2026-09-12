import Link from "next/link";
import {
  IconArrowUp,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

// TODO: swap in your own profile URLs and address (same values as contact.tsx).
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

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="flex flex-col gap-lg px-6 py-xl sm:px-xl">
        <div className="flex flex-col gap-lg sm:flex-row sm:justify-between">
          <div className="flex max-w-[36ch] flex-col gap-sm">
            <Link
              href="/"
              className="flex items-center gap-sm text-body font-semibold text-text"
            >
              <span
                className="size-sm rounded-full bg-primary"
                aria-hidden="true"
              />
              Badr
            </Link>
            <p className="text-small text-muted">
              Full-stack developer building web apps that ship — from first
              sketch to production.
            </p>
            <div className="inline-flex items-center gap-sm">
              <span
                className="size-sm shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <small className="text-primary">Available for new projects</small>
            </div>
          </div>

          <div className="flex flex-col gap-lg sm:flex-row sm:gap-xl">
            <nav aria-label="Footer" className="flex flex-col gap-sm">
              <p className="text-small font-semibold text-text">Navigate</p>
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-small text-muted transition-colors hover:text-text"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-sm">
              <p className="text-small font-semibold text-text">Elsewhere</p>
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-sm text-small text-muted transition-colors hover:text-text"
                >
                  <Icon className="size-md" aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-sm border-t border-border pt-md sm:flex-row sm:items-center sm:justify-between">
          <small className="text-muted">
            © {new Date().getFullYear()} Badr. Built with Next.js and Tailwind.
          </small>
          <a
            href="#top"
            className="inline-flex items-center gap-xs text-small text-muted transition-colors hover:text-text"
          >
            Back to top
            <IconArrowUp className="size-md" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
