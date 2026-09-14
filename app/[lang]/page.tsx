import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import ProjectsSection from "@/components/projects/ProjectsSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { contentByLocale } from "@/lib/content";
import { localizePath } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/resolve-locale";
import { getLocale } from "@/lib/i18n/server";
import {
  baseOpenGraph,
  defaultTitle,
  localeAlternates,
  personJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const locale = resolveLocale((await params).lang);

  return {
    alternates: localeAlternates(locale, "/"),
    openGraph: {
      ...baseOpenGraph(locale),
      title: defaultTitle(locale),
      description: contentByLocale[locale].meta.description,
      url: localizePath(locale, "/"),
    },
  };
}

export default async function Home() {
  const locale = await getLocale();

  return (
    <main className="mx-auto w-full max-w-6xl">
      <JsonLd data={personJsonLd(locale)} />
      <JsonLd data={websiteJsonLd(locale)} />
      <Hero />
      <ProjectsSection />
      <About />
      <Contact copy={contentByLocale[locale].contact} locale={locale} />
    </main>
  );
}
