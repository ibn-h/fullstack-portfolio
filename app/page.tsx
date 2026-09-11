import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="w-full">
      <Hero name="Badr" />
      <ProjectsSection/>
      <About />
      <Contact />
    </main>
  );
}
