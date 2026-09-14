"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  locales,
  localizePath,
  stripLocale,
  type Locale,
} from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  className?: string;
  onNavigate?: () => void;
}

/** Links to the current page in every language. */
export function LanguageSwitcher({
  locale,
  label,
  className,
  onNavigate,
}: LanguageSwitcherProps) {
  const path = stripLocale(usePathname());

  return (
    <div
      role="group"
      aria-label={label}
      className={cn("flex items-center gap-xs text-small", className)}
    >
      {locales.map((option, index) => (
        <Fragment key={option}>
          {index > 0 ? (
            <span className="text-border" aria-hidden="true">
              /
            </span>
          ) : null}
          <Link
            href={localizePath(option, path)}
            hrefLang={option}
            lang={option}
            aria-current={option === locale ? "true" : undefined}
            onClick={onNavigate}
            className={cn(
              "uppercase transition-colors",
              option === locale ? "text-primary" : "text-muted hover:text-text",
            )}
          >
            {option}
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
