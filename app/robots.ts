import type { MetadataRoute } from "next";
import { isIndexable } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Keep preview deployments and local builds out of search results.
  if (!isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
