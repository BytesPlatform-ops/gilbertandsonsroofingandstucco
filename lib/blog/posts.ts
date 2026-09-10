import type { BlogPost } from "@/lib/blog/types";

/**
 * Central article source. Adding an entry here is all that is required — the
 * /blog listing, category filters, article route, related articles, metadata,
 * JSON-LD and the sitemap all read from this array.
 *
 * Article bodies are typed content blocks rather than raw HTML. Inside any
 * `text` or list item, `[label](/roofing/roof-repairs)` becomes an internal
 * link, `[label](https://…)` an external one, and `**bold**` is emphasised.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-eifs",
    title:
      "What Is EIFS? Synthetic Stucco Explained for New Mexico Homes and Buildings",
    excerpt:
      "EIFS looks like stucco and is often sold as stucco, but it is a layered, insulated wall system that is built and repaired very differently. Here is how to tell what is on your walls.",
    metaTitle: "What Is EIFS? Synthetic Stucco Explained for NM Homes",
    metaDescription:
      "What is EIFS? Learn how synthetic stucco layers work, how it differs from traditional stucco, and when it fits New Mexico properties.",
    category: "Stucco",
    tags: ["eifs", "stucco", "exterior", "commercial", "insulation"],
    publishedAt: "2026-09-10",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/what-is-eifs/modern-stucco-eifs-exterior.webp",
    featuredImageAlt:
      "Modern flat-roofed building with a smooth, light-coloured stucco-style exterior finish and deep overhangs",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/stucco",
      "/roofing/roof-inspections",
      "/roofing/roof-repairs",
    ],
    keywords: [
      "what is eifs",
      "synthetic stucco",
      "eifs vs stucco",
      "eifs contractor las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Drive past any newer shopping center, hotel or office building in Las Cruces and there's a good chance you're looking at EIFS. It looks like stucco. It's often sold as stucco. But it isn't stucco, and the difference matters a lot when it's time to repair it, insure it, or figure out why a wall is holding moisture.",
      },
      {
        type: "paragraph",
        text:
          "So what is EIFS, exactly? It stands for Exterior Insulation and Finish System, and it's a multi-layer wall cladding that wraps a building in continuous foam insulation before finishing it with a stucco-like coat. Property owners in southern New Mexico run into it constantly, usually without knowing what it is until something goes wrong or a home inspector flags it.",
      },
      {
        type: "paragraph",
        text:
          "This guide walks through what EIFS is made of, how it compares with traditional three-coat stucco, why it took off in commercial construction, the moisture concerns that gave it a bad reputation in the 1990s, and how to tell whether your own building has it. By the end, you'll know what you're looking at and what to ask a contractor.",
      },
      {
        type: "heading",
        level: 2,
        text: "What Is EIFS and How Is It Different From Traditional Stucco?",
      },
      {
        type: "paragraph",
        text:
          "The short answer to \"what is EIFS\" is this: a lightweight, non-load-bearing cladding system made up of insulation board, a reinforced base coat and a textured finish coat, all applied over the exterior sheathing of a wall. Sika, one of the major manufacturers, describes it as a system that combines continuous insulation, an air and water barrier, and a decorative finish in one assembly.",
      },
      {
        type: "paragraph",
        text:
          "Traditional stucco is a completely different animal. It's a cement-based plaster, usually Portland cement mixed with sand, lime and water, troweled over metal lath in three coats: scratch, brown and finish. It cures rock hard, it's heavy, and it has almost no insulation value on its own. The Sto Corporation puts it plainly: EIFS provides more insulation and moisture protection than traditional stucco because of how the layers are built up.",
      },
      {
        type: "paragraph",
        text:
          "Here's the thing that trips people up. Both finishes can look identical from the street. Same textures, same colors, same Southwest aesthetic. The difference is entirely underneath. Tap a traditional stucco wall and it sounds and feels like concrete. Tap an EIFS wall and it sounds hollow, because there's an inch or more of foam behind that thin finish.",
      },
      {
        type: "heading",
        level: 3,
        text: "Why the \"Synthetic Stucco\" Name Causes Problems",
      },
      {
        type: "paragraph",
        text:
          "EIFS picked up the nickname \"synthetic stucco\" because the finish coat is acrylic-based rather than cement-based. That nickname has caused real confusion. Homeowners assume a stucco contractor can patch it the same way. Insurance adjusters lump it in with stucco. Neither is accurate. EIFS repair requires matching the insulation, mesh and base coat before the finish goes on, or the patch will fail.",
      },
      { type: "heading", level: 2, text: "The Layers of an EIFS System" },
      {
        type: "paragraph",
        text:
          "Understanding what EIFS is really comes down to understanding its layers. A modern system has five or six, depending on the manufacturer, and every one of them does a specific job.",
      },
      { type: "heading", level: 3, text: "Water-Resistive Barrier and Drainage Plane" },
      {
        type: "paragraph",
        text:
          "This is the layer that separates good EIFS from the problem installations of the past. A water-resistive barrier goes over the sheathing first, and a drainage plane sits between that barrier and the foam so any water that gets behind the finish can run down and out. According to Sto, the International Building Code has required this barrier on EIFS since 2009. Older \"barrier EIFS\" skipped it entirely, which is where most of the horror stories come from.",
      },
      { type: "heading", level: 3, text: "Insulation Board" },
      {
        type: "paragraph",
        text:
          "Next comes the foam. Most systems use expanded polystyrene (EPS), though some use extruded polystyrene or polyisocyanurate. It's attached with adhesive, mechanical fasteners, or both. This board is what gives EIFS its energy performance, and it's why the wall feels hollow when you knock on it.",
      },
      { type: "heading", level: 3, text: "Base Coat With Reinforcing Mesh" },
      {
        type: "paragraph",
        text:
          "A cementitious or acrylic base coat is troweled over the foam, and alkali-resistant fiberglass mesh is embedded into it while wet. This layer handles impact resistance and spreads out the stress from temperature swings and wind so the finish doesn't crack. High-traffic areas, like the ground floor of a commercial building, often get a second layer of heavier mesh.",
      },
      { type: "heading", level: 3, text: "Finish Coat" },
      {
        type: "paragraph",
        text:
          "The finish coat is what you actually see. It's usually an acrylic polymer finish available in a huge range of textures and colors. It provides UV protection and weather resistance, and it's the reason EIFS can be shaped into cornices, trim bands and other details that would be expensive in real stucco or masonry.",
      },
      { type: "heading", level: 2, text: "Why Is EIFS Popular in New Mexico?" },
      {
        type: "paragraph",
        text:
          "Once you know what EIFS is, its popularity here makes sense. Southern New Mexico has hot summers, cold desert nights, and intense sun at elevation. A wall system with built-in continuous insulation cuts the thermal bridging that happens through wood or steel framing, which means lower cooling bills in July and less heat loss in January.",
      },
      {
        type: "paragraph",
        text:
          "Research from the Oak Ridge National Laboratory, supported by the Department of Energy, found EIFS to be the best performing cladding for thermal and moisture control when compared with brick, stucco and fiber cement siding. That's a strong endorsement for a material that gets a lot of unfair criticism.",
      },
      {
        type: "paragraph",
        text:
          "Weight matters too. EIFS is far lighter than three-coat stucco or masonry, which makes it practical on steel-framed commercial buildings and on remodels where the structure wasn't designed to carry heavy cladding. And because the foam can be cut and shaped, architects use it for the decorative details that define a lot of newer commercial [stucco and EIFS work](/stucco) across Las Cruces and Doña Ana County.",
      },
      { type: "heading", level: 2, text: "Does EIFS Have Moisture Problems?" },
      {
        type: "paragraph",
        text:
          "This is the question behind most \"what is EIFS\" searches, and it deserves a direct answer. Yes, EIFS earned a bad reputation in the 1990s. No, that reputation doesn't apply to properly installed modern systems.",
      },
      {
        type: "paragraph",
        text:
          "The engineering firm Simpson Gumpertz & Heger explains the root cause well. Early barrier EIFS had no water-resistive barrier and no flashing behind the foam. The entire system relied on the finish coat and the sealant around windows and doors to keep water out. In practice, keeping that barrier perfectly watertight for decades is nearly impossible. Once water got in, it had nowhere to go, and it sat against wood sheathing until the sheathing rotted.",
      },
      {
        type: "paragraph",
        text:
          "Drainage EIFS solved that problem. Water that gets behind the finish now drains out at the base of the wall instead of soaking the structure. The failures you still see today almost always trace back to one of three things: an old barrier system, improper flashing at windows and [roof-to-wall transitions](/blog/what-is-stucco-roofing), or damaged sealant joints that were never maintained.",
      },
      {
        type: "paragraph",
        text:
          "In a dry climate like ours, the moisture risk is lower than in humid regions, but it isn't zero. Monsoon rain driven sideways by wind finds every gap around a window frame. That's why EIFS installation and repair is a job for a contractor who understands flashing and drainage, not just finishing.",
      },
      { type: "heading", level: 2, text: "How Do You Know If Your Building Has EIFS?" },
      {
        type: "paragraph",
        text:
          "Plenty of owners don't know what's on their walls. A few checks will usually tell you.",
      },
      {
        type: "list",
        items: [
          "**The knock test.** Traditional stucco feels solid and sounds like concrete. EIFS sounds hollow and has a slight give.",
          "**Look at penetrations.** Around vents, light fixtures or hose bibs, you may be able to see a cross-section of the wall. Roof Observations notes that EIFS shows a distinct layer of white or yellowish foam, while stucco and masonry never do.",
          "**Check window edges.** EIFS often has a foam trim piece around openings, or a visible sealant joint between the wall and the frame. Stucco usually runs right up to the frame.",
          "**Pull the permits.** Building department records often list the cladding type.",
        ],
      },
      {
        type: "paragraph",
        text:
          "If you're buying a property or you're unsure, a professional [roof and exterior inspection](/roofing/roof-inspections) can confirm what you have and flag any moisture concerns before they become structural ones.",
      },
      { type: "heading", level: 2, text: "EIFS Repair and Maintenance" },
      {
        type: "paragraph",
        text:
          "EIFS is durable, but like any exterior, it needs attention. Angi points out that a full EIFS system has around six layers compared with the one or two thick layers of traditional stucco, and that layering is exactly why repairs have to be done in sequence. A contractor patching a hole has to replace the foam, re-embed mesh in fresh base coat, and then blend the finish. Slapping stucco patch over EIFS is a guaranteed callback.",
      },
      {
        type: "paragraph",
        text:
          "Routine maintenance is more manageable. Keep sealant joints around windows, doors and expansion joints in good condition. Watch for impact damage at ground level where carts, mowers and vehicles hit the wall. Look for staining or soft spots below windows, which often signal water getting behind the system. And after monsoon season, walk the building and check parapet caps and roof-to-wall transitions, since that's where a [roof leak](/roofing/roof-repairs) and a wall leak often turn out to be the same leak.",
      },
      {
        type: "paragraph",
        text:
          "Handled properly, EIFS lasts decades. Ignored, it fails from the inside out.",
      },
      {
        type: "image",
        src: "/images/blog/what-is-eifs/stucco-parapet-canales-work.webp",
        alt:
          "Crew working on a stucco home with parapet walls and canales during an exterior finish job",
        caption:
          "Exterior finish work on a parapet-walled stucco home. On an EIFS wall the same repair also has to rebuild the foam, mesh and base coat beneath the finish.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on EIFS" },
      {
        type: "paragraph",
        text:
          "So, what is EIFS? It's an insulated, layered wall system that delivers real energy savings and design flexibility, wrapped in a finish that looks like stucco but performs very differently. Three takeaways worth keeping:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "EIFS and traditional stucco look alike but are built and repaired differently. Know which one you have.",
          "Modern drainage EIFS solved the moisture problems of the old barrier systems, but flashing and sealant maintenance still matter.",
          "In New Mexico's climate, the insulation value of EIFS is a real advantage on both homes and commercial buildings.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We install and repair both traditional stucco and EIFS on homes and commercial buildings, including parapet repair and full exterior finish work. If you're not sure what's on your walls, or you've spotted cracks, staining or soft spots, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request a free estimate through our contact page](/#contact) and we'll come out, look at the property in person, and give you an honest recommendation and a clear quote.",
      },
    ],
  },
  {
    slug: "what-is-stucco-roofing",
    title: "What Is Stucco Roofing? How Stucco and Your Roof Work Together",
    excerpt:
      "Stucco is not a roofing material. What people mean by “stucco roofing” is the junction where stucco walls and parapets meet the actual roof, and that junction is where most leaks begin.",
    metaTitle: "What Is Stucco Roofing? How Stucco Meets Your Roof",
    metaDescription:
      "What is stucco roofing? Learn what it really means, how stucco and roofing meet at parapets and edges, and how to keep both watertight.",
    category: "Stucco",
    tags: ["stucco", "parapet", "flat roof", "flashing", "leaks", "maintenance"],
    publishedAt: "2026-09-10",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/what-is-stucco-roofing/stucco-parapet-flat-roof.webp",
    featuredImageAlt:
      "Stucco parapet walls surrounding a flat roof under coating work, with a tile roof below and the Organ Mountains behind",
    featured: true,
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/stucco",
      "/roofing/roof-repairs",
      "/roofing/roof-maintenance",
    ],
    keywords: [
      "what is stucco roofing",
      "stucco parapet leak",
      "roof to wall flashing las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Let's clear something up in the first paragraph, because it saves everyone time. Stucco is not a roofing material. Nobody troweled plaster across the top of a house and called it a roof. So when people search \"what is stucco roofing,\" they're almost always asking about something real, just with the wrong name attached.",
      },
      {
        type: "paragraph",
        text:
          "What they're usually looking at is a Southwest home or commercial building with a flat roof, stucco walls, and a stucco parapet running around the roofline. From the street, the stucco appears to go right up and over the edge of the roof. In a sense, it does. And that junction, where stucco and roofing meet, is one of the most important and most leak-prone spots on the entire building.",
      },
      {
        type: "paragraph",
        text:
          "This article answers what stucco roofing really means, explains how stucco and the roof connect on a typical New Mexico property, why that connection fails so often, which roof types pair with stucco exteriors, and how to keep the whole system watertight through monsoon season and winter freezes.",
      },
      { type: "heading", level: 2, text: "What Does \"Stucco Roofing\" Actually Mean?" },
      {
        type: "paragraph",
        text:
          "When someone asks what stucco roofing is, they're describing one of three things.",
      },
      {
        type: "paragraph",
        text:
          "**A stucco home with a flat or low-slope roof.** This is the classic Pueblo or Territorial style you see all over Las Cruces, Mesilla and Doña Ana. The walls are stucco, the roof is flat, and a stucco parapet wall rises above the roof surface on every side. The roof itself is usually a membrane, a built-up system, or a coated surface hidden behind that parapet.",
      },
      {
        type: "paragraph",
        text:
          "**Stucco-finished roof edges, fascia and eaves.** On pitched roofs, some homes carry the stucco finish up onto the fascia board or the underside of the eaves so the exterior reads as one continuous surface. The roofing above is still shingle, tile or metal.",
      },
      {
        type: "paragraph",
        text:
          "**Stucco and EIFS on commercial buildings.** Retail centers and office buildings often use [stucco or EIFS](/stucco) on the walls and parapets, with a [TPO](/blog/what-is-tpo-roofing) or coated flat roof behind them. Property managers searching \"stucco roofing\" are usually trying to figure out who to call when the parapet leaks.",
      },
      {
        type: "paragraph",
        text:
          "In every case, the honest answer is the same. Stucco is the wall finish. The roof is a separate system. And the place where they meet is where the real story is.",
      },
      { type: "heading", level: 2, text: "Where Stucco and the Roof Meet" },
      {
        type: "paragraph",
        text:
          "To understand what stucco roofing involves in practice, you have to look at the transition points. There are four that matter.",
      },
      { type: "heading", level: 3, text: "Parapet Walls" },
      {
        type: "paragraph",
        text:
          "A parapet is the short wall that extends above the roof surface on a flat-roofed building. On a stucco home, the parapet is stucco on both faces and usually has a cap on top, either stucco, metal coping, or a concrete cap. Behind it, the roofing membrane turns up the inside face of the parapet and terminates under the cap or under a piece of counterflashing.",
      },
      {
        type: "paragraph",
        text:
          "That's a lot of materials meeting in a small space. Stucco, roofing membrane, flashing, a cap, and sealant all have to work together, and they all expand and contract at different rates in the desert heat.",
      },
      { type: "heading", level: 3, text: "Roof-to-Wall Flashing" },
      {
        type: "paragraph",
        text:
          "Wherever a roof surface meets a vertical stucco wall, there has to be flashing. On a flat roof, that's the base flashing where the membrane turns up the wall. On a pitched roof, it's step flashing or kickout flashing where shingles or tile die into a stucco wall. The stucco should never be applied directly over the top edge of that flashing. When it is, water wicks behind the stucco and runs down inside the wall.",
      },
      { type: "heading", level: 3, text: "Scuppers and Canales" },
      {
        type: "paragraph",
        text:
          "Flat roofs behind parapets need a way to drain. In New Mexico that usually means canales, the wood or metal spouts that poke through the parapet, or scuppers cut through the wall. Each one is a hole punched through the stucco, and each one needs proper flashing and a sealed connection to the roof membrane.",
      },
      { type: "heading", level: 3, text: "Fascia and Eaves" },
      {
        type: "paragraph",
        text:
          "On pitched-roof homes with stucco-wrapped fascia, the drip edge of the roof has to direct water past the stucco, not onto it. Stucco that stays wet at the eave line cracks, stains and eventually separates from the lath behind it.",
      },
      {
        type: "image",
        src: "/images/blog/what-is-stucco-roofing/tile-roof-eave-stucco-wall.webp",
        alt:
          "Roofer on a ladder inspecting the edge of a clay tile roof where it meets a stucco wall",
        caption:
          "Where tile meets stucco at the eave. Every one of these transitions depends on flashing rather than on the roofing material itself.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Is the Stucco-to-Roof Transition the Most Common Leak Point?",
      },
      {
        type: "paragraph",
        text:
          "Ask any roofer in Las Cruces where flat roof leaks show up and they'll point at the parapet. It's the number one answer for a reason.",
      },
      {
        type: "paragraph",
        text:
          "Stucco is porous. It absorbs water. That's normal, and on a wall it dries out quickly in our climate. But at the top of a parapet, where the cap has cracked or the stucco was never properly capped, water soaks straight down into the wall and finds its way behind the roof membrane. The homeowner sees a stain on the ceiling and assumes the roof failed. Often the roof is fine. The parapet failed.",
      },
      {
        type: "paragraph",
        text:
          "Thermal movement makes it worse. Flat roofs in New Mexico face intense UV, dramatic day-to-night temperature swings, and monsoon rains, all of which stress the joints between materials. Stucco moves one way, metal flashing moves another, and the sealant between them gives up after a few seasons.",
      },
      {
        type: "paragraph",
        text:
          "The cost of ignoring it climbs fast. Breasy's 2026 stucco repair data found that the biggest cost variable in a stucco repair isn't crack size but how long the repair was delayed, because moisture migrates sideways and damages far more of the wall than what's visible. The same logic applies to the roof deck underneath.",
      },
      { type: "heading", level: 2, text: "What Types of Roofs Pair With Stucco Homes?" },
      {
        type: "paragraph",
        text:
          "Part of answering what stucco roofing means is knowing what's actually up there behind the parapet or above the eaves. Four roof types dominate stucco properties in southern New Mexico.",
      },
      {
        type: "list",
        items: [
          "**Flat roofs with TPO or modified bitumen.** The most common pairing on Pueblo-style homes and commercial buildings. The membrane runs up the parapet and terminates under flashing.",
          "**Coated flat roofs.** Older built-up or foam roofs are often restored with silicone or elastomeric coatings. A [silicone roof restoration](/roofing/silicone-roof-restoration) is usually a fraction of the cost of replacement, and the coating can be carried up the inside of the parapet for a seamless seal.",
          "**Tile roofs.** Spanish and Mediterranean-style stucco homes almost always carry clay or concrete tile. The tricky spots are where [tile roofing](/roofing/tile-roofing) meets a stucco chimney or a second-story wall.",
          "**[Asphalt shingle roofs](/blog/what-is-asphalt-shingle-roofing).** Common on newer subdivision homes with stucco exteriors. Step flashing at every stucco wall intersection is what keeps these dry.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Each of these needs a slightly different flashing detail where it meets stucco, which is why a contractor who only does one trade can miss the problem entirely.",
      },
      {
        type: "image",
        src: "/images/blog/what-is-stucco-roofing/tile-roof-storm-tarp.webp",
        alt:
          "Concrete tile roof with a sandbagged emergency tarp over a damaged section, in a stucco-home neighbourhood",
        caption:
          "Concrete tile over stucco homes is a common Las Cruces pairing. A tarp buys time, but the repair is at the flashing and underlayment underneath.",
      },
      {
        type: "heading",
        level: 2,
        text: "Stucco and Roof Maintenance in New Mexico Weather",
      },
      {
        type: "paragraph",
        text:
          "Keeping a stucco home dry is mostly about keeping the transitions healthy. A short seasonal routine goes a long way.",
      },
      {
        type: "paragraph",
        text:
          "**Before monsoon season (June):** Walk the roof or have it inspected. Check parapet caps for cracks, look at the sealant where the membrane meets the stucco, and make sure canales and scuppers are clear. Annual inspections and periodic sealing are what push stucco past the 50-year mark.",
      },
      {
        type: "paragraph",
        text:
          "**After monsoon season (October):** Look for new staining on the parapet's inside face, efflorescence (white mineral streaks) on the stucco below the roofline, and any soft or hollow spots when you tap the wall.",
      },
      {
        type: "paragraph",
        text:
          "**Winter:** Freeze-thaw cycles at night widen any hairline crack that took on water. Patch cracks before they get cold.",
      },
      {
        type: "paragraph",
        text:
          "A regular [roof maintenance plan](/roofing/roof-maintenance) that includes the parapets and roof-to-wall transitions catches these issues while they're a few hundred dollars instead of a few thousand.",
      },
      { type: "heading", level: 2, text: "When Do You Need a Contractor Who Does Both?" },
      {
        type: "paragraph",
        text:
          "This is the practical takeaway from the whole \"what is stucco roofing\" question. The leak at your parapet is a roofing problem and a stucco problem at the same time. Fix the roof membrane without repairing the cracked stucco cap above it and the water comes right back. Patch the stucco without addressing the failed flashing behind it and you've hidden the problem, not solved it.",
      },
      {
        type: "paragraph",
        text:
          "A roofer who doesn't do stucco will tell you to call a stucco guy. A stucco guy who doesn't do roofing will tell you the leak isn't his. Meanwhile the drywall inside keeps staining.",
      },
      {
        type: "paragraph",
        text:
          "That's exactly why Gilbert & Sons built the business around both trades. Parapet repair, roof-to-wall flashing, membrane termination and stucco finish work all get handled by the same crew, so the [roof repair](/roofing/roof-repairs) and the stucco repair are done as one job.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Stucco Roofing" },
      {
        type: "paragraph",
        text:
          "What is stucco roofing? It's not a roof type. It's the way stucco walls and parapets wrap around and meet the actual roof on a Southwest home or commercial building. Three things to remember:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Stucco is the wall finish. The roof behind the parapet is a separate system, usually a membrane, coating, tile or shingle.",
          "The transition between the two, especially the parapet cap and roof-to-wall flashing, is where most \"roof leaks\" on stucco buildings actually start.",
          "Seasonal inspections before and after monsoon season keep both systems watertight for decades.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We handle both sides of the stucco-and-roof problem with one crew, from parapet repair and roof-to-wall flashing to membrane work and stucco finishing. If your stucco home or building has a stained ceiling, a cracked parapet, or a leak nobody can find, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request a free estimate through our contact page](/#contact) and we'll come out, look at the property in person, and give you an honest recommendation and a clear quote.",
      },
    ],
  },
  {
    slug: "what-is-tpo-roofing",
    title:
      "What Is TPO Roofing? A Flat Roof Guide for New Mexico Property Owners",
    excerpt:
      "TPO is the default membrane on flat roofs across southern New Mexico. Here is what it is made of, how long it really lasts in high-UV desert heat, and how it compares with EPDM and PVC.",
    metaTitle: "What Is TPO Roofing? A Flat Roof Guide for New Mexico",
    metaDescription:
      "What is TPO roofing? Learn how this single-ply membrane works, how long it lasts, and why it suits flat roofs in hot, sunny New Mexico.",
    category: "Commercial Roofing",
    tags: [
      "tpo",
      "flat roof",
      "commercial",
      "membrane",
      "silicone coating",
      "materials",
    ],
    publishedAt: "2026-09-10",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/what-is-tpo-roofing/commercial-flat-roof-membrane.webp",
    featuredImageAlt:
      "Aerial view of a commercial building with a white single-ply membrane flat roof, parapet edge and rooftop HVAC units",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/roof-installations",
      "/roofing/silicone-roof-restoration",
      "/roofing/roof-maintenance",
    ],
    keywords: [
      "what is tpo roofing",
      "tpo membrane las cruces",
      "flat roof new mexico",
      "tpo vs epdm",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "If you own a flat-roofed home or commercial building in Las Cruces, you've probably been quoted TPO at some point. It shows up on nearly every flat roof estimate, and it's become the default membrane for strip malls, warehouses, offices and a growing number of Pueblo-style homes across southern New Mexico.",
      },
      {
        type: "paragraph",
        text:
          "And yet most property owners can't say what it is. So, what is TPO roofing? It's a single-ply, heat-welded plastic membrane engineered for flat and low-slope roofs, and it's earned its place mostly because of how it handles heat and sun. That last part matters a lot here.",
      },
      {
        type: "paragraph",
        text:
          "This guide covers what TPO roofing is made of, how it's installed, how long it realistically lasts in a high-UV desert climate, how it compares with EPDM and PVC, where it falls short, and what maintenance keeps it performing. If you're deciding on a new flat roof or trying to understand the one you already have, this is the rundown.",
      },
      { type: "heading", level: 2, text: "What Is TPO Roofing Made Of?" },
      {
        type: "paragraph",
        text:
          "TPO stands for thermoplastic polyolefin. According to J-Tech Construction, the membrane is made from a blend of polypropylene and ethylene-propylene rubber, which gives it flexibility along with the durability of a plastic. It comes in wide rolls, usually white or light gray, and it's manufactured in thicknesses of 45, 60 and 80 mil.",
      },
      {
        type: "paragraph",
        text:
          "The defining feature of TPO roofing is how the seams are joined. Instead of adhesives or tapes, the overlapping edges of each sheet are fused with hot air. Angi explains that TPO only bonds to itself, so the entire roof becomes one continuous welded surface, and special TPO-clad metal is used to tie in flashings around edges and penetrations.",
      },
      {
        type: "paragraph",
        text:
          "That welded-seam construction is the whole point. Seams are where flat roofs leak. A properly welded TPO seam is stronger than the membrane itself.",
      },
      { type: "heading", level: 2, text: "How Is a TPO Roof Installed?" },
      {
        type: "paragraph",
        text:
          "Knowing what TPO roofing is helps, but knowing how it goes down tells you what to look for in a quote. A TPO installation has four main stages.",
      },
      { type: "heading", level: 3, text: "Insulation Layer" },
      {
        type: "paragraph",
        text:
          "Before the membrane goes on, the roof deck gets a layer of rigid insulation, typically polyiso board. This adds R-value to the building and creates a smooth, even surface for the membrane. On a re-roof, the old system is either removed or a cover board is installed over it.",
      },
      { type: "heading", level: 3, text: "Attachment Method" },
      {
        type: "paragraph",
        text:
          "TPO can be mechanically fastened, fully adhered, or ballasted. Mechanically fastened systems screw the membrane down through the insulation at the seams and are the most common on commercial buildings. Fully adhered systems glue the membrane to the insulation for a cleaner look and better wind uplift resistance. The right choice depends on the deck, the building height, and the budget.",
      },
      { type: "heading", level: 3, text: "Seam Welding" },
      {
        type: "paragraph",
        text:
          "This is where installer skill shows. Each overlapping seam is welded with a robotic hot-air welder or a hand welder at the details. Too cool and the seam won't bond. Too hot and the membrane scorches. Every seam should be probed after welding to confirm it's fused.",
      },
      { type: "heading", level: 3, text: "Flashings and Details" },
      {
        type: "paragraph",
        text:
          "Parapet walls, HVAC curbs, pipe penetrations, drains and scuppers all get custom flashing. On a [stucco building](/blog/what-is-stucco-roofing), the membrane runs up the inside of the parapet and terminates under a cap or counterflashing. This is the detail that separates a 25-year roof from a 10-year roof, and it's the reason TPO belongs on the [roof installation](/roofing/roof-installations) list rather than the DIY list.",
      },
      {
        type: "image",
        src: "/images/blog/what-is-tpo-roofing/flat-roof-membrane-rolls.webp",
        alt:
          "Roofing crew loading rolls of membrane onto a ladder hoist beside a white coated flat roof",
        caption:
          "Membrane rolls being hoisted to a flat roof. How the sheets are attached and welded on the deck decides how long the finished roof lasts.",
      },
      { type: "heading", level: 2, text: "How Long Does TPO Roofing Last?" },
      {
        type: "paragraph",
        text:
          "Most sources put TPO roofing lifespan between 15 and 30 years. Interlock Roofing lists installation quality, membrane thickness, climate exposure, maintenance, foot traffic and UV radiation as the variables that decide where in that range a given roof lands.",
      },
      {
        type: "paragraph",
        text:
          "Thickness is a bigger deal than most people realize. Noble Roofing cites industry data showing 80 mil systems reaching 35 to 40 years under good conditions, compared with 25 to 30 years for 60 mil. A 45 mil membrane is the budget option and it shows in longevity.",
      },
      {
        type: "paragraph",
        text:
          "Climate cuts the other way. The same source notes that roofs in the desert Southwest see higher surface temperatures and faster oxidation than roofs in milder regions. WeatherShield Roofers makes the same point: extreme heat and heavy UV exposure shorten the range, and poorly welded seams can fail in as little as five to ten years regardless of thickness.",
      },
      {
        type: "paragraph",
        text:
          "For a Las Cruces flat roof, the realistic expectation is 20 to 25 years for a well-installed 60 mil TPO system, with 80 mil worth the upgrade on buildings with rooftop HVAC traffic or full sun exposure.",
      },
      { type: "heading", level: 2, text: "Why Does TPO Work Well in Hot Climates?" },
      {
        type: "paragraph",
        text:
          "This is the heart of the \"what is TPO roofing\" question for anyone in New Mexico, because the material was practically designed for our conditions.",
      },
      {
        type: "paragraph",
        text:
          "The white membrane is highly reflective. Angi reports that TPO can keep a roof surface up to 50 degrees cooler than conventional dark roofing, which directly lowers the cooling load on the building underneath. On a commercial building running air conditioning from May through October, that's a real line item.",
      },
      {
        type: "paragraph",
        text:
          "Moser Roofing adds that TPO membranes have excellent UV resistance and reflectivity compared with other single-ply options, which is why they're favored in warmer regions. Modern formulations include UV stabilizer packages that hold up far better than the early TPO products from the 1990s.",
      },
      {
        type: "paragraph",
        text:
          "There's also the flexibility factor. Las Cruces can swing 40 degrees between a summer afternoon and the following night. TPO expands and contracts with that cycle without cracking, provided the seams and flashings were done right.",
      },
      { type: "heading", level: 2, text: "TPO vs EPDM vs PVC: How Do They Compare?" },
      {
        type: "paragraph",
        text:
          "TPO roofing is one of three common single-ply membranes, and the differences matter when you're comparing quotes.",
      },
      {
        type: "list",
        items: [
          "**EPDM** is a black synthetic rubber. It's flexible, well proven, and often less expensive, but its dark surface absorbs heat, and its seams are taped or glued rather than welded. Angi notes TPO holds up better than EPDM in hot climates.",
          "**PVC** is a welded thermoplastic like TPO, with strong chemical resistance and excellent cold-weather flexibility. It typically costs more than TPO and contains plasticizers that can leach over time.",
          "**TPO** sits in the middle on cost, matches PVC on welded-seam performance, and beats EPDM on reflectivity. For a hot, dry, high-UV climate, it's usually the strongest value.",
        ],
      },
      {
        type: "paragraph",
        text:
          "If your building has a rooftop restaurant exhaust or chemical exposure, PVC may be worth the premium. For most homes and commercial buildings in Doña Ana County, TPO wins.",
      },
      { type: "heading", level: 2, text: "What Are the Downsides of TPO?" },
      {
        type: "paragraph",
        text: "No honest answer to what TPO roofing is would skip the drawbacks.",
      },
      {
        type: "paragraph",
        text:
          "**Puncture risk.** TPO can be punctured by dropped tools, sharp debris and heavy foot traffic. Walk pads around HVAC units and a policy of keeping service technicians on designated paths solve most of this.",
      },
      {
        type: "paragraph",
        text:
          "**Seam dependence.** The welded seam is TPO's greatest strength and its biggest vulnerability. A bad weld doesn't show up on day one. It shows up three winters later. This is an installer problem, not a material problem, but it means the crew matters more than the brand.",
      },
      {
        type: "paragraph",
        text:
          "**Ponding water.** TPO handles brief standing water, but persistent ponding on a poorly sloped roof accelerates wear and stresses seams. Proper drainage design, with working scuppers and canales, is part of a good installation.",
      },
      {
        type: "paragraph",
        text:
          "**Limited color options.** TPO is white, gray or tan. If a specific color matters, you'll be looking at coatings or a different system.",
      },
      { type: "heading", level: 2, text: "Maintaining and Restoring a TPO Roof" },
      {
        type: "paragraph",
        text:
          "TPO is low-maintenance, not no-maintenance. A twice-yearly inspection, ideally before and after monsoon season, catches seam separation, flashing pull-away and punctures while they're still small repairs. Keeping drains clear and debris off the surface prevents most premature failures. A structured [roof maintenance plan](/roofing/roof-maintenance) is the difference between a 20-year roof and a 30-year roof.",
      },
      {
        type: "paragraph",
        text:
          "Aging TPO also has a second life. When the membrane starts to chalk or the seams show wear but the roof is still structurally sound, a silicone coating can extend its life by a decade or more. Nationwide Coatings notes silicone lasts 10 to 20 years and handles ponding water well, which makes it the right match for flat TPO roofs. A [silicone roof restoration](/roofing/silicone-roof-restoration) over existing TPO costs far less than a tear-off and keeps the reflective benefits intact.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on TPO Roofing" },
      {
        type: "paragraph",
        text:
          "So, what is TPO roofing? A white, heat-welded, single-ply membrane that reflects sun, flexes with temperature swings, and lasts 20 to 30 years when it's installed by a crew that knows how to weld a seam. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "TPO's reflectivity and UV resistance make it one of the best flat roof choices for southern New Mexico's heat.",
          "Membrane thickness and seam quality decide lifespan far more than brand. Ask what mil you're getting and who's doing the welding.",
          "Twice-yearly inspections and a silicone restoration at the right time can push a TPO roof well past its expected life.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We install TPO and other flat roof systems on homes and commercial buildings, and we restore aging TPO with silicone coatings when a tear-off isn't needed. For a quote on a new flat roof, a repair, or a restoration of the TPO you already have, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request a free estimate through our contact page](/#contact) and we'll come out, look at the property in person, and give you an honest recommendation and a clear quote.",
      },
    ],
  },
  {
    slug: "what-is-asphalt-shingle-roofing",
    title:
      "What Is Asphalt Shingle Roofing? Types, Lifespan and What to Expect",
    excerpt:
      "Asphalt shingles cover roughly seven in ten American homes. Here is what they are made of, how 3-tab, architectural and premium tiers differ, and what the New Mexico sun does to all of them.",
    metaTitle: "What Is Asphalt Shingle Roofing? Types and Lifespan",
    metaDescription:
      "What is asphalt shingle roofing? See how shingles are made, 3-tab vs architectural types, lifespan, and how they hold up in New Mexico sun.",
    category: "Roofing Materials",
    tags: [
      "asphalt shingle",
      "materials",
      "roof replacement",
      "ventilation",
      "inspection",
    ],
    publishedAt: "2026-09-10",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/what-is-asphalt-shingle-roofing/asphalt-shingle-roof-aerial.webp",
    featuredImageAlt:
      "Overhead aerial view of a residential asphalt shingle roof mid-replacement, with underlayment exposed along one section",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/roof-installations",
      "/roofing/roof-replacements",
      "/roofing/roof-inspections",
    ],
    keywords: [
      "what is asphalt shingle roofing",
      "architectural shingles",
      "shingle lifespan las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Nearly seven out of ten American homeowners are living under asphalt shingles right now. That's according to Roofing Contractor magazine's 2026 homeowner survey, which found about 69% of respondents had shingles on their roof. It's the most common roofing material in the country by a wide margin, and it's all over the newer neighborhoods in Las Cruces.",
      },
      {
        type: "paragraph",
        text:
          "But ask most of those homeowners what is asphalt shingle roofing, actually, and you'll get a shrug. They know it's the overlapping rectangles on the roof. They don't know what's inside them, why one neighbor's roof looks flat and another's looks textured, or why a \"30-year shingle\" rarely lasts 30 years in the desert.",
      },
      {
        type: "paragraph",
        text:
          "This guide fixes that. It covers what asphalt shingles are made of, the three main types, how long each one realistically lasts, what New Mexico sun and wind do to them, what a proper installation includes, and the signs that yours needs attention.",
      },
      { type: "heading", level: 2, text: "What Is Asphalt Shingle Roofing Made Of?" },
      {
        type: "paragraph",
        text:
          "An asphalt shingle is a three-layer sandwich. Turtle Roofing describes the construction well: a fiberglass mat in the middle, asphalt coating on both sides, and ceramic-coated mineral granules pressed into the top surface.",
      },
      {
        type: "paragraph",
        text:
          "Each layer has a job. The fiberglass mat gives the shingle its strength and tear resistance. The asphalt makes it waterproof and flexible. The granules are the part you see, and they do more than provide color. They shield the asphalt from UV rays, which would otherwise dry it out and crack it within a few years. When granules wash off, the shingle starts aging fast.",
      },
      {
        type: "paragraph",
        text:
          "That's the core of what asphalt shingle roofing is: a waterproof, UV-shielded mat that overlaps to shed water downhill. Every type of asphalt shingle is a variation on that same recipe.",
      },
      { type: "heading", level: 2, text: "The Types of Asphalt Shingles" },
      {
        type: "paragraph",
        text:
          "There are three tiers, and the difference between them is mostly thickness and layering.",
      },
      { type: "heading", level: 3, text: "3-Tab Shingles" },
      {
        type: "paragraph",
        text:
          "The original. A 3-tab shingle is a single flat layer cut with two slots so each strip looks like three separate shingles once installed. Today's Homeowner puts them at $1 to $2 per square foot for materials and notes they're the lightest and least expensive asphalt option.",
      },
      {
        type: "paragraph",
        text:
          "They're also being phased out. Hulsey Roofing reports that architectural shingles now account for more than 90% of new asphalt installations in North America. 3-tab still makes sense on rental properties, sheds and detached garages, or when matching an existing roof, but it's no longer the default.",
      },
      { type: "heading", level: 3, text: "Architectural (Dimensional) Shingles" },
      {
        type: "paragraph",
        text:
          "Architectural shingles, also called dimensional or laminated shingles, bond two or more layers of material together. The result is thicker, heavier and textured, with shadow lines that mimic wood shake or slate. This is what most people picture when they think of a modern shingle roof, and it's what goes on most new [roof installations](/roofing/roof-installations) in Doña Ana County.",
      },
      {
        type: "paragraph",
        text:
          "The extra weight isn't cosmetic. It's why architectural shingles carry wind ratings of 110 to 130 mph versus 60 to 70 mph for 3-tab, and why they last longer.",
      },
      { type: "heading", level: 3, text: "Premium (Designer) Shingles" },
      {
        type: "paragraph",
        text:
          "The top tier. These are even thicker laminated shingles designed to replicate slate or cedar shake from the street. Home Genius Exteriors notes that premium lines often carry Class 4 impact ratings, the highest hail-resistance classification, and some insurers discount policies for them.",
      },
      { type: "heading", level: 2, text: "How Long Does Asphalt Shingle Roofing Last?" },
      {
        type: "paragraph",
        text:
          "Here's where the marketing and the reality split. Manufacturers sell shingles as \"25-year,\" \"30-year\" and \"50-year\" products. Those numbers describe the warranty, not what happens on your roof.",
      },
      {
        type: "paragraph",
        text:
          "Bill Ragan Roofing lays out the realistic numbers. A 3-tab roof carries a 25-year label but should be expected to last 15 to 20 years. An architectural roof carries a 30-year label and realistically delivers 20 to 25 years, with the full 30 only possible in ideal conditions. Premium shingles push into the 25 to 40 year range depending on the product.",
      },
      {
        type: "paragraph",
        text:
          "Three things move a roof toward the high or low end of those ranges: installation quality, attic ventilation, and climate. In Las Cruces, climate does most of the pushing.",
      },
      {
        type: "heading",
        level: 2,
        text: "How Does New Mexico Sun and Wind Affect Asphalt Shingles?",
      },
      {
        type: "paragraph",
        text:
          "Understanding what asphalt shingle roofing is includes understanding what kills it, and in southern New Mexico that's mostly the sun.",
      },
      {
        type: "paragraph",
        text:
          "**UV and heat.** At our elevation, UV intensity runs noticeably higher than at sea level, and roof surface temperatures on a dark shingle can climb past 150 degrees on a July afternoon. That heat cooks the asphalt, driving off the oils that keep it flexible. The shingle gets brittle, then it cracks or curls at the edges.",
      },
      {
        type: "paragraph",
        text:
          "**Granule loss.** UV also breaks down the bond holding granules in place. Once they wash into the gutters, the asphalt underneath is fully exposed and the decline accelerates. Granules in your gutters after a storm are one of the clearest early warnings.",
      },
      {
        type: "paragraph",
        text:
          "**Thermal cycling.** A 40-degree swing between a summer afternoon and that night is normal here. Every cycle expands and contracts the shingles, stressing the seal strips that hold each course down and loosening nails over time.",
      },
      {
        type: "paragraph",
        text:
          "**Wind.** Spring dust storms and monsoon downbursts regularly hit 50 to 70 mph in the Mesilla Valley. That's right at the failure point for 3-tab shingles and well within the rating for architectural shingles, which is one more reason 3-tab has fallen out of favor locally.",
      },
      {
        type: "paragraph",
        text:
          "**What's missing.** We get almost no ice dams, moss or algae, the problems that plague shingle roofs in wetter climates. A properly installed and ventilated architectural shingle roof in Las Cruces can reach the upper end of its realistic lifespan. A poorly ventilated one will bake from underneath and fail early.",
      },
      {
        type: "image",
        src:
          "/images/blog/what-is-asphalt-shingle-roofing/shingle-roof-vents-desert.webp",
        alt:
          "Brown asphalt shingle roof with several vent pipes and box vents, overlooking desert terrain",
        caption:
          "Balanced ventilation matters as much as the shingle itself. An unventilated attic bakes the roof from underneath.",
      },
      {
        type: "heading",
        level: 2,
        text: "What Goes Into an Asphalt Shingle Roof Installation?",
      },
      {
        type: "paragraph",
        text:
          "The shingle is the visible part of the system, but it's only one layer. A proper asphalt shingle roof installation includes several others, and Peterson Roofing recommends asking about every one of them before you sign a contract.",
      },
      {
        type: "list",
        items: [
          "**Roof decking.** The plywood or OSB sheathing the shingles are nailed to. It can't be evaluated until the old roof is torn off, and rotted sections have to be replaced.",
          "**Underlayment.** A synthetic or felt water barrier over the decking. It's the second line of defense when wind drives rain under a shingle.",
          "**Ice and water shield.** A self-adhering membrane in valleys and around penetrations. Less critical here than in snow country, but valleys still deserve it.",
          "**Drip edge and flashing.** Metal at the eaves, rakes, chimneys, vents and every stucco wall intersection. [Flashing at stucco walls](/blog/what-is-stucco-roofing) is where a lot of Southwest shingle roofs leak.",
          "**Starter strip and ridge cap.** Purpose-made shingles at the eave line and ridge that seal the edges where wind uplift starts.",
          "**Ventilation.** Balanced intake at the eaves and exhaust at the ridge. Skip this and the attic overheats, which shortens shingle life and can void the manufacturer's warranty.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Tear-off versus overlay is the other big question. Laying new shingles over old saves money upfront but hides decking problems and traps heat. Most manufacturers and most reputable contractors recommend a full tear-off on a [roof replacement](/roofing/roof-replacements).",
      },
      {
        type: "heading",
        level: 2,
        text: "Signs Your Asphalt Shingle Roof Needs Attention",
      },
      {
        type: "paragraph",
        text:
          "Asphalt shingle roofing gives plenty of warning before it fails. Amica and other sources point to the same handful of signals:",
      },
      {
        type: "list",
        items: [
          "Curling, cupping or cracked shingles visible from the ground",
          "Bald patches where granules have worn away, or piles of granules in the gutters",
          "Missing shingles or exposed nail heads after a wind event",
          "Daylight or water stains visible in the attic",
          "A sagging or wavy roofline, which points to decking problems",
          "Rising cooling bills with no other explanation",
          "Repeated repairs in different spots, which usually means the roof has reached the end of its life",
        ],
      },
      {
        type: "paragraph",
        text:
          "One curled shingle after a storm is a [roof repair](/roofing/roof-repairs). Curling across a whole slope on a 20-year-old roof is a replacement conversation. A professional [roof inspection](/roofing/roof-inspections) is how you tell the difference without guessing, and it's worth scheduling once a year on any shingle roof past its tenth birthday.",
      },
      {
        type: "image",
        src:
          "/images/blog/what-is-asphalt-shingle-roofing/vent-boot-flashing-repair.webp",
        alt:
          "Roofer kneeling on an asphalt shingle roof to reseal the metal flashing boot around a vent pipe",
        caption:
          "A vent boot being resealed. Penetrations and flashing details, not the open field of shingles, are where most repairs happen.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Asphalt Shingle Roofing" },
      {
        type: "paragraph",
        text:
          "What is asphalt shingle roofing? A fiberglass mat coated in asphalt and armored with granules, installed as one layer of a complete system that includes underlayment, flashing and ventilation. Three things to remember:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Architectural shingles have replaced 3-tab as the standard for good reason: longer life, higher wind ratings and better looks for a modest upcharge.",
          "Warranty years and real years are different. Expect 20 to 25 from an architectural roof in Las Cruces, more with good ventilation and less without it.",
          "The sun is the enemy here. Granule loss, curling and brittleness are the signs to watch for, and an annual inspection catches them early.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We install, repair and replace asphalt shingle roofs across the region, along with tile, metal and flat roof systems. Whether you need a new roof, a storm repair, or an honest opinion on how much life your current shingles have left, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request a free estimate through our contact page](/#contact) and we'll come out, look at the property in person, and give you an honest recommendation and a clear quote.",
      },
    ],
  },
];
