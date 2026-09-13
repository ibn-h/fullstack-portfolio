import Link from "next/link";
import { IconArrowUp } from "@tabler/icons-react";

import { socialIcons } from "@/components/icons/social-icons";
import { content } from "@/lib/content";
import { site, visibleSocials } from "@/lib/site";

const { footer } = content;

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-lg px-6 py-xl sm:px-xl">
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
              {site.name}
            </Link>
            <p className="text-small text-muted">{footer.tagline}</p>
            <div className="inline-flex items-center gap-sm">
              <span
                className="size-sm shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <small className="text-primary">{footer.badge}</small>
            </div>
          </div>

          <div className="flex flex-col gap-lg sm:flex-row sm:gap-xl">
            <nav aria-label="Footer" className="flex flex-col gap-sm">
              <p className="text-small font-semibold text-text">
                {footer.navLabel}
              </p>
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
              <p className="text-small font-semibold text-text">
                {footer.socialsLabel}
              </p>
              {visibleSocials.map(({ label, href, icon }) => {
                const Icon = socialIcons[icon];

                return (
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
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-sm border-t border-border pt-md sm:flex-row sm:items-center sm:justify-between">
          <small className="text-muted">
            {footer.copyright.replace(
              "{year}",
              String(new Date().getFullYear()),
            )}
          </small>
          <a
            href="#top"
            className="inline-flex items-center gap-xs text-small text-muted transition-colors hover:text-text"
          >
            {footer.backToTop}
            <IconArrowUp className="size-md" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
