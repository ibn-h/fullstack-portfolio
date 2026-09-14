import Image from "next/image";
import { ProjectImageTransition } from "@/components/motion/project-image-transition";
import { Card, CardContent } from "@/components/ui/card";
import { getContent } from "@/lib/i18n/server";
import { screenshotStyle, type Screenshot } from "@/lib/projects";
import { ProjectBadge } from "./ProjectBadge";
import { ProjectLinks } from "./ProjectLinks";

interface FeaturedProjectProps {
  slug: string;
  title: string;
  description: string;
  image: Screenshot;
  badges: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
}

export async function FeaturedProject({
  slug,
  title,
  description,
  image,
  badges,
  liveUrl,
  githubUrl,
  caseStudyUrl,
}: FeaturedProjectProps) {
  const { featuredLabel } = (await getContent()).projects;

  return (
    <Card className="bg-surface border-border overflow-hidden py-0">
      <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2">
        <ProjectImageTransition slug={slug}>
          <div className="relative aspect-video overflow-hidden md:aspect-auto md:min-h-70">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
              className="object-cover"
              style={screenshotStyle(image)}
            />
          </div>
        </ProjectImageTransition>
        <div className="min-w-0 wrap-break-word p-6 md:p-8 flex flex-col justify-center gap-4">
          <small className="text-muted">{featuredLabel}</small>
          <h3 className="text-text m-0">{title}</h3>
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
            featured
          />
        </div>
      </CardContent>
    </Card>
  );
}
