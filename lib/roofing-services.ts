export type RoofingService = {
  slug: string;
  title: string;
  shortTitle: string;
  href: string;
  /** Base card copy. Used wherever no context-specific override is supplied. */
  description: string;
  /** Homepage "Every roofing service we offer" card. Falls back to `description`. */
  homeCardDescription?: string;
  /** /roofing service picker. Falls back to `description`. */
  hubDescription?: string;
  /** Alt text for the service image on the /roofing picker. Falls back to `title`. */
  imageAlt?: string;
};

export const roofingServices: RoofingService[] = [
  {
    slug: "roof-installations",
    title: "Roof Installations",
    shortTitle: "Installations",
    href: "/roofing/roof-installations",
    description:
      "New roof installation for asphalt shingle, metal, tile, flat and TPO systems, matched to your property.",
    hubDescription:
      "New roof installation for asphalt shingle, metal, tile, flat and TPO systems, matched to your Las Cruces property.",
    imageAlt: "New roof installation by a Las Cruces, NM roofing contractor",
  },
  {
    slug: "roof-repairs",
    title: "Roof Repairs",
    shortTitle: "Repairs",
    href: "/roofing/roof-repairs",
    description:
      "Roof repair for leaks, storm damage and general wear and tear.",
    homeCardDescription:
      "Roof repair for leaks, storm damage and general wear and tear, the local answer when you search for \"leaky roof repair near me.\"",
  },
  {
    slug: "roof-replacements",
    title: "Roof Replacements",
    shortTitle: "Replacements",
    href: "/roofing/roof-replacements",
    description:
      "Full roof replacement when repair is no longer the right solution.",
    homeCardDescription:
      "Full roof replacement Las Cruces homeowners can count on when repair is no longer the right solution.",
  },
  {
    slug: "roof-inspections",
    title: "Roof Inspections",
    shortTitle: "Inspections",
    href: "/roofing/roof-inspections",
    description:
      "Thorough inspections designed to identify potential issues early.",
    homeCardDescription:
      "A thorough roof inspection Las Cruces property owners can rely on, designed to identify potential issues early.",
  },
  {
    slug: "roof-maintenance",
    title: "Roof Maintenance",
    shortTitle: "Maintenance",
    href: "/roofing/roof-maintenance",
    description:
      "Customized maintenance plans designed to keep roofing systems performing properly.",
  },
  {
    slug: "emergency-roofing",
    title: "Emergency Roofing Services",
    shortTitle: "Emergency Roofing",
    href: "/roofing/emergency-roofing",
    description:
      "Prompt, responsive help for urgent roofing problems and active damage.",
    homeCardDescription:
      "Searching for \"roof leaking repair near me\" with water already coming in? Prompt, responsive help for urgent roofing problems and active damage.",
  },
  {
    slug: "specialty-roofing",
    title: "Specialty Roofing",
    shortTitle: "Specialty Systems",
    href: "/roofing/specialty-roofing",
    description:
      "Asphalt shingle, metal, tile, flat and TPO roofing, plus storm damage and gutter services.",
    homeCardDescription:
      "From \"metal roof services near me\" to asphalt shingle, tile, flat and TPO roofing, plus storm damage and gutter services.",
  },
  {
    slug: "tile-roofing",
    title: "Tile Roofing",
    shortTitle: "Tile Roofing",
    href: "/roofing/tile-roofing",
    description:
      "Tile roof installation and underlayment replacement, including clay tile options.",
  },
  {
    slug: "silicone-roof-restoration",
    title: "Silicone Roof Restoration",
    shortTitle: "Silicone Roof Coatings",
    href: "/roofing/silicone-roof-restoration",
    description:
      "Silicone and elastomeric commercial roof restoration and renewal.",
    homeCardDescription:
      "Silicone and elastomeric commercial roof restoration, renewal and commercial roof repair for flat and low-slope buildings.",
    hubDescription:
      "Silicone and elastomeric roof coatings for commercial roofing restoration and renewal.",
  },
];
