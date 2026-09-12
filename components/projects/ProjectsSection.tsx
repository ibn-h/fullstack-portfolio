import { FeaturedProject } from "./FeaturedProject";
import { SmallProject } from "./SmallProject";
import { Reveal } from "@/components/motion/reveal";

const projects = {
  featured: {
    title: "Y2Notion",
    description:
      "Converts YouTube videos into structured Markdown summaries using AI, with one-click save to Notion.",
    image: "/screenshots/y2notion-homepage.png",
    badges: ["Next.js", "Groq API", "Notion API", "TypeScript"],
    liveUrl: "https://y2notion.com",
    githubUrl: "https://github.com/jouwusername/y2notion",
    caseStudyUrl: "/projects/y2notion",
  },
  small: [
    {
      title: "Hairsalon booking",
      description:
        "Reservation system with email confirmations and a protected barber dashboard.",
      image: "/screenshots/hairsalon-homepage.png",
      badges: ["Next.js", "Supabase", "Resend"],
      liveUrl: "https://theblade.com",
      githubUrl: "https://github.com/jouwusername/hairsalon",
      caseStudyUrl: "/projects/hairsalon-booking",
    },
    {
      title: "Warehouse Insights",
      description:
        "Real-time KPI dashboard with live order tracking and instant notifications.",
      image: "/screenshots/warehouse-insights-dashboard.png",
      badges: ["Next.js", "Pusher", "Auth.js"],
      liveUrl: "https://warehouse-insights.com",
      githubUrl: "https://github.com/jouwusername/warehouse-insights",
      caseStudyUrl: "/projects/warehouse-insights",
    },
  ],
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-xl sm:px-xl sm:py-2xl">
      <h2 className="text-text mb-(--spacing-lg)">Projects</h2>
      <div className="flex flex-col gap-4">
        <Reveal>
          <FeaturedProject {...projects.featured} />
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {projects.small.map((project, i) => (
            // `grid` keeps the card stretched to the full row height, exactly
            // as it was before this wrapper existed.
            <Reveal key={project.title} index={i + 1} className="grid">
              <SmallProject {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
