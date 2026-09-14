"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import type { Content } from "@/lib/content";
import { localizePath, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
  nav: Content["nav"];
  copy: Content["header"];
}

export function Header({ locale, nav, copy }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const home = localizePath(locale, "/");
  const contactHref = `${home}#contact`;
  const navItems = [
    { label: nav.projects, href: `${home}#projects` },
    { label: nav.about, href: `${home}#about` },
    { label: nav.contact, href: contactHref },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-border bg-bg/80 backdrop-blur"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-md sm:px-xl">
        <Link
          href={home}
          onClick={() => setOpen(false)}
          className="flex items-center gap-sm text-body font-semibold text-text"
        >
          <span
            className="size-sm rounded-full bg-primary"
            aria-hidden="true"
          />
          Badr
        </Link>

        <nav
          aria-label={nav.mainLabel}
          className="hidden items-center gap-lg sm:flex"
        >
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

        <div className="hidden items-center gap-lg sm:flex">
          <LanguageSwitcher locale={locale} label={copy.languageLabel} />
          <Button nativeButton={false} render={<Link href={contactHref} />}>
            {copy.cta}
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? copy.closeMenu : copy.openMenu}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="text-muted hover:bg-surface hover:text-text sm:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <IconX aria-hidden="true" />
          ) : (
            <IconMenu2 aria-hidden="true" />
          )}
        </Button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label={nav.mainLabel}
          className="flex flex-col gap-md border-t border-border bg-bg px-6 py-md sm:hidden"
        >
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-body text-muted transition-colors hover:text-text"
            >
              {label}
            </Link>
          ))}
          <LanguageSwitcher
            locale={locale}
            label={copy.languageLabel}
            className="text-body"
            onNavigate={() => setOpen(false)}
          />
          <Button
            nativeButton={false}
            className="w-full"
            render={<Link href={contactHref} onClick={() => setOpen(false)} />}
          >
            {copy.cta}
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
