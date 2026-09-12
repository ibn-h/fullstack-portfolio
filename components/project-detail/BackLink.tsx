import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export function BackLink() {
  return (
    <Link
      href="/#projects"
      className="text-muted hover:text-text inline-flex items-center gap-xs text-small transition-colors"
    >
      <IconArrowLeft className="size-4" aria-hidden="true" />
      Projects
    </Link>
  );
}
