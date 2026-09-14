import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/components/seo/OgImage";
import { contentByLocale } from "@/lib/content";
import { resolveLocale } from "@/lib/i18n/resolve-locale";
import { getProjects } from "@/lib/projects";
import { defaultTitle } from "@/lib/seo";

// Needed because this page sets its own `openGraph`, which drops the root image.
export function generateImageMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const locale = resolveLocale(params.lang);

  return [
    {
      id: "og",
      alt: `${contentByLocale[locale].projectsPage.heading} — ${defaultTitle(locale)}`,
      size: ogSize,
      contentType: "image/png",
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const locale = resolveLocale((await params).lang);
  const { heading, metaDescription } = contentByLocale[locale].projectsPage;

  return new ImageResponse(
    (
      <OgCard
        eyebrow={defaultTitle(locale)}
        title={heading}
        subtitle={metaDescription}
        tags={getProjects(locale).map(({ title }) => title)}
      />
    ),
    ogSize,
  );
}
