import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { ProjectRow } from "@/components/projects/ProjectRow";
import { contentByLocale } from "@/lib/content";
import { localizePath } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/resolve-locale";
import { getLocale } from "@/lib/i18n/server";
import { getProjects } from "@/lib/projects";
import { baseOpenGraph, localeAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects">): Promise<Metadata> {
  const locale = resolveLocale((await params).lang);
  const { heading, metaDescription } = contentByLocale[locale].projectsPage;

  return {
    title: heading,
    description: metaDescription,
    alternates: localeAlternates(locale, "/projects"),
    openGraph: {
      ...baseOpenGraph(locale),
      title: heading,
      description: metaDescription,
      url: localizePath(locale, "/projects"),
    },
  };
}

export default async function Page() {
  const locale = await getLocale();
  const { heading, subtitle } = contentByLocale[locale].projectsPage;

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-xl sm:px-xl">
      <header className="mb-lg">
        <h1 className="text-text">{heading}</h1>
        <p className="text-body text-muted max-w-[60ch] mt-md">{subtitle}</p>
      </header>

      <ol className="flex flex-col gap-lg">
        {getProjects(locale).map((project, i) => (
          <li key={project.slug}>
            <Reveal>
              <ProjectRow project={project} index={i} />
            </Reveal>
          </li>
        ))}
      </ol>
    </main>
  );
}
