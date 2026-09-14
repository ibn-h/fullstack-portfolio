import Image from "next/image";
import { ProjectImageTransition } from "@/components/motion/project-image-transition";
import { Card, CardContent } from "@/components/ui/card";
import { screenshotStyle, type Screenshot } from "@/lib/projects";
import { ProjectBadge } from "./ProjectBadge";
import { ProjectLinks } from "./ProjectLinks";

interface SmallProjectProps {
  slug: string;
  title: string;
  description: string;
  image: Screenshot;
  badges: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
}

export function SmallProject({
  slug,
  title,
  description,
  image,
  badges,
  liveUrl,
  githubUrl,
  caseStudyUrl,
}: SmallProjectProps) {
  return (
    <Card className="bg-surface border-border overflow-hidden py-0">
      <CardContent className="p-0">
        <ProjectImageTransition slug={slug}>
          <div className="relative h-40 overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
              style={screenshotStyle(image)}
            />
          </div>
        </ProjectImageTransition>
        <div className="min-w-0 wrap-break-word p-5 flex flex-col gap-3">
          <h3 className="text-h4 text-text m-0">{title}</h3>
          <p className="text-muted text-sm leading-relaxed m-0">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <ProjectBadge key={badge} label={badge} />
            ))}
          </div>
          <ProjectLinks
            liveUrl={liveUrl}
            githubUrl={githubUrl}
            caseStudyUrl={caseStudyUrl}
          />
        </div>
      </CardContent>
    </Card>
  );
}
