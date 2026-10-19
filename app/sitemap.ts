import type { MetadataRoute } from "next";
import { roofingServices } from "@/lib/roofing-services";
import { getPublishedPosts } from "@/lib/blog/utils";

const baseUrl = "https://gilbertandsonsroofingandstucco.com";

// Real "last edited" dates for pages that don't come from the blog.
// Update a page's date only when you actually change that page's content.
// (Using new Date() here would tell Google every page changed on every deploy,
// which teaches it to ignore your lastmod dates.)
const staticRoutes: { path: string; lastModified: string }[] = [
  { path: "", lastModified: "2026-09-03" },
  { path: "/about", lastModified: "2026-09-03" },
  { path: "/roofing", lastModified: "2026-09-03" },
  { path: "/stucco", lastModified: "2026-09-03" },
  { path: "/service-areas", lastModified: "2026-09-03" },
  { path: "/service-areas/las-cruces", lastModified: "2026-09-03" },
];

// Fallback for roofing service pages that don't have their own date yet.
const ROOFING_DEFAULT_LASTMOD = "2026-09-03";

export default function sitemap(): MetadataRoute.Sitemap {
  // Published articles only — drafts are never listed.
  const posts = getPublishedPosts();

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
  }));

  // The blog index changes whenever a post is published or updated,
  // so its date is the newest post's date.
  const newestPost = blogRoutes.reduce<Date | undefined>(
    (latest, route) =>
      !latest || route.lastModified > latest ? route.lastModified : latest,
    undefined
  );

  const pageRoutes = staticRoutes.map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(lastModified),
  }));

  const blogIndex = {
    url: `${baseUrl}/blog`,
    lastModified: newestPost ?? new Date(ROOFING_DEFAULT_LASTMOD),
  };

  const roofingRoutes = roofingServices.map((service) => ({
    url: `${baseUrl}${service.href}`,
    // If you add an `updatedAt` field to each service in lib/roofing-services,
    // it will be used here automatically.
    lastModified: new Date(
      (service as { updatedAt?: string }).updatedAt ?? ROOFING_DEFAULT_LASTMOD
    ),
  }));

  return [...pageRoutes, blogIndex, ...roofingRoutes, ...blogRoutes];
}
