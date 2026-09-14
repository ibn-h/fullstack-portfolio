import { ImageResponse } from "next/og";
import { Monogram } from "@/components/seo/OgImage";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS rounds the corners itself.
export default function AppleIcon() {
  return new ImageResponse(
    <Monogram size={size.width} rounded={false} />,
    size,
  );
}
