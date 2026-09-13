import Link from "next/link";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import {
  IconArrowRight,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";

const { links } = content.projects;

interface ProjectLinksProps {
  liveUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
  featured?: boolean;
}

export function ProjectLinks({
  liveUrl,
  githubUrl,
  caseStudyUrl,
  featured = false,
}: ProjectLinksProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        nativeButton={false}
        render={<a href={liveUrl} target="_blank" rel="noopener noreferrer" />}
        className="border-border text-muted hover:text-text hover:border-text"
      >
        <IconExternalLink aria-hidden="true" />
        {links.live}
      </Button>
      {!featured && (
        <Button
          variant="outline"
          size="sm"
          nativeButton={false}
          render={
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" />
          }
          className="border-border text-muted hover:text-text hover:border-text"
        >
          <IconBrandGithub aria-hidden="true" />
          <span className="sr-only">{links.source}</span>
        </Button>
      )}
      <Button
        variant="outline"
        size="sm"
        nativeButton={false}
        render={<Link href={caseStudyUrl} />}
        className="border-border text-muted hover:text-text hover:border-text"
      >
        {links.caseStudy}
        <IconArrowRight aria-hidden="true" />
      </Button>
    </div>
  );
}
