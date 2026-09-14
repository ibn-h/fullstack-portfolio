import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { FeaturedProject } from "./FeaturedProject";
import { SmallProject } from "./SmallProject";
import { Reveal } from "@/components/motion/reveal";
import { contentByLocale } from "@/lib/content";
import { localizePath, type Locale } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/server";
import { getProjects, type Project } from "@/lib/projects";

function toCardProps(project: Project, locale: Locale) {
  return {
    slug: project.slug,
    title: project.title,
    description: project.tagline,
    image: project.heroImage,
    badges: project.stack.slice(0, 4),
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    caseStudyUrl: localizePath(locale, `/projects/${project.slug}`),
  };
}

export default async function ProjectsSection() {
  const locale = await getLocale();
  const { heading, subtitle, viewAll } = contentByLocale[locale].projects;

  const projects = getProjects(locale);
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="-scroll-mt-lg sm:-scroll-mt-[calc(var(--spacing-xl)+var(--spacing-lg))] px-6 py-xl sm:px-xl sm:py-2xl"
    >
      <h2 className="text-text mb-(--spacing-lg)">{heading}</h2>
      {subtitle && (
        <p className="text-body text-muted max-w-[60ch] mb-(--spacing-lg)">
          {subtitle}
        </p>
      )}
      <div className="flex flex-col gap-4">
        {featuredProject && (
          <Reveal>
            <FeaturedProject {...toCardProps(featuredProject, locale)} />
          </Reveal>
        )}
        <div className="grid grid-cols-2 gap-4">
          {otherProjects.map((project, i) => (
            // `grid` keeps the card stretched to the full row height, exactly
            // as it was before this wrapper existed.
            <Reveal key={project.slug} index={i + 1} className="grid">
              <SmallProject {...toCardProps(project, locale)} />
            </Reveal>
          ))}
        </div>
        <Link
          href={localizePath(locale, "/projects")}
          className="text-muted hover:text-text inline-flex items-center gap-xs self-end text-small transition-colors"
        >
          {viewAll}
          <IconArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
