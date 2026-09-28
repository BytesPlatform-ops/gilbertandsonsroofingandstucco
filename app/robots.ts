import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/sitemap.xml"],
      disallow: "/*?*wordfence_lh=",
    },
    sitemap: "https://gilbertandsonsroofingandstucco.com/sitemap.xml",
  };
}
