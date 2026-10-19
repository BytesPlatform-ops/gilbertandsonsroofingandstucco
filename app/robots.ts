import type { MetadataRoute } from "next";

// Every crawler, including AI search crawlers (GPTBot, OAI-SearchBot,
// PerplexityBot, ClaudeBot, Google-Extended, Bingbot), may crawl the whole site.
// The old "wordfence_lh" rule was left over from the previous WordPress site
// and has been removed; this Next.js site never produces those URLs.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://gilbertandsonsroofingandstucco.com/sitemap.xml",
  };
}
