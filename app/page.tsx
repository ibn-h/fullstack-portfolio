import { Hero } from "@/components/sections/hero";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="w-full">
      <Hero name="Badr" />
      <ProjectsSection/>
    </main>
  );
}
