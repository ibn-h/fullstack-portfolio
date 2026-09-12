"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className="flex items-center justify-between px-6 py-md sm:px-xl">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-sm text-body font-semibold text-text"
        >
          <span
            className="size-sm rounded-full bg-primary"
            aria-hidden="true"
          />
          Badr
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-lg sm:flex">
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

        <Button
          nativeButton={false}
          className="hidden sm:inline-flex"
          render={<Link href="/#contact" />}
        >
          Let&apos;s talk
        </Button>

        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
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
          aria-label="Main"
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
          <Button
            nativeButton={false}
            className="w-full"
            render={<Link href="/#contact" onClick={() => setOpen(false)} />}
          >
            Let&apos;s talk
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
