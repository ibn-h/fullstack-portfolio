import { BackLink } from "@/components/project-detail/BackLink";
import { CaseStudySection } from "@/components/project-detail/CaseStudySection";
import { ProjectGallery } from "@/components/project-detail/ProjectGallery";
import { ProjectHeader } from "@/components/project-detail/ProjectHeader";
import { ProjectSidebar } from "@/components/project-detail/ProjectSidebar";

// Placeholder content — swap for a lookup by `slug` when the data layer lands:
// export default async function Page({ params }: PageProps<"/projects/[slug]">) {
//   const { slug } = await params;
const project = {
  title: "Y2Notion",
  tagline:
    "Converts YouTube videos into structured Markdown summaries using AI, with one-click save to Notion.",
  heroImage: "/screenshots/y2notion-homepage.png",
  role: "Solo developer",
  timeline: "2025 — 6 weeks",
  stack: ["Next.js", "TypeScript", "Groq API", "Notion API", "Tailwind CSS"],
  liveUrl: "https://y2notion.com",
  githubUrl: "https://github.com/jouwusername/y2notion",
  caseStudy: {
    problem:
      "Long-form video is a terrible reference format. Rewatching a 45-minute tutorial to find one command wastes time, and manually taking notes while watching pulls attention away from the material itself.",
    approach:
      "Pull the transcript straight from the video, then hand it to an LLM with a prompt that enforces a fixed Markdown skeleton — summary, key points, timestamped sections. A single API call to Notion writes the result into the user's workspace as a real page, not an export they have to import.",
    challenge:
      "Transcripts for hour-long videos blow past the context window, and naive chunking split sentences mid-thought so section summaries lost their subject. Chunking on transcript timestamps with a small overlap, then summarizing hierarchically, kept each section coherent and cut token usage by roughly half.",
    result:
      "A 45-minute video becomes a skimmable page in about twelve seconds. Summaries stay consistent enough in structure that they are searchable in Notion alongside handwritten notes.",
  },
  gallery: [
    "/screenshots/y2notion-summary.png",
    "/screenshots/y2notion-save-to-notion.png",
    "/screenshots/y2notion-homepage.png",
  ],
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-xl sm:px-xl">
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
