import type { MetadataRoute } from "next";
import { locales, localizePath } from "@/lib/i18n/config";
import { projectSlugs } from "@/lib/projects";
import { absoluteUrl } from "@/lib/seo";

// Every page once per language, each entry listing all of its translations.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/projects",
    ...projectSlugs.map((slug) => `/projects/${slug}`),
  ];

  return paths.flatMap((path) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, absoluteUrl(localizePath(locale, path))]),
    );

    return locales.map((locale) => ({
      url: languages[locale],
      alternates: { languages },
    }));
  });
}
