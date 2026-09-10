import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectBadge } from "./ProjectBadge";
import { ProjectLinks } from "./ProjectLinks";

interface FeaturedProjectProps {
  title: string;
  description: string;
  image: string;
  badges: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
}

export function FeaturedProject({
  title,
  description,
  image,
  badges,
  liveUrl,
  githubUrl,
  caseStudyUrl,
}: FeaturedProjectProps) {
  return (
    <Card className="bg-surface border-border overflow-hidden py-0">
      <CardContent className="p-0 grid grid-cols-2">
        <div className="relative h-70">
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes="50vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="p-8 flex flex-col justify-center gap-4">
          <small className="text-muted">Featured project</small>
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
