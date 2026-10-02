import type { FAQItem } from "@/components/shared/FAQAccordion";
import type { ExplorerOption } from "@/components/interactive/OptionExplorer";

export type ContentSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type InteractiveBlock =
  | { kind: "options"; label: string; heading: string; options: ExplorerOption[]; ctaLabel?: string; ctaHref?: string }
  | { kind: "layers"; label: string; heading: string }
  | { kind: "hotspots"; label: string; heading: string };

export type RoofingServicePage = {
  slug: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  heroImage: string;
  /** Alt text for the hero image. Falls back to `title`. */
  heroImageAlt?: string;
  backgroundPhrase: string;
  sections: ContentSection[];
  interactive?: InteractiveBlock;
  relatedSlugs: string[];
  /** Per-page copy for a related-services card, keyed by that service's slug. */
  relatedDescriptions?: Record<string, string>;
  faqs: FAQItem[];
};

export const roofingServiceContent: Record<string, RoofingServicePage> = {
  "roof-installations": {
    slug: "roof-installations",
    eyebrow: "Roof Installations · Las Cruces, NM",
    title: "New Roof Installation Las Cruces, NM",
    seoTitle: "New Roof Installation Las Cruces, NM | Gilbert & Sons",
    metaDescription:
      
      "New roof installation in Las Cruces, NM: shingle, metal, tile, flat and TPO. Licensed installers, free on-site estimate. Call 575-649-2316.",
    intro:
      "Gilbert & Sons installs new roofs for residential and commercial properties in Las Cruces and across [southern New Mexico](/service-areas), choosing materials and installation methods that fit the property and hold up to the high-desert climate.",
    heroImage: "/projects/roof-installation.jpg",
    heroImageAlt: "New roof installation on a Las Cruces, NM home by Gilbert & Sons",
    backgroundPhrase: "BUILT TO LAST.",
    sections: [
      {
        heading: "Roofing systems we install",
        body:
          "We install roofing systems suited to Las Cruces' climate and to the structure of your property, from standard asphalt shingle roof installation to [metal, tile, flat and TPO roof installation](/roofing/specialty-roofing).",
        bullets: ["Asphalt shingle", "Metal roofing", "Tile roofing", "Flat roofing", "TPO roofing"],
      },
      {
        heading: "Residential & commercial roof installation",
        body:
          "Whether it's new construction roofing for a home, an addition, or a commercial building, we install roofing systems appropriate to the property and the way it will be used.",
      },
      {
        heading: "Our roof installation process",
        body:
          "We start with an [on-site evaluation](/roofing/roof-inspections) and a clear written quote, then install using quality materials and proper technique, keeping you informed as work progresses. Most residential installations are finished in one to three days.",
      },
    ],
    interactive: {
      kind: "options",
      label: "Roofing Systems",
      heading: "Select a roofing system.",
      options: [
        {
          key: "asphalt",
          label: "Asphalt Shingle",
          image: "/projects/aerial-shingle-roof-02.jpg",
          heading: "Asphalt Shingle",
          imageAlt: "Asphalt shingle roof installation in Las Cruces, NM",
          body: "The most common residential roofing system, a reliable, cost-effective option we install regularly across Las Cruces. We offer architectural shingles as well as standard 3-tab, with cool-roof color options for the desert sun.",
        },
        {
          key: "metal",
          label: "Metal",
          image: null,
          heading: "Metal Roofing",
          body: "A durable roofing system suited to both residential and commercial properties.",
        },
        {
          key: "tile",
          label: "Tile",
          image: "/projects/ai-tile-underlayment-install-01.png",
          heading: "Tile Roofing",
          body: "A tile roof combines a durable surface tile with a critical underlayment system beneath it.",
        },
        {
          key: "flat-tpo",
          label: "Flat / TPO",
          image: "/projects/ai-roofer-coating-application-01.png",
          heading: "Flat & TPO Roofing",
          body: "Common on commercial buildings, flat and TPO systems are installed and maintained as part of our commercial roofing work.",
        },
      ],
      ctaLabel: "See Tile Roofing",
      ctaHref: "/roofing/tile-roofing",
    },
    relatedSlugs: ["roof-replacements", "roof-inspections", "specialty-roofing"],
    relatedDescriptions: {
      "specialty-roofing": "Flat roof, TPO and metal roofing systems, plus gutter services.",
    },
    faqs: [
      {
        question: "What roofing materials do you install?",
        answer:
          "We install asphalt shingle, metal, tile, flat and TPO roofing systems, matched to your property and budget.",
      },
      {
        question: "Do you install roofs on both homes and commercial buildings?",
        answer:
          "Yes. We provide roof installation services for both residential and commercial properties.",
      },
      {
        question: "How do I get started?",
        answer:
          "Request an estimate online or call 575-649-2316. We'll evaluate your property and walk you through material options and an expected timeline.",
      },
    ],
  },

  "roof-repairs": {
    slug: "roof-repairs",
    eyebrow: "Roof Repairs · Las Cruces, NM",
    title: "Roof Repair Las Cruces, NM | Leaks, Storm Damage & Wear",
    seoTitle: "Roof Repair & Leak Repair Las Cruces, NM | Gilbert & Sons",
    metaDescription:
      
      "Roof leak repair, storm and hail damage repair in Las Cruces, NM. Licensed and insured since 2010. Free estimates. Call 575-649-2316.",
    intro:
      "Roofs develop problems over time, leaks, storm damage, and general wear and tear. Gilbert & Sons provides roof repair in Las Cruces for shingle, tile, metal and flat roofs, restoring your roof's protection.",
    heroImage: "/projects/aerial-shingle-roof-04.jpg",
    heroImageAlt: "Roofer repairing storm-damaged shingles on a Las Cruces, NM home",
    backgroundPhrase: "STOP THE DAMAGE.",
    sections: [
      {
        heading: "Signs you need roof repair",
        body:
          "Water stains on ceilings, missing or damaged shingles, and visible wear around vents and flashing are common signs it's time for a repair. On flat roofs, ponding water and cracked parapet caps are the usual warning signs.",
      },
      {
        heading: "Roof leak repair, flashing and storm damage: what we fix",
        body: "We repair a range of roofing issues so small problems don't turn into bigger ones.",
        bullets: [
          "Active roof leaks",
          "Storm, wind and hail damage",
          "General wear and tear",
          "Damaged flashing, vents and pipe boots",
          "Flat roof and TPO seam leaks",
          "[Tile roof repair](/roofing/tile-roofing) and slipped tiles",
        ],
      },
      {
        heading: "How we approach repairs",
        body:
          "We inspect the affected area, explain what we find, and repair the problem using materials appropriate to your existing roof system: shingle, tile, metal, flat or TPO. If a repair won't hold, we tell you that too; see [repair vs. replacement](/roofing/roof-replacements) below.",
      },
    ],
    interactive: {
      kind: "options",
      label: "What's Going On?",
      heading: "What are you seeing?",
      options: [
        {
          key: "leak",
          label: "Leak",
          image: "/projects/aerial-shingle-roof-07.jpg",
          heading: "Active Leak",
          imageAlt: "Roof leak repair, water stain on a ceiling in Las Cruces",
          body: "Water stains, dripping, or damp spots usually mean water is getting past the roofing system somewhere.",
          note: "This is educational only — not a diagnosis of your specific roof.",
        },
        {
          key: "storm",
          label: "Storm Damage",
          image: "/projects/aerial-shingle-roof-08.jpg",
          heading: "Storm Damage",
          body: "Wind, hail, and blown debris can damage shingles, flashing, and vents. We can assist with insurance claims where needed.",
        },
        {
          key: "wear",
          label: "Wear",
          image: "/projects/roof-detail-01.jpg",
          heading: "General Wear",
          body: "Granule loss, curling shingles, and general aging are common on older roofs and can lead to leaks over time.",
        },
        {
          key: "flashing",
          label: "Flashing / Edge Issue",
          image: "/projects/roof-detail-02.jpg",
          heading: "Flashing / Edge Issue",
          body: "Flashing and roof edges are common leak points where two roofing surfaces or materials meet.",
        },
      ],
      ctaLabel: "Get an Estimate",
    },
    relatedSlugs: ["roof-inspections", "emergency-roofing", "roof-replacements"],
    relatedDescriptions: {
      "emergency-roofing": "Prompt, responsive emergency roof leak repair and storm damage response.",
    },
    faqs: [
      {
        question: "How do I know if I need a repair or a full replacement?",
        answer:
          "It depends on the extent of the damage and the overall condition of your roof. We'll inspect it and give you an honest recommendation.",
      },
      {
        question: "Do you repair storm damage?",
        answer: "Yes, we repair roofs damaged by storms and can assist with insurance claims where needed.",
      },
      {
        question: "Do you work on both shingle and tile roofs?",
        answer: "Yes, we repair a range of roofing systems including asphalt shingle, metal, tile, flat and TPO roofs.",
      },
    ],
  },

  "roof-replacements": {
    slug: "roof-replacements",
    eyebrow: "Roof Replacements · Las Cruces, NM",
    title: "Roof Replacement in Las Cruces, NM",
    seoTitle: "Roof Replacement Las Cruces, NM | Gilbert & Sons Roofing",
    metaDescription:
      
      "Full roof replacement in Las Cruces, NM for shingle, tile, metal and flat/TPO roofs. Honest repair-vs-replace advice. Free estimate.",
    intro:
      "When a roof reaches the end of its useful life or has suffered damage beyond what repair can address, Gilbert & Sons provides full roof replacement in Las Cruces and [Doña Ana County](/service-areas) to give you a brand-new, long-lasting roof.",
    heroImage: "/projects/roof-replacement.jpg",
    heroImageAlt: "Full roof replacement in progress on a Las Cruces, NM home",
    backgroundPhrase: "READY FOR WHAT'S NEXT.",
    sections: [
      {
        heading: "Roof repair vs. roof replacement",
        body:
          "Not every roof problem calls for a full replacement. We evaluate the condition of your existing roof and recommend roof replacement only when it's the right call for your property, and we show you the repair cost next to the replacement cost so you can decide.",
      },
      {
        heading: "Replacement process",
        body:
          "We evaluate your existing roof, discuss roofing options, provide a written quote, and carry out the replacement with attention to proper tear-off, decking repair, underlayment and installation. Most residential roof replacements take two to four days.",
      },
      {
        heading: "Roof replacement options",
        body: "We offer a range of systems appropriate to your property and preferences, from shingle roof replacement to tile, metal and flat roof replacement.",
        bullets: [
          "Asphalt shingle",
          "Metal roofing",
          "Tile roofing",
          "Flat roofing",
          "[TPO roofing](/roofing/specialty-roofing)",
        ],
      },
    ],
    interactive: {
      kind: "options",
      label: "Repair or Replace?",
      heading: "Not sure which you need?",
      options: [
        {
          key: "active-leak",
          label: "Active Leak",
          image: "/projects/aerial-shingle-roof-05.jpg",
          heading: "Active Leak",
          imageAlt: "Active roof leak, deciding between repair and replacement in Las Cruces",
          body: "An active leak can sometimes be repaired, but it depends on the cause and how widespread the damage is. A [roof inspection](/roofing/roof-inspections) will tell you whether a repair or a full roof replacement makes more sense.",
        },
        {
          key: "older-roof",
          label: "Older Roof",
          image: "/projects/aerial-shingle-roof-06.jpg",
          heading: "Older Roof",
          body: "As a roof approaches the end of its useful life, repairs become less cost-effective compared to replacement.",
          note: "This may be worth having professionally inspected.",
        },
        {
          key: "widespread",
          label: "Widespread Damage",
          image: "/projects/aerial-shingle-roof-07.jpg",
          heading: "Widespread Damage",
          body: "When damage is spread across most of the roof, a full replacement is often the more practical solution.",
          note: "This may be worth having professionally inspected.",
        },
        {
          key: "isolated",
          label: "Isolated Damage",
          image: "/projects/roof-detail-01.jpg",
          heading: "Isolated Damage",
          body: "Damage limited to one area of the roof can often be addressed with a targeted [roof repair](/roofing/roof-repairs).",
          note: "This may be worth having professionally inspected.",
        },
      ],
      ctaLabel: "Request a Roof Inspection",
      ctaHref: "/roofing/roof-inspections",
    },
    relatedSlugs: ["roof-installations", "roof-inspections", "roof-repairs"],
    faqs: [
      {
        question: "How do you decide if a roof needs to be replaced?",
        answer:
          "We inspect the roof's condition, age and extent of damage, and give you a straightforward recommendation on whether repair or replacement makes sense.",
      },
      {
        question: "Can you help with insurance claims for a replacement?",
        answer: "Yes, we can assist with insurance claims when storm or other covered damage is involved.",
      },
      {
        question: "Do you work with a timeline, like a home sale closing date?",
        answer:
          "We understand replacements are sometimes tied to a deadline like a closing date, and we'll work with you to plan accordingly.",
      },
    ],
  },

  "roof-inspections": {
    slug: "roof-inspections",
    eyebrow: "Roof Inspections · Las Cruces, NM",
    title: "Professional Roof Inspection in Las Cruces, NM",
    seoTitle: "Roof Inspection Las Cruces, NM | Gilbert & Sons Roofing",
    metaDescription:
      
      "Roof inspections in Las Cruces, NM for homeowners, buyers, sellers and insurance claims. Written report with photos. Call 575-649-2316.",
    intro:
      "Thorough roof inspections in Las Cruces help identify potential issues early, before they turn into larger and more costly repairs. Every inspection ends with a written report and photos.",
    heroImage: "/projects/roof-inspection.jpg",
    heroImageAlt: "Roof inspector checking flashing on a Las Cruces, NM home",
    backgroundPhrase: "KNOW BEFORE IT LEAKS.",
    sections: [
      {
        heading: "Why roof inspections matter",
        body:
          "Regular roof inspections catch small problems, a lifted shingle, a failing seal, early water intrusion, hail damage you can't see from the ground, while they're still simple to fix.",
      },
      {
        heading: "What we look for",
        body:
          "We check the roofing surface, flashing, vents, drainage, parapets on flat roofs, and visible signs of wear or water intrusion, and explain what we find in plain terms.",
      },
      {
        heading: "When to schedule a roof inspection",
        body:
          "Common times to schedule an inspection include after a monsoon or hail storm, before buying or selling a property (real estate roof inspection), when filing an [insurance claim](/roofing/emergency-roofing), or as part of regular upkeep. A pre-monsoon roof inspection each spring is the single best time for [Las Cruces homes](/service-areas/las-cruces).",
      },
      {
        heading: "What happens next",
        body:
          "If we find issues, we'll walk you through your options, [roof repair](/roofing/roof-repairs), [maintenance](/roofing/roof-maintenance), or [replacement](/roofing/roof-replacements), with no pressure either way, and put it all in a written roof inspection report.",
      },
    ],
    interactive: {
      kind: "hotspots",
      label: "What We Check",
      heading: "Roof inspection checklist: what we look at.",
    },
    relatedSlugs: ["roof-repairs", "roof-maintenance", "roof-replacements"],
    faqs: [
      {
        question: "How long does a roof inspection take?",
        answer:
          "It depends on the size and accessibility of the roof. We'll give you a time estimate when you schedule.",
      },
      {
        question: "Do I need an inspection if I don't see any problems?",
        answer:
          "Many roofing issues aren't visible from the ground. A periodic inspection can catch problems early, especially after storms.",
      },
      {
        question: "Will you give me a written summary of what you find?",
        answer: "Yes, we'll walk you through our findings and next steps clearly.",
      },
    ],
  },

  "roof-maintenance": {
    slug: "roof-maintenance",
    eyebrow: "Roof Maintenance · Las Cruces, NM",
    title: "Roof Maintenance Services in Las Cruces, NM",
    seoTitle: "Roof Maintenance Las Cruces, NM | Gilbert & Sons Roofing",
    metaDescription:
      
      "Preventive roof maintenance in Las Cruces, NM for shingle, tile, metal and flat/TPO roofs. Annual tune-ups and plans. Free estimates.",
    intro:
      "Gilbert & Sons offers customized roof maintenance plans to suit your property's needs, helping residential and commercial roofing systems in Las Cruces continue performing properly over time.",
    heroImage: "/projects/roof-maintenance.jpg",
    heroImageAlt: "Roof maintenance technician inspecting flashing on a Las Cruces, NM home",
    backgroundPhrase: "STAY AHEAD OF IT.",
    sections: [
      {
        heading: "Preventive roof maintenance",
        body:
          "Routine preventive roof maintenance addresses small wear points before they become leaks or larger repairs, extending the life of your roof.",
      },
      {
        heading: "Annual roof inspection and tune-up",
        body:
          "We check the roofing surface, flashing, seals and drainage as part of a roof maintenance visit, and address issues we find during the same tune-up.",
      },
      {
        heading: "Residential & commercial roof maintenance plans",
        body:
          "Maintenance needs differ between a residential shingle roof and a commercial flat or TPO roof, we tailor roof maintenance programs to the property.",
      },
    ],
    interactive: {
      kind: "options",
      label: "Residential or Commercial?",
      heading: "Roof maintenance built around your property.",
      options: [
        {
          key: "residential",
          label: "Residential",
          image: "/projects/aerial-shingle-roof-04.jpg",
          heading: "Residential Maintenance",
          imageAlt: "Residential roof maintenance on a shingle roof in Las Cruces",
          body: "Periodic residential roof maintenance checks on shingle, tile, or metal roofing to catch small issues, loose flashing, worn sealant, clogged gutters, before they become leaks.",
        },
        {
          key: "commercial",
          label: "Commercial",
          image: "/projects/ai-roofer-coating-application-01.png",
          heading: "Commercial Maintenance",
          body: "Flat and TPO commercial roofs benefit from regular drainage and seam checks to avoid costly water intrusion.",
        },
      ],
      ctaLabel: "Get an Estimate",
    },
    relatedSlugs: ["roof-inspections", "roof-repairs", "emergency-roofing"],
    faqs: [
      {
        question: "How often should a roof be maintained?",
        answer:
          "It depends on your roofing system, its age and local conditions. We'll recommend a schedule appropriate to your property.",
      },
      {
        question: "Is maintenance available for commercial roofs?",
        answer: "Yes, we provide maintenance plans for both residential and commercial properties.",
      },
      {
        question: "What's included in a maintenance visit?",
        answer:
          "A condition check of the roofing surface, flashing and drainage, with any needed minor repairs addressed or scoped.",
      },
    ],
  },

  "emergency-roofing": {
    slug: "emergency-roofing",
    eyebrow: "Emergency Roofing · Las Cruces, NM",
    title: "Emergency Roof Repair & Storm Damage Repair in Las Cruces, NM",
    seoTitle: "Emergency Roof Repair Las Cruces, NM | Gilbert & Sons",
    metaDescription:
      
      "Emergency roof repair in Las Cruces, NM for active leaks, monsoon, wind and hail damage. Fast local response. Call 575-649-2316 now.",
    intro:
      "Gilbert & Sons provides prompt and responsive emergency roofing services in Las Cruces when your property has urgent roof damage from a leak, storm, wind or hail.",
    heroImage: "/projects/aerial-shingle-roof-05.jpg",
    heroImageAlt: "Emergency roof repair after storm damage in Las Cruces, NM",
    backgroundPhrase: "RESPOND. REPAIR. PROTECT.",
    sections: [
      {
        heading: "Active roof leak or urgent roofing problem?",
        body:
          "If your roof is actively leaking or damaged, call 575-649-2316. Speaking with us directly is the fastest way to get emergency roof repair started.",
      },
      {
        heading: "What we handle",
        body:
          "Active leaks, storm damage, wind and hail damage, emergency roof tarping, and other urgent roofing issues that put your property at risk.",
      },
      {
        heading: "What to do while you wait",
        body:
          "If it's safe to do so, move belongings away from active leaks and note visible damage — this helps us assess the situation quickly when we arrive.",
      },
    ],
    relatedSlugs: ["roof-repairs", "roof-inspections", "roof-replacements"],
    relatedDescriptions: {
      "roof-repairs": "Roof leak repair, storm damage and general wear and tear.",
    },
    faqs: [
      {
        question: "What counts as a roofing emergency?",
        answer:
          "Active leaks, storm damage, or any situation where your roof is no longer protecting your property.",
      },
      {
        question: "Should I call or fill out the form?",
        answer: "For an urgent problem, call 575-649-2316 directly for the fastest response.",
      },
      {
        question: "Do you help with insurance after storm damage?",
        answer: "Yes, we can assist with insurance claims related to storm damage.",
      },
    ],
  },

  "specialty-roofing": {
    slug: "specialty-roofing",
    eyebrow: "Specialty Roofing · Las Cruces, NM",
    title: "Flat Roofing, TPO & Metal Roofing in Las Cruces, NM",
    seoTitle: "Flat, TPO & Metal Roofing Las Cruces, NM | Gilbert & Sons",
    metaDescription:
      
      "Flat roof, TPO, metal and foam roofing in Las Cruces, NM. Cool-roof options built for high-desert sun and monsoon rain. Free estimates.",
    intro:
      "Beyond standard shingle installation and repair, Gilbert & Sons installs and repairs flat roofs, TPO roofing, metal roofing and foam roofing in Las Cruces, along with related exterior services.",
    heroImage: "/projects/aerial-roof-overview-01.jpg",
    heroImageAlt: "White TPO flat roof on a commercial building in Las Cruces, NM",
    backgroundPhrase: "SYSTEMS FOR EVERY ROOF.",
    sections: [
      {
        heading: "Flat, TPO and metal roofing systems",
        body: "We work across multiple roofing systems, each suited to different property types and budgets, from low-slope commercial TPO to Pro-Panel metal on homes.",
        bullets: [
          "Flat Roofing",
          "TPO Roofing",
          "Metal Roofing (Pro-Panel, R-panel, standing seam)",
          "Spray Foam Roofing",
          "Modified Bitumen",
          "[Tile Roofing](/roofing/tile-roofing)",
          "Asphalt Shingle Roofing",
        ],
      },
      {
        heading: "Additional roofing services",
        body: "Supporting services that protect your roof and property beyond the roofing system itself, including gutter installation in Las Cruces and roof leak detection.",
        bullets: [
          "Storm Damage Repair",
          "Insurance Claim Assistance",
          "Gutter Installation",
          "Gutter Maintenance",
          "Leak Detection",
          "Leak Repair",
        ],
      },
    ],
    interactive: {
      kind: "options",
      label: "Additional Services",
      heading: "Beyond the roofing system.",
      options: [
        {
          key: "storm",
          label: "Storm Damage",
          image: "/projects/aerial-shingle-roof-05.jpg",
          heading: "Storm Damage Repair",
          imageAlt: "Storm damage repair on a metal roof in Las Cruces",
          body: "[Wind and hail damage](/roofing/emergency-roofing) repaired on flat, metal and TPO roofs, with insurance claim assistance where needed.",
        },
        {
          key: "insurance",
          label: "Insurance Claims",
          image: "/projects/aerial-shingle-roof-01.jpg",
          heading: "Insurance Claim Assistance",
          body: "We help document and support insurance claims tied to storm or covered roof damage.",
        },
        {
          key: "gutters",
          label: "Gutters",
          image: "/projects/ai-roofer-gutter-inspection-01.png",
          heading: "Gutter Installation & Maintenance",
          body: "Gutter installation and ongoing maintenance to keep water moving away from your property.",
        },
        {
          key: "leaks",
          label: "Leak Detection",
          image: "/projects/roof-detail-02.jpg",
          heading: "Leak Detection & Repair",
          body: "Finding the actual source of a leak — not just the symptom — and repairing it.",
        },
      ],
      ctaLabel: "Get an Estimate",
    },
    relatedSlugs: ["tile-roofing", "silicone-roof-restoration", "roof-installations"],
    faqs: [
      {
        question: "Do you install metal and TPO roofing?",
        answer: "Yes, alongside asphalt shingle, tile and flat roofing systems.",
      },
      {
        question: "Do you help with insurance claims for storm damage?",
        answer: "Yes, we assist with insurance claim documentation and repair for storm-damaged roofs.",
      },
      {
        question: "Do you install and maintain gutters?",
        answer: "Yes, gutter installation and maintenance are part of our specialty roofing services.",
      },
    ],
  },

  "tile-roofing": {
    slug: "tile-roofing",
    eyebrow: "Tile Roofing · Las Cruces, NM",
    title: "Tile Roofing, Tile Roof Repair & Underlayment Replacement in Las Cruces, NM",
    seoTitle: "Tile Roof Repair & Underlayment Las Cruces NM | Gilbert & Sons",
    metaDescription:
      
      "Tile roof repair, installation and underlayment replacement in Las Cruces, NM. Keep your tile, replace the underlayment. Free estimates.",
    intro:
      "Tile roofing combines a durable surface tile with a critical underlayment system beneath it. Gilbert & Sons installs new tile roofs, repairs tile roofs, and replaces tile roof underlayment on existing roofs across [Las Cruces and Doña Ana County](/service-areas).",
    heroImage: "/projects/aerial-shingle-roof-07.jpg",
    heroImageAlt: "Clay tile roof with new underlayment being relaid in Las Cruces, NM",
    backgroundPhrase: "BUILT IN LAYERS.",
    sections: [
      {
        heading: "Tile surface",
        body:
          "The clay or concrete tile surface gives a tile roof its appearance and helps shed water off the roofing system. In the Las Cruces sun the tile itself often outlasts the house.",
      },
      {
        heading: "Underlayment",
        body:
          "The waterproof barrier beneath the tile is critically important to the roofing system's performance. We use synthetic underlayment, including FT Synthetics, chosen for its positive reviews and limited lifetime warranty protection, offering a longer warranty of up to 50+ years compared to older felt underlayment, which typically fails after 20 to 30 years of desert heat.",
      },
      {
        heading: "Tile installation",
        body: "We install new tile roofing systems, including clay tile and concrete tile, with Spanish tile as an architectural option.",
      },
      {
        heading: "Tile underlayment replacement",
        body:
          "When the tile itself is in good condition but the underlayment beneath it has failed, we lift and relay the tile and replace the underlayment without a [full tile roof replacement](/roofing/roof-replacements). This is the most common tile roof repair we do in Las Cruces.",
      },
    ],
    interactive: {
      kind: "layers",
      label: "Why Underlayment Matters",
      heading: "Why tile roofs fail in the desert, and it's rarely the tile.",
    },
    relatedSlugs: ["roof-installations", "roof-repairs", "roof-inspections"],
    relatedDescriptions: {
      "roof-repairs":
        "Roof repair for leaks, storm damage, broken or slipped tiles and general wear and tear.",
    },
    faqs: [
      {
        question: "Can you replace underlayment without replacing the tile?",
        answer:
          "Yes, when the tile is in good condition, we can carefully remove and reinstall it while replacing the underlayment beneath.",
      },
      {
        question: "What underlayment do you use?",
        answer:
          "We use synthetic underlayment such as FT Synthetics, which offers a longer warranty than traditional felt underlayment.",
      },
      {
        question: "Do you install clay tile roofing?",
        answer: "Yes, clay tile is available as an architectural roofing option.",
      },
    ],
  },

  "silicone-roof-restoration": {
    slug: "silicone-roof-restoration",
    eyebrow: "Silicone Roof Restoration (SRM) · Commercial",
    title: "Silicone Roof Coating & Commercial Roof Restoration in Las Cruces, NM",
    seoTitle: "Silicone Roof Coating Las Cruces, NM | Gilbert & Sons",
    metaDescription:
      
      "Silicone roof coatings in Las Cruces, NM restore flat, TPO and metal roofs for a fraction of replacement cost. Free commercial assessment.",
    intro:
      "Silicone Roof Maintenance (SRM) uses silicone and elastomeric roof coatings to renew an existing commercial roof in Las Cruces, flat, TPO, metal or foam, often as an alternative to a full tear-off and replacement.",
    heroImage: "/projects/aerial-shingle-roof-08.jpg",
    heroImageAlt: "White silicone roof coating on a commercial flat roof in Las Cruces, NM",
    backgroundPhrase: "RESTORE. PROTECT. EXTEND.",
    sections: [
      {
        heading: "How it works",
        body:
          "The existing roof is cleaned and prepared, seams and penetrations are repaired, then the roof is coated with a silicone or elastomeric roof coating that restores waterproofing and extends the roof's service life by 10 to 20 years.",
      },
      {
        heading: "Saves money",
        body:
          "By eliminating the need for a full tear-off and replacement, commercial roof restoration with silicone can reduce project cost compared to a complete new roof system, typically a fraction of the roof coating vs. replacement price.",
      },
      {
        heading: "Less disruption, shorter timeline",
        body:
          "SRM application causes significantly less disruption to a commercial property, and project duration can be up to 30% shorter than a full roof replacement.",
      },
      {
        heading: "Cool roof energy performance",
        body:
          "A white reflective silicone roof coating can reduce building energy consumption by 15% to 35% by reflecting solar heat away from the building, a real difference under the Las Cruces sun.",
      },
      {
        heading: "Roofing code consideration",
        body:
          "SRM is classified as maintenance rather than a new roof system, so it doesn't count toward the two-roof limit under U.S. building code in most jurisdictions.",
      },
    ],
    interactive: {
      kind: "options",
      label: "The Process",
      heading: "How silicone roof restoration comes together.",
      options: [
        {
          key: "inspection",
          label: "01 Inspection",
          image: "/projects/ai-roofer-gutter-inspection-01.png",
          heading: "Inspection",
          imageAlt: "Commercial roof inspection before silicone coating, Las Cruces",
          body: "We evaluate the existing roof's condition, membrane, seams, drainage, moisture in the insulation, to confirm it's a good candidate for roof coating rather than replacement.",
        },
        {
          key: "preparation",
          label: "02 Preparation",
          image: "/projects/aerial-roof-overview-01.jpg",
          heading: "Preparation",
          body: "The roof is cleaned and prepared so the coating can properly adhere.",
        },
        {
          key: "repairs",
          label: "03 Repairs",
          image: "/projects/ai-roofer-flashing-detail-01.png",
          heading: "Repairs",
          body: "Any existing damage is repaired before the coating is applied.",
        },
        {
          key: "coating",
          label: "04 Coating",
          image: "/projects/ai-roofer-coating-application-01.png",
          heading: "Restoring the Existing Roof Surface",
          body: "After inspection, preparation and necessary repairs, silicone or elastomeric coating is applied across the roofing surface to create a renewed protective layer.",
        },
        {
          key: "finished",
          label: "05 Finished Surface",
          image: "/projects/aerial-shingle-roof-04.jpg",
          heading: "Finished Surface",
          body: "A renewed, reflective commercial roofing surface — without a full tear-off and replacement.",
        },
      ],
      ctaLabel: "Get an Estimate",
    },
    relatedSlugs: ["specialty-roofing", "roof-inspections", "roof-maintenance"],
    relatedDescriptions: {
      "specialty-roofing": "Flat roof, TPO and metal roofing systems, plus gutter services.",
    },
    faqs: [
      {
        question: "Is silicone restoration only for commercial roofs?",
        answer: "It's primarily used on commercial roofing systems such as flat and TPO roofs.",
      },
      {
        question: "How much shorter is the project compared to a full replacement?",
        answer:
          "Project duration can be up to 30% shorter than a full roof replacement, with significantly less disruption to the property.",
      },
      {
        question: "Does it actually reduce energy costs?",
        answer:
          "A white silicone coating reflects solar heat, which can reduce building energy consumption by 15% to 35%.",
      },
    ],
  },
};
