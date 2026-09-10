import { Badge } from "@/components/ui/badge";

interface ProjectBadgeProps {
  label: string;
}

export function ProjectBadge({ label }: ProjectBadgeProps) {
  return (
    <Badge variant="outline" className="text-muted border-border text-xs">
      {label}
    </Badge>
  );
}
