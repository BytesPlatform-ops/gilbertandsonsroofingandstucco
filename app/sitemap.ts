import type { MetadataRoute } from "next";
import { roofingServices } from "@/lib/roofing-services";
import { getPublishedPosts } from "@/lib/blog/utils";

const baseUrl = "https://gilbertandsonsroofingandstucco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/roofing",
    "/stucco",
    "/service-areas",
    "/service-areas/las-cruces",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const roofingRoutes = roofingServices.map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: new Date(),
  }));

  // Published articles only — drafts are never listed.
  const blogRoutes = getPublishedPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
  }));

  return [...staticRoutes, ...roofingRoutes, ...blogRoutes];
}
