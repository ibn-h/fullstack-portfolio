// Shared metadata, structured data and generated-image theme.

import type { Metadata } from "next";
import { contentByLocale } from "./content";
import {
  defaultLocale,
  locales,
  localizePath,
  ogLocales,
  type Locale,
} from "./i18n/config";
import type { Project } from "./projects";
import { site, siteUrl, visibleSocials } from "./site";

/** Only the Vercel production deployment may be indexed. */
export const isIndexable = process.env.VERCEL_ENV === "production";

export function defaultTitle(locale: Locale): string {
  return `${site.name} — ${contentByLocale[locale].meta.role}`;
}

/**
 * Open Graph fields shared by every page. Next merges metadata shallowly, so a
 * page that sets `openGraph` replaces the layout's — spread this in to keep them.
 */
export function baseOpenGraph(locale: Locale) {
  return {
    siteName: site.name,
    locale: ogLocales[locale],
    alternateLocale: locales
      .filter((other) => other !== locale)
      .map((other) => ogLocales[other]),
    type: "website",
  } satisfies NonNullable<Metadata["openGraph"]>;
}

/** Canonical URL for this locale, plus hreflang links to every translation. */
export function localeAlternates(
  locale: Locale,
  path: string,
): NonNullable<Metadata["alternates"]> {
  const languages = Object.fromEntries(
    locales.map((other) => [other, localizePath(other, path)]),
  ) as Record<Locale, string>;

  return {
    canonical: localizePath(locale, path),
    languages: {
      ...languages,
      "x-default": localizePath(defaultLocale, path),
    },
  };
}

/**
 * Colors for generated images (Open Graph images and icons). Satori can't read
 * CSS variables, so these mirror the tokens in app/globals.css — keep them in sync.
 */
export const ogTheme = {
  bg: "#0a0a0a", // --color-bg
  surface: "#111111", // --color-surface
  border: "#222222", // --color-border
  text: "#ededed", // --color-text
  muted: "#888888", // --color-muted
  primary: "#10b980", // --color-primary
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

const author = { "@type": "Person", name: site.name, url: siteUrl } as const;

export function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    ...author,
    jobTitle: contentByLocale[locale].meta.role,
    sameAs: visibleSocials
      .map(({ href }) => href)
      .filter((href) => !href.startsWith("mailto:")),
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: absoluteUrl(localizePath(locale, "/")),
    description: contentByLocale[locale].meta.description,
    inLanguage: locale,
    author,
  };
}

export function projectJsonLd(locale: Locale, project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(localizePath(locale, `/projects/${project.slug}`)),
    image: absoluteUrl(project.heroImage.src),
    keywords: project.stack.join(", "),
    inLanguage: locale,
    author,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}
