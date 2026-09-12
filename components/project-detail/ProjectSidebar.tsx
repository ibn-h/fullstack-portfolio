import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

interface ProjectSidebarProps {
  role: string;
  timeline: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted text-xs uppercase tracking-wider">{children}</p>
  );
}

export function ProjectSidebar({
  role,
  timeline,
  stack,
  liveUrl,
  githubUrl,
}: ProjectSidebarProps) {
  return (
    <Card className="bg-surface border-border">
      <CardContent className="flex flex-col gap-md">
        <div className="flex flex-col gap-xs">
          <MetaLabel>Role</MetaLabel>
          <p className="text-text text-small">{role}</p>
        </div>

        <div className="flex flex-col gap-xs">
          <MetaLabel>Timeline</MetaLabel>
          <p className="text-text text-small">{timeline}</p>
        </div>

        <div className="flex flex-col gap-xs">
          <MetaLabel>Stack</MetaLabel>
          <div className="flex flex-wrap gap-xs">
            {stack.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="text-primary border-primary/30 bg-primary/10 text-xs"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="border-border flex flex-col gap-sm border-t pt-md">
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" />
            }
            className="border-border text-muted hover:text-text hover:border-text w-full"
          >
            <IconExternalLink aria-hidden="true" />
            Live site
          </Button>
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" />
            }
            className="border-border text-muted hover:text-text hover:border-text w-full"
          >
            <IconBrandGithub aria-hidden="true" />
            Source
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
