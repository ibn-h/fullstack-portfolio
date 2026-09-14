// Supported languages. Keep this file free of Next imports: proxy.ts and client
// components import it too.

export const locales = ["en", "nl"] as const;

export type Locale = (typeof locales)[number];

/** Served without a URL prefix: `/projects` is English, `/nl/projects` is Dutch. */
export const defaultLocale: Locale = "en";

/** Open Graph locale per language. */
export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  nl: "nl_NL",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * For code that must not 404, like `generateImageMetadata`: Next calls it with
 * empty params while collecting image ids at build time.
 */
export function localeOrDefault(value: string | undefined): Locale {
  return value !== undefined && hasLocale(value) ? value : defaultLocale;
}

/** `/projects` stays `/projects` for the default locale and becomes `/nl/projects` for Dutch. */
export function localizePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Removes a leading locale segment: `/nl/projects` → `/projects`, `/nl` → `/`. */
export function stripLocale(pathname: string): string {
  const [, first = "", ...rest] = pathname.split("/");
  if (!hasLocale(first)) return pathname;
  return `/${rest.join("/")}`;
}
