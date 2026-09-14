import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

import { contentByLocale } from "@/lib/content";
import { localizePath } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/server";

export async function BackLink() {
  const locale = await getLocale();
  const { backLink } = contentByLocale[locale].projectDetail;

  return (
    <Link
      href={localizePath(locale, "/projects")}
      className="text-muted hover:text-text inline-flex items-center gap-xs text-small transition-colors"
    >
      <IconArrowLeft className="size-4" aria-hidden="true" />
      {backLink}
    </Link>
  );
}
