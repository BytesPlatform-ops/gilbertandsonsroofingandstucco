export type ServiceArea = {
  slug: string;
  name: string;
  /** Dedicated page for the primary market; anchor on the hub page for everywhere else. */
  href: string;
  primary?: boolean;
};

// Las Cruces is always first — it's the primary market and the only city
// with its own dedicated page. Every other city links to its entry on the
// /service-areas hub page rather than a thin, duplicate-content page.
export const serviceAreas: ServiceArea[] = [
  { slug: "las-cruces", name: "Las Cruces", href: "/service-areas/las-cruces", primary: true },
  { slug: "dona-ana", name: "Doña Ana", href: "/service-areas#dona-ana" },
  { slug: "mesilla", name: "Mesilla", href: "/service-areas#mesilla" },
  { slug: "university-park", name: "University Park", href: "/service-areas#university-park" },
  { slug: "hatch", name: "Hatch", href: "/service-areas#hatch" },
  { slug: "chaparral", name: "Chaparral", href: "/service-areas#chaparral" },
  { slug: "anthony", name: "Anthony", href: "/service-areas#anthony" },
  { slug: "sunland-park", name: "Sunland Park", href: "/service-areas#sunland-park" },
  { slug: "deming", name: "Deming", href: "/service-areas#deming" },
  { slug: "truth-or-consequences", name: "Truth or Consequences", href: "/service-areas#truth-or-consequences" },
  { slug: "silver-city", name: "Silver City", href: "/service-areas#silver-city" },
  { slug: "ruidoso", name: "Ruidoso", href: "/service-areas#ruidoso" },
  { slug: "el-paso", name: "El Paso", href: "/service-areas#el-paso" },
];
