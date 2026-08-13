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
  metaDescription: string;
  intro: string;
  heroImage: string;
  backgroundPhrase: string;
  sections: ContentSection[];
  interactive?: InteractiveBlock;
  relatedSlugs: string[];
  faqs: FAQItem[];
};

export const roofingServiceContent: Record<string, RoofingServicePage> = {
  "roof-installations": {
    slug: "roof-installations",
    eyebrow: "Roof Installations · Las Cruces, NM",
    title: "Professional roof installation in Las Cruces, NM",
    metaDescription:
      "Gilbert & Sons installs residential and commercial roofs in Las Cruces, NM, matching materials and technique to the property and its climate.",
    intro:
      "Gilbert & Sons installs roofs for residential and commercial properties across New Mexico, choosing materials and installation methods that fit the property and hold up to the local climate.",
    heroImage: "/projects/roof-installation.jpg",
    backgroundPhrase: "BUILT TO LAST.",
    sections: [
      {
        heading: "What we install",
        body:
          "We install roofing systems suited to Las Cruces' climate and to the structure of your property, from standard asphalt shingle roofs to metal, tile, flat and TPO systems.",
        bullets: ["Asphalt shingle", "Metal roofing", "Tile roofing", "Flat roofing", "TPO roofing"],
      },
      {
        heading: "Residential & commercial",
        body:
          "Whether it's a new home, an addition, or a commercial building, we install roofing systems appropriate to the property and the way it will be used.",
      },
      {
        heading: "Installation process",
        body:
          "We start with an on-site evaluation and a clear quote, then install using quality materials and proper technique, keeping you informed as work progresses.",
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
          body: "The most common residential roofing system — a reliable, cost-effective option we install regularly across Las Cruces.",
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
          "Request a free estimate online or call 575-649-2316. We'll evaluate your property and walk you through material options and an expected timeline.",
      },
    ],
  },

  "roof-repairs": {
    slug: "roof-repairs",
    eyebrow: "Roof Repairs · Las Cruces, NM",
    title: "Roof repair for leaks, storm damage and wear in Las Cruces, NM",
    metaDescription:
      "Roof repair services from Gilbert & Sons in Las Cruces, NM — leaks, storm damage and general roof wear repaired by a licensed, insured and bonded contractor.",
    intro:
      "Roofs develop problems over time — leaks, storm damage, and general wear and tear. Gilbert & Sons repairs these issues to restore your roof's protection.",
    heroImage: "/projects/aerial-shingle-roof-04.jpg",
    backgroundPhrase: "STOP THE DAMAGE.",
    sections: [
      {
        heading: "Signs your roof may need repair",
        body:
          "Water stains on ceilings, missing or damaged shingles, and visible wear around vents and flashing are common signs it's time for a repair.",
      },
      {
        heading: "Common problems we address",
        body: "We repair a range of roofing issues so small problems don't turn into bigger ones.",
        bullets: ["Active leaks", "Storm damage", "General wear and tear", "Damaged flashing and vents"],
      },
      {
        heading: "How we approach repairs",
        body:
          "We inspect the affected area, explain what we find, and repair the problem using materials appropriate to your existing roof system.",
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
      ctaLabel: "Free Estimate",
    },
    relatedSlugs: ["roof-inspections", "emergency-roofing", "roof-replacements"],
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
    title: "Full roof replacement in Las Cruces, NM",
    metaDescription:
      "Gilbert & Sons provides full roof replacement services in Las Cruces, NM when repair is no longer the right solution for your property.",
    intro:
      "When a roof reaches the end of its useful life or has suffered damage beyond what repair can address, Gilbert & Sons provides full roof replacement to give you a brand-new, long-lasting roof.",
    heroImage: "/projects/roof-replacement.jpg",
    backgroundPhrase: "READY FOR WHAT'S NEXT.",
    sections: [
      {
        heading: "Repair vs. replacement",
        body:
          "Not every roof problem calls for a full replacement. We evaluate the condition of your existing roof and recommend replacement only when it's the right call for your property.",
      },
      {
        heading: "Replacement process",
        body:
          "We evaluate your existing roof, discuss roofing options, provide a quote, and carry out the replacement with attention to proper tear-off, underlayment and installation.",
      },
      {
        heading: "Roofing options",
        body: "We offer a range of systems appropriate to your property and preferences.",
        bullets: ["Asphalt shingle", "Metal roofing", "Tile roofing", "Flat roofing", "TPO roofing"],
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
          body: "An active leak can sometimes be repaired, but it depends on the cause and how widespread the damage is.",
          note: "This may be worth having professionally inspected.",
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
          body: "Damage limited to one area of the roof can often be addressed with a targeted repair.",
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
    title: "Roof inspections in Las Cruces, NM",
    metaDescription:
      "Thorough roof inspections from Gilbert & Sons help identify potential roofing issues in Las Cruces, NM before they become larger repairs.",
    intro:
      "Thorough roof inspections help identify potential issues early, before they turn into larger and more costly repairs.",
    heroImage: "/projects/roof-inspection.jpg",
    backgroundPhrase: "KNOW BEFORE IT LEAKS.",
    sections: [
      {
        heading: "Why roof inspections matter",
        body:
          "Regular inspections catch small problems — a lifted shingle, a failing seal, early water intrusion — while they're still simple to fix.",
      },
      {
        heading: "What we look for",
        body:
          "We check the roofing surface, flashing, vents, and visible signs of wear or water intrusion, and explain what we find in plain terms.",
      },
      {
        heading: "When to consider an inspection",
        body:
          "Common times to schedule an inspection include after a storm, before buying or selling a property, or as part of regular upkeep.",
      },
      {
        heading: "What happens next",
        body:
          "If we find issues, we'll walk you through your options — repair, maintenance, or replacement — with no pressure either way.",
      },
    ],
    interactive: {
      kind: "hotspots",
      label: "What We Check",
      heading: "What we look at during an inspection.",
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
    title: "Roof maintenance plans in Las Cruces, NM",
    metaDescription:
      "Customized roof maintenance plans from Gilbert & Sons keep residential and commercial roofing systems in Las Cruces, NM performing properly.",
    intro:
      "Gilbert & Sons offers customized maintenance plans to suit your property's needs, helping roofing systems continue performing properly over time.",
    heroImage: "/projects/roof-maintenance.jpg",
    backgroundPhrase: "STAY AHEAD OF IT.",
    sections: [
      {
        heading: "Preventive maintenance",
        body:
          "Routine maintenance addresses small wear points before they become leaks or larger repairs, extending the useful life of your roof.",
      },
      {
        heading: "Roof condition checks",
        body:
          "We check the roofing surface, flashing, seals and drainage as part of a maintenance visit, and address issues we find.",
      },
      {
        heading: "Residential & commercial plans",
        body:
          "Maintenance needs differ between a residential shingle roof and a commercial flat or TPO system — we tailor plans to the property.",
      },
    ],
    interactive: {
      kind: "options",
      label: "Residential or Commercial?",
      heading: "Maintenance built around your property.",
      options: [
        {
          key: "residential",
          label: "Residential",
          image: "/projects/aerial-shingle-roof-04.jpg",
          heading: "Residential Maintenance",
          body: "Periodic checks on shingle, tile, or metal roofing to catch small issues — loose flashing, worn sealant — before they become leaks.",
        },
        {
          key: "commercial",
          label: "Commercial",
          image: "/projects/ai-roofer-coating-application-01.png",
          heading: "Commercial Maintenance",
          body: "Flat and TPO commercial roofs benefit from regular drainage and seam checks to avoid costly water intrusion.",
        },
      ],
      ctaLabel: "Free Estimate",
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
    title: "Emergency roofing services in Las Cruces, NM",
    metaDescription:
      "Prompt, responsive emergency roofing services from Gilbert & Sons for urgent roof damage in Las Cruces, NM. Call 575-649-2316.",
    intro:
      "Gilbert & Sons provides prompt and responsive emergency roofing services when your property has urgent roof damage.",
    heroImage: "/projects/aerial-shingle-roof-05.jpg",
    backgroundPhrase: "RESPOND. REPAIR. PROTECT.",
    sections: [
      {
        heading: "Urgent roofing problem?",
        body:
          "If your roof is actively leaking or damaged, call 575-649-2316. Speaking with us directly is the fastest way to get help started.",
      },
      {
        heading: "What we handle",
        body:
          "Active leaks, storm damage, and other urgent roofing issues that put your property at risk.",
      },
      {
        heading: "What to do while you wait",
        body:
          "If it's safe to do so, move belongings away from active leaks and note visible damage — this helps us assess the situation quickly when we arrive.",
      },
    ],
    relatedSlugs: ["roof-repairs", "roof-inspections", "roof-replacements"],
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
    title: "Specialty roofing systems and services in Las Cruces, NM",
    metaDescription:
      "Asphalt shingle, metal, tile, flat and TPO roofing, plus storm damage repair, insurance claim assistance, gutters and leak detection from Gilbert & Sons.",
    intro:
      "Beyond standard installation and repair, Gilbert & Sons provides a range of specialty roofing systems and related exterior services.",
    heroImage: "/projects/aerial-roof-overview-01.jpg",
    backgroundPhrase: "SYSTEMS FOR EVERY ROOF.",
    sections: [
      {
        heading: "Roofing systems",
        body: "We work across multiple roofing systems, each suited to different property types and budgets.",
        bullets: ["Asphalt Shingle Roofing", "Metal Roofing", "Tile Roofing", "Flat Roofing", "TPO Roofing"],
      },
      {
        heading: "Additional roofing services",
        body: "Supporting services that protect your roof and property beyond the roofing system itself.",
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
          body: "Wind and hail damage repaired, with insurance claim assistance where needed.",
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
      ctaLabel: "Free Estimate",
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
    title: "Tile roofing in Las Cruces, NM",
    metaDescription:
      "Tile roof installation and underlayment replacement from Gilbert & Sons in Las Cruces, NM, including clay tile options.",
    intro:
      "Tile roofing combines a durable surface tile with a critical underlayment system beneath it. Gilbert & Sons installs new tile roofs and replaces underlayment on existing tile roofs.",
    heroImage: "/projects/aerial-shingle-roof-07.jpg",
    backgroundPhrase: "BUILT IN LAYERS.",
    sections: [
      {
        heading: "Tile surface",
        body:
          "The tile surface gives a tile roof its appearance and helps shed water off the roofing system.",
      },
      {
        heading: "Underlayment",
        body:
          "The waterproof barrier beneath the tile is critically important to the roofing system's performance. We use synthetic underlayment, including FT Synthetics, chosen for its positive reviews and limited lifetime warranty protection — offering a longer warranty of up to 50+ years compared to older felt underlayment.",
      },
      {
        heading: "Tile installation",
        body: "We install new tile roofing systems, including clay tile as an architectural option.",
      },
      {
        heading: "Underlayment replacement",
        body:
          "When the tile itself is in good condition but the underlayment beneath it has failed, we can replace the underlayment without a full tile replacement.",
      },
    ],
    interactive: {
      kind: "layers",
      label: "Why Underlayment Matters",
      heading: "What sits beneath the tile matters.",
    },
    relatedSlugs: ["roof-installations", "roof-repairs", "roof-inspections"],
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
    title: "Silicone roof restoration for commercial roofs in Las Cruces, NM",
    metaDescription:
      "Silicone and elastomeric roof coating restoration for commercial roofs from Gilbert & Sons in Las Cruces, NM — a lower-disruption alternative to full tear-off.",
    intro:
      "Silicone Roof Maintenance (SRM) uses silicone and elastomeric coatings to renew an existing commercial roof, often as an alternative to a full tear-off and replacement.",
    heroImage: "/projects/aerial-shingle-roof-08.jpg",
    backgroundPhrase: "RESTORE. PROTECT. EXTEND.",
    sections: [
      {
        heading: "How it works",
        body:
          "The existing roof is cleaned and prepared, then coated with a silicone or elastomeric layer that restores waterproofing and extends the roof's service life.",
      },
      {
        heading: "Saves money",
        body:
          "By eliminating the need for a full tear-off and replacement, silicone restoration can reduce project cost compared to a complete new roof system.",
      },
      {
        heading: "Less disruption, shorter timeline",
        body:
          "SRM application causes significantly less disruption to a commercial property, and project duration can be up to 30% shorter than a full roof replacement.",
      },
      {
        heading: "Energy performance",
        body:
          "A white silicone roof coating can reduce building energy consumption by 15% to 35% by reflecting solar heat away from the building.",
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
      heading: "How restoration comes together.",
      options: [
        {
          key: "inspection",
          label: "01 Inspection",
          image: "/projects/ai-roofer-gutter-inspection-01.png",
          heading: "Inspection",
          body: "We evaluate the existing roof's condition to confirm it's a good candidate for restoration.",
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
      ctaLabel: "Free Estimate",
    },
    relatedSlugs: ["specialty-roofing", "roof-inspections", "roof-maintenance"],
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
