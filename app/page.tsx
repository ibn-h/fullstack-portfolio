import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="w-full">
      <Hero name="Badr" />
      <ProjectsSection/>
      <About />
    </main>
  );
}
