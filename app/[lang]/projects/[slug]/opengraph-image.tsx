import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { OgCard, ogSize } from "@/components/seo/OgImage";
import { resolveLocale } from "@/lib/i18n/resolve-locale";
import { getProject } from "@/lib/projects";
import { defaultTitle } from "@/lib/seo";

// One image per project, so the alt text can name the project.
export function generateImageMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const locale = resolveLocale(params.lang);
  const project = getProject(locale, params.slug);

  return [
    {
      id: "og",
      alt: project
        ? `${project.title} — ${project.tagline}`
        : defaultTitle(locale),
      size: ogSize,
      contentType: "image/png",
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const project = getProject(locale, slug);
  if (!project) notFound();

  return new ImageResponse(
    (
      <OgCard
        eyebrow={defaultTitle(locale)}
        title={project.title}
        subtitle={project.tagline}
        tags={project.stack}
      />
    ),
    ogSize,
  );
}
