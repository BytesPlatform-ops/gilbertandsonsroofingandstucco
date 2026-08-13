export type CoreService = {
  slug: string;
  title: string;
  description: string;
  /** Path relative to /public — e.g. public/projects/foo.jpg is "/projects/foo.jpg". */
  image: string;
  /** Only set for services with their own page. Otherwise the CTA opens the estimate modal. */
  href?: string;
  cta: string;
  items: string[];
};

export const coreServices: CoreService[] = [
  {
    slug: "roofing",
    title: "Roofing",
    description:
      "Installation, repair, replacement and inspection for asphalt shingle, tile, metal and flat roofs — residential and commercial, across Las Cruces and Doña Ana County.",
    image: "/projects/aerial-shingle-roof-02.jpg",
    href: "/roofing",
    cta: "Explore Roofing",
    items: ["Roof Installations", "Roof Repair", "Roof Replacement", "Roof Inspection"],
  },
  {
    slug: "stucco",
    title: "Stucco",
    description:
      "Stucco and EIFS installation and repair built for the New Mexico climate, including parapet repair and full exterior finish work.",
    image: "/projects/stucco-house-exterior-02.webp",
    href: "/stucco",
    cta: "Explore Stucco",
    items: ["Stucco", "EIFS", "Residential & Commercial", "Parapet Repair"],
  },
  {
    slug: "painting",
    title: "Painting",
    description:
      "Exterior and interior painting, often paired with stucco or repair work so the finish matches when the job is done.",
    image: "/projects/ai-house-exterior-golden-hour-01.png",
    cta: "Request an Estimate",
    items: ["Interior Painting", "Exterior Painting"],
  },
  {
    slug: "plastering",
    title: "Plastering",
    description:
      "Plaster repair and refinishing for walls and surfaces that need a clean, lasting result — smooth or textured.",
    image: "/projects/ai-stucco-patch-progress-01.png",
    cta: "Request an Estimate",
    items: ["Smooth Finish", "Textured Finish"],
  },
];
