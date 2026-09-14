import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Needed because the root layout sits under the dynamic app/[lang] segment.
    globalNotFound: true,
  },
};

export default nextConfig;
