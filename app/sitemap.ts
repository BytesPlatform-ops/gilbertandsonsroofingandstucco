import type { MetadataRoute } from "next";
import { roofingServices } from "@/lib/roofing-services";

const baseUrl = "https://gilbertandsonsroofingandstucco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/roofing",
    "/stucco",
    "/service-areas",
    "/service-areas/las-cruces",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const roofingRoutes = roofingServices.map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...roofingRoutes];
}
