import { FeaturedProject } from "./FeaturedProject";
import { SmallProject } from "./SmallProject";
import { Reveal } from "@/components/motion/reveal";
import { content } from "@/lib/content";
import { featuredProject, otherProjects, type Project } from "@/lib/projects";

function toCardProps(project: Project) {
  return {
    slug: project.slug,
    title: project.title,
    description: project.tagline,
    image: project.heroImage,
    badges: project.stack.slice(0, 4),
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    caseStudyUrl: `/projects/${project.slug}`,
  };
}

export default function ProjectsSection() {
  const { heading, subtitle } = content.projects;

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
            <FeaturedProject {...toCardProps(featuredProject)} />
          </Reveal>
        )}
        <div className="grid grid-cols-2 gap-4">
          {otherProjects.map((project, i) => (
            // `grid` keeps the card stretched to the full row height, exactly
            // as it was before this wrapper existed.
            <Reveal key={project.slug} index={i + 1} className="grid">
              <SmallProject {...toCardProps(project)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
