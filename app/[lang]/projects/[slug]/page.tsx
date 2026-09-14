import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/project-detail/BackLink";
import { CaseStudySection } from "@/components/project-detail/CaseStudySection";
import { ProjectGallery } from "@/components/project-detail/ProjectGallery";
import { ProjectHeader } from "@/components/project-detail/ProjectHeader";
import { ProjectSidebar } from "@/components/project-detail/ProjectSidebar";
import { JsonLd } from "@/components/seo/JsonLd";
import { contentByLocale } from "@/lib/content";
import { localizePath } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/resolve-locale";
import { caseStudyOrder, getProject, projectSlugs } from "@/lib/projects";
import {
  baseOpenGraph,
  breadcrumbJsonLd,
  localeAlternates,
  projectJsonLd,
} from "@/lib/seo";

// Only the slugs from generateStaticParams exist — anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const project = getProject(locale, slug);
  if (!project) return {};

  const path = `/projects/${project.slug}`;

  // The share image comes from ./opengraph-image.tsx.
  return {
    title: project.title,
    description: project.tagline,
    alternates: localeAlternates(locale, path),
    openGraph: {
      ...baseOpenGraph(locale),
      type: "article",
      title: project.title,
      description: project.tagline,
      url: localizePath(locale, path),
    },
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const project = getProject(locale, slug);
  if (!project) notFound();

  const content = contentByLocale[locale];

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-xl sm:px-xl">
      <JsonLd data={projectJsonLd(locale, project)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: content.meta.home, path: localizePath(locale, "/") },
          {
            name: content.projectsPage.heading,
            path: localizePath(locale, "/projects"),
          },
          {
            name: project.title,
            path: localizePath(locale, `/projects/${project.slug}`),
          },
        ])}
      />
      <div className="grid grid-cols-1 gap-lg md:grid-cols-[200px_1fr]">
        <aside className="flex flex-col gap-md md:sticky md:top-8 md:h-fit">
          <BackLink />
          <ProjectSidebar
            role={project.role}
            timeline={project.timeline}
            stack={project.stack}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        </aside>

        <div>
          <ProjectHeader
            slug={project.slug}
            title={project.title}
            tagline={project.tagline}
            heroImage={project.heroImage}
          />
          {caseStudyOrder.map((id) => (
            <CaseStudySection
              key={id}
              title={content.projectDetail.caseStudyTitles[id]}
              content={project.caseStudy[id]}
            />
          ))}
          <ProjectGallery images={project.gallery} />
        </div>
      </div>
    </main>
  );
}
