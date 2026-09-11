import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "../icons/GitHubIcon";

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
        <ExternalLink className="w-3.5 h-3.5" />
        Live
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
          <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />
        </Button>
      )}
      <Button
        variant="outline"
        size="sm"
        nativeButton={false}
        render={<Link href={caseStudyUrl} />}
        className="border-border text-muted hover:text-text hover:border-text"
      >
        Case study
        <ArrowRight className="w-3.5 h-3.5" />
      </Button>
    </div>
  );
}
