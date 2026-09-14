// Global site data shared across every page and every language.
// Translated copy (role, description) lives in lib/content/.
// This is the lowest-level content file — don't import lib/content or projects.ts here.

const email = "badr.belarbi01@gmail.com";

export const site = {
  name: "Badr",
  // TODO: add your domain, e.g. "badr.dev".
  domain: "",
  // TODO: add your full URL, e.g. "https://badr.dev".
  url: "",
  email,
  // Rendered in this order. `icon` is a Tabler icon name, mapped to a component in the UI.
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/badr-b-40b1b6351/",
      icon: "ti-brand-linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/ibn-h",
      icon: "ti-brand-github",
    },
    {
      label: "X",
      href: "https://x.com/IbnH360123",
      icon: "ti-brand-x",
    },
    {
      label: "Email",
      href: `mailto:${email}`,
      icon: "ti-mail",
    },
  ],
} as const;

/**
 * Absolute base URL for metadata, the sitemap and structured data.
 * Falls back to the Vercel production URL, then localhost, until `site.url` is set.
 */
export const siteUrl =
  site.url ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export type SocialIconName = (typeof site.socials)[number]["icon"];

/** Socials that have a URL filled in — the ones the UI renders. */
export const visibleSocials = site.socials.filter(
  (social) => social.href.length > 0,
);
