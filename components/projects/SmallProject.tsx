import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectBadge } from "./ProjectBadge";
import { ProjectLinks } from "./ProjectLinks";

interface SmallProjectProps {
  title: string;
  description: string;
  image: string;
  badges: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
}

export function SmallProject({
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
        <div className="relative h-40">
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="p-5 flex flex-col gap-3">
          <h4 className="text-text m-0">{title}</h4>
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
