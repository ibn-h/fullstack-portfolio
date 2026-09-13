import { FeaturedProject } from "./FeaturedProject";
import { SmallProject } from "./SmallProject";
import { Reveal } from "@/components/motion/reveal";
import { projects, type Project } from "@/lib/projects";

function toCardProps(project: Project) {
  return {
    slug: project.slug,
    title: project.title,
    description: project.tagline,
    image: project.heroImage.src,
    badges: project.stack.slice(0, 4),
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    caseStudyUrl: `/projects/${project.slug}`,
  };
}

export default function ProjectsSection() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="px-6 py-xl sm:px-xl sm:py-2xl">
      <h2 className="text-text mb-(--spacing-lg)">Projects</h2>
      <div className="flex flex-col gap-4">
        {featured && (
          <Reveal>
            <FeaturedProject {...toCardProps(featured)} />
          </Reveal>
        )}
        <div className="grid grid-cols-2 gap-4">
          {others.map((project, i) => (
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
