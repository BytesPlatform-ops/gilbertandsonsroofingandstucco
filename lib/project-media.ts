import { roofingServices } from "@/lib/roofing-services";

export type ProjectMedia = {
  id: string;
  title: string;
  category: "roofing" | "stucco";
  propertyType: "residential" | "commercial";
  type: "image";
  src: string;
  alt: string;
  description: string;
  /** Illustrative/AI-generated scene — not a documented Gilbert & Sons job. Used for editorial atmosphere only, never captioned as a specific completed project. */
  illustrative?: boolean;
};

export const projectMedia: ProjectMedia[] = [
  {
    id: "aerial-overview-01",
    title: "Completed Roof, Aerial View",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/aerial-roof-overview-01.jpg",
    alt: "Aerial view of a completed asphalt shingle roof in Las Cruces, NM",
    description: "A finished residential shingle roof, viewed from above.",
  },
  {
    id: "aerial-shingle-01",
    title: "Shingle Roof, Close Aerial",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/aerial-shingle-roof-01.jpg",
    alt: "Close aerial view of an asphalt shingle roof ridge and valley",
    description: "Ridge and valley detail on a completed shingle roof.",
  },
  {
    id: "aerial-shingle-02",
    title: "Shingle Roof, Neighborhood View",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/aerial-shingle-roof-02.jpg",
    alt: "Aerial view of a shingle roof with surrounding Las Cruces neighborhood",
    description: "A completed roof set against the Las Cruces high desert.",
  },
  {
    id: "aerial-shingle-03",
    title: "Shingle Roof, Overhead",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/aerial-shingle-roof-03.jpg",
    alt: "Overhead aerial view of a residential asphalt shingle roof",
    description: "Straight-overhead view of a completed roofing project.",
  },
  {
    id: "aerial-shingle-04",
    title: "Shingle Roof, Vents & Flashing",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/aerial-shingle-roof-04.jpg",
    alt: "Roof vents and flashing detail on a finished shingle roof",
    description: "Vent stacks and flashing on a completed roof.",
  },
  {
    id: "aerial-shingle-05",
    title: "Shingle Roof, Wide Aerial",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/aerial-shingle-roof-05.jpg",
    alt: "Wide aerial view of a residential roof and property",
    description: "A wider view showing the roof in context with the property.",
  },
  {
    id: "aerial-shingle-06",
    title: "Shingle Roof, Ridge Line",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/aerial-shingle-roof-06.jpg",
    alt: "Ridge line detail on a completed asphalt shingle roof",
    description: "Clean ridge lines on a finished roofing project.",
  },
  {
    id: "aerial-shingle-07",
    title: "Shingle Roof, Full Property",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/aerial-shingle-roof-07.jpg",
    alt: "Aerial view of full property with completed shingle roof",
    description: "Full property view following a completed roofing project.",
  },
  {
    id: "aerial-shingle-08",
    title: "Shingle Roof, Detail Aerial",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/aerial-shingle-roof-08.jpg",
    alt: "Detailed aerial view of asphalt shingle roofing texture",
    description: "Close detail on shingle texture and layout.",
  },
  {
    id: "roof-detail-01",
    title: "Roof Detail, Ground Level",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/roof-detail-01.jpg",
    alt: "Ground-level detail of a residential shingle roof edge",
    description: "A closer look at roofline and edge detail.",
  },
  {
    id: "roof-detail-02",
    title: "Roof Detail, Eave & Vent",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/roof-detail-02.jpg",
    alt: "Eave and vent detail on a residential roof",
    description: "Eave and vent detail on a completed roof.",
  },
  {
    id: "stucco-exterior-01",
    title: "Residential Stucco Exterior",
    category: "stucco",
    propertyType: "residential",
    type: "image",
    src: "/projects/stucco-house-exterior-01.webp",
    alt: "Residential stucco exterior finish in progress, Las Cruces, NM",
    description: "A residential stucco finish taking shape.",
  },
  {
    id: "stucco-exterior-02",
    title: "Residential Stucco, Aerial",
    category: "stucco",
    propertyType: "residential",
    type: "image",
    src: "/projects/stucco-house-exterior-02.webp",
    alt: "Aerial view of a residential property with stucco exterior",
    description: "A finished residential stucco exterior, viewed from above.",
  },
  {
    id: "stucco-construction-01",
    title: "Commercial Stucco & EIFS",
    category: "stucco",
    propertyType: "commercial",
    type: "image",
    src: "/projects/stucco-project-construction-01.webp",
    alt: "Commercial stucco and EIFS project under construction",
    description: "A commercial exterior finishing project mid-construction.",
  },
  {
    id: "ai-aerial-shingle-desert-01",
    title: "Shingle Roof, Desert Property",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/ai-aerial-shingle-roof-desert-01.png",
    alt: "Aerial view of a Southwest home with an asphalt shingle roof",
    description: "A shingle roofline set against the high desert.",
    illustrative: true,
  },
  {
    id: "ai-roofer-flashing-01",
    title: "Flashing Repair",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/ai-roofer-flashing-detail-01.png",
    alt: "Roofer repairing flashing at a chimney base",
    description: "Flashing work at a roof-wall transition.",
    illustrative: true,
  },
  {
    id: "ai-stucco-patch-01",
    title: "Stucco Patch in Progress",
    category: "stucco",
    propertyType: "residential",
    type: "image",
    src: "/projects/ai-stucco-patch-progress-01.png",
    alt: "Stucco wall mid-repair with patched sections and a ladder",
    description: "A stucco exterior partway through patch repair.",
    illustrative: true,
  },
  {
    id: "ai-tile-underlayment-01",
    title: "Tile Roof Underlayment",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/ai-tile-underlayment-install-01.png",
    alt: "Clay tile roof partway through underlayment installation",
    description: "Underlayment and clay tile mid-installation.",
    illustrative: true,
  },
  {
    id: "ai-roofer-coating-01",
    title: "Roof Coating Application",
    category: "roofing",
    propertyType: "commercial",
    type: "image",
    src: "/projects/ai-roofer-coating-application-01.png",
    alt: "Worker applying reflective coating to a commercial flat roof",
    description: "Silicone coating being applied to a commercial roof.",
    illustrative: true,
  },
  {
    id: "ai-house-golden-hour-01",
    title: "Shingle Roof, Evening Light",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/ai-house-exterior-golden-hour-01.png",
    alt: "Southwest home exterior with shingle roof at golden hour",
    description: "A residential rooflines in evening light.",
    illustrative: true,
  },
  {
    id: "ai-house-tile-roof-01",
    title: "Tile Roof Exterior",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/ai-house-exterior-tile-roof-01.png",
    alt: "Southwest home exterior with a tile roof",
    description: "A tile-roofed home exterior.",
    illustrative: true,
  },
  {
    id: "ai-roofer-gutter-01",
    title: "Gutter & Roofline Inspection",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/ai-roofer-gutter-inspection-01.png",
    alt: "Roofer inspecting gutters and roofline from a ladder",
    description: "A closer look at gutter and roofline condition.",
    illustrative: true,
  },
  {
    id: "ai-house-dusk-01",
    title: "Shingle Roof, Dusk",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/ai-house-exterior-dusk-01.png",
    alt: "Southwest home exterior with shingle roof at dusk",
    description: "A residential roofline at dusk.",
    illustrative: true,
  },
  {
    id: "ai-roof-nailing-01",
    title: "Shingle Installation Detail",
    category: "roofing",
    propertyType: "residential",
    type: "image",
    src: "/projects/ai-roof-nailing-detail-01.png",
    alt: "Roofing nail gun and materials staged on a shingle roof",
    description: "Materials and tools staged during shingle installation.",
    illustrative: true,
  },
];

export function getProjectMedia({
  category,
  service,
  limit,
  exclude,
}: {
  category?: "roofing" | "stucco";
  service?: string;
  limit?: number;
  exclude?: string[];
} = {}): ProjectMedia[] {
  const resolvedCategory = category ?? (service ? "roofing" : undefined);
  const excludeSrcs = new Set(exclude ?? []);

  let pool = projectMedia.filter((item) => !excludeSrcs.has(item.src));
  if (resolvedCategory) {
    pool = pool.filter((item) => item.category === resolvedCategory);
  }

  if (service) {
    const serviceIndex = roofingServices.findIndex((s) => s.slug === service);
    const offset = serviceIndex >= 0 ? serviceIndex : 0;
    pool = [...pool.slice(offset % pool.length), ...pool.slice(0, offset % pool.length)];
  }

  return typeof limit === "number" ? pool.slice(0, limit) : pool;
}
