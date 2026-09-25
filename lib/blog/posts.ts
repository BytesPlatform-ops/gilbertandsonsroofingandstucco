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
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We install and repair both traditional stucco and EIFS on homes and commercial buildings, including parapet repair and full exterior finish work. If you're not sure what's on your walls, or you've spotted cracks, staining or soft spots, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll come out, look at the property in person, and give you an honest recommendation and a clear quote.",
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
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We handle both sides of the stucco-and-roof problem with one crew, from parapet repair and roof-to-wall flashing to membrane work and stucco finishing. If your stucco home or building has a stained ceiling, a cracked parapet, or a leak nobody can find, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll come out, look at the property in person, and give you an honest recommendation and a clear quote.",
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
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We install TPO and other flat roof systems on homes and commercial buildings, and we restore aging TPO with silicone coatings when a tear-off isn't needed. For a quote on a new flat roof, a repair, or a restoration of the TPO you already have, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll come out, look at the property in person, and give you an honest recommendation and a clear quote.",
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
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We install, repair and replace asphalt shingle roofs across the region, along with tile, metal and flat roof systems. Whether you need a new roof, a storm repair, or an honest opinion on how much life your current shingles have left, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll come out, look at the property in person, and give you an honest recommendation and a clear quote.",
      },
    ],
  },
  {
    slug: "stucco-vs-eifs",
    title: "Stucco vs EIFS: Which Exterior Is Right for Your Property?",
    excerpt:
      "Traditional stucco and EIFS can look identical from the street, but they differ on cost, insulation, lifespan, cracking and repair. Here is the side-by-side comparison.",
    metaTitle: "Stucco vs EIFS: Which Is Right for Your Property?",
    metaDescription:
      "Stucco vs EIFS compared on cost, insulation, lifespan, cracking and repair, plus which one fits New Mexico homes and commercial buildings.",
    category: "Stucco",
    tags: ["stucco", "eifs", "exterior", "comparison", "insulation", "commercial"],
    publishedAt: "2026-09-16",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/stucco-vs-eifs/traditional-stucco-finished-wall.webp",
    featuredImageAlt:
      "Traditional stucco exterior on a Southwest home with an even, freshly finished texture around the window and entry",
    status: "published",
    showEstimateCta: false,
    relatedServices: ["/stucco", "/roofing/roof-inspections"],
    keywords: [
      "stucco vs eifs",
      "eifs vs stucco cost",
      "synthetic stucco comparison",
      "eifs contractor las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Stand across the street from two buildings, one finished in traditional stucco and one in EIFS, and you may not be able to tell them apart. Same texture. Same color options. Same Southwest look. But the stucco vs EIFS decision affects your budget, your utility bills, how the wall ages, and what happens the day someone backs a trailer into it.",
      },
      {
        type: "paragraph",
        text:
          "This is the comparison guide. If you want the full breakdown of [what EIFS is and how its layers work](/blog/what-is-eifs), that's covered separately. Here the goal is narrower: put the two systems side by side on the things that actually decide which one goes on your property.",
      },
      { type: "heading", level: 2, text: "Stucco vs EIFS at a Glance" },
      {
        type: "table",
        head: ["", "Traditional Stucco", "EIFS"],
        rows: [
          [
            "Composition",
            "Portland cement, sand, lime and water over lath",
            "Foam insulation board, base coat, mesh, acrylic finish",
          ],
          ["Installed cost", "Roughly $7 to $9 per sq ft", "Roughly $8 to $14 per sq ft"],
          ["Insulation value", "About R-0.20", "R-4 to R-6 per inch of foam"],
          ["Typical lifespan", "50 to 80 years", "25 to 35 years with proper drainage"],
          ["Weight", "Heavy, adds structural load", "Lightweight, around 80% lighter"],
          [
            "Crack resistance",
            "Lower, rigid cement cracks with movement",
            "Higher, flexible acrylic finish",
          ],
          ["Impact resistance", "Higher, hard cement shell", "Lower, foam can dent or puncture"],
          [
            "Shapes and trim",
            "Limited to flat surfaces and simple details",
            "Foam can be carved into bands, arches and trim",
          ],
          [
            "Repair",
            "Patch and match texture",
            "Must rebuild foam, mesh and base coat in sequence",
          ],
        ],
      },
      { type: "heading", level: 2, text: "What Each System Is Made Of" },
      {
        type: "paragraph",
        text:
          "Traditional stucco is a cement-based plaster. It goes on wet over metal lath in three coats, scratch, brown and finish, and cures into what amounts to a thin layer of concrete wrapped around the building. Crews have used it on desert homes for more than a century.",
      },
      {
        type: "paragraph",
        text:
          "EIFS, short for Exterior Insulation and Finish System, is a layered assembly rather than a single coat. A water-resistive barrier and drainage plane go over the sheathing, then rigid foam insulation, then a base coat with fiberglass mesh embedded in it, then a flexible acrylic finish. The finish coat is what makes it look like stucco. Everything underneath is why it performs differently.",
      },
      {
        type: "paragraph",
        text:
          "That structural difference drives everything else in the stucco vs EIFS comparison.",
      },
      { type: "heading", level: 2, text: "Cost: Which Costs More?" },
      {
        type: "paragraph",
        text:
          "Traditional stucco wins on upfront price. Current 2026 pricing puts traditional stucco in the range of $7 to $9 per square foot installed, with EIFS landing between $8 and $14 per square foot. That's roughly 15% to 35% more for EIFS, and the gap comes from the extra layers and the specialized labor they require.",
      },
      {
        type: "paragraph",
        text:
          "Labor is the bigger variable in both systems, accounting for well over half the total cost. That matters more for EIFS than for stucco, because an inexperienced EIFS crew can create moisture problems that cost five figures to correct. The cheapest EIFS bid is rarely the cheapest EIFS job.",
      },
      {
        type: "paragraph",
        text:
          "Worth noting on the other side of the ledger: EIFS reduces heating and cooling loads, so part of the premium comes back over time. How fast depends on the building, the climate and your energy rates.",
      },
      { type: "heading", level: 2, text: "Energy Efficiency" },
      {
        type: "paragraph",
        text: "This is where the stucco vs EIFS comparison stops being close.",
      },
      {
        type: "paragraph",
        text:
          "Traditional stucco has an insulation value of roughly R-0.20. It's essentially zero. Stucco protects the wall and looks good, but it does nothing to slow heat moving through the assembly. Whatever insulation the wall has is in the cavity between the studs, and heat still bridges straight through the framing.",
      },
      {
        type: "paragraph",
        text:
          "EIFS delivers R-4 to R-6 per inch of foam, and because that foam wraps the entire exterior it creates continuous insulation with no thermal bridging at the studs. On a Las Cruces building running air conditioning from May through October, that difference shows up on the utility bill every month.",
      },
      {
        type: "paragraph",
        text:
          "If energy performance is high on your list, EIFS is the stronger system and it isn't close.",
      },
      { type: "heading", level: 2, text: "Durability, Cracking and Impact" },
      { type: "paragraph", text: "Each system wins one of these." },
      {
        type: "paragraph",
        text:
          "**Cracking favors EIFS.** Cement stucco is rigid. As a building settles and as walls expand and contract through big temperature swings, that rigid coat cracks. Hairline cracks are normal and expected in traditional stucco. The flexible acrylic finish on EIFS moves with the building and resists cracking far better.",
      },
      {
        type: "paragraph",
        text:
          "**Impact favors stucco.** A hard cement wall shrugs off a knock that would dent or puncture foam. On the ground floor of a commercial building, near a parking area, or anywhere carts, mowers and vehicles come close to the wall, traditional stucco takes abuse better. EIFS can be specified with heavier reinforcing mesh in high-traffic zones, but the base material is still foam.",
      },
      {
        type: "paragraph",
        text:
          "There's no single winner here. The right answer depends on where the wall is and what's going to hit it.",
      },
      {
        type: "image",
        src: "/images/blog/stucco-vs-eifs/stucco-application-las-cruces.webp",
        alt:
          "Crew applying stucco to a two-storey Las Cruces home from scaffolding, with fresh finish on the lower walls",
        caption:
          "Both systems live or die on workmanship. The crew and the detailing matter more than which product is specified.",
      },
      { type: "heading", level: 2, text: "Lifespan and Maintenance" },
      {
        type: "paragraph",
        text:
          "Traditional stucco lasts a long time. Well-installed and reasonably maintained, 50 to 80 years is normal, and some stucco walls are still sound past the century mark. It's rigid, breathable and proven.",
      },
      {
        type: "paragraph",
        text:
          "EIFS typically runs 25 to 35 years when it's installed with proper drainage details. That's a shorter service life, but it's still decades, and it comes with the energy performance stucco can't match.",
      },
      {
        type: "paragraph",
        text:
          "Maintenance differs too. Traditional stucco needs crack repair and periodic repainting or sealing. EIFS needs sealant joints around windows, doors and expansion joints kept in good condition, plus attention to any impact damage before water gets behind the foam. Both benefit from an annual look, and a professional [roof and exterior inspection](/roofing/roof-inspections) catches the small issues on either system while they're still small.",
      },
      { type: "heading", level: 2, text: "Which Is Better for New Mexico?" },
      {
        type: "paragraph",
        text:
          "Climate changes the stucco vs EIFS math, and our climate has some specific characteristics.",
      },
      {
        type: "paragraph",
        text:
          "**Dry air helps both.** Southern New Mexico doesn't have the sustained humidity that caused most of the historic EIFS moisture failures in the Southeast. It also doesn't have heavy freeze-thaw cycling that stresses rigid cement coats in northern states.",
      },
      {
        type: "paragraph",
        text:
          "**UV and heat push toward insulation.** At our elevation, sun exposure is intense and summer heat is relentless. The continuous insulation in EIFS translates directly into lower cooling costs, which is why it's common on newer commercial buildings across Las Cruces and Doña Ana County.",
      },
      {
        type: "paragraph",
        text:
          "**Wall type matters.** Traditional stucco performs especially well over masonry substrates, which is why it remains the default on block homes. EIFS is designed for wood or steel-framed walls.",
      },
      {
        type: "paragraph",
        text:
          "**Monsoon still demands detailing.** Rain driven sideways by wind finds every gap around a window frame. Neither system forgives bad flashing. This is why the installer matters as much as the material.",
      },
      {
        type: "paragraph",
        text:
          "Practical summary for this region: traditional stucco for masonry walls, budget-driven projects, and high-abuse ground-level areas. EIFS for framed commercial buildings, energy-focused projects, and exteriors that call for carved trim, bands or arches.",
      },
      { type: "heading", level: 2, text: "How to Choose: 5 Questions to Ask" },
      {
        type: "list",
        ordered: true,
        items: [
          "**What is the wall made of?** Masonry substrates point toward traditional stucco. Framed walls open the door to EIFS.",
          "**How much does energy performance matter?** If cooling costs are a real line item, EIFS pays part of its premium back.",
          "**What's going to hit this wall?** High-traffic ground level favors the hard cement shell of stucco.",
          "**What's the budget horizon?** Lowest upfront cost favors stucco. Lowest lifetime operating cost favors EIFS.",
          "**Who's installing it?** This is the question people skip and the one that decides whether either system performs. Both live or die on flashing, drainage and detailing at windows, parapets and [roof-to-wall transitions](/blog/what-is-stucco-roofing).",
        ],
      },
      {
        type: "paragraph",
        text:
          "Whichever way the stucco vs EIFS decision goes, the [stucco and EIFS work](/stucco) itself has to be done right. A beautifully finished wall with bad flashing behind it is a failure waiting on a monsoon.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Stucco vs EIFS" },
      { type: "paragraph", text: "Three things to carry out of this comparison:" },
      {
        type: "list",
        ordered: true,
        items: [
          "Traditional stucco costs less upfront, lasts longer, and resists impact better. EIFS insulates dramatically better, resists cracking better, and allows shapes stucco can't.",
          "For New Mexico, EIFS makes the strongest case on framed commercial buildings where cooling costs matter, while traditional stucco remains the go-to on masonry walls and high-abuse areas.",
          "Installation quality outweighs the material choice. Both systems fail the same way, through water getting past bad flashing and sealant.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We install and repair both traditional stucco and EIFS on homes and commercial buildings, including parapet repair and full exterior finish work, so we can walk the property and quote either system honestly. To talk through the stucco vs EIFS decision for your building, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll come out, look at the property in person, and give you a clear recommendation.",
      },
    ],
  },
  {
    slug: "how-long-does-stucco-last",
    title: "How Long Does Stucco Last? Lifespan, Factors and Maintenance",
    excerpt:
      "Traditional cement stucco runs 50 to 80 years and EIFS 25 to 35, but bad installation or neglect can cut either in half. Here is what decides where a wall lands.",
    metaTitle: "How Long Does Stucco Last? Lifespan and Care Guide",
    metaDescription:
      "How long does stucco last? Traditional stucco runs 50 to 80 years. See what shortens it, the warning signs, and how to extend its lifespan.",
    category: "Stucco",
    tags: ["stucco", "maintenance", "lifespan", "cracks", "moisture", "exterior"],
    publishedAt: "2026-09-16",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/how-long-does-stucco-last/weathered-cracked-stucco-wall.webp",
    featuredImageAlt:
      "Weathered stucco wall on a Southwest home showing hairline cracks and pale patch repairs around a window",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/stucco",
      "/roofing/roof-maintenance",
      "/roofing/roof-inspections",
    ],
    keywords: [
      "how long does stucco last",
      "stucco lifespan",
      "stucco failing signs",
      "stucco repair las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Short answer: traditional cement stucco lasts 50 to 80 years, and some walls are still sound past the century mark. [Synthetic stucco, or EIFS](/blog/stucco-vs-eifs), typically runs 25 to 35 years. Poorly installed stucco of either kind can need major repairs inside 10 to 20 years.",
      },
      {
        type: "paragraph",
        text:
          "That's a wide spread, and the spread is the real story. Two stucco homes built the same year on the same street can end up decades apart, and the difference almost always comes down to installation, moisture management and maintenance rather than the material itself.",
      },
      {
        type: "paragraph",
        text:
          "This guide covers how long stucco lasts by type, what pushes a wall toward the high or low end of that range, how our New Mexico climate factors in, the warning signs that stucco is failing, and the maintenance routine that adds years.",
      },
      { type: "heading", level: 2, text: "How Long Does Stucco Last on Average?" },
      {
        type: "paragraph",
        text: "Stucco outlives most other exterior finishes by a wide margin.",
      },
      {
        type: "table",
        head: ["Finish", "Typical lifespan"],
        rows: [
          ["Traditional cement stucco", "50 to 80 years, sometimes 100+"],
          ["Synthetic stucco (EIFS)", "25 to 35 years with proper drainage"],
          ["Poorly installed stucco", "10 to 20 years before major repairs"],
          ["Vinyl siding", "20 to 30 years"],
          ["Wood siding", "20 to 40 years with high maintenance"],
        ],
      },
      {
        type: "paragraph",
        text:
          "Traditional stucco earns its number from composition. It's Portland cement, sand and lime, essentially a thin concrete shell over lath, and it's rigid, breathable and chemically stable. Synthetic systems trade some of that longevity for insulation value and crack resistance, which is a fair trade depending on the building.",
      },
      {
        type: "paragraph",
        text:
          "One thing worth separating out: appearance and protection decline before the wall actually fails. Stucco can look tired, faded and hairline-cracked at 20 years while still doing its job. That's a maintenance conversation, not a replacement conversation.",
      },
      { type: "heading", level: 2, text: "What Determines Stucco Lifespan?" },
      {
        type: "paragraph",
        text: "Five factors decide where a given wall lands in the range.",
      },
      { type: "heading", level: 3, text: "Installation Quality and Curing" },
      {
        type: "paragraph",
        text:
          "This is the single biggest variable. Traditional stucco is applied in three coats and each one has to cure properly, which can take 48 hours to a week per layer. Rushing the cure, mixing the material wrong, skipping expansion joints, or installing over an incomplete drainage plane all shorten lifespan dramatically. A wall that fails at 15 years usually failed on day one.",
      },
      { type: "heading", level: 3, text: "Climate and UV Exposure" },
      {
        type: "paragraph",
        text:
          "Sun, heat and temperature swings work the wall constantly. UV degrades surface finishes and paint. Daily expansion and contraction opens hairline cracks. Neither is fatal on its own, but both accelerate everything else.",
      },
      { type: "heading", level: 3, text: "Moisture and Drainage" },
      {
        type: "paragraph",
        text:
          "Water is what actually kills stucco. Not the rain hitting the face of the wall, which dries out quickly, but water that gets behind the system and can't escape. That happens through bad flashing at windows, missing weep screeds at the base, failed parapet caps, and sprinklers aimed at the wall. Once water is trapped behind stucco, it damages the lath and the sheathing while the surface still looks fine.",
      },
      { type: "heading", level: 3, text: "Maintenance Habits" },
      {
        type: "paragraph",
        text:
          "Washing, crack sealing and repainting are the cheap interventions that keep a wall in the 50-plus-year category. Skipping them for a decade is how an easy patch becomes a section replacement.",
      },
      { type: "heading", level: 3, text: "Paint and Coatings" },
      {
        type: "paragraph",
        text:
          "Painted stucco generally needs repainting every 7 to 10 years. The paint isn't just cosmetic. It's a sacrificial layer taking UV and weather that would otherwise hit the stucco directly.",
      },
      { type: "heading", level: 2, text: "Does Stucco Last Longer in New Mexico?" },
      {
        type: "paragraph",
        text: "In some ways, yes. Our climate is kinder to stucco than most.",
      },
      {
        type: "paragraph",
        text:
          "**What helps.** Dry air means very little mold, mildew or algae, the organic growth that plagues stucco in humid regions. We also get minimal freeze-thaw cycling compared with northern states, which spares the wall the repeated expansion of water freezing inside hairline cracks. Traditional stucco is genuinely well suited to hot, dry climates.",
      },
      {
        type: "paragraph",
        text:
          "**What hurts.** UV intensity at our elevation is high, and it works on surface finishes relentlessly. Daily temperature swings of 30 to 40 degrees drive thermal expansion and contraction that opens cracks over time. Monsoon rain arrives hard and sideways, testing every window flashing and parapet cap at once. And blowing dust builds up on the surface and holds moisture against it.",
      },
      {
        type: "paragraph",
        text:
          "Net result: a well-installed, maintained stucco wall in Las Cruces can comfortably reach the upper end of the 50 to 80 year range. A neglected one cracks, takes on water during monsoon season, and starts failing much sooner.",
      },
      { type: "heading", level: 2, text: "Signs Your Stucco Is Failing" },
      {
        type: "paragraph",
        text:
          "Knowing how long stucco lasts matters less than knowing what the end of its life looks like. Watch for these.",
      },
      {
        type: "list",
        items: [
          "**Hairline cracks.** Normal and expected. Worth sealing, not worth panicking over.",
          "**Wide or diagonal cracks.** Cracks wider than about 1/8 inch, or running diagonally from window and door corners, point to structural movement.",
          "**Bulging or soft spots.** Press the wall. Any give or sponginess means the stucco has separated from the lath, usually because water got behind it.",
          "**Hollow sound when tapped.** Same problem, detected by ear.",
          "**Staining and dark streaks.** Especially below windows, at parapets and near roof lines. Water is running where it shouldn't.",
          "**Efflorescence.** White mineral deposits on the surface mean moisture is moving through the wall and leaving salts behind.",
          "**Peeling or blistering paint.** Often the first visible sign of trapped moisture.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Catching these early is the difference between a patch and a rebuild. Cracks that have been ignored for years cost far more to fix than fresh ones, because moisture migrates sideways behind the wall and damages a much larger area than what shows on the surface.",
      },
      {
        type: "image",
        src: "/images/blog/how-long-does-stucco-last/stucco-cracks-patches-detail.webp",
        alt:
          "Close view of a stucco wall with fine cracking and mismatched patch repairs beside a window opening",
        caption:
          "Hairline cracks and unblended patches. Neither is an emergency, but both are the point at which sealing is cheap.",
      },
      { type: "heading", level: 2, text: "How to Make Stucco Last Longer" },
      { type: "paragraph", text: "The maintenance routine is not demanding." },
      {
        type: "list",
        ordered: true,
        items: [
          "**Wash the walls two to three times a year.** A garden hose and a soft brush handle most of it. Skip high-pressure washing, which erodes the finish.",
          "**Inspect annually.** Walk the perimeter and look for the warning signs above. Pay extra attention to the base of walls, around windows, and where the wall meets the roof.",
          "**Seal cracks early.** A hairline crack sealed this year is a few dollars. The same crack after three monsoon seasons is a patch and possibly lath repair.",
          "**Repaint or reseal every 7 to 10 years.** This is the highest-value maintenance item for UV protection.",
          "**Keep sprinklers off the wall.** Repeated soaking at the base is one of the most common causes of premature stucco failure on residential properties.",
          "**Check the roof transitions.** [Parapet caps, canales and roof-to-wall flashing](/blog/what-is-stucco-roofing) are where most stucco water damage originates. A [roof maintenance plan](/roofing/roof-maintenance) that includes these transitions protects the walls as much as the roof.",
        ],
      },
      { type: "heading", level: 2, text: "Repair or Replace?" },
      {
        type: "paragraph",
        text:
          "Stucco rarely needs full replacement. In most cases the problem is localized and a targeted repair solves it without touching the rest of the wall.",
      },
      {
        type: "paragraph",
        text:
          "Full replacement makes sense when moisture has damaged the lath and sheathing across large sections, when the original installation was fundamentally wrong (no drainage plane, no expansion joints, wrong mix), or when repairs have become continuous across the whole exterior.",
      },
      {
        type: "paragraph",
        text:
          "The honest test is what's behind the surface. A crack is a surface symptom. Whether the wall behind it is sound decides the scope of work, and that takes an in-person look. A professional [inspection](/roofing/roof-inspections) will tell you which category you're in before you spend anything.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Stucco Lifespan" },
      {
        type: "paragraph",
        text:
          "So, how long does stucco last? Traditional stucco runs 50 to 80 years, EIFS runs 25 to 35, and both can fall well short if they were installed badly or left unmaintained. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Installation quality and moisture management determine lifespan more than the material itself.",
          "New Mexico's dry climate is good for stucco, but UV, thermal cycling and monsoon rain still demand annual attention.",
          "Small maintenance items, washing, crack sealing and repainting every 7 to 10 years, are what separate a 30-year wall from an 80-year wall.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We handle everything from a single [stucco patch](/stucco) to full exterior finish work, including parapet repair and the roof-to-wall details where most stucco water damage starts. If your stucco is cracking, staining or sounding hollow, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll come out, assess the actual condition, and give you an honest recommendation.",
      },
    ],
  },
  {
    slug: "how-often-should-a-roof-be-replaced",
    title: "How Often Should a Roof Be Replaced? Timelines by Material",
    excerpt:
      "Asphalt shingles run 20 to 30 years, tile and metal far longer, flat membranes in between. But warning signs outrank the calendar, and New Mexico sun moves every number.",
    metaTitle: "How Often Should a Roof Be Replaced? By Material",
    metaDescription:
      "How often should a roof be replaced? See replacement timelines by material, the warning signs that beat age, and what New Mexico sun does.",
    category: "Roofing",
    tags: [
      "roof replacement",
      "lifespan",
      "inspection",
      "ventilation",
      "maintenance",
      "materials",
    ],
    publishedAt: "2026-09-16",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/how-often-should-a-roof-be-replaced/roof-tear-off-deck-exposed.webp",
    featuredImageAlt:
      "Two roofers stripping tiles from a roof slope, exposing the timber battens and deck underneath",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/roof-replacements",
      "/roofing/roof-inspections",
      "/roofing/roof-maintenance",
    ],
    keywords: [
      "how often should a roof be replaced",
      "roof replacement timeline",
      "roof lifespan by material",
      "roof replacement las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Most homeowners start asking this question somewhere around year fifteen. The roof looks a little tired, a neighbor just replaced theirs, and nobody wants to be the house with the tarp on it after a monsoon.",
      },
      {
        type: "paragraph",
        text:
          "So how often should a roof be replaced? For asphalt shingles, roughly every 20 to 30 years. Tile and metal go much longer. Flat roof membranes sit in the middle. But material is only the starting point, because two identical roofs installed the same week can end up a decade apart, and the warning signs matter more than the number on the calendar.",
      },
      {
        type: "paragraph",
        text:
          "Here's the breakdown by material, what shifts the timeline, and how to tell whether your roof is genuinely done or just needs attention.",
      },
      {
        type: "heading",
        level: 2,
        text: "How Often Should a Roof Be Replaced by Material?",
      },
      {
        type: "table",
        head: ["Roofing material", "Typical replacement timeline"],
        rows: [
          ["3-tab asphalt shingles", "15 to 20 years"],
          ["Architectural asphalt shingles", "25 to 30 years"],
          ["TPO and other flat roof membranes", "15 to 30 years"],
          ["Metal roofing", "40 to 70 years"],
          ["Clay and concrete tile", "40 to 75 years"],
          ["Slate", "75 to 100 years or more"],
        ],
      },
      { type: "paragraph", text: "A few notes on those ranges." },
      {
        type: "paragraph",
        text:
          "**Asphalt shingles** dominate residential roofing and carry the shortest lifespan on the list. The jump from [3-tab to architectural](/blog/what-is-asphalt-shingle-roofing) is significant, which is why architectural shingles have become the standard on new installations.",
      },
      {
        type: "paragraph",
        text:
          "**Flat roof membranes** like [TPO](/blog/what-is-tpo-roofing) trend toward the longer end of their range when professionally installed, and membrane thickness plays a large role. A [coating applied at the right time](/blog/how-long-does-roof-coating-last) can extend that life further.",
      },
      {
        type: "paragraph",
        text:
          "**Tile roofs** carry a catch worth knowing. The tiles themselves last 40 to 75 years, but the underlayment beneath them usually fails at 20 to 30. That means many [tile roofs](/roofing/tile-roofing) need an underlayment replacement, not a full roof replacement, at the halfway mark.",
      },
      {
        type: "paragraph",
        text:
          "**Metal roofs** are often a once-in-a-lifetime purchase on a home, which is why the higher upfront cost pencils out for owners planning to stay.",
      },
      { type: "heading", level: 2, text: "Why Two Identical Roofs Age Differently" },
      {
        type: "paragraph",
        text: "Material sets the range. These four factors decide where in it you land.",
      },
      {
        type: "paragraph",
        text:
          "**Installation quality.** Improper nailing, missing starter strips, poorly executed flashing and skipped underlayment all shorten a roof's life regardless of what shingle went on top. Most premature failures trace back here.",
      },
      {
        type: "paragraph",
        text:
          "**Ventilation.** This is the quiet one. An attic without balanced intake and exhaust traps heat underneath the roof deck, cooking shingles from below. It can take years off a roof and, in many cases, voids the manufacturer's warranty.",
      },
      {
        type: "paragraph",
        text:
          "**Maintenance.** Roofs that get looked at annually and repaired promptly outlast roofs that get ignored by several years. The difference between a neighbor replacing at 18 years and you replacing at 27 often comes down to whether small problems got handled.",
      },
      {
        type: "paragraph",
        text:
          "**Climate.** The same shingle that reaches 30 years in a mild climate may only manage 15 to 20 under relentless sun and storm exposure. Weather isn't negotiable, and it's the factor most likely to move your timeline.",
      },
      { type: "heading", level: 2, text: "How New Mexico Climate Shortens the Timeline" },
      {
        type: "paragraph",
        text:
          "If you're asking how often a roof should be replaced in Las Cruces specifically, expect the lower-to-middle part of each range rather than the top.",
      },
      {
        type: "paragraph",
        text:
          "**UV at elevation.** Sun exposure here is intense and year-round. On asphalt shingles it breaks down the bond holding granules in place and dries the asphalt underneath until it becomes brittle. On flat roof membranes it drives oxidation and chalking.",
      },
      {
        type: "paragraph",
        text:
          "**Thermal cycling.** A 30 to 40 degree swing between a summer afternoon and that night is routine. Every cycle expands and contracts roofing materials, loosening fasteners, stressing seams and working on the seal strips that hold shingles down.",
      },
      {
        type: "paragraph",
        text:
          "**Monsoon wind and rain.** Summer downbursts regularly hit 50 to 70 mph in the Mesilla Valley, right at the failure threshold for older 3-tab shingles. Driven rain tests every flashing detail at once, especially where roofs meet stucco walls and parapets.",
      },
      {
        type: "paragraph",
        text:
          "**Dust.** Blowing dust settles into valleys, gutters and drains, holding moisture and blocking drainage on flat roofs.",
      },
      {
        type: "paragraph",
        text:
          "Practical translation: architectural shingles that are rated for 30 years typically deliver 20 to 25 here. Tile and metal still hold their long ranges. Flat membranes benefit enormously from a reflective coating.",
      },
      {
        type: "image",
        src:
          "/images/blog/how-often-should-a-roof-be-replaced/completed-shingle-roof-aerial.webp",
        alt:
          "Aerial view of a finished architectural shingle roof on a Las Cruces home, with vents and ridge lines visible",
        caption:
          "A completed shingle roof. Installation quality and attic ventilation decide whether it reaches the top or bottom of its range.",
      },
      { type: "heading", level: 2, text: "Warning Signs That Matter More Than Age" },
      {
        type: "paragraph",
        text: "Age is a planning tool, not a diagnosis. These signs decide the timing.",
      },
      {
        type: "list",
        items: [
          "**Curling, cupping or cracked shingles** across a whole slope rather than in one spot",
          "**Bald patches and granules in the gutters** after storms",
          "**Missing shingles or lifted tiles** following a wind event",
          "**Sagging or a wavy roofline**, which points to decking or structural problems rather than surface wear",
          "**Daylight or water stains visible in the attic**",
          "**Repeat leaks in different locations**, which usually means the system has reached the end rather than one detail failing",
          "**Rising cooling bills** with no other explanation, often tied to failing ventilation or a heat-absorbing roof surface",
          "**Ponding water that stays for days** on a flat roof",
        ],
      },
      {
        type: "paragraph",
        text:
          "One of these in one spot is a [roof repair](/roofing/roof-repairs). Several of them across the whole roof on a system in its third decade is a replacement conversation.",
      },
      { type: "heading", level: 2, text: "Repair or Replace?" },
      {
        type: "paragraph",
        text:
          "This is the practical question underneath \"how often should a roof be replaced,\" and three things settle it.",
      },
      {
        type: "paragraph",
        text:
          "**Age relative to material.** A ten-year-old architectural shingle roof with storm damage is a repair. A 27-year-old one with the same damage is a replacement.",
      },
      {
        type: "paragraph",
        text:
          "**Extent of the damage.** A useful rule of thumb: when repairs would cover roughly 30% or more of the roof surface, replacement usually makes better financial sense. At that point you're paying most of a replacement price for a patchwork roof with mismatched materials and no new warranty.",
      },
      {
        type: "paragraph",
        text:
          "**Repair frequency.** One repair in five years is normal ownership. Three repairs in two years in different locations means the roof is telling you something.",
      },
      {
        type: "paragraph",
        text:
          "Worth adding: replacing too early wastes money, and waiting too long invites leaks, decking rot and emergency work that costs far more than a planned [roof replacement](/roofing/roof-replacements) would have. The goal is to plan the replacement rather than react to it.",
      },
      { type: "heading", level: 2, text: "How to Get More Years Out of Your Roof" },
      {
        type: "list",
        items: [
          "**Inspect annually**, and again after any significant storm. A professional [roof inspection](/roofing/roof-inspections) catches lifted flashing, failed sealant and early decking issues while they're minor.",
          "**Keep gutters, valleys and drains clear** so water leaves the roof instead of sitting on it.",
          "**Fix small problems immediately.** Nearly every major roof failure started as something small and cheap.",
          "**Verify attic ventilation** is balanced at intake and exhaust.",
          "**Consider a coating on flat roofs.** A reflective coating applied before the membrane degrades can add a decade or more to a structurally sound flat roof.",
          "**Get on a maintenance schedule.** Routine [roof maintenance](/roofing/roof-maintenance) reliably adds years, which is a strong return on a small annual cost.",
        ],
      },
      { type: "heading", level: 2, text: "The Bottom Line on Roof Replacement Timing" },
      {
        type: "paragraph",
        text:
          "So, how often should a roof be replaced? Plan on 20 to 30 years for asphalt shingles, 15 to 30 for flat membranes, 40 to 75 for tile and metal, with our climate pushing toward the lower half of those ranges. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Material sets the range, but installation quality, ventilation, maintenance and climate decide where you land in it.",
          "Warning signs outrank the calendar. A 15-year-old roof with system-wide failure needs replacing before a well-maintained 25-year-old roof does.",
          "On tile roofs, the underlayment usually needs replacing long before the tiles do. Know which job you actually need.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We install, repair and replace asphalt shingle, tile, metal and flat roofs for homes and commercial buildings, and we'll tell you honestly when a roof still has years left in it. To find out where yours stands, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll inspect the property in person and give you a clear recommendation and quote.",
      },
    ],
  },
  {
    slug: "how-long-does-roof-coating-last",
    title: "How Long Does Roof Coating Last? Lifespan by Coating Type",
    excerpt:
      "Roof coatings run 5 to 20 years depending almost entirely on chemistry. Silicone leads on flat roofs, and mil thickness and surface prep move the number more than brand.",
    metaTitle: "How Long Does Roof Coating Last? By Coating Type",
    metaDescription:
      "How long does roof coating last? Acrylic runs 5 to 10 years and silicone 10 to 20. See what affects lifespan and when to recoat a flat roof.",
    category: "Commercial Roofing",
    tags: [
      "roof coating",
      "silicone",
      "flat roof",
      "commercial",
      "restoration",
      "maintenance",
    ],
    publishedAt: "2026-09-16",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/how-long-does-roof-coating-last/silicone-coating-flat-roof.webp",
    featuredImageAlt:
      "Coating buckets and a brush on a flat roof beside a freshly coated white surface, with crew working behind the parapet",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/silicone-roof-restoration",
      "/roofing/specialty-roofing",
      "/roofing/roof-maintenance",
    ],
    keywords: [
      "how long does roof coating last",
      "silicone roof coating lifespan",
      "flat roof recoat",
      "roof restoration las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "A roof coating is one of the better deals in commercial roofing. Instead of tearing off a flat roof that's still structurally sound, you clean it, repair the details, and seal the whole thing under a seamless membrane for a fraction of the cost. The obvious question is how long that actually buys you.",
      },
      {
        type: "paragraph",
        text:
          "So how long does roof coating last? Between 5 and 20 years, depending almost entirely on which coating goes down. Silicone sits at the top of that range. Acrylic sits at the bottom. And within each type, application thickness and surface prep move the number more than most building owners expect.",
      },
      {
        type: "paragraph",
        text:
          "This guide breaks down lifespan by coating type, why silicone dominates on flat roofs, what shortens a coating's life, how the substrate underneath changes the math, and how to know when it's time to recoat.",
      },
      { type: "heading", level: 2, text: "How Long Does Roof Coating Last by Type?" },
      {
        type: "table",
        head: ["Coating type", "Typical lifespan", "Best suited for"],
        rows: [
          ["Acrylic", "5 to 10 years", "Well-draining sloped and low-slope roofs"],
          ["Silicone", "10 to 20 years", "Flat roofs, ponding water, high UV"],
          ["Polyurethane", "10 to 15 years", "High-traffic roofs, impact resistance"],
          ["Asphalt-based", "5 to 7 years", "Budget repairs, built-up roofs"],
        ],
      },
      {
        type: "paragraph",
        text:
          "Acrylic coatings are the affordable, UV-resistant option, and they perform well on roofs that shed water quickly. Their weakness is standing water, which breaks them down.",
      },
      {
        type: "paragraph",
        text:
          "Silicone is the durability leader. Properly applied silicone commonly delivers 10 to 20 years, and systems that were applied correctly have run well past their 20-year warranty period.",
      },
      {
        type: "paragraph",
        text:
          "Polyurethane trades some weathering performance for toughness, which makes it the pick where foot traffic and impact are the main threats. Some polyurethane systems require an acrylic topcoat.",
      },
      {
        type: "paragraph",
        text:
          "Asphalt-based coatings are the shortest-lived option and are generally a stopgap rather than a restoration.",
      },
      { type: "heading", level: 2, text: "Why Silicone Lasts Longest on Flat Roofs" },
      {
        type: "paragraph",
        text:
          "For flat roofs in this region, silicone is usually the right answer, and there are four reasons.",
      },
      {
        type: "paragraph",
        text:
          "**It handles ponding water.** This is the big one. Flat roofs pond, especially where drainage was never perfect. Acrylic coatings soften and degrade under standing water. Silicone doesn't, which is why it's the standard recommendation for flat and low-slope surfaces.",
      },
      {
        type: "paragraph",
        text:
          "**It's UV stable.** Silicone holds up to constant sun exposure better than the alternatives, which matters at our elevation more than it does in most of the country.",
      },
      {
        type: "paragraph",
        text:
          "**Thickness drives lifespan.** Silicone is typically applied at 20 to 30 mils once cured, and warranty tiers track that thickness closely, roughly 10 years at 20 mils, 15 years at 25 mils, and 20 years at 30 mils. A coating applied thinner than specified will not reach its advertised life, which is why mil thickness belongs in your quote.",
      },
      {
        type: "paragraph",
        text:
          "**Rain timing is forgiving.** Silicone continues to perform even if rain arrives shortly after application. Acrylic and urethane coatings can be damaged or partially washed off by the same event, which matters during monsoon season.",
      },
      { type: "heading", level: 2, text: "What Shortens a Roof Coating's Life" },
      {
        type: "paragraph",
        text: "Most coatings that underperform were compromised before they cured.",
      },
      {
        type: "paragraph",
        text:
          "**Poor surface preparation.** This is the number one cause of premature coating failure. The roof has to be clean, dry and sound before anything goes down. A coating applied over dirt, chalk or residue never bonds properly, no matter how good the product is. A reputable contractor will also run an adhesion test before coating the entire roof.",
      },
      {
        type: "paragraph",
        text:
          "**Thin application.** Spreading material further than specified saves money on day one and costs years on the back end.",
      },
      {
        type: "paragraph",
        text:
          "**Ponding water on the wrong product.** Acrylic over a ponding roof is a short-lived coating.",
      },
      {
        type: "paragraph",
        text:
          "**Foot traffic.** HVAC service, solar maintenance and general roof access wear coatings down at access points. Walk pads solve most of it.",
      },
      {
        type: "paragraph",
        text:
          "**Punctures and mechanical damage.** Dropped tools and dragged equipment break the film. Small punctures let water under the coating, which is exactly what the coating was installed to prevent.",
      },
      {
        type: "paragraph",
        text:
          "**Skipped maintenance.** Coatings are low-maintenance, not maintenance-free. Debris, clogged drains and unaddressed damage all shorten service life.",
      },
      {
        type: "image",
        src:
          "/images/blog/how-long-does-roof-coating-last/flat-roof-crew-materials.webp",
        alt:
          "Roofing crew moving rolled material up a ladder hoist onto a white coated flat roof",
        caption:
          "Surface prep and what sits under the coating drive lifespan as much as the product that goes over it.",
      },
      { type: "heading", level: 2, text: "How Substrate Affects Lifespan" },
      {
        type: "paragraph",
        text: "The roof underneath changes the answer to how long roof coating lasts.",
      },
      {
        type: "list",
        items: [
          "**Metal and single-ply membranes** (including [TPO](/blog/what-is-tpo-roofing)): roughly 15 to 25 years for silicone. These substrates are stable and take coatings well.",
          "**Concrete and built-up roofs**: roughly 15 to 20 years.",
          "**Asphalt-based roofs**: roughly 10 to 15 years. The substrate itself continues aging under the coating.",
        ],
      },
      {
        type: "paragraph",
        text:
          "This is why two buildings that get coated the same week by the same crew can be on different recoat schedules. Substrate condition and type matter as much as the product.",
      },
      { type: "heading", level: 2, text: "How Coating Performs in New Mexico Sun" },
      {
        type: "paragraph",
        text:
          "Southern New Mexico is close to ideal territory for roof coatings, with one caveat.",
      },
      {
        type: "paragraph",
        text:
          "The advantage is reflectivity. A light-colored coating reflects a large share of solar energy instead of absorbing it into the building, which lowers roof surface temperature and cuts the cooling load underneath. On a commercial building running air conditioning from May through October, that's a measurable operating saving on top of the waterproofing.",
      },
      {
        type: "paragraph",
        text:
          "The caveat is UV intensity. Sun exposure at elevation works on any exposed surface, and over time coatings chalk, thin and lose some reflectivity. That's expected wear, not failure, and it's exactly what recoating addresses.",
      },
      {
        type: "paragraph",
        text:
          "There's also a practical scheduling note. Coating work needs dry conditions and appropriate temperatures, which makes spring and early fall the natural windows here, before or after monsoon season.",
      },
      { type: "heading", level: 2, text: "Signs Your Coating Needs Recoating" },
      { type: "paragraph", text: "Coatings give plenty of warning. Watch for:" },
      {
        type: "list",
        items: [
          "**Chalking.** A powdery residue on the surface means the coating is weathering and losing material.",
          "**Reduced reflectivity.** A roof that used to be bright white and now reads gray is losing part of its energy benefit.",
          "**Visible thinning.** Areas where the substrate texture is showing through.",
          "**Cracking or flaking**, particularly at seams, penetrations and parapet terminations.",
          "**Age thresholds.** Roughly 5 to 10 years for acrylics and 10 to 15 or more for silicone is when inspection should get more serious.",
          "**New ponding areas** that hold water longer than 48 hours.",
        ],
      },
      {
        type: "paragraph",
        text:
          "A professional [roof inspection](/roofing/roof-inspections) can measure remaining coating thickness and assess reflectivity, which takes the guesswork out of timing.",
      },
      { type: "heading", level: 2, text: "Recoating vs Replacing the Roof" },
      {
        type: "paragraph",
        text:
          "The strongest argument for coatings is what happens at the end of their life. A silicone coating that's reaching the end of its service life doesn't mean a new roof. It usually means a recoat.",
      },
      {
        type: "paragraph",
        text:
          "Because the existing coating stays in place and a fresh layer goes over it, a recoat is faster, cheaper and less disruptive than the original restoration, and it resets the clock for another decade or more. A flat roof can cycle through recoats for a very long time as long as the deck and structure stay sound. One rule to keep in mind: a recoat should match the original chemistry, so a silicone roof gets silicone.",
      },
      {
        type: "paragraph",
        text:
          "[Replacement](/blog/how-often-should-a-roof-be-replaced) becomes the right call when the deck is compromised, when insulation below has taken on significant moisture, or when the membrane has failed too broadly for coating to be a legitimate fix. Short of that, a [silicone roof restoration](/roofing/silicone-roof-restoration) is typically a fraction of the cost of a tear-off and keeps the building in service while the work happens.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Roof Coating Lifespan" },
      {
        type: "paragraph",
        text:
          "So, how long does roof coating last? Acrylic gets 5 to 10 years, silicone 10 to 20, polyurethane 10 to 15, and asphalt-based 5 to 7. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "For flat roofs in New Mexico, silicone is usually the right choice because it handles ponding water and intense UV better than the alternatives.",
          "Mil thickness and surface preparation determine lifespan more than brand. Ask what thickness you're getting and how the roof will be prepped.",
          "Coatings are renewable. A well-timed recoat extends the roof another decade or more without a tear-off.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We provide silicone and elastomeric restoration for commercial and residential flat roofs, along with [specialty roofing systems](/roofing/specialty-roofing) and ongoing [roof maintenance](/roofing/roof-maintenance). If you want to know whether your flat roof is a candidate for coating or due for a recoat, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll inspect the roof in person and give you an honest recommendation.",
      },
    ],
  },
  {
    slug: "how-long-do-tile-roofs-last",
    title: "How Long Do Tile Roofs Last? Clay, Concrete and the Underlayment Catch",
    excerpt:
      "The tiles last 50 to 100 years. The underlayment beneath them lasts 20 to 30, and that is the number that decides when your roof leaks. Here is what that means for a tile roof in New Mexico.",
    metaTitle: "How Long Do Tile Roofs Last? Clay vs Concrete",
    metaDescription:
      "How long do tile roofs last? Clay runs 50 to 100 years, concrete 40 to 75, but the underlayment fails at 20 to 30. Here's what that means.",
    category: "Roofing Materials",
    tags: [
      "tile roof",
      "clay tile",
      "concrete tile",
      "underlayment",
      "lifespan",
      "materials",
      "flashing",
      "maintenance",
    ],
    publishedAt: "2026-09-25",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/how-long-do-tile-roofs-last/clay-tile-roof-underlayment-install.webp",
    featuredImageAlt:
      "Clay barrel tile roof mid-installation on a Southwest home, with white underlayment exposed and tiles stacked in rows ready to lay",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/tile-roofing",
      "/roofing/roof-inspections",
      "/roofing/roof-replacements",
    ],
    keywords: [
      "how long do tile roofs last",
      "tile roof lifespan",
      "clay vs concrete tile roof",
      "tile roof underlayment replacement",
      "tile roofing las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Short answer: the tiles last 50 to 100 years. Clay sits at the top of that range and often beyond it, concrete lands between 40 and 75, and slate can outlive the house. Tile is the longest-lasting roofing material most homeowners will ever buy.",
      },
      {
        type: "paragraph",
        text:
          "But there's a catch, and it's the part nobody mentions at the sales table. The tiles aren't what keeps water out of your house. The underlayment beneath them does that job, and underlayment lasts 20 to 30 years. So the honest answer to how long do tile roofs last is really two answers: the tiles go the distance, and the waterproof layer under them needs replacing at roughly the halfway mark.",
      },
      {
        type: "paragraph",
        text:
          "This guide breaks down tile roof lifespan by material, explains why the underlayment is the number that actually matters, covers what shortens a tile roof's life, looks at how tile performs in southern New Mexico, and walks through the repair, relay or replace decision.",
      },
      { type: "heading", level: 2, text: "How Long Do Tile Roofs Last by Material?" },
      {
        type: "table",
        head: ["Roofing material", "Typical lifespan"],
        rows: [
          ["Clay tile", "50 to 100 years, often longer"],
          ["Concrete tile", "40 to 75 years"],
          ["Slate", "75 to 200 years"],
          ["Tile roof underlayment (felt)", "20 to 30 years"],
          ["Tile roof underlayment (synthetic)", "25 to 40 years"],
          ["Asphalt shingles (for comparison)", "15 to 30 years"],
        ],
      },
      {
        type: "paragraph",
        text:
          "**Clay tile** is fired at high temperature, which makes it chemically stable, non-combustible and nearly immune to UV. Its color is baked in, so it doesn't fade the way surface-colored materials do. Clay is the classic choice on Spanish and Mediterranean-style homes across Las Cruces and Mesilla, and many of those roofs have been in place for half a century.",
      },
      {
        type: "paragraph",
        text:
          "**Concrete tile** is molded from sand, cement and water, then colored on the surface or throughout. It's heavier than clay, less expensive, and still remarkably durable. Its main long-term weakness is that surface color fades over time and the material is slightly more porous, which matters more in wet climates than here.",
      },
      {
        type: "paragraph",
        text:
          "**Slate** is quarried stone and lasts essentially forever, but it's expensive, very heavy, and rare in this region.",
      },
      {
        type: "paragraph",
        text:
          "Compared with [asphalt shingles](/blog/what-is-asphalt-shingle-roofing), tile lasts two to four times longer. That's the headline number. The next section is the footnote that changes how you should read it.",
      },
      {
        type: "image",
        src: "/images/blog/how-long-do-tile-roofs-last/concrete-tile-roof-desert-home.webp",
        alt:
          "Single-storey stucco home with a brown concrete tile roof and desert landscaping, photographed in late afternoon light",
        caption:
          "Concrete tile on a desert home. The tiles here will outlast two or three sets of the underlayment sitting beneath them.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why the Underlayment Matters More Than the Tile",
      },
      {
        type: "paragraph",
        text:
          "Here's what most homeowners don't realize about how long tile roofs last: tile is not a waterproof system on its own. Tiles shed the bulk of rainfall, but wind-driven rain, condensation and water running under laps all reach the layer beneath. That layer, the underlayment, is the actual waterproof membrane. It sits directly on the roof deck and it's what keeps the house dry.",
      },
      {
        type: "paragraph",
        text:
          "Traditional asphalt-saturated felt underlayment lasts 20 to 30 years. Modern synthetic underlayments stretch that to 25 or 40 depending on the product. Either way, the underlayment reaches the end of its life decades before the tiles do.",
      },
      {
        type: "paragraph",
        text:
          "What that looks like in practice is a roof that appears perfect from the street and leaks anyway. The tiles are intact. The underlayment beneath them has dried out, cracked and pulled away from fasteners, and water is finding the deck. This is the single most common reason a [tile roof](/roofing/tile-roofing) fails, and it's the reason \"how long do tile roofs last\" needs a two-part answer.",
      },
      {
        type: "callout",
        title: "The two-part answer",
        text:
          "The tiles are a 50 to 100 year material. The waterproofing under them is a 20 to 30 year material. Budget for the second one and the first one will outlive you.",
      },
      {
        type: "paragraph",
        text:
          "The good news is that underlayment replacement doesn't mean a new roof. More on that below.",
      },
      { type: "heading", level: 2, text: "What Shortens a Tile Roof's Life" },
      {
        type: "paragraph",
        text: "Tile is tough, but the system around it has weak points.",
      },
      {
        type: "paragraph",
        text:
          "**Installation quality.** Tiles under about 9 pounds per square foot need one fastener each, heavier tiles need more, and every tile needs proper headlap and sidelap. Skipped fasteners and rushed layout let monsoon wind lift tiles and let water run under them. A poorly installed tile roof can fail in 20 years instead of 75.",
      },
      {
        type: "paragraph",
        text:
          "**Foot traffic.** Tile cracks under concentrated weight. HVAC technicians, satellite installers and homeowners who walk the roof wrong are responsible for a large share of broken tiles. Every cracked tile is a spot where the underlayment takes direct sun and direct water.",
      },
      {
        type: "paragraph",
        text:
          "**Clogged valleys and debris.** Leaves, dust and nesting material pile up in valleys and behind chimneys, hold moisture against the underlayment and block drainage. On tile roofs, debris accumulation is a slow underlayment killer.",
      },
      {
        type: "paragraph",
        text:
          "**Flashing failures.** Where tile meets a stucco wall, a chimney or a skylight, metal flashing does the waterproofing. Flashing rarely lasts as long as tile and it's the second most common leak source after underlayment. On a stucco home those [roof-to-wall transitions](/blog/what-is-stucco-roofing) deserve particular attention.",
      },
      {
        type: "paragraph",
        text:
          "**Poor attic ventilation.** Heat trapped under the deck cooks the underlayment from below and accelerates its breakdown.",
      },
      { type: "heading", level: 2, text: "How Do Tile Roofs Hold Up in New Mexico?" },
      { type: "paragraph", text: "Very well, with a few things to watch." },
      {
        type: "paragraph",
        text:
          "**What works in tile's favor.** Dry heat and intense UV are exactly the conditions clay and concrete were designed for. Tile doesn't dry out, curl or shed granules like asphalt. Its thermal mass and the air gap beneath each tile also cut heat transfer into the attic, which shows up on summer cooling bills. And southern New Mexico gets little of the freeze-thaw cycling that cracks concrete tile in northern climates, and almost none of the moss and algae that plague tile in humid regions.",
      },
      {
        type: "paragraph",
        text:
          "**What to watch.** Surface color fading on concrete tile becomes noticeable at 15 to 20 years. It's cosmetic, not structural, but worth knowing. Monsoon downbursts hit 50 to 70 mph in the Mesilla Valley and will lift any tile that was under-fastened or has slipped. Blowing dust builds up in valleys faster here than in most places. And the same UV that tile shrugs off is brutal on any exposed underlayment, which is why one cracked tile left alone for two summers can become a leak.",
      },
      {
        type: "paragraph",
        text:
          "Net result: a well-installed, maintained tile roof in Las Cruces can comfortably reach the upper end of its range. The underlayment still needs attention at 20 to 30 years regardless.",
      },
      { type: "heading", level: 2, text: "Signs Your Tile Roof Needs Attention" },
      {
        type: "paragraph",
        text:
          "Knowing how long tile roofs last matters less than spotting the signals that yours needs work.",
      },
      {
        type: "list",
        items: [
          "**Cracked, chipped or slipped tiles** visible from the ground or after a wind event",
          "**Leaks or ceiling stains with no obvious tile damage**, which almost always means the underlayment has failed",
          "**Debris buildup in valleys** or behind roof penetrations",
          "**Exposed or curling underlayment** visible at eaves, ridges or where tiles have shifted",
          "**Sagging** along the ridge or a slope, which points to deck or structural issues under the weight of the tile",
          "**Rust or gaps at flashing** around chimneys, skylights and stucco wall intersections",
          "**The roof is 20 to 30 years old** and has never had the underlayment evaluated",
        ],
      },
      {
        type: "paragraph",
        text:
          "A professional [roof inspection](/roofing/roof-inspections) can lift a few tiles and check the underlayment condition directly. That's the only reliable way to know how much life the system has left, since the tiles themselves tell you almost nothing.",
      },
      {
        type: "image",
        src: "/images/blog/how-long-do-tile-roofs-last/concrete-tile-roof-field-detail.webp",
        alt:
          "Concrete tile roof with a section of tiles lifted and stacked aside and a sandbagged tarp covering the exposed deck area",
        caption:
          "Tiles lifted and stacked. This is exactly what a lift and relay looks like at the start, except the whole slope comes off instead of one section.",
      },
      {
        type: "heading",
        level: 2,
        text: "Tile Roof Repair, Underlayment Replacement or Full Replacement?",
      },
      {
        type: "paragraph",
        text:
          "This is where tile differs from every other roofing material, and where knowing the answer saves real money.",
      },
      {
        type: "paragraph",
        text:
          "**Repair** is the right call for a handful of cracked or slipped tiles, a failed flashing detail, or a localized leak on a roof whose underlayment is otherwise sound. A [roof repair](/roofing/roof-repairs) swaps the damaged tiles and reseals the detail.",
      },
      {
        type: "paragraph",
        text:
          "**Underlayment replacement, also called lift and relay,** is the option most owners don't know exists. The crew removes the tiles in sections, stacks them, tears off the old underlayment, installs new synthetic underlayment and flashing, then reinstalls the original tiles. Broken tiles are replaced with matching stock. The result is a roof that's watertight for another 25 to 40 years using tiles that still have 50 years in them. It costs a fraction of a new tile roof because the most expensive component gets reused.",
      },
      {
        type: "paragraph",
        text:
          "**Full replacement** makes sense when a large share of the tiles are broken or discontinued and can't be matched, when the deck has significant rot, or when the owner wants to change materials entirely. On most tile roofs in this region, that's the least common outcome. A [roof replacement](/roofing/roof-replacements) is the answer for the deck and the structure, not for tiles that are still doing their job. If you're weighing that decision on any roof, our guide to [how often a roof should be replaced](/blog/how-often-should-a-roof-be-replaced) walks through the signals.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Tile Roof Lifespan" },
      {
        type: "paragraph",
        text:
          "So, how long do tile roofs last? Clay 50 to 100 years, concrete 40 to 75, slate longer than either. But the underlayment beneath them lasts 20 to 30 years, and that's the number that decides when your roof leaks. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Tile is the longest-lasting roofing material available for New Mexico homes, and our dry, sunny climate suits it.",
          "The underlayment is the real waterproof layer. Plan on replacing it around year 20 to 30 even when every tile looks perfect.",
          "Lift and relay lets you reuse your original tiles over new underlayment, which is usually the smartest move on a roof between 20 and 40 years old.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We install clay and concrete [tile roofs](/roofing/tile-roofing), replace tile roof underlayment without replacing the tiles, and repair the flashing and stucco transitions where tile roofs most often leak. If your tile roof is past 20 years or you've noticed a stain with no obvious damage, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll inspect the underlayment in person and tell you exactly where the roof stands.",
      },
    ],
  },
  {
    slug: "how-is-stucco-applied",
    title: "How Is Stucco Applied? The Three-Coat Process Step by Step",
    excerpt:
      "Stucco goes on in three coats over wire lath, and the cure time between them matters more than the plaster itself. Here is the full process as a crew actually runs it on a New Mexico home.",
    metaTitle: "How Is Stucco Applied? The 3-Coat Process Explained",
    metaDescription:
      "How is stucco applied? Walk through lath, scratch, brown and finish coats, curing times, textures and what a bad job looks like.",
    category: "Stucco",
    tags: [
      "stucco",
      "stucco application",
      "three-coat stucco",
      "lath",
      "exterior",
      "cracks",
    ],
    publishedAt: "2026-09-25",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/how-is-stucco-applied/stucco-coat-application-progress.webp",
    featuredImageAlt:
      "Exterior stucco wall with a large freshly applied base coat patch drying beside the existing textured finish, with a ladder against the eave",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/stucco",
      "/roofing/roof-inspections",
      "/roofing/roof-repairs",
    ],
    keywords: [
      "how is stucco applied",
      "three coat stucco process",
      "stucco application steps",
      "scratch brown and finish coat",
      "stucco contractor las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Stucco is applied in three coats over a wire lath base: a scratch coat, a brown coat and a finish coat. Together they build up to about 7/8 of an inch of cement plaster, and the whole process takes one to two weeks because each coat has to cure before the next one goes on.",
      },
      {
        type: "paragraph",
        text:
          "That's the short version. The long version matters, because how stucco is applied decides whether the wall lasts 80 years or cracks and takes on water inside 15. Most stucco failures trace back to something that went wrong during application, usually a rushed cure, a skipped detail or a coat that went on too thin.",
      },
      {
        type: "paragraph",
        text:
          "This guide walks through the full process the way a crew actually does it on a New Mexico home: wall prep, lath, each of the three coats, curing times in our heat, textures and colors, how stucco goes over existing block or old stucco, and the shortcuts that cause problems later.",
      },
      { type: "heading", level: 2, text: "How Is Stucco Applied? The Short Version" },
      {
        type: "paragraph",
        text:
          "A traditional three-coat stucco system has four physical layers even though only three of them are called coats. First comes the lath, a weather-resistive paper and metal wire mesh fastened to the wall. Then the scratch coat, roughly 3/8 inch of cement plaster pressed into the lath and raked with horizontal grooves. Then the brown coat, another 3/8 inch that levels the wall flat. Then the finish coat, about 1/8 inch that carries the texture and color.",
      },
      {
        type: "paragraph",
        text:
          "Over concrete block or masonry, the lath is often skipped and stucco is applied as a two-coat system directly to the block: one base coat and one finish coat. That's common on block homes across Las Cruces and Doña Ana County.",
      },
      {
        type: "paragraph",
        text:
          "Either way, the principle is the same. Each coat bonds to the one below it, and each one needs time to cure before the next goes on.",
      },
      { type: "heading", level: 2, text: "Step 1: Preparing the Wall" },
      {
        type: "paragraph",
        text:
          "Before any plaster is mixed, the wall gets a set of details that decide how the finished stucco handles water.",
      },
      {
        type: "paragraph",
        text:
          "On a framed wall, sheathing gets covered with a weather-resistive barrier, usually two layers of Grade D building paper or a paper-and-housewrap combination. This is the drainage plane. Any water that gets through the stucco runs down this layer instead of into the wall.",
      },
      {
        type: "paragraph",
        text:
          "Then the accessories go on. **Weep screed** runs along the base of the wall and lets water that reaches the paper drain out the bottom. **Corner aid** reinforces outside corners so they stay straight and don't chip. **Casing beads** frame windows and doors and give the stucco a clean stopping edge. **Expansion joints** get placed at intervals and at natural stress points so the cured stucco can move without cracking randomly across the wall.",
      },
      {
        type: "paragraph",
        text:
          "Skipping any of these is the most common way stucco gets applied wrong, and none of them are visible once the finish coat is on.",
      },
      { type: "heading", level: 2, text: "Step 2: Installing the Lath" },
      {
        type: "paragraph",
        text:
          "Metal lath, either expanded metal or woven wire, is fastened over the paper with nails or staples driven into the studs. It's installed with furring, meaning it's held slightly off the wall so plaster can push behind it and fully encase the wire.",
      },
      {
        type: "paragraph",
        text:
          "That embedment is the whole point of lath. The scratch coat has to lock around the metal so the cured stucco becomes a reinforced shell rather than a thin skin sitting on top of wire. Lath that's nailed flat against the paper, or plaster that's applied too thin to wrap around it, produces stucco that delaminates and cracks.",
      },
      { type: "heading", level: 2, text: "Step 3: The Scratch Coat" },
      {
        type: "paragraph",
        text:
          "The first plaster coat is a site-mixed blend of Portland cement, hydrated lime, sand and water, applied by hand with a hawk and trowel or sprayed on with a mortar pump and worked by hand. It goes on at roughly 3/8 inch and is pressed firmly into the lath so the wire is fully buried.",
      },
      {
        type: "paragraph",
        text:
          "While the surface is still wet, the crew rakes horizontal grooves into it with a scratcher. Those grooves give the brown coat something to grip.",
      },
      {
        type: "paragraph",
        text:
          "Then it cures. The scratch coat needs 24 to 48 hours minimum before the brown coat goes on, and in dry heat it has to be kept moist during that window. A crew that lets the scratch coat dry out too fast gets shrinkage cracks that telegraph through every coat above it.",
      },
      { type: "heading", level: 2, text: "Step 4: The Brown Coat" },
      {
        type: "paragraph",
        text:
          "The brown coat is the leveling coat. It's the same cement mix, applied at another 3/8 inch over the scratched surface, then floated with a darby or straightedge to bring the whole wall into a flat, true plane. Any bumps or dips in the framing get corrected here. The surface is floated to a uniform texture that the finish can bond to.",
      },
      {
        type: "paragraph",
        text:
          "This is the coat that decides whether the finished wall looks straight. It's also the coat that does most of the system's shrinkage, which is why it gets the longest cure.",
      },
      {
        type: "callout",
        title: "The cure that gets skipped",
        text:
          "Standard practice is a minimum of seven days before the finish coat, and longer is better. The brown coat should be moist-cured for at least the first 48 hours, with the wall misted morning and evening or draped in wet burlap.",
      },
      { type: "heading", level: 2, text: "Step 5: The Finish Coat" },
      {
        type: "paragraph",
        text:
          "The finish coat is what you actually see. It's thin, roughly 1/8 inch, and it comes in two families.",
      },
      {
        type: "paragraph",
        text:
          "**Cement finish** uses white Portland cement with iron oxide pigments mixed in for color. It's the traditional choice, it breathes well, and it weathers to a natural look over time.",
      },
      {
        type: "paragraph",
        text:
          "**Acrylic finish** is a polymer-based product applied over the cured brown coat. It's more flexible, resists hairline cracking better, holds color longer and offers a wider palette. It costs more and it's less breathable. Acrylic finishes are also what sits on top of [EIFS](/blog/stucco-vs-eifs), which is a different wall system entirely despite the similar look.",
      },
      {
        type: "paragraph",
        text:
          "Texture is set in this coat. Common options in the Southwest include smooth (troweled flat), sand or float finish, dash (sprayed for a pebbled look), lace, and the skip-trowel or Santa Fe finish that gives Pueblo-style homes their soft, hand-formed look. On our [stucco projects](/stucco), the finish is matched to the architecture and to any existing stucco on the building.",
      },
      {
        type: "paragraph",
        text:
          "One rule crews follow: the finish coat is never misted. Wetting a colored finish causes blotchy, uneven color. That means waiting for the right weather window rather than rushing it.",
      },
      {
        type: "image",
        src: "/images/blog/how-is-stucco-applied/finished-stucco-wall-texture.webp",
        alt:
          "Finished tan stucco home exterior with an even sand-float texture, stone window sills and a small tile accent roof over the entry",
        caption:
          "A cured finish coat with an even sand float texture. The casing beads at the windows and the clean stopping edges were set before any plaster went on.",
      },
      { type: "heading", level: 2, text: "How Long Does Stucco Application Take?" },
      {
        type: "paragraph",
        text:
          "For a typical house, plan on one to two weeks from lath to finished wall, with most of that time being cure rather than labor. A rough sequence:",
      },
      {
        type: "list",
        items: [
          "Day 1 to 2: paper, accessories and lath",
          "Day 2 to 3: scratch coat, then 24 to 48 hours moist cure",
          "Day 4 to 5: brown coat, then a minimum of 7 days cure",
          "Day 12 to 14: finish coat",
        ],
      },
      {
        type: "paragraph",
        text:
          "New Mexico weather changes the details. Our low humidity and high heat pull water out of fresh plaster fast, so misting schedules are more aggressive here than in humid climates. Crews often start early to avoid applying plaster in direct afternoon sun, and finish coats get scheduled around wind, since blowing dust ruins a fresh finish. The cure windows don't get shorter because it's hot. If anything, they get longer.",
      },
      {
        type: "heading",
        level: 2,
        text: "How Is Stucco Applied Over Existing Stucco or Block?",
      },
      { type: "paragraph", text: "Not every job starts with bare framing." },
      {
        type: "paragraph",
        text:
          "**Over concrete block or masonry**, stucco is usually applied as a two-coat system without lath. The block is cleaned, dampened, and sometimes coated with a bonding agent. A base coat goes on directly, cures, and then receives the finish coat. This is how most block homes in the region were done originally.",
      },
      {
        type: "paragraph",
        text:
          "**Over existing stucco**, the process depends on condition. Sound stucco with cosmetic issues can be recoated: the surface is cleaned, cracks are repaired, a bonding agent is applied and a new finish coat goes over the top. Stucco that's hollow, delaminating or holding moisture has to be removed back to the lath or the block before anything new is applied. Recoating over failing stucco just hides the problem for a few years. Our guide to [how long stucco lasts](/blog/how-long-does-stucco-last) covers how to judge which case you're in.",
      },
      {
        type: "paragraph",
        text:
          "**Patching and repair** follows the same three-coat sequence in miniature. The damaged area is cut out, new lath is tied in, and scratch, brown and finish are rebuilt in order with the texture blended into the surrounding wall.",
      },
      {
        type: "heading",
        level: 2,
        text: "What Goes Wrong When Stucco Is Applied Badly",
      },
      {
        type: "paragraph",
        text:
          "Nearly every stucco problem we see on a service call comes back to how the stucco was applied.",
      },
      {
        type: "list",
        items: [
          "**Rushed curing.** Brown coat finished on day three instead of day seven. The result is a map of shrinkage cracks across the wall within the first year.",
          "**Thin coats.** Base coats stretched to 1/4 inch to save material. The lath isn't embedded, the wall sounds hollow, and it cracks under thermal movement.",
          "**No expansion joints.** The wall has no planned place to move, so it cracks wherever it wants, usually diagonally from window corners.",
          "**Missing or buried weep screed.** Water reaches the paper and has no way out. It sits at the base of the wall and rots the sheathing.",
          "**Stucco run over flashing.** At roof-to-wall transitions and parapets, plaster applied over the top edge of flashing wicks water behind the system. This is where a stucco problem and a roof leak become the same problem, and it's why a professional [roof and exterior inspection](/roofing/roof-inspections) looks at both.",
          "**Finish coat applied in the wrong weather.** Blotchy color, dust embedded in the surface, or a finish that cracks because the base coat underneath wasn't done curing.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Every one of these is invisible on the day the job is finished. All of them show up later.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on How Stucco Is Applied" },
      {
        type: "paragraph",
        text:
          "So, how is stucco applied? Paper and lath first, then a scratch coat raked for grip, a brown coat floated flat, and a thin finish coat for texture and color, with proper moist curing between each. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "The three coats total about 7/8 inch, and thickness matters. Thin stucco is weak stucco.",
          "Curing time is not negotiable. The brown coat needs at least seven days, and New Mexico heat makes misting more important, not less.",
          "The details you can't see, weep screed, expansion joints, flashing and lath embedment, decide how the wall performs for the next 50 years.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We apply traditional three-coat [stucco](/stucco) and EIFS on new construction, recoat and repair existing stucco, and handle the parapet and roof-to-wall details that most stucco crews leave to someone else. Whether you're finishing a new build or fixing a wall that was applied wrong the first time, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll walk the property and give you a clear scope and quote.",
      },
    ],
  },
  {
    slug: "how-does-roof-replacement-work",
    title: "How Does Roof Replacement Work? What Happens From Estimate to Cleanup",
    excerpt:
      "Six stages, one to three days of crew time, and one to three weeks start to finish. Here is what actually happens on a roof replacement, including the moment the crew finds rotten decking.",
    metaTitle: "How Does Roof Replacement Work? Step by Step",
    metaDescription:
      "How does roof replacement work? See all six stages from estimate to cleanup, how long each takes, and how to prepare your home for the job.",
    category: "Roofing",
    tags: [
      "roof replacement",
      "tear-off",
      "roof installation",
      "decking",
      "materials",
      "inspection",
      "ventilation",
      "flashing",
    ],
    publishedAt: "2026-09-25",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/how-does-roof-replacement-work/roof-replacement-crew-materials.webp",
    featuredImageAlt:
      "Gilbert & Sons crew member unloading rolls of roofing underlayment from a trailer on a Las Cruces street before a replacement job",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/roof-replacements",
      "/roofing/roof-installations",
      "/roofing/roof-inspections",
    ],
    keywords: [
      "how does roof replacement work",
      "roof replacement process",
      "roof tear off",
      "roof replacement steps",
      "roof replacement las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Roof replacement works in six stages: an inspection and estimate, materials and scheduling, property protection and tear-off, a deck inspection, installation of the new roof system, and cleanup with a final walkthrough. For most homes the crew is on site for one to three days. From the first phone call to the last nail pickup, the whole process usually runs one to three weeks.",
      },
      {
        type: "paragraph",
        text:
          "That's the outline. What makes it feel overwhelming is that most homeowners only replace a roof once or twice in their lives, so nothing about it is familiar. The noise, the debris, the moment the crew finds rotten decking, the pile of paperwork at the end. None of it is a surprise to a roofer. All of it is a surprise to the owner.",
      },
      {
        type: "paragraph",
        text:
          "This guide answers how does roof replacement work stage by stage, with what actually happens, how long each part takes, what can change the plan, and how to get your home ready.",
      },
      {
        type: "heading",
        level: 2,
        text: "How Does Roof Replacement Work? The Six Stages at a Glance",
      },
      {
        type: "table",
        head: ["Stage", "What happens", "Typical time"],
        rows: [
          [
            "1. Inspection and estimate",
            "Roofer assesses the roof, measures, writes a scope",
            "1 to 2 hours on site",
          ],
          [
            "2. Materials and scheduling",
            "Material selection, permit, order lead time, crew date",
            "1 to 2 weeks",
          ],
          [
            "3. Protection and tear-off",
            "Tarps down, old roof removed to the deck",
            "4 to 8 hours",
          ],
          [
            "4. Deck inspection and repair",
            "Rotten or unnailable boards replaced",
            "0 to 6 hours",
          ],
          [
            "5. Installation",
            "Underlayment, flashing, new roofing, ventilation",
            "1 to 2 days",
          ],
          [
            "6. Cleanup and walkthrough",
            "Debris hauled, magnet sweep, punch list, warranty",
            "1 to 2 hours",
          ],
        ],
      },
      { type: "paragraph", text: "Each of these gets a closer look below." },
      { type: "heading", level: 2, text: "Stage 1: Inspection and Estimate" },
      {
        type: "paragraph",
        text:
          "Every roof replacement starts with someone walking the roof. A proper [roof inspection](/roofing/roof-inspections) covers the roofing material, the flashing at every wall and penetration, the condition of the deck where it's visible, ventilation, drainage, and the attic if there's access.",
      },
      {
        type: "paragraph",
        text:
          "The estimate that follows should be specific. A complete quote lists the roofing material by type and grade (architectural shingle, 60 mil TPO, concrete tile), the underlayment, all flashing to be replaced, drip edge, ventilation, the permit, disposal, and a per-sheet price for decking replacement. That last item matters because rot can only be confirmed after tear-off, so it's priced as a contingency rather than guessed at.",
      },
      {
        type: "callout",
        title: "A warning sign in any quote",
        text:
          "A one-line quote that just says \"replace roof\" is a warning sign. You can't compare it to anything, and it leaves room for surprises on the invoice.",
      },
      { type: "heading", level: 2, text: "Stage 2: Materials, Permits and Scheduling" },
      {
        type: "paragraph",
        text:
          "Once you've approved the scope, the material choice gets locked in. On a pitched roof in Las Cruces that usually means [architectural asphalt shingles](/blog/what-is-asphalt-shingle-roofing), clay or concrete tile, or metal. On a flat or low-slope roof it means [TPO](/blog/what-is-tpo-roofing) or another membrane. Each has its own lead time, with shingles typically available within days and specialty tile or metal sometimes taking weeks.",
      },
      {
        type: "paragraph",
        text:
          "The contractor pulls the building permit. Most jurisdictions in Doña Ana County require one for a full replacement, and it triggers a final inspection that protects you.",
      },
      {
        type: "paragraph",
        text:
          "Scheduling here revolves around weather. Roofers avoid tear-off with rain in the forecast, which in summer means working around monsoon patterns and often starting early in the day. The crew date gets set, and you'll get a heads-up on how to prepare (covered at the end of this post).",
      },
      { type: "heading", level: 2, text: "Stage 3: Property Protection and Tear-Off" },
      {
        type: "paragraph",
        text:
          "Tear-off day is the loudest and messiest part of how roof replacement works. Before anything comes off, the crew protects the property: tarps over landscaping, plywood or tarps against exterior walls and windows, a dump trailer positioned close to the house, and cars moved out of the driveway.",
      },
      {
        type: "paragraph",
        text:
          "Then the old roof comes off in sections, starting at the corner farthest from the trailer and working toward it. Shingles, nails, old flashing and underlayment all go, right down to bare wood. On a tile roof, tiles are removed by hand and either stacked for reuse or hauled away. On a flat roof, the membrane and often the old insulation are cut and pulled.",
      },
      {
        type: "paragraph",
        text:
          "Full tear-off matters. Laying new shingles over old saves a few hundred dollars up front, but it hides deck damage, adds weight, traps heat and voids most manufacturer warranties. Every reputable [roof replacement](/roofing/roof-replacements) in this region is a full tear-off.",
      },
      {
        type: "paragraph",
        text:
          "Expect vibration through the whole house, dust falling in the attic, and a lot of noise for four to eight hours.",
      },
      { type: "heading", level: 2, text: "Stage 4: Deck Inspection and Repair" },
      {
        type: "paragraph",
        text:
          "With the roof stripped, the crew and foreman walk the bare deck. They're looking for soft or rotted plywood, boards that won't hold a nail, gaps, and areas where old leaks have done damage nobody could see from above.",
      },
      {
        type: "paragraph",
        text:
          "Damaged sheets get cut out and replaced with new plywood or OSB, nailed to the rafters on the proper spacing. On a roof with a few bad spots this adds an hour or two. On a roof with widespread rot from years of leaking, it can add most of a day and a meaningful line on the invoice.",
      },
      {
        type: "paragraph",
        text:
          "This is the stage where the pre-priced contingency from your estimate comes into play, and it's the reason a good contractor photographs the deck and shows you before replacing anything.",
      },
      { type: "heading", level: 2, text: "Stage 5: Installing the New Roof System" },
      {
        type: "paragraph",
        text: "The new roof goes on as a system, in layers, and the order matters.",
      },
      {
        type: "paragraph",
        text:
          "**Dry-in.** Underlayment gets rolled across the entire deck and fastened. Synthetic underlayment is standard now because it doesn't tear in wind and handles our UV far better than felt. Ice and water shield goes in the valleys and around penetrations. Once the roof is dried in, it's weather-tight even before the finished roofing is on, which is why crews push to reach this point the same day as tear-off.",
      },
      {
        type: "paragraph",
        text:
          "**Drip edge and flashing.** Metal drip edge goes on at eaves and rakes. New step flashing, counterflashing and pipe boots are installed at every wall, chimney and penetration. On stucco homes, this is the detail that decides whether the roof leaks at the parapet or the wall line in five years. Flashing that meets a stucco wall has to be integrated with the stucco, not just tucked behind it.",
      },
      {
        type: "image",
        src: "/images/blog/how-does-roof-replacement-work/shingle-nailing-installation-detail.webp",
        alt:
          "Nail gun resting on a partly shingled roof slope with drip edge, starter course, underlayment roll and shingle bundles staged at the ridge",
        caption:
          "Mid-installation: drip edge and starter course down at the eave, underlayment across the deck, and bundles staged at the ridge.",
      },
      {
        type: "paragraph",
        text:
          "**Starter and field material.** Starter strip goes along the eaves, then the shingles, tiles or membrane are installed course by course. Shingles are nailed to the manufacturer's pattern. Tile is fastened to spec and laid with proper headlap. TPO membrane is rolled out, fastened or adhered, and every seam is heat-welded and probed.",
      },
      {
        type: "paragraph",
        text:
          "**Ventilation and ridge.** Ridge vent or other exhaust ventilation gets installed, balanced against intake at the eaves. Ridge caps or ridge tiles finish the peak. Proper attic ventilation adds years to any roof in our heat and is required by most shingle warranties.",
      },
      {
        type: "paragraph",
        text:
          "For a typical home this stage runs one to two days depending on material, size and pitch. Tile and flat membrane [roof installations](/roofing/roof-installations) generally take longer than shingles.",
      },
      { type: "heading", level: 2, text: "Stage 6: Cleanup and Final Walkthrough" },
      {
        type: "paragraph",
        text:
          "When the last course is on, the crew blows off the roof, clears gutters and downspouts, and pulls the tarps. Every square foot of yard and driveway gets swept with a rolling magnet for nails. The dump trailer leaves.",
      },
      {
        type: "paragraph",
        text:
          "The foreman then walks the finished roof, checking flashing, ridge, penetrations and any punch-list items. You do a walkthrough at ground level. The permit inspection gets scheduled if required. You receive the manufacturer warranty registration and the contractor's workmanship warranty in writing, and the final payment is made.",
      },
      {
        type: "paragraph",
        text:
          "That paperwork is worth keeping somewhere safe. It's what you'll need if a problem comes up in year eight.",
      },
      {
        type: "image",
        src: "/images/blog/how-does-roof-replacement-work/completed-roof-aerial-overview.webp",
        alt:
          "Overhead drone view of a completed brown shingle roof on a single-storey home with clean gutters and a clear driveway",
        caption:
          "A finished replacement from above. The overhead pass is also how a foreman checks ridge lines and penetrations without walking every slope.",
      },
      { type: "heading", level: 2, text: "How Long Does a Roof Replacement Take?" },
      {
        type: "paragraph",
        text: "The on-site work is usually shorter than people expect.",
      },
      {
        type: "list",
        items: [
          "**Asphalt shingle, average home:** 1 to 2 days",
          "**Asphalt shingle, large or steep roof:** 2 to 3 days",
          "**Concrete or clay tile:** 3 to 5 days, longer if tiles are being reused over new underlayment",
          "**TPO or other flat membrane:** 1 to 3 days depending on square footage and insulation",
          "**Metal:** 2 to 4 days",
        ],
      },
      {
        type: "paragraph",
        text:
          "Add the lead time from estimate to crew date, and the full process is typically one to three weeks. Weather delays, material backorders and unexpected deck repair are the three things that stretch it.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to Prepare Your Home for Roof Replacement",
      },
      {
        type: "paragraph",
        text:
          "A little preparation on your side makes the job smoother and protects your belongings.",
      },
      {
        type: "list",
        items: [
          "**Move vehicles** out of the driveway and away from the house before the crew arrives. Falling debris and stray nails are a real risk to paint and tires.",
          "**Cover or remove items in the attic.** Tear-off vibration sends dust and debris down through every gap in the decking.",
          "**Take down wall hangings** on upper floors. Mirrors and framed pictures can shift or fall from the hammering.",
          "**Clear the perimeter.** Move patio furniture, grills, planters and anything under the eaves.",
          "**Turn off sprinklers** for the duration so the crew isn't working on wet ground and tarps.",
          "**Plan for pets and small children.** Tear-off day is loud and stressful for both. Many families arrange to be elsewhere during the noisiest hours.",
          "**Mark anything fragile in the yard** and point it out to the foreman during the pre-job walkthrough.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "The Bottom Line on How Roof Replacement Works",
      },
      {
        type: "paragraph",
        text:
          "So, how does roof replacement work? Inspect and estimate, choose materials and schedule, protect the property and tear off, check and repair the deck, install the new system in layers, then clean up and hand over the warranty. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "A detailed estimate with a per-sheet decking price is the sign of a contractor who's planning for what tear-off will reveal instead of surprising you with it.",
          "Full tear-off and proper flashing at stucco walls and parapets are the two steps that separate a 25-year roof from a 10-year one in New Mexico.",
          "The crew is on your roof for one to three days. Preparing the house the day before is what keeps that time from being stressful.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Not sure whether you're at the replacement stage yet? Our guide to [how often a roof should be replaced](/blog/how-often-should-a-roof-be-replaced) covers the signals that push a roof from repair into replacement.",
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We replace asphalt shingle, tile, metal and flat roofs for homes and commercial buildings, including the [specialty roofing systems](/roofing/specialty-roofing) and stucco transitions most roofers subcontract out, and we walk you through every stage before it happens. To find out whether your roof needs replacing and what the job would involve, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll inspect the roof in person and give you a written scope and quote.",
      },
    ],
  },
  {
    slug: "what-is-emergency-roof-repair",
    title: "What Is Emergency Roof Repair? When to Call and What to Expect",
    excerpt:
      "Emergency roof repair is a two-visit process: fast professional stabilization that stops the water today, then a scheduled permanent fix. Here is what counts as an emergency and what the roofer does on site.",
    metaTitle: "What Is Emergency Roof Repair? When to Call a Pro",
    metaDescription:
      "What is emergency roof repair? Learn what counts as a roofing emergency, what the roofer does on site, and what to do before help arrives.",
    category: "Storm Damage",
    tags: [
      "emergency roofing",
      "storm damage",
      "leaks",
      "monsoon",
      "flat roof",
      "flashing",
      "inspection",
      "maintenance",
    ],
    publishedAt: "2026-09-25",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/what-is-emergency-roof-repair/storm-damaged-roof-emergency-tarp.webp",
    featuredImageAlt:
      "Roofer standing beside a sandbagged emergency tarp covering storm damage on a concrete tile roof in a Las Cruces neighbourhood",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/emergency-roofing",
      "/roofing/roof-repairs",
      "/roofing/roof-inspections",
    ],
    keywords: [
      "what is emergency roof repair",
      "emergency roof repair las cruces",
      "storm damage roof repair",
      "roof leak emergency",
      "emergency roof tarp",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Emergency roof repair is same-day or next-day work by a licensed roofing contractor to stop active water intrusion, stabilize a damaged roof and prevent further damage to the building. It's not the tarp you throw over a hole yourself, and it's not the repair you schedule for next month. It sits in between: a fast professional response that buys time for a permanent fix.",
      },
      {
        type: "paragraph",
        text:
          "Most people first search \"what is emergency roof repair\" while standing under a ceiling that's dripping. The ceiling doesn't care about definitions, so here's the practical version: it's what you call when water is coming in now or will be with the next storm, and waiting isn't an option.",
      },
      {
        type: "paragraph",
        text:
          "This guide covers what emergency roof repair actually involves, what counts as an emergency and what doesn't, what the roofer does when they arrive, how it differs from a DIY fix, why monsoon season drives most of these calls in Las Cruces, what to do while you wait, and how insurance usually treats it.",
      },
      { type: "heading", level: 2, text: "What Is Emergency Roof Repair?" },
      {
        type: "paragraph",
        text:
          "Emergency roof repair is a two-part process, and understanding that clears up most of the confusion.",
      },
      {
        type: "paragraph",
        text:
          "**Part one is stabilization.** The roofer arrives, finds the source of the water, and makes the roof weather-tight with a temporary measure. That might be a properly anchored heavy-duty tarp, a temporary dry-in with underlayment, a patch over a puncture, or clearing a blocked drain that's ponding water on a flat roof. The goal is to stop damage today.",
      },
      {
        type: "paragraph",
        text:
          "**Part two is the permanent repair.** Once the roof is dry and the weather cooperates, the roofer comes back to fix the actual problem: replace the torn membrane, reflash the parapet, reset the tiles, replace the section of decking that got soaked. This is a scheduled [roof repair](/roofing/roof-repairs), and it's sometimes a larger job than the emergency visit suggested.",
      },
      {
        type: "paragraph",
        text:
          "Why two visits? Because permanent repairs need dry conditions, daylight, materials on hand and time to do right. None of those exist at 9 p.m. during a downburst. Emergency roof repair stops the bleeding. The follow-up closes the wound.",
      },
      { type: "heading", level: 2, text: "What Counts as a Roofing Emergency?" },
      {
        type: "paragraph",
        text:
          "Not every roof problem is an emergency, and knowing the difference saves you money and stress. These situations warrant an emergency call:",
      },
      {
        type: "list",
        items: [
          "**Active leak with more rain in the forecast.** Water coming through the ceiling, running down a wall or pooling in the attic.",
          "**A hole or puncture.** From a fallen branch, wind-blown debris, or a collapsed section.",
          "**Missing roofing after wind.** A section of shingles gone, tiles blown off, a flat roof membrane lifted or torn back.",
          "**Tree or debris impact.** Anything heavy sitting on or through the roof.",
          "**Sagging or structural movement.** A visibly dipping roofline, especially after heavy rain or on an older flat roof.",
          "**Standing water on a flat roof that isn't draining.** Blocked scuppers or canales after a storm can put thousands of pounds of water on the deck.",
          "**Water reaching electrical fixtures.** Any leak near lights, outlets or a panel is a safety issue first.",
        ],
      },
      {
        type: "paragraph",
        text:
          "What generally isn't an emergency: a small stain that hasn't grown, a single cracked tile with no leak, a few curled shingles on a dry week, or a slow drip you've been watching for a month. Those need a prompt inspection, not a night call. A good contractor will tell you honestly which category you're in.",
      },
      {
        type: "heading",
        level: 2,
        text: "What Happens During an Emergency Roof Repair Visit?",
      },
      {
        type: "paragraph",
        text:
          "Here's what the roofer actually does when they show up, and what you should expect from a professional [emergency roofing](/roofing/emergency-roofing) response.",
      },
      { type: "heading", level: 3, text: "Assessment and Safety" },
      {
        type: "paragraph",
        text:
          "First, they figure out where the water is coming from, which is often not where it's showing up inside. On a stucco home with a flat roof, a ceiling stain in the living room can trace back to a cracked parapet cap fifteen feet away. They also assess whether the roof is safe to walk. In sustained high wind or lightning, a responsible crew waits. No repair is worth someone falling.",
      },
      {
        type: "image",
        src: "/images/blog/what-is-emergency-roof-repair/roofer-sealing-flashing-repair.webp",
        alt:
          "Roofer kneeling on a shingle roof to reseal the metal counterflashing where the roof meets a stucco chimney wall",
        caption:
          "Roof-to-wall flashing on a stucco chimney. This detail causes far more leaks than the roofing material around it, and it is usually where the water is actually getting in.",
      },
      { type: "heading", level: 3, text: "Water Diversion Inside" },
      {
        type: "paragraph",
        text:
          "Before going up, they may help redirect what's already coming in: poking a small drain hole in a sagging ceiling bubble so it drips in one controlled spot instead of collapsing, positioning containers, moving belongings.",
      },
      { type: "heading", level: 3, text: "Temporary Dry-In or Tarp" },
      {
        type: "paragraph",
        text:
          "Then the roof gets weather-tight. On a pitched roof, that's usually a heavy-duty reinforced tarp that extends several feet past the damage on all sides, anchored to the structure so wind can't lift it. On a flat roof, it may be a patch of membrane or underlayment sealed over the breach, or clearing drains so water can leave. Done right, this holds for weeks until permanent work is scheduled.",
      },
      { type: "heading", level: 3, text: "Documentation" },
      {
        type: "paragraph",
        text:
          "A professional crew photographs the damage before and after stabilization. You'll want this for insurance, and it also establishes what the permanent repair needs to address.",
      },
      { type: "heading", level: 3, text: "Scheduling the Permanent Repair" },
      {
        type: "paragraph",
        text:
          "Before leaving, they set a plan for the follow-up: what needs to be done, roughly what it will cost, and when weather will allow it.",
      },
      {
        type: "heading",
        level: 2,
        text: "Emergency Roof Repair vs Temporary Fixes: What's the Difference?",
      },
      {
        type: "paragraph",
        text:
          "A homeowner tarp, a tube of sealant, or a bucket in the attic are temporary fixes. They reduce damage for a short time. Emergency roof repair is a licensed contractor stopping the leak and stabilizing the roof properly, then following through to fix the cause.",
      },
      {
        type: "paragraph",
        text:
          "The difference shows up in how they fail. A DIY tarp that's too small, unanchored or laid on wet shingles lifts in the next gust and often does more harm than good. Sealant smeared over a membrane seam or a stucco crack hides the problem while water keeps moving behind it. Neither addresses why the roof failed.",
      },
      {
        type: "paragraph",
        text:
          "There's also the safety side. Roof work in wind, on a wet surface, in fading light, is how people get hurt. If the damage is small, the roof is low and the weather is calm, a homeowner tarp is a reasonable stopgap. If any of those aren't true, the answer to what is emergency roof repair is: the thing you call instead of climbing up there.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Monsoon Season Drives Emergency Roof Repair in Las Cruces",
      },
      {
        type: "paragraph",
        text:
          "From late June through September, the Mesilla Valley gets the storms that generate most emergency roof repair calls of the year.",
      },
      {
        type: "paragraph",
        text:
          "Monsoon downbursts regularly bring 50 to 70 mph winds. That's enough to lift under-fastened tile, strip older 3-tab shingles and peel back the edge of a flat roof membrane. Rain arrives sideways and hard, which tests every parapet cap, roof-to-wall flashing and window head on a [stucco building](/blog/what-is-stucco-roofing) at once. On flat roofs, a summer's worth of dust washes into scuppers and canales in the first big storm and blocks them, and a roof that's holding six inches of water is a structural emergency, not just a leak.",
      },
      {
        type: "image",
        src: "/images/blog/what-is-emergency-roof-repair/flat-roof-drainage-ponding.webp",
        alt:
          "Overhead drone view of a commercial building with a white flat membrane roof, rooftop HVAC units, roof drains and a parapet edge",
        caption:
          "Drains and scuppers on a commercial flat roof. One blocked outlet after a monsoon storm is the difference between a wet roof and a structural call.",
      },
      {
        type: "paragraph",
        text:
          "Hail is less frequent but does occur, and a hail event can crack dozens of tiles or bruise shingles across an entire slope in ten minutes.",
      },
      {
        type: "paragraph",
        text:
          "The pattern every roofer in Las Cruces knows: the first significant monsoon storm of the year produces a wave of emergency calls, most of them on roofs that had a small, fixable problem in May.",
      },
      {
        type: "heading",
        level: 2,
        text: "What Should You Do While You Wait for the Roofer?",
      },
      {
        type: "paragraph",
        text:
          "You've made the call. Here's how to spend the next hour or two productively and safely.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Move belongings** out from under the leak. Furniture, electronics, rugs, anything on the floor below.",
          "**Contain the water.** Buckets, towels, a tarp on the floor. If a ceiling is bulging, a small puncture with a screwdriver at the lowest point lets it drain in one place rather than collapsing.",
          "**Photograph everything.** The leak, the damage inside, the exterior if you can see it from the ground, the date and time. Insurance will ask.",
          "**Cut power to the affected area** at the breaker if water is anywhere near lights, outlets or fixtures.",
          "**Stay off the roof.** Wet surfaces, wind and darkness are how emergencies get worse.",
          "**Check the attic if it's safe** to see whether water is spreading, and note where it's entering.",
          "**Don't start permanent repairs or cleanup** before the roofer and, if applicable, the adjuster have seen the damage.",
        ],
      },
      { type: "heading", level: 2, text: "Does Insurance Cover Emergency Roof Repair?" },
      {
        type: "paragraph",
        text:
          "In general terms, and this varies by policy: sudden storm damage from wind, hail or falling debris is typically covered under a standard homeowner policy. Damage from wear, age, deferred maintenance or a roof that was already failing usually isn't. The cost of emergency tarping or stabilization to prevent further damage is often reimbursable as part of a covered claim, because policies generally expect you to mitigate damage.",
      },
      {
        type: "paragraph",
        text:
          "What helps a claim: photos before and after, a written assessment from the roofer, receipts for the emergency work, and a clear timeline. What hurts it: waiting weeks to report, cleaning up before documenting, or a roof with an obvious history of neglect.",
      },
      {
        type: "callout",
        title: "Not policy advice",
        text:
          "This is general guidance. Read your policy, call your carrier, and ask your roofer for the documentation they'd want. Many contractors, including Gilbert & Sons, work with insurance claims regularly and can produce the paperwork adjusters expect.",
      },
      { type: "heading", level: 2, text: "How to Avoid Needing Emergency Roof Repair" },
      {
        type: "paragraph",
        text:
          "Most emergency calls are the end of a story that started as a small, visible problem.",
      },
      {
        type: "list",
        items: [
          "**Get a pre-monsoon inspection.** A professional [roof inspection](/roofing/roof-inspections) in May or early June catches lifted flashing, cracked parapet caps, loose tiles and failing sealant before the first storm tests them.",
          "**Clear drains, scuppers and canales.** On a flat roof, this alone prevents a large share of monsoon emergencies.",
          "**Fix small problems immediately.** A single slipped tile or a hairline crack at a parapet is a fifteen-minute fix in spring and an emergency in July.",
          "**Get on a maintenance plan.** Regular [roof maintenance](/roofing/roof-maintenance) means someone who knows your roof is looking at it twice a year.",
          "**Save the number before you need it.** Searching for a roofer at night during a storm, when every roofer in town is getting the same call, is the worst time to be choosing.",
        ],
      },
      { type: "heading", level: 2, text: "The Bottom Line on Emergency Roof Repair" },
      {
        type: "paragraph",
        text:
          "So, what is emergency roof repair? Fast, professional stabilization of a roof that's letting water in, followed by a scheduled permanent fix once conditions allow. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "It's a two-visit process. The emergency call stops the damage. The follow-up repairs the cause. Both matter.",
          "Active leaks, holes, missing sections, structural sag and ponding water are emergencies. A small, stable stain on a dry week is an inspection.",
          "In Las Cruces, most emergency calls come from monsoon storms hitting roofs that had a small, known problem in spring. A pre-season inspection is the cheapest emergency roof repair you'll ever buy.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "If water is coming in right now, call **575-649-2316**. Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010, and we respond to active leaks, storm damage and flat roof failures on homes and commercial buildings, then handle the permanent repair ourselves rather than handing it off. For anything less urgent, email gilbertandsons2010@gmail.com or [request an estimate through our contact page](/#contact) and we'll get the roof inspected before the next storm does it for you.",
      },
    ],
  },
];
