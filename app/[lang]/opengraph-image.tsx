import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/components/seo/OgImage";
import { contentByLocale } from "@/lib/content";
import { resolveLocale } from "@/lib/i18n/resolve-locale";
import { defaultTitle } from "@/lib/seo";
import { site } from "@/lib/site";

// One image per locale, so the alt text is in the page's language.
export function generateImageMetadata({
  params,
}: {
  params: { lang: string };
}) {
  return [
    {
      id: "og",
      alt: defaultTitle(resolveLocale(params.lang)),
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
  const { hero, meta } = contentByLocale[resolveLocale((await params).lang)];

  return new ImageResponse(
    (
      <OgCard
        eyebrow={meta.role}
        title={site.name}
        subtitle={hero.tagline}
        tags={hero.process.stack}
      />
    ),
    ogSize,
  );
}
