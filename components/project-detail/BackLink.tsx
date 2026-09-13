import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

import { content } from "@/lib/content";

const { backLink } = content.projectDetail;

export function BackLink() {
  return (
    <Link
      href={backLink.href}
      className="text-muted hover:text-text inline-flex items-center gap-xs text-small transition-colors"
    >
      <IconArrowLeft className="size-4" aria-hidden="true" />
      {backLink.label}
    </Link>
  );
}
