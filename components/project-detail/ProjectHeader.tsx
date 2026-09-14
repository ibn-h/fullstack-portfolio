import Image from "next/image";
import { ProjectImageTransition } from "@/components/motion/project-image-transition";
import { screenshotStyle, type Screenshot } from "@/lib/projects";

interface ProjectHeaderProps {
  slug: string;
  title: string;
  tagline: string;
  heroImage: Screenshot;
}

export function ProjectHeader({
  slug,
  title,
  tagline,
  heroImage,
}: ProjectHeaderProps) {
  return (
    <header className="mb-lg">
      <h1 className="text-text">{title}</h1>
      <p className="text-muted mt-sm">{tagline}</p>
      <ProjectImageTransition slug={slug}>
        <div className="relative mt-md aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            priority
            className="rounded-lg object-cover"
            style={screenshotStyle(heroImage)}
          />
        </div>
      </ProjectImageTransition>
    </header>
  );
}
