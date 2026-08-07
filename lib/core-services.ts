export type CoreService = {
  slug: string;
  title: string;
  description: string;
  image: string | null;
  href: string;
  cta: string;
  items: string[];
};

export const coreServices: CoreService[] = [
  {
    slug: "roofing",
    title: "Roofing",
    description:
      "Roof installation, repair, replacement, inspection and specialty roofing solutions for residential and commercial properties.",
    image: "/projects/aerial-shingle-roof-04.jpg",
    href: "/roofing",
    cta: "Explore Roofing",
    items: ["Roof Installations", "Roof Repair", "Roof Replacement", "Roof Inspection"],
  },
  {
    slug: "stucco",
    title: "Stucco",
    description:
      "Stucco installation and repair for residential and commercial exteriors, including EIFS, parapets and exterior finish work.",
    image: "/projects/stucco-house-exterior-02.webp",
    href: "/stucco",
    cta: "Explore Stucco",
    items: ["Stucco", "EIFS", "Residential & Commercial", "Parapet Repair"],
  },
  {
    slug: "painting",
    title: "Painting",
    description:
      "Exterior and interior painting services that support repair, renovation and property maintenance projects.",
    image: "/projects/ai-house-exterior-golden-hour-01.png",
    href: "/#contact",
    cta: "Request an Estimate",
    items: ["Interior Painting", "Exterior Painting"],
  },
  {
    slug: "drywall",
    title: "Drywall",
    description: "Drywall installation and repair for damaged, remodeled or newly finished interior spaces.",
    image: null,
    href: "/#contact",
    cta: "Request an Estimate",
    items: ["Installation", "Repair"],
  },
  {
    slug: "plastering",
    title: "Plastering",
    description:
      "Plaster repair and finishing services for walls and surfaces requiring a durable, properly finished result.",
    image: "/projects/ai-stucco-patch-progress-01.png",
    href: "/#contact",
    cta: "Request an Estimate",
    items: ["Smooth Finish", "Textured Finish"],
  },
];
