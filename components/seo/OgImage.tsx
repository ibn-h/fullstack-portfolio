// Layouts for `ImageResponse` (Satori): inline styles and flexbox only.

import { ogTheme } from "@/lib/seo";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

interface OgCardProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  tags?: readonly string[];
}

/** 1200×630 share card: eyebrow, large title, subtitle, optional tags. */
export function OgCard({ eyebrow, title, subtitle, tags = [] }: OgCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: ogTheme.bg,
        color: ogTheme.text,
        borderTop: `12px solid ${ogTheme.primary}`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 28,
          color: ogTheme.muted,
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 9999,
            background: ogTheme.primary,
          }}
        />
        {eyebrow}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>
          {title}
        </div>
        <div
          style={{
            fontSize: 40,
            lineHeight: 1.3,
            color: ogTheme.muted,
            maxWidth: 960,
          }}
        >
          {subtitle}
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {tags.map((tag) => (
          <div
            key={tag}
            style={{
              fontSize: 24,
              padding: "8px 20px",
              borderRadius: 9999,
              background: ogTheme.surface,
              border: `1px solid ${ogTheme.border}`,
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Square icon with the first letter of the site name. */
export function Monogram({ size, rounded }: { size: number; rounded: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: ogTheme.bg,
        color: ogTheme.primary,
        fontSize: size * 0.7,
        fontWeight: 700,
        borderRadius: rounded ? size * 0.2 : 0,
      }}
    >
      {site.name.charAt(0)}
    </div>
  );
}
