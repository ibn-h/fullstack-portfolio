import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getContent } from "@/lib/i18n/server";
import {
  IconArrowRight,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";

interface ProjectLinksProps {
  liveUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
  featured?: boolean;
}

export async function ProjectLinks({
  liveUrl,
  githubUrl,
  caseStudyUrl,
  featured = false,
}: ProjectLinksProps) {
  const { links } = (await getContent()).projects;

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
