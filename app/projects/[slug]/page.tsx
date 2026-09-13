import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/project-detail/BackLink";
import { CaseStudySection } from "@/components/project-detail/CaseStudySection";
import { ProjectGallery } from "@/components/project-detail/ProjectGallery";
import { ProjectHeader } from "@/components/project-detail/ProjectHeader";
import { ProjectSidebar } from "@/components/project-detail/ProjectSidebar";
import { getProject, projects } from "@/lib/projects";

// Only the slugs from generateStaticParams exist — anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: [project.heroImage.src],
    },
  };
}

export default async function Page({ params }: PageProps<"/projects/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-xl sm:px-xl">
      <div className="grid grid-cols-1 gap-lg md:grid-cols-[200px_1fr]">
        <aside className="flex flex-col gap-md md:sticky md:top-8 md:h-fit">
          <BackLink />
          <ProjectSidebar
            role={project.role}
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
          <CaseStudySection
            title="Problem"
            content={project.caseStudy.problem}
          />
          <CaseStudySection
            title="Approach"
            content={project.caseStudy.approach}
          />
          <CaseStudySection
            title="Challenge"
            content={project.caseStudy.challenge}
          />
          <CaseStudySection title="Result" content={project.caseStudy.result} />
          <ProjectGallery images={project.gallery} />
        </div>
      </div>
    </main>
  );
}
