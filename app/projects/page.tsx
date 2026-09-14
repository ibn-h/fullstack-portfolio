import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { ProjectRow } from "@/components/projects/ProjectRow";
import { content } from "@/lib/content";
import { projects } from "@/lib/projects";

const { heading, subtitle, metaDescription } = content.projectsPage;

export const metadata: Metadata = {
  title: heading,
  description: metaDescription,
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-xl sm:px-xl">
      <header className="mb-lg">
        <h1 className="text-text">{heading}</h1>
        <p className="text-body text-muted max-w-[60ch] mt-md">{subtitle}</p>
      </header>

      <ol className="flex flex-col gap-lg">
        {projects.map((project, i) => (
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
