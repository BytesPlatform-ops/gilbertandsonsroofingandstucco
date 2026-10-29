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
  {
    slug: "what-is-roof-flashing",
    title: "What Is Roof Flashing? Types, Where It Goes and Why It Leaks",
    excerpt:
      "Roof flashing is the metal or membrane at every break in the roof that sends water back onto the roof instead of into the building. Here are the types, where each one goes on a stucco home, and why flashing is the top leak source.",
    metaTitle: "What Is Roof Flashing? Types and Where It Goes",
    metaDescription:
      "What is roof flashing? Learn the types, where each goes on a stucco home, why flashing is the top leak source and when it needs repair.",
    category: "Roofing",
    tags: [
      "flashing",
      "leaks",
      "stucco",
      "parapet",
      "flat roof",
      "inspection",
    ],
    publishedAt: "2026-09-30",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage: "/images/blog/what-is-roof-flashing/roof-to-wall-flashing-stucco-gutter.webp",
    featuredImageAlt:
      "Close-up of metal flashing where an asphalt shingle roof meets a stucco wall, finished above a dark bronze gutter",
    status: "published",
    showEstimateCta: false,
    relatedServices: ["/roofing/roof-repairs", "/roofing/roof-inspections", "/stucco"],
    keywords: [
      "what is roof flashing",
      "roof flashing types",
      "kickout flashing",
      "step flashing stucco",
      "roof flashing repair las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Roof flashing is thin sheet metal, or on flat roofs a strip of membrane, installed wherever the roof surface is interrupted or meets something vertical: a wall, a chimney, a pipe, a skylight, a parapet. Its job is to catch water at those breaks and send it back onto the roof instead of into the building.",
      },
      {
        type: "paragraph",
        text:
          "That's the whole definition. Here's why it matters more than the definition suggests. Ask any roofer in Las Cruces where leaks come from and flashing is the first answer, ahead of the shingles, the tiles or the membrane. The roofing material covers the big open areas where water shedding is easy. Flashing handles every place where it's hard, and every one of those places is a seam between two materials that move differently in the heat.",
      },
      {
        type: "paragraph",
        text:
          "This guide explains what roof flashing is made of, walks through each type and where it goes, shows where it lives on a typical stucco home, covers why it fails, and lays out how to know when yours needs work.",
      },
      { type: "heading", level: 2, text: "What Is Roof Flashing and What Does It Do?" },
      {
        type: "paragraph",
        text:
          "Flashing works on two principles: overlap and gravity. Each piece is layered so that water running downhill always lands on top of the next piece, never behind it. Sealant is a backup, not the primary defense. A flashing detail that depends entirely on caulk to stay dry is a detail that will leak once the caulk dries out.",
      },
      {
        type: "paragraph",
        text:
          "**Materials.** Galvanized steel is the standard on residential roofs because it's affordable and durable. Aluminum is lighter and easier to bend but corrodes on contact with wet concrete or stucco, which matters here. Copper is the premium choice and lasts the life of the building. On flat roofs with [TPO](/blog/what-is-tpo-roofing) or PVC membranes, flashing is often the membrane itself run up the wall, plus TPO-clad metal at edges and terminations so the membrane can be heat-welded to it.",
      },
      {
        type: "paragraph",
        text:
          "**Where it sits in the system.** On a pitched roof, flashing goes on after the underlayment and before or between courses of roofing so it's woven into the layers. On a flat roof, base flashing turns the membrane up the wall and counterflashing or a cap covers the top edge. Either way, flashing is integrated into the roof, not laid on top of it.",
      },
      { type: "heading", level: 2, text: "The Types of Roof Flashing" },
      { type: "paragraph", text: "Each type solves a specific geometry problem." },
      { type: "heading", level: 3, text: "Step Flashing" },
      {
        type: "paragraph",
        text:
          "L-shaped pieces installed one per course where a pitched roof meets a vertical wall. Each piece laps over the shingle below and under the shingle above, stepping up the wall. This is the workhorse on shingle and tile roofs against stucco walls and chimneys.",
      },
      { type: "heading", level: 3, text: "Counterflashing" },
      {
        type: "paragraph",
        text:
          "A second layer that covers the top edge of step or base flashing, tucked into the wall or under a cap so water can't get behind the first layer. On stucco, counterflashing is either embedded in the stucco or set into a reglet cut into the wall.",
      },
      { type: "heading", level: 3, text: "Continuous or Apron Flashing" },
      {
        type: "paragraph",
        text:
          "One long piece along the base of a wall or the front of a chimney where the roof runs straight into it. Includes expansion joints on long runs so thermal movement doesn't buckle it.",
      },
      { type: "heading", level: 3, text: "Kickout Flashing" },
      {
        type: "paragraph",
        text:
          "A small angled piece at the bottom of a step-flashing run that diverts water away from the wall and into the gutter. Without it, water runs straight down the wall face behind the stucco. Missing kickout flashing is one of the most common causes of stucco rot below a roofline, and it's a detail many older homes in the region never got.",
      },
      { type: "heading", level: 3, text: "Drip Edge" },
      {
        type: "paragraph",
        text:
          "Metal along the eaves and rakes that carries water off the roof edge and past the fascia. It also keeps wind-driven rain from getting under the first course of roofing.",
      },
      { type: "heading", level: 3, text: "Valley Flashing" },
      {
        type: "paragraph",
        text:
          "Metal in the channel where two roof planes meet. Valleys carry the most concentrated water flow on the roof, so this piece takes the most abuse.",
      },
      { type: "heading", level: 3, text: "Vent Pipe Boots" },
      {
        type: "paragraph",
        text:
          "A flanged base with a rubber or metal collar that seals around plumbing vents. The rubber collar is usually the first thing on any roof to fail in New Mexico sun.",
      },
      { type: "heading", level: 3, text: "Chimney and Skylight Flashing" },
      {
        type: "paragraph",
        text:
          "A combination of apron, step, counterflashing and a cricket (a small peaked diverter) behind the chimney to keep water from pooling against the back.",
      },
      { type: "heading", level: 3, text: "Parapet and Base Flashing on Flat Roofs" },
      {
        type: "paragraph",
        text:
          "On flat roofs, the membrane turns up the inside of the parapet wall as base flashing and terminates under a cap or counterflashing. Scuppers and canales that drain through the parapet each get their own flashing sleeve.",
      },
      { type: "heading", level: 2, text: "Where Flashing Goes on a New Mexico Home" },
      {
        type: "paragraph",
        text:
          "Stucco homes have more flashing transitions than most, and a few of them are unique to this region.",
      },
      {
        type: "list",
        items: [
          "**Stucco wall intersections.** Every place a lower roof dies into a second-story wall needs step flashing, counterflashing and kickout flashing integrated with the weep screed at the base of the stucco.",
          "**Parapets.** On flat-roofed Pueblo and commercial buildings, the parapet is the single biggest flashing detail on the property. Cap, counterflashing and base flashing all meet there. Our guide to [parapet repair](/blog/what-is-parapet-repair) covers that detail in depth.",
          "**Canales and scuppers.** Each drain through a parapet is a hole in the wall that needs a flashed sleeve tied into the membrane.",
          "**Tile-to-wall transitions.** Tile roofs need pan flashing under the tile at walls, with the tile cut around it, since tile can't be woven with step flashing the way shingles can.",
          "**HVAC curbs and penetrations on flat roofs.** Every rooftop unit sits on a curb that needs flashed corners and a counterflashed top.",
          "**Chimneys.** Common on older adobe and territorial-style homes, and often flashed with nothing but a bead of caulk.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Understanding what roof flashing is on a stucco home comes down to understanding that most of these details are shared between the roofer and the stucco crew. Get one side right and the other wrong, and it still leaks.",
      },
      { type: "heading", level: 2, text: "Why Does Roof Flashing Fail?" },
      {
        type: "paragraph",
        text:
          "Flashing outlasts most roofing materials when it's installed well. When it fails, the cause is usually one of these.",
      },
      {
        type: "paragraph",
        text:
          "**Thermal cycling.** Daily temperature swings of 30 to 40 degrees expand and contract metal against stucco, wood and membrane. Over years, that works fasteners loose and opens gaps at laps.",
      },
      {
        type: "paragraph",
        text:
          "**Sealant breakdown.** UV at our elevation bakes caulk and sealant hard within a few seasons. Any flashing detail that relied on sealant alone starts leaking when it does.",
      },
      {
        type: "paragraph",
        text:
          "**Stucco applied over the flashing edge.** This is the big one locally. When stucco is troweled down over the top edge of step or apron flashing instead of stopping above it, water wicks behind the stucco and runs down inside the wall. The roof looks fine. The wall rots.",
      },
      {
        type: "paragraph",
        text:
          "**Missing kickout flashing.** Water runs down the wall face, behind the stucco, and shows up as staining and soft spots at the base of the wall years later.",
      },
      {
        type: "paragraph",
        text:
          "**Rust and corrosion.** Galvanized coating wears through, or aluminum sits against wet stucco and corrodes.",
      },
      {
        type: "paragraph",
        text:
          "**Bad original installation.** Reused old flashing on a re-roof, flashing face-nailed and caulked instead of lapped, or no counterflashing at all.",
      },
      { type: "heading", level: 2, text: "Signs Your Roof Flashing Needs Repair" },
      {
        type: "list",
        items: [
          "**Ceiling stains along an exterior wall** or below a chimney, skylight or vent",
          "**Rust streaks** running down the roof or the stucco below a transition",
          "**Lifted, bent or separated metal** visible from the ground at wall lines or the roof edge",
          "**Cracked or missing sealant** at counterflashing and pipe boots",
          "**Dark stains or efflorescence on stucco** just below where a roof meets the wall",
          "**Soft or hollow stucco** at the base of a wall below a roofline, which points to a missing kickout",
          "**Water at the parapet's inside face** on a flat roof",
        ],
      },
      {
        type: "paragraph",
        text:
          "A stain at a wall line with intact roofing above it is almost always a flashing problem, not a roofing problem. A professional [roof inspection](/roofing/roof-inspections) will check every transition rather than just the field of the roof.",
      },
      { type: "heading", level: 2, text: "Flashing Repair vs Replacement" },
      {
        type: "paragraph",
        text:
          "**Resealing** is appropriate when the metal is sound and properly lapped but the sealant at counterflashing or a pipe boot has dried out. It's quick and it buys years.",
      },
      {
        type: "paragraph",
        text:
          "**Replacement** is the answer when the metal is rusted through, was never lapped correctly, is missing kickout pieces, or has stucco run over the top of it. That last case means opening the stucco, installing the flashing correctly with the paper and weep screed, and re-stuccoing the wall. It's more work, but it's the only fix that holds. A [roof repair](/roofing/roof-repairs) that reseals over bad flashing is a repeat call in two years.",
      },
      {
        type: "paragraph",
        text:
          "On a full re-roof, all flashing should be replaced. Reusing old flashing on a new [roof installation](/roofing/roof-installations) is the single most common shortcut that shortens a roof's life.",
      },
      { type: "heading", level: 2, text: "How Flashing Ties Into Stucco" },
      {
        type: "paragraph",
        text:
          "This is the part most articles about what roof flashing is skip, and it's the part that matters most here.",
      },
      {
        type: "image",
        src: "/images/blog/what-is-roof-flashing/roofer-installing-counterflashing-stucco.webp",
        alt:
          "Roofer kneeling on a shingle roof working metal flashing into the base of a stucco chimney wall",
        caption:
          "Flashing at the base of a stucco chimney. The metal has to lap under the wall system, not sit on top of it with a bead of caulk.",
      },
      {
        type: "paragraph",
        text:
          "On a framed stucco wall, the flashing at a roof-to-wall transition has to be layered with the weather-resistive paper behind the stucco, the weep screed at the base, and the stucco itself. The step flashing goes on. The paper laps over it. The stucco stops above the flashing with a casing bead, not over it. The kickout at the bottom diverts water clear of the wall.",
      },
      {
        type: "paragraph",
        text:
          "Get that sequence right and the wall stays dry for decades. Get it wrong, or let a roofer and a stucco crew each do their half without talking, and water finds the gap. This is why [stucco work](/stucco) and roofing are the same trade on this kind of building. For the wider picture, see our guide to [stucco roofing](/blog/what-is-stucco-roofing).",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Roof Flashing" },
      {
        type: "paragraph",
        text:
          "So, what is roof flashing? The metal and membrane at every break in the roof that directs water back where it belongs. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Flashing is the number one leak source on most roofs. When a leak appears at a wall, chimney or penetration, look at the flashing before the roofing.",
          "Flashing works by overlap, not sealant. Any detail that depends on caulk will fail once New Mexico sun dries it out.",
          "On a stucco home, flashing and stucco are one system. Stucco run over the flashing edge and missing kickout flashing are the two most common local causes of wall damage.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Want to know how a roofer checks every one of these details? Our guide to [what a roof inspection includes](/blog/what-does-a-roof-inspection-include) walks through the full checklist.",
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. Because we do both roofing and stucco, we handle flashing transitions from the roof side and the wall side in one visit, including parapets, roof-to-wall intersections and kickout retrofits. If you've got a stain at a wall line or rust streaks on the stucco, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll inspect every transition on the roof.",
      },
    ],
  },
  {
    slug: "what-does-a-roof-inspection-include",
    title: "What Does a Roof Inspection Include? The Full Checklist",
    excerpt:
      "A professional roof inspection covers the structure, the roofing material, the flashing and penetrations, and the attic, and ends with a written report with photos. Here is the full checklist by roof type, how long it takes and when to schedule one.",
    metaTitle: "What Does a Roof Inspection Include? Full Checklist",
    metaDescription:
      "What does a roof inspection include? See the full checklist, how long it takes, what the report covers and when to schedule one.",
    category: "Roof Maintenance",
    tags: [
      "inspection",
      "maintenance",
      "flashing",
      "parapet",
      "flat roof",
      "tile roof",
      "monsoon",
    ],
    publishedAt: "2026-09-30",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/what-does-a-roof-inspection-include/roofer-inspecting-tile-roof.webp",
    featuredImageAlt:
      "Roofer in a hard hat, safety vest and harness walking a tile roof during an inspection",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/roof-inspections",
      "/roofing/roof-maintenance",
      "/roofing/roof-repairs",
    ],
    keywords: [
      "what does a roof inspection include",
      "roof inspection checklist",
      "roof inspection las cruces",
      "how long does a roof inspection take",
      "roof inspection report",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "A professional roof inspection covers four things: the structure, the roofing material, the flashing and penetrations, and the interior or attic. It takes about 45 minutes to two hours depending on the roof, and it ends with a written report, usually with photos, that tells you what's wrong, what's fine, and what to do about it.",
      },
      {
        type: "paragraph",
        text:
          "That's the short answer. The longer answer matters because \"inspection\" gets used loosely. Some contractors mean a five-minute look from the driveway. Others mean a full walk of every transition on the roof, a trip into the attic and a moisture check on a flat roof. Knowing what a real inspection includes is how you tell the difference before you pay for one.",
      },
      {
        type: "paragraph",
        text:
          "Here's the full breakdown: what gets checked, the checklist by roof type, how long it takes, what it costs, what the report contains, and when to schedule one in Las Cruces.",
      },
      { type: "heading", level: 2, text: "What Does a Roof Inspection Include? The Four Parts" },
      { type: "heading", level: 3, text: "Structural" },
      {
        type: "paragraph",
        text:
          "The inspector looks at the roof's shape and support. Sagging along the ridge, dips in a plane, or a wavy roofline point to deck or rafter problems. On flat roofs, that means checking for low spots that pond water. They also check the condition of the fascia, soffits and any visible framing at the eaves.",
      },
      { type: "heading", level: 3, text: "Roofing Material" },
      {
        type: "paragraph",
        text:
          "This is the surface layer, and what gets checked depends on the material. Shingles get looked at for curling, cracking, missing tabs and granule loss. Tile gets checked for cracks, slipped or broken pieces and debris in the channels. Flat membranes and coatings get checked for seam separation, punctures, chalking, thinning and ponding.",
      },
      { type: "heading", level: 3, text: "Flashing and Penetrations" },
      {
        type: "paragraph",
        text:
          "Every place the roof is interrupted. Step and counterflashing at walls, chimney and skylight flashing, pipe boots, HVAC curbs, drip edge, valleys, and on Southwest buildings, the parapet caps, scuppers and canales. This is where most leaks originate, so a good inspector spends more time here than on the open roof. Our guide to [roof flashing](/blog/what-is-roof-flashing) explains each of these details.",
      },
      { type: "heading", level: 3, text: "Interior and Attic" },
      {
        type: "paragraph",
        text:
          "If there's attic access, the inspector checks for water stains on the underside of the deck, daylight through gaps, wet or compressed insulation, mold, and whether ventilation is working. Inside the home, they look at ceilings and the tops of exterior walls for staining.",
      },
      { type: "heading", level: 2, text: "The Roof Inspection Checklist" },
      {
        type: "paragraph",
        text:
          "Here's what a thorough inspection covers, organized by roof type. A stucco building gets the parapet and transition items regardless of roof type.",
      },
      { type: "paragraph", text: "**Every roof**" },
      {
        type: "list",
        items: [
          "Sagging, dips or structural movement",
          "Fascia, soffit and eave condition",
          "Drip edge and gutters or drainage",
          "All flashing at walls, chimneys, skylights and penetrations",
          "Pipe boots and vent collars",
          "Sealant condition at every detail",
          "Attic or interior for stains, daylight and moisture",
          "Ventilation intake and exhaust",
        ],
      },
      { type: "paragraph", text: "**Asphalt shingle roofs**" },
      {
        type: "list",
        items: [
          "Curling, cupping, cracking or blistering",
          "Missing or lifted shingles",
          "Granule loss and bald patches",
          "Exposed or popped nails",
          "Seal strip adhesion",
          "Ridge cap condition",
        ],
      },
      { type: "paragraph", text: "**Tile roofs**" },
      {
        type: "list",
        items: [
          "Cracked, chipped, slipped or missing tiles",
          "Debris in valleys and behind penetrations",
          "Underlayment condition (a few tiles lifted to check)",
          "Ridge and hip mortar or foam",
          "Bird stops and eave closures",
        ],
      },
      { type: "paragraph", text: "**Flat, TPO and coated roofs**" },
      {
        type: "list",
        items: [
          "Seam integrity and welds",
          "Punctures, tears and blisters",
          "Ponding water and low spots",
          "Coating thickness, chalking and reflectivity",
          "Membrane termination at walls",
          "Scuppers, canales and drains for blockage",
        ],
      },
      { type: "paragraph", text: "**Stucco parapets and roof-to-wall transitions**" },
      {
        type: "list",
        items: [
          "Parapet cap or coping cracks",
          "Counterflashing and base flashing at the parapet",
          "Stucco cracks, staining and hollow spots on both faces",
          "Kickout flashing at the bottom of wall intersections",
          "Stucco stopped above the flashing, not run over it",
        ],
      },
      {
        type: "image",
        src: "/images/blog/what-does-a-roof-inspection-include/inspector-accessing-tile-roof-ladder.webp",
        alt:
          "Roofer in a hard hat and fall-protection harness climbing from a ladder onto a clay tile roof above a stucco wall",
        caption:
          "A real inspection means getting on the roof. A look from the driveway can't evaluate flashing, underlayment or seams.",
      },
      { type: "heading", level: 2, text: "How Long Does a Roof Inspection Take?" },
      {
        type: "list",
        items: [
          "**Single-story shingle roof:** 45 minutes to an hour",
          "**Two-story or complex shingle roof:** one to two hours",
          "**Tile roof:** one to two hours, since tiles need to be lifted to check underlayment",
          "**Commercial flat roof:** one to three hours depending on square footage and the number of penetrations",
          "**Add an attic walk:** 15 to 30 minutes",
        ],
      },
      {
        type: "paragraph",
        text:
          "Anything that takes ten minutes from the ground is a visual assessment, not an inspection. It can spot obvious damage but can't evaluate flashing, underlayment or a flat roof's seams.",
      },
      { type: "heading", level: 2, text: "How Much Does a Roof Inspection Cost?" },
      {
        type: "paragraph",
        text:
          "Nationally, a standalone roof inspection typically runs $120 to $400, with drone-assisted or infrared moisture inspections at the higher end. Many roofing contractors, including Gilbert & Sons, include the inspection as part of a repair or replacement quote.",
      },
      {
        type: "paragraph",
        text:
          "There's a distinction worth knowing. A contractor inspection is tied to a quote. An independent paid inspection produces a report with no sales attached, which is useful for real estate transactions or insurance disputes. Both have their place.",
      },
      { type: "heading", level: 2, text: "What's in the Roof Inspection Report?" },
      { type: "paragraph", text: "A good report includes:" },
      {
        type: "list",
        items: [
          "**Photos** of every problem area and the major details, taken on the roof",
          "**Condition ratings** for the roofing material, flashing, drainage and structure",
          "**A prioritized list** separating urgent repairs from maintenance items from cosmetic issues",
          "**A remaining-life estimate** for the roof based on material, age and condition",
          "**A written quote** if repairs or replacement are recommended",
          "**Documentation** suitable for an insurance claim or a home sale if that's the purpose",
        ],
      },
      {
        type: "paragraph",
        text:
          "If a contractor walks your roof and gives you a verbal \"it looks fine\" with no photos, you didn't get an inspection. You got an opinion.",
      },
      { type: "heading", level: 2, text: "When Should You Get a Roof Inspection?" },
      {
        type: "paragraph",
        text: "**Annually.** Once a year is the baseline for any roof past its fifth birthday.",
      },
      {
        type: "paragraph",
        text:
          "**After monsoon season.** This is the big one for Las Cruces. Summer storms bring 50 to 70 mph downbursts, sideways rain and blowing dust. October is when the damage that happened in July and August gets found, and when there's still time to fix it before winter freeze-thaw widens every crack.",
      },
      {
        type: "paragraph",
        text:
          "**After a specific storm.** Hail, or any wind event that took shingles or tiles off a neighbor's roof.",
      },
      {
        type: "paragraph",
        text:
          "**Before buying or selling a home.** A general home inspector looks at the roof from a ladder. A roofer walks it.",
      },
      {
        type: "paragraph",
        text:
          "**Before a coating or restoration.** A [silicone restoration](/blog/what-is-silicone-roof-restoration) only works on a dry, sound roof, so a moisture survey and inspection come first.",
      },
      {
        type: "paragraph",
        text:
          "**When you notice something.** A stain, a drip, granules in the gutter, a tile in the yard. Don't wait for the annual.",
      },
      {
        type: "paragraph",
        text:
          "If you're asking what a roof inspection includes because something already looks wrong, that's the answer: call now, not in spring. Small problems in October become [emergency roofing](/roofing/emergency-roofing) calls in January.",
      },
      { type: "heading", level: 2, text: "Roof Inspection vs Roof Certification" },
      {
        type: "paragraph",
        text:
          "A **roof inspection** assesses condition and recommends action. A **roof certification** is a document, usually requested by a buyer, lender or insurer, in which a roofer certifies that the roof is free of defects and expected to last a stated number of years, often two to five. A certification usually requires an inspection first and may require repairs before it's issued.",
      },
      {
        type: "paragraph",
        text:
          "If you're selling a home in Doña Ana County and the buyer's lender wants a certification, that's a different service from a standard inspection. Ask for it by name.",
      },
      { type: "heading", level: 2, text: "What Happens After the Inspection?" },
      { type: "paragraph", text: "One of three things." },
      {
        type: "paragraph",
        text:
          "**Repairs.** The report identified specific problems, and the [roof repair](/roofing/roof-repairs) work gets quoted and scheduled. Most post-inspection repairs are flashing, sealant and drainage items, not roofing material.",
      },
      {
        type: "paragraph",
        text:
          "**A maintenance plan.** The roof is sound but aging, and a [roof maintenance plan](/roofing/roof-maintenance) puts the next inspection and the routine items (drain clearing, sealant touch-up, debris removal) on a schedule.",
      },
      {
        type: "paragraph",
        text:
          "**Nothing.** The roof is in good shape. You have photos and a report documenting that, which is worth having on file for insurance or a future sale.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Roof Inspections" },
      {
        type: "paragraph",
        text:
          "So, what does a roof inspection include? The structure, the roofing material, every flashing detail and penetration, and the attic or interior, walked in person and documented in a written report with photos. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "A real inspection takes 45 minutes to two hours and produces photos and a report. A look from the driveway is not an inspection.",
          "Most problems found on a Las Cruces roof are at flashing, parapets and drains, not in the open field of the roof. The checklist should spend the most time there.",
          "October, right after monsoon season, is the best time of year to get one. Storm damage gets found while it's still a small repair.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Already dealing with an active leak? Our guide to [emergency roof repair](/blog/what-is-emergency-roof-repair) covers what to do before help arrives.",
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. Our [roof inspections](/roofing/roof-inspections) cover every item on the checklist above, including the parapets and stucco transitions most roofers skip, and come with a photo report and an honest recommendation. To schedule a post-monsoon inspection, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact).",
      },
    ],
  },
  {
    slug: "what-is-parapet-repair",
    title: "What Is Parapet Repair? Fixing the Most Common Flat Roof Leak",
    excerpt:
      "Parapet repair fixes the cap, the flashing and the stucco of the short wall above a flat roof, where more roof leaks start than anywhere else on a Pueblo-style or commercial building. Here is why parapets leak and what the repair involves.",
    metaTitle: "What Is Parapet Repair? Fixing Flat Roof Leaks",
    metaDescription:
      "What is parapet repair? Learn why parapet walls leak, what the repair involves from cap to flashing to stucco, and the signs you need it.",
    category: "Stucco",
    tags: [
      "parapet",
      "flat roof",
      "stucco",
      "flashing",
      "leaks",
      "monsoon",
      "silicone coating",
    ],
    publishedAt: "2026-09-30",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage: "/images/blog/what-is-parapet-repair/stucco-parapet-cap-flat-roof.webp",
    featuredImageAlt:
      "Stucco parapet wall and cap between a flat roof under repair and a clay tile roof section on a Las Cruces home",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/roof-repairs",
      "/roofing/silicone-roof-restoration",
      "/stucco",
    ],
    keywords: [
      "what is parapet repair",
      "parapet wall repair",
      "parapet leak",
      "flat roof parapet flashing",
      "parapet repair las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Parapet repair is the work of fixing the short wall that rises above the edge of a flat roof. It covers three things at once: the cap on top of the wall, the flashing where the roof membrane meets the wall, and the stucco on the wall's inner and outer faces. On Pueblo-style homes and commercial buildings across southern New Mexico, this one detail is where more \"roof leaks\" start than anywhere else on the building.",
      },
      {
        type: "paragraph",
        text:
          "Homeowners usually find out what parapet repair is the hard way. A stain appears on a ceiling near an exterior wall. A roofer looks at the membrane and says it's fine. A stucco contractor looks at the wall and says it's fine. Meanwhile the stain grows. The problem is at the top of the wall where the two trades meet, and nobody owns it.",
      },
      {
        type: "paragraph",
        text:
          "This guide explains what a parapet is, why it leaks, exactly what parapet repair involves, the metal-versus-stucco cap decision, the signs you need it, and why it takes a contractor who does both roofing and stucco.",
      },
      { type: "heading", level: 2, text: "What Is a Parapet Wall?" },
      {
        type: "paragraph",
        text:
          "A parapet is the section of exterior wall that extends above the roof surface. Flat-roofed buildings have them for a few reasons: they hide the roof and rooftop equipment from the street, they give the roof membrane a vertical surface to terminate against, they help contain water so it can be directed to drains, and on Pueblo and Territorial-style homes they're a defining part of the look.",
      },
      { type: "paragraph", text: "A parapet has five parts that matter for repair:" },
      {
        type: "list",
        items: [
          "**The cap or coping.** The top of the wall. On residential stucco buildings it's often just stucco rounded over the top. On commercial buildings it's usually metal coping or a precast concrete cap.",
          "**The outer face.** Stucco, exposed to weather from the street side.",
          "**The inner face.** Stucco or membrane, facing the roof.",
          "**The base flashing.** Where the roof membrane turns up the inner face and terminates under counterflashing or the cap.",
          "**Scuppers and canales.** The drains cut through the parapet. Each one is a hole in the wall that has to be flashed and sealed.",
        ],
      },
      {
        type: "image",
        src: "/images/blog/what-is-parapet-repair/flat-roof-stucco-parapet-walls.webp",
        alt:
          "Aerial view of a two-story flat-roofed stucco building with parapet walls around the roof and scaffolding along one side",
        caption:
          "Parapets run around the full edge of a flat roof. Every foot of cap, flashing and stucco along them is a place water can get in.",
      },
      {
        type: "paragraph",
        text:
          "Every one of those parts moves at a different rate in the desert heat. The membrane is flexible. The stucco is rigid. The metal expands more than either. The cap sits on top of all of it. That's why parapets fail.",
      },
      { type: "heading", level: 2, text: "Why Do Parapet Walls Leak?" },
      {
        type: "paragraph",
        text:
          "Understanding what parapet repair is starts with understanding the failure. Here's how it usually goes.",
      },
      {
        type: "paragraph",
        text:
          "**The cap cracks or fails.** A stucco cap is porous cement rounded over the top of a wall, and the top of a wall takes the most direct sun and the hardest rain. Hairline cracks open along the top. Water soaks in. The stucco cap on most residential parapets is the number one entry point.",
      },
      {
        type: "paragraph",
        text:
          "**Water travels down inside the wall.** Once water gets into the top of the parapet, it runs down through the wall assembly and behind the roof membrane's termination, then onto the deck. The homeowner sees a ceiling stain and assumes the roof failed. The roof is often intact.",
      },
      {
        type: "paragraph",
        text:
          "**Counterflashing pulls away.** The metal covering the top of the membrane termination loosens as the stucco and metal expand and contract against each other. Sealant at that joint dries out in UV within a few seasons.",
      },
      {
        type: "paragraph",
        text:
          "**The membrane termination separates.** The roof membrane running up the inner face of the parapet pulls away at the top edge or at a corner, especially at scuppers.",
      },
      {
        type: "paragraph",
        text:
          "**Scuppers and canales crack.** The stucco around a drain penetration cracks from thermal movement, and water gets behind the sleeve.",
      },
      {
        type: "paragraph",
        text:
          "**Monsoon makes all of it worse.** Rain driven sideways by 50 to 70 mph wind hits the outer face of every parapet in Las Cruces at once and finds every crack.",
      },
      {
        type: "paragraph",
        text:
          "The compounding problem is that parapet water damage is slow and hidden. By the time a stain shows on a ceiling, water has usually been moving through the wall for a season or more.",
      },
      { type: "heading", level: 2, text: "What Is Parapet Repair? What the Work Involves" },
      {
        type: "paragraph",
        text:
          "Parapet repair is scoped to where the water is entering, but a full repair addresses all five parts so it doesn't come back.",
      },
      { type: "heading", level: 3, text: "Cap or Coping Replacement" },
      {
        type: "paragraph",
        text:
          "If the stucco cap is cracked or saturated, the repair either rebuilds it or replaces it with metal coping. A rebuilt stucco cap gets a slight slope toward the roof, a new finish and a sealer. Metal coping gets a continuous cleat on the outside, a drip edge on both sides, and sealed joints between sections.",
      },
      { type: "heading", level: 3, text: "Reflashing the Membrane Termination" },
      {
        type: "paragraph",
        text:
          "The base flashing and counterflashing at the inner face are stripped, the wall is prepped, and the membrane is re-terminated: run up the wall, mechanically fastened at the top with a termination bar, then covered with new counterflashing set into the wall or under the cap. On a coated roof, this is where the coating is carried up and over the flashing for a seamless seal. Our guide to [roof flashing](/blog/what-is-roof-flashing) explains how each of these layers works.",
      },
      { type: "heading", level: 3, text: "Stucco Face Repair" },
      {
        type: "paragraph",
        text:
          "Cracks on the inner and outer faces are opened, hollow or delaminated stucco is removed to the lath or block, new lath is tied in where needed, and the wall is rebuilt in scratch, brown and finish coats with texture matched to the surrounding surface.",
      },
      { type: "heading", level: 3, text: "Scupper and Canale Resealing" },
      {
        type: "paragraph",
        text:
          "Each drain through the parapet gets its sleeve reflashed, the membrane tied into it, and the stucco around it rebuilt.",
      },
      { type: "heading", level: 3, text: "Coating the Inside Face" },
      {
        type: "paragraph",
        text:
          "On flat roofs with a silicone or elastomeric coating, the inner face of the parapet is coated along with the roof so the whole surface becomes one waterproof membrane from deck to cap. A [silicone roof restoration](/roofing/silicone-roof-restoration) usually includes parapet faces for exactly this reason.",
      },
      { type: "heading", level: 2, text: "Metal Coping vs Stucco Cap: Which Is Better?" },
      { type: "paragraph", text: "This comes up on nearly every parapet job." },
      {
        type: "paragraph",
        text:
          "**Stucco cap.** Matches the traditional look, costs less, and is what most homes in the region already have. Its weakness is that it's porous, it cracks with movement, and it has no drip edge, so water clings to the wall face rather than falling clear. It needs periodic sealing and crack repair to stay watertight.",
      },
      {
        type: "paragraph",
        text:
          "**Metal coping.** More expensive, and it changes the look, which matters on a historic adobe or a Pueblo-style home. But it's non-porous, it's continuous, it has drip edges on both sides, and it doesn't crack. On a commercial building it's the standard fix, and it typically ends the parapet leak problem for good.",
      },
      {
        type: "paragraph",
        text:
          "The middle path many homeowners choose: a rebuilt stucco cap with a proper slope, a good sealer, and a maintenance schedule. It keeps the look and it works, as long as it gets checked annually.",
      },
      { type: "heading", level: 2, text: "Signs You Need Parapet Repair" },
      {
        type: "list",
        items: [
          "**Stains or dark streaks on the inside face** of the parapet, visible from the roof",
          "**Ceiling stains near exterior walls**, especially in corners",
          "**Cracks along the top of the wall**, running lengthwise or at corners",
          "**Efflorescence** (white mineral deposits) on the stucco below the cap",
          "**Hollow sound or soft spots** when you tap the stucco near the top of the wall",
          "**Cracked stucco around scuppers or canales**",
          "**Membrane visibly pulled away** from the wall at the top edge",
          "**Paint peeling or bubbling** on the outer face below the cap",
        ],
      },
      {
        type: "paragraph",
        text:
          "Any one of these on a flat-roofed stucco building points at the parapet first. A professional [roof inspection](/roofing/roof-inspections) that includes the parapets, not just the membrane, will confirm where water is getting in.",
      },
      { type: "heading", level: 2, text: "Why Parapet Repair Needs a Roofer and a Stucco Crew" },
      {
        type: "paragraph",
        text: "This is the honest answer to why so many parapet leaks go unfixed for years.",
      },
      {
        type: "paragraph",
        text:
          "The membrane termination and counterflashing are roofing work. The cap and the wall faces are stucco work. A roofer who doesn't do stucco will reflash the termination and leave the cracked cap above it, and the water comes right back. A stucco crew that doesn't do roofing will patch the cracks and leave the failed flashing behind them, and the leak just gets hidden.",
      },
      {
        type: "paragraph",
        text:
          "Effective parapet repair treats the parapet as one assembly. The same crew rebuilds the cap, reflashes the termination, repairs the faces and reseals the scuppers, in the right sequence, so each layer laps correctly over the one below. That's the only version of the repair that holds through the next monsoon season, and it's why Gilbert & Sons handles [stucco work](/stucco) and [roof repair](/roofing/roof-repairs) as one trade.",
      },
      { type: "heading", level: 2, text: "Parapet Repair Cost Factors" },
      {
        type: "paragraph",
        text:
          "Parapet repair is priced by scope rather than by a flat rate, and four things drive it:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Linear feet of parapet** involved. A single corner is a small job. All four sides of a commercial building is a project.",
          "**Cap type.** Resealing a stucco cap costs least. Rebuilding it costs more. Installing metal coping costs most but tends to be the last time you pay for it.",
          "**How far the water traveled.** If the deck, insulation or interior drywall took on water, the repair grows.",
          "**Whether the membrane needs work.** A termination re-flash is modest. A section of membrane replacement or a coating of the inside faces adds to it.",
        ],
      },
      {
        type: "paragraph",
        text:
          "An inspection settles the scope before anything is quoted. The most expensive parapet repairs are the ones that were put off through two or three monsoon seasons.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Parapet Repair" },
      {
        type: "paragraph",
        text:
          "So, what is parapet repair? Fixing the cap, the flashing and the stucco of the wall above a flat roof, as one assembly, so water stops getting in at the top. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "On a flat-roofed stucco building, the parapet is where most roof leaks actually start. Check it before blaming the membrane.",
          "The cap is the usual entry point. A cracked stucco cap or failed coping lets water travel down inside the wall and behind the roof.",
          "It's a two-trade repair. Reflashing without fixing the cap, or patching stucco without fixing the flashing, doesn't hold.",
        ],
      },
      {
        type: "paragraph",
        text:
          "For more on how the roof and the walls work together on these buildings, see our guide to [stucco roofing](/blog/what-is-stucco-roofing).",
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. Parapet repair is the job we built the business around: cap rebuilds and metal coping, membrane termination and counterflashing, stucco face repair and scupper resealing, all handled by one crew in the right order. If you've got a stain near an exterior wall or cracks along the top of a parapet, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll inspect the roof and the wall together.",
      },
    ],
  },
  {
    slug: "what-is-silicone-roof-restoration",
    title: "What Is Silicone Roof Restoration? The Process From Inspection to Warranty",
    excerpt:
      "Silicone roof restoration renews a sound flat roof without a tear-off: inspect, clean, repair, reinforce, then seal under a seamless silicone membrane with a 10 to 20 year warranty. Here is which roofs qualify and how the process works.",
    metaTitle: "What Is Silicone Roof Restoration? Process Explained",
    metaDescription:
      "What is silicone roof restoration? See which flat roofs qualify, the step-by-step process, how it compares to replacement and the warranty.",
    category: "Commercial Roofing",
    tags: [
      "silicone coating",
      "roof coating",
      "flat roof",
      "commercial",
      "restoration",
      "moisture",
      "parapet",
      "inspection",
      "maintenance",
    ],
    publishedAt: "2026-09-30",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/what-is-silicone-roof-restoration/silicone-coating-roller-application.webp",
    featuredImageAlt:
      "Roofer in a safety harness rolling silicone coating onto a commercial flat roof beside rooftop HVAC units",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/silicone-roof-restoration",
      "/roofing/roof-inspections",
      "/roofing/roof-maintenance",
    ],
    keywords: [
      "what is silicone roof restoration",
      "silicone roof coating process",
      "flat roof restoration",
      "silicone roof restoration vs replacement",
      "silicone roof restoration las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Silicone roof restoration is a system for renewing an existing flat or low-slope roof without tearing it off. The roof is inspected, cleaned, repaired at every seam and detail, then sealed under a seamless layer of silicone that becomes the new waterproof membrane. It typically costs a fraction of a replacement, the building stays occupied during the work, and it comes with a 10 to 20 year warranty depending on the thickness applied.",
      },
      {
        type: "paragraph",
        text:
          "That's the short version. The reason it's worth a full explanation is that \"coating\" sounds like painting, and property owners either dismiss it as a cosmetic fix or assume any contractor with a roller can do it. Neither is true. Done right, silicone restoration is a roofing system with a process, a specification and a warranty. Done wrong, it's an expensive layer of white on top of a roof that still leaks.",
      },
      {
        type: "paragraph",
        text:
          "This guide covers what silicone roof restoration actually is, which roofs qualify, the process step by step, how long it takes, how it compares to replacement, what the warranty means, and why it suits southern New Mexico. If you want lifespan numbers by coating type, that's covered in a separate post on [how long roof coating lasts](/blog/how-long-does-roof-coating-last). This one is about the work itself.",
      },
      { type: "heading", level: 2, text: "What Is Silicone Roof Restoration?" },
      { type: "paragraph", text: "Three terms get mixed up, so here's the distinction." },
      {
        type: "paragraph",
        text:
          "**Replacement** removes the old roof to the deck and installs a new system. It's the most expensive and disruptive option, and the right one when the roof underneath is structurally compromised.",
      },
      {
        type: "paragraph",
        text:
          "**Recoating** applies a fresh layer of coating over an existing coating that's aging. It's the maintenance step at the end of a restored roof's service life.",
      },
      {
        type: "paragraph",
        text:
          "**Restoration** is the first-time application of a full coating system over an existing, uncoated roof. It includes the inspection, moisture testing, cleaning, repairs and reinforcement that make the coating actually work. The silicone is the last step, not the whole job.",
      },
      {
        type: "paragraph",
        text:
          "What makes it a system rather than a paint job is that the finished surface is seamless and fully adhered. Seams are where flat roofs leak, and a restored roof has none. Silicone in particular is chosen over acrylic for flat roofs because it holds up under ponding water and intense UV, both of which are facts of life on Las Cruces rooftops.",
      },
      { type: "heading", level: 2, text: "Which Roofs Qualify for Restoration?" },
      {
        type: "paragraph",
        text:
          "Most flat and low-slope commercial and residential roofs are candidates, provided the roof underneath is sound.",
      },
      { type: "paragraph", text: "**Roofs that typically qualify:**" },
      {
        type: "list",
        items: [
          "[TPO](/blog/what-is-tpo-roofing), PVC and EPDM single-ply membranes",
          "Modified bitumen and built-up (tar and gravel) roofs",
          "Metal roofs, standing seam and corrugated",
          "Spray polyurethane foam",
          "Concrete decks",
          "Previously coated roofs with an aging acrylic or silicone layer",
        ],
      },
      {
        type: "paragraph",
        text:
          "**The rule that decides it:** the deck and insulation must be dry. Silicone seals the surface, so any moisture already trapped in the insulation stays trapped and keeps degrading the roof from below. A moisture survey before restoration is not optional.",
      },
      { type: "paragraph", text: "**Roofs that don't qualify:**" },
      {
        type: "list",
        items: [
          "Roofs with widespread wet insulation (more than roughly a quarter of the area)",
          "Roofs with a rotted or structurally compromised deck",
          "Membranes that have failed so broadly that repairs would cost more than replacement",
          "Gravel-surfaced roofs where the gravel can't be removed",
        ],
      },
      {
        type: "paragraph",
        text:
          "A professional [roof inspection](/roofing/roof-inspections) with a moisture survey settles which category a roof falls into before anyone quotes the work.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Silicone Roof Restoration Process Step by Step",
      },
      {
        type: "paragraph",
        text: "Here's what silicone roof restoration looks like on a real job, in order.",
      },
      { type: "heading", level: 3, text: "Inspection and Moisture Survey" },
      {
        type: "paragraph",
        text:
          "The contractor walks the roof, documents every seam, penetration, drain and parapet, and identifies problem areas. A moisture survey, usually with an infrared scanner or a nuclear moisture meter, maps any wet insulation. Wet areas get cut out and replaced before anything else happens.",
      },
      { type: "heading", level: 3, text: "Adhesion Test" },
      {
        type: "paragraph",
        text:
          "A small patch of silicone is applied to the existing roof surface and allowed to cure, then pulled to confirm it bonds. Different substrates need different primers or none at all. Skipping this test is how coatings peel a year later.",
      },
      { type: "heading", level: 3, text: "Cleaning and Surface Prep" },
      {
        type: "paragraph",
        text:
          "The roof is pressure washed to remove dirt, chalk, oxidation and any loose material. On some substrates a cleaning solution or rinse aid is used. The roof has to be clean and completely dry before the next step, which in our climate usually means one day of drying.",
      },
      { type: "heading", level: 3, text: "Repairs to Seams, Flashing and Penetrations" },
      {
        type: "paragraph",
        text:
          "Every open seam is resealed. Failed flashing at parapets, curbs and pipes is repaired or replaced. Ponding areas may get tapered insulation or drain adjustments. Blisters are cut and patched. This is roofing work, and it's the step that separates a real restoration from a coating job. Our guide to [parapet repair](/blog/what-is-parapet-repair) covers the wall side of that work.",
      },
      { type: "heading", level: 3, text: "Reinforcing Details With Fabric" },
      {
        type: "paragraph",
        text:
          "Seams, flashing corners, drains, pipe boots and the base of the parapet get a base coat of silicone with polyester reinforcing fabric embedded in it. This turns every stress point into a reinforced, flexible detail rather than a thin film over a crack.",
      },
      { type: "heading", level: 3, text: "Applying the Silicone to Specified Thickness" },
      {
        type: "paragraph",
        text:
          "The silicone is applied by roller or spray to the full field of the roof and up the inside face of the parapets, in one or two coats, to a specified thickness. Thickness is measured in mils (thousandths of an inch) and it's what the warranty is built on: roughly 20 mils for a 10 year warranty, 25 for 15, 30 for 20. A wet mil gauge is used during application to verify coverage. Thickness should be written into the quote.",
      },
      { type: "heading", level: 3, text: "Final Inspection and Warranty" },
      {
        type: "paragraph",
        text:
          "Once cured, the contractor walks the roof again, checks thickness, verifies details, and issues the warranty paperwork. The manufacturer may send an inspector for a manufacturer-backed warranty.",
      },
      { type: "heading", level: 2, text: "How Long Does the Work Take?" },
      {
        type: "paragraph",
        text:
          "For a typical commercial flat roof, plan on two to five days on site, including drying time between cleaning and coating. A residential flat roof can be done in one to two days. Larger buildings scale with square footage.",
      },
      {
        type: "paragraph",
        text:
          "Throughout, the building stays open. There's no tear-off noise, no debris chute, and no exposed deck. That's often the deciding factor for a business, a school or a medical office.",
      },
      { type: "heading", level: 2, text: "Silicone Roof Restoration vs Replacement" },
      {
        type: "table",
        head: ["", "Silicone restoration", "Full replacement"],
        rows: [
          ["Cost", "Typically 40% to 60% less than tear-off", "Highest upfront cost"],
          ["Time on site", "2 to 5 days", "1 to 3 weeks on large buildings"],
          ["Disruption", "Building stays occupied", "Noise, debris, exposed deck"],
          ["Landfill", "None, existing roof stays", "Full roof to landfill"],
          ["Warranty", "10 to 20 years by thickness", "20 to 30 years by system"],
          ["Energy", "Reflective surface lowers cooling load", "Depends on material chosen"],
          ["Renewable", "Recoat at end of life", "Tear off again"],
          ["Tax treatment", "Often expensed as maintenance", "Usually capitalized"],
        ],
      },
      {
        type: "paragraph",
        text:
          "The last row is worth a conversation with an accountant. Restoration is frequently treated as a maintenance expense in the year it's done rather than a capital improvement depreciated over decades. For a commercial owner, that can change the math significantly.",
      },
      {
        type: "paragraph",
        text:
          "Restoration is not the right answer when the roof underneath is structurally failing. In that case a [roof replacement](/roofing/roof-replacements) is the honest recommendation, and a contractor who does both will tell you which one you need.",
      },
      { type: "heading", level: 2, text: "What About the Warranty?" },
      { type: "paragraph", text: "Two kinds exist, and they cover different things." },
      {
        type: "paragraph",
        text:
          "**Manufacturer warranty** covers the coating material and is tied to the applied thickness. It usually requires the contractor to be certified with that manufacturer and may require a manufacturer inspection after the job. Common tiers are 10, 15 and 20 years.",
      },
      {
        type: "paragraph",
        text:
          "**Contractor workmanship warranty** covers the labor: the prep, the repairs, the application. This is the one that actually pays for a leak at a detail that wasn't reinforced properly.",
      },
      {
        type: "paragraph",
        text:
          "**What voids a warranty:** coating applied thinner than specified, skipping the adhesion test, coating over wet insulation, and unaddressed ponding. Also, a recoat with the wrong chemistry. Silicone gets recoated with silicone.",
      },
      {
        type: "paragraph",
        text:
          "Ask to see both warranties in writing before the work starts, and ask what mil thickness the quote is based on. If a contractor can't answer the thickness question, that's a paint job, not a restoration.",
      },
      { type: "heading", level: 2, text: "Why Restoration Makes Sense in Las Cruces" },
      {
        type: "paragraph",
        text: "Southern New Mexico is close to ideal territory for silicone roof restoration.",
      },
      {
        type: "paragraph",
        text:
          "**UV.** Sun exposure at our elevation destroys exposed membranes and asphalt. Silicone is among the most UV-stable coatings available.",
      },
      {
        type: "paragraph",
        text:
          "**Cooling load.** A white silicone surface reflects most solar energy instead of absorbing it. On a commercial building running air conditioning from May through October, that shows up on the utility bill every month.",
      },
      {
        type: "image",
        src: "/images/blog/what-is-silicone-roof-restoration/restored-white-flat-roof-aerial.webp",
        alt:
          "Drone view of a bright white coated flat roof with parapet walls and rows of rooftop solar panels",
        caption:
          "A white coated flat roof reflects most of the sun's energy instead of soaking it up, which is where the cooling savings come from.",
      },
      {
        type: "paragraph",
        text:
          "**Ponding.** Flat roofs pond, especially older ones with settled drainage. Acrylic degrades under standing water. Silicone doesn't, which is why it's the standard recommendation here.",
      },
      {
        type: "paragraph",
        text:
          "**Timing.** Coating work needs dry conditions and moderate temperatures. Fall, right after monsoon season, is the natural window. The roof gets inspected for storm damage, repaired and coated before winter, and it's ready for next summer's sun. That's the season we're in now.",
      },
      {
        type: "paragraph",
        text:
          "For flat roofs across Las Cruces and Doña Ana County, restoration paired with a [roof maintenance plan](/roofing/roof-maintenance) is usually the lowest lifetime cost path for a structurally sound building.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Silicone Roof Restoration" },
      {
        type: "paragraph",
        text:
          "So, what is silicone roof restoration? A full process of inspection, moisture testing, cleaning, repair and reinforcement, finished with a seamless silicone membrane applied to a specified thickness, that renews a sound flat roof at a fraction of replacement cost. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "It's a system, not a paint job. The prep, repairs and reinforced details are what make the coating work.",
          "The deck and insulation must be dry. A moisture survey comes first, and a roof that fails it needs replacement instead.",
          "Thickness in mils is what the warranty is built on. Get it in the quote.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. Our [silicone roof restoration](/roofing/silicone-roof-restoration) service covers commercial and residential flat roofs, including the parapet faces and stucco transitions that most coating contractors leave out. If you want to know whether your flat roof qualifies, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll inspect the roof, run the moisture survey and give you an honest answer on restoration versus replacement.",
      },
    ],
  },
  {
    slug: "what-is-roof-underlayment",
    title: "What Is Roof Underlayment? Felt, Synthetic and Self-Adhered Explained",
    excerpt:
      "Underlayment is the water-resistant layer between your deck and your roofing. On a shingle roof it is the second line of defense. On a tile roof it is the only one.",
    metaTitle: "What Is Roof Underlayment? Types and Where It Goes",
    metaDescription:
      "What is roof underlayment? Compare felt, synthetic and self-adhered types, see where each goes, and learn why it matters most under tile.",
    category: "Roofing Materials",
    tags: [
      "underlayment",
      "materials",
      "tile roof",
      "flashing",
      "inspection",
      "lifespan",
    ],
    publishedAt: "2026-10-07",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/what-is-roof-underlayment/roofing-underlayment-base-sheet-rolls.webp",
    featuredImageAlt:
      "Gilbert & Sons crew member loading a roll of base sheet underlayment onto a ladder hoist on a Las Cruces street",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/tile-roofing",
      "/roofing/roof-installations",
      "/roofing/roof-inspections",
    ],
    keywords: [
      "what is roof underlayment",
      "synthetic vs felt underlayment",
      "self-adhered underlayment",
      "tile roof underlayment replacement",
      "roof underlayment las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Roof underlayment is the water-resistant sheet installed directly on the roof deck, beneath the shingles, tile or metal you see from the street. On a shingle or metal roof it's the second line of defense, catching whatever wind-driven rain gets past the surface. On a tile roof it's the first line of defense, because tile sheds water but doesn't seal it out.",
      },
      {
        type: "paragraph",
        text:
          "Most homeowners never think about underlayment until a roofer mentions it in a quote, or until a tile roof starts leaking with every tile still intact. By then the question of what roof underlayment is has become a very practical one.",
      },
      {
        type: "paragraph",
        text:
          "This guide explains what it does, the three types and how they compare, where each one goes on the roof, why it matters more under tile than anything else, how New Mexico heat shortens its life, and what to ask your roofer about it.",
      },
      {
        type: "heading",
        level: 2,
        text: "What Is Roof Underlayment and What Does It Do?",
      },
      { type: "paragraph", text: "Underlayment does four jobs at once." },
      {
        type: "paragraph",
        text:
          "**It sheds water that gets past the roofing.** Shingles, tiles and metal panels all let some water through in wind-driven rain, at laps, and around fasteners. Underlayment catches it and carries it down to the eave.",
      },
      {
        type: "paragraph",
        text:
          "**It protects the deck during installation.** Once underlayment is on, the roof is dried in. A storm during a two-day install doesn't soak the plywood, which is why reaching dry-in the same day as tear-off is a priority in [how roof replacement works](/blog/how-does-roof-replacement-work).",
      },
      {
        type: "paragraph",
        text:
          "**It provides a slip surface.** Roofing materials expand and contract. Underlayment lets them move without abrading the deck.",
      },
      {
        type: "paragraph",
        text:
          "**It satisfies code and warranty.** Building code requires it, and nearly every shingle, tile and metal manufacturer voids the warranty without it.",
      },
      {
        type: "callout",
        title: "What underlayment is not",
        text:
          "It's not a roof. It's not meant to be exposed for long, and it's not meant to be the only thing between the deck and the sky.",
      },
      { type: "heading", level: 2, text: "The Three Types of Roof Underlayment" },
      { type: "heading", level: 3, text: "Asphalt-Saturated Felt" },
      {
        type: "paragraph",
        text:
          "The traditional option. Organic or fiberglass mat soaked in asphalt, sold as 15 lb or 30 lb (sometimes labeled #15 and #30). It's inexpensive and crews have used it for a century. Its drawbacks are weight, tear-prone installation in wind, short UV tolerance (days, not weeks), and a tendency to dry out, wrinkle and crack over time, especially in hot attics.",
      },
      { type: "heading", level: 3, text: "Synthetic Underlayment" },
      {
        type: "paragraph",
        text:
          "Woven or spun polypropylene or polyethylene, usually with a slip-resistant coating. It's lighter, stronger, far more tear-resistant, and rated for weeks to months of UV exposure. It's become the standard on new shingle and metal installations. It costs more than felt but less than self-adhered.",
      },
      { type: "heading", level: 3, text: "Self-Adhered Underlayment" },
      {
        type: "paragraph",
        text:
          "Rubberized asphalt or butyl with a peel-off backing that sticks directly to the deck. Often called ice and water shield or peel-and-stick. It seals around nails, resists ponding and wind-driven water, and is the only type that acts as a true waterproof membrane. It's used in high-risk zones on every roof and as full coverage under tile and on low-slope sections. It's the most expensive type and it's not breathable, so it's rarely used over an entire pitched roof in a hot climate unless the design calls for it.",
      },
      { type: "heading", level: 2, text: "Felt vs Synthetic vs Self-Adhered" },
      {
        type: "paragraph",
        text: "Here's how the three compare on the points that matter.",
      },
      {
        type: "table",
        head: ["", "Felt (15 or 30 lb)", "Synthetic", "Self-adhered"],
        rows: [
          ["Cost", "Lowest of the three", "Moderate", "Highest"],
          ["Lifespan under roofing", "15 to 25 years", "25 to 40 years", "30 to 40 years"],
          ["UV exposure tolerance", "Days before it degrades", "30 to 180 days by product", "30 to 90 days by product"],
          ["Tear resistance", "Low, especially in wind", "High", "High"],
          ["Weight", "Heavy rolls", "Light rolls, easier to install", "Heavy rolls"],
          ["Seals around fasteners", "No", "No", "Yes, the only type that does"],
          ["Breathable", "Yes", "Varies by product", "No"],
          [
            "Best use",
            "Budget re-roofs, sheds and outbuildings",
            "The open field of shingle and metal roofs",
            "Valleys, eaves, penetrations, wall transitions, full coverage under tile and on low slope",
          ],
        ],
      },
      {
        type: "paragraph",
        text:
          "The honest summary: synthetic has replaced felt as the default for good reason, and self-adhered goes wherever water concentrates or sits.",
      },
      { type: "heading", level: 2, text: "Where Each Type Goes on the Roof" },
      { type: "paragraph", text: "A well-built roof uses more than one." },
      {
        type: "list",
        items: [
          "**Synthetic across the field.** The open slopes of a shingle or metal roof get synthetic, lapped course over course from eave to ridge. On an [asphalt shingle roof](/blog/what-is-asphalt-shingle-roofing) this is the layer the shingles are nailed through.",
          "**Self-adhered in the valleys.** Valleys carry the most concentrated water on the roof.",
          "**Self-adhered at the eaves.** Three feet up from the edge is standard, and it's where ice dams form in colder climates. Here it's less about ice and more about wind-driven monsoon rain pushing under the first course.",
          "**Self-adhered around penetrations.** Pipes, vents, skylights and chimneys.",
          "**Self-adhered at stucco wall transitions.** Where a roof meets a stucco wall, the underlayment turns up the wall under the step flashing and the weather-resistive paper. This is a detail most leaks on stucco homes trace back to.",
          "**Full self-adhered or heavy synthetic under tile.** More on that next.",
          "**Self-adhered on low-slope sections.** Anything under about 4:12 pitch gets full coverage, because water moves slowly and finds laps.",
        ],
      },
      {
        type: "image",
        src: "/images/blog/what-is-roof-underlayment/roof-stripped-to-battens-deck.webp",
        alt:
          "Two roofers removing roof covering beside a brick chimney, exposing the battens and deck underneath",
        caption:
          "Once the covering is off, the deck is what the underlayment goes onto. This is the only stage at which it can be inspected or replaced.",
      },
      {
        type: "paragraph",
        text:
          "On a [roof installation](/roofing/roof-installations), the underlayment plan should be spelled out in the quote by type and location, not described as \"underlayment included.\"",
      },
      { type: "heading", level: 2, text: "Why Underlayment Matters More Under Tile" },
      {
        type: "paragraph",
        text:
          "Clay and concrete tile is the longest-lasting roofing material available, and it's also the one that depends most on what roof underlayment is doing beneath it.",
      },
      {
        type: "paragraph",
        text:
          "Tile isn't waterproof. The tiles overlap and shed most rain, but wind-driven water, capillary action at the laps, and water running under cracked or slipped tiles all reach the deck. The underlayment is the actual waterproof layer on a tile roof. The tiles mostly protect the underlayment from sun and impact.",
      },
      {
        type: "paragraph",
        text:
          "That creates a mismatch, and it's the reason [how long tile roofs last](/blog/how-long-do-tile-roofs-last) is really two different numbers. The tiles last 50 to 100 years. The underlayment under them lasts 20 to 30 for felt and 25 to 40 for heavy synthetic or self-adhered. When the underlayment fails, the roof leaks with every tile intact, which confuses homeowners and leads to a lot of wasted tile repairs.",
      },
      {
        type: "paragraph",
        text:
          "The fix is underlayment replacement, sometimes called lift and relay: the tiles come off in sections, the old underlayment is torn out, new self-adhered or heavy synthetic goes down with new flashing, and the original tiles go back on. It restores a [tile roof](/roofing/tile-roofing) for another 30 years without buying new tile. On a tile roof past 20 years, the underlayment should be checked before anything else.",
      },
      {
        type: "heading",
        level: 2,
        text: "How New Mexico Heat and UV Affect Underlayment",
      },
      { type: "paragraph", text: "Our climate is hard on the layer you can't see." },
      {
        type: "paragraph",
        text:
          "**Attic heat cooks it from below.** Roof deck temperatures in July exceed 150 degrees. Felt dries out, loses its asphalt oils and becomes brittle. Synthetic holds up far better, but a poorly ventilated attic shortens any underlayment's life.",
      },
      {
        type: "paragraph",
        text:
          "**UV reaches it through gaps.** Every cracked tile, lifted shingle or open ridge exposes underlayment to direct sun. Felt breaks down within weeks. Synthetic's UV rating buys time, but none of it is permanent. That's why one broken tile left alone through two summers becomes a leak.",
      },
      {
        type: "paragraph",
        text:
          "**Installation delays matter.** If a roof is dried in and then the finished roofing waits for materials, the underlayment's UV rating decides whether it survives. Synthetic rated for 90 or 180 days is the safe choice here.",
      },
      {
        type: "paragraph",
        text:
          "**Thermal cycling stresses laps.** Daily swings of 30 to 40 degrees work the overlaps. Self-adhered seals them. Felt and synthetic depend on correct lap width and fastening.",
      },
      { type: "heading", level: 2, text: "Signs Your Underlayment Has Failed" },
      {
        type: "list",
        items: [
          "**Leaks with intact roofing above.** The classic tile roof symptom, but it happens under shingles and metal too.",
          "**Brittle, cracked or torn material** when a tile or shingle is lifted during an inspection.",
          "**Visible deterioration at the eaves** where underlayment shows below the first course.",
          "**Water stains on the deck** seen from the attic, especially along rafters below a valley or wall.",
          "**Leaks that appear only in wind-driven rain**, which points to water getting past the roofing and finding a failed lap.",
        ],
      },
      {
        type: "paragraph",
        text:
          "A professional [roof inspection](/roofing/roof-inspections) that lifts a few tiles or checks the attic is the only way to confirm underlayment condition. From the ground it's invisible.",
      },
      {
        type: "heading",
        level: 2,
        text: "What to Ask Your Roofer About Underlayment",
      },
      {
        type: "paragraph",
        text:
          "Before signing a quote for a new roof or a [roof replacement](/roofing/roof-replacements), ask four things:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**What type?** Felt, synthetic or self-adhered, and the product name.",
          "**What weight or rating?** 30 lb felt over 15. For synthetic, the UV exposure rating.",
          "**Where does the self-adhered go?** Valleys, eaves, penetrations and wall transitions at minimum. Full coverage under tile and on low slope.",
          "**Is it itemized?** A quote that says \"underlayment included\" with no detail is a quote where the cheapest felt is likely.",
        ],
      },
      {
        type: "paragraph",
        text:
          "The underlayment is a small fraction of the roof's cost and a large fraction of its ability to stay dry. It's the wrong place to save money.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Roof Underlayment" },
      {
        type: "paragraph",
        text:
          "So, what is roof underlayment? The water-resistant layer between the deck and the roofing, doing the quiet work of catching whatever the surface misses. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Synthetic has replaced felt as the standard for the open field. Self-adhered belongs in valleys, at eaves, around penetrations and at stucco wall transitions.",
          "Under tile, the underlayment is the waterproof layer. It fails decades before the tiles do, and replacing it is the normal mid-life service on a tile roof.",
          "New Mexico heat and UV shorten underlayment life. Ventilation, prompt repair of broken tiles and a quality synthetic or self-adhered product all extend it.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. Every roof we install itemizes the underlayment by type and location, and we replace [tile roof underlayment](/roofing/tile-roofing) without replacing the tile. If you've got a leak with no visible damage, or a tile roof past 20 years that's never been checked, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll inspect the layer you can't see from the ground.",
      },
    ],
  },
  {
    slug: "what-is-a-roof-maintenance-plan",
    title: "What Is a Roof Maintenance Plan? What's Included and Why It Pays",
    excerpt:
      "Scheduled visits, a fixed checklist and a written record, so the roof gets looked at before it leaks rather than after. Here is what is included and what it saves.",
    metaTitle: "What Is a Roof Maintenance Plan? What's Included",
    metaDescription:
      "What is a roof maintenance plan? See what's included, how often visits happen, what it costs, and why many roof warranties require one.",
    category: "Roof Maintenance",
    tags: [
      "maintenance",
      "inspection",
      "flat roof",
      "commercial",
      "monsoon",
      "roof coating",
      "warranty",
    ],
    publishedAt: "2026-10-07",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/what-is-a-roof-maintenance-plan/roofer-checking-gutter-eave.webp",
    featuredImageAlt:
      "Roofer on a ladder checking the gutter and roof edge of a home during a scheduled maintenance visit",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/roof-maintenance",
      "/roofing/roof-inspections",
      "/roofing/silicone-roof-restoration",
    ],
    keywords: [
      "what is a roof maintenance plan",
      "roof maintenance plan cost",
      "commercial roof maintenance",
      "roof warranty maintenance requirement",
      "roof maintenance las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "A roof maintenance plan is a scheduled program of inspections, cleaning, minor repairs and documentation, usually twice a year, designed to catch small problems before they become leaks, emergency calls or an early replacement. It's the difference between a roof that gets looked at when something goes wrong and a roof that gets looked at before it does.",
      },
      {
        type: "paragraph",
        text:
          "Most roofs in Las Cruces get the first kind of attention. A stain appears, a roofer is called, a repair is made, and nobody looks again until the next stain. That cycle costs more than the plan does, and it usually ends with a replacement five to ten years earlier than necessary.",
      },
      {
        type: "paragraph",
        text:
          "This guide explains what a roof maintenance plan is, what's included, how often visits happen, how residential and commercial plans differ, why warranties often require one, what it costs against what it saves, and whether it's worth it for your particular roof.",
      },
      { type: "heading", level: 2, text: "What Is a Roof Maintenance Plan?" },
      {
        type: "paragraph",
        text:
          "Three things separate a maintenance plan from a one-off inspection or a repair.",
      },
      {
        type: "paragraph",
        text:
          "**Scheduled visits.** The roofer comes on a calendar, not on a phone call. Typically spring and fall, sometimes quarterly on commercial buildings.",
      },
      {
        type: "paragraph",
        text:
          "**A defined checklist.** Every visit covers the same items, so nothing is skipped and changes show up from one visit to the next.",
      },
      {
        type: "paragraph",
        text:
          "**A written record.** Each visit produces a report with photos and a condition rating. Over a few years, that record documents the roof's history, supports warranty claims, and tells you years in advance when replacement is coming.",
      },
      {
        type: "paragraph",
        text:
          "An inspection tells you where the roof stands today (here's [what a roof inspection includes](/blog/what-does-a-roof-inspection-include)). A repair fixes one problem. A maintenance plan keeps the roof from needing most repairs at all.",
      },
      {
        type: "heading",
        level: 2,
        text: "What's Included in a Roof Maintenance Plan",
      },
      {
        type: "paragraph",
        text: "A proper plan covers all of the following on every visit.",
      },
      {
        type: "list",
        items: [
          "**Full inspection** of the roof surface, every flashing detail, penetrations, parapets, drip edge and ridge",
          "**Drain, scupper and canale clearing** on flat roofs, and gutter and valley clearing on pitched roofs",
          "**Debris removal** from the surface, behind HVAC units and at wall intersections",
          "**Sealant inspection and touch-up** at counterflashing, pipe boots, curbs and terminations",
          "**Minor repairs** done on the spot: a lifted shingle, a slipped tile, a loose fastener, a small seam separation",
          "**Coating condition check** on restored flat roofs: chalking, thinning, adhesion at details, since [how long roof coating lasts](/blog/how-long-does-roof-coating-last) depends heavily on catching wear early",
          "**Attic or interior check** where accessible, for stains, moisture and ventilation",
          "**Photo report** documenting conditions and any work done",
          "**Priority list** separating items handled on the visit, items to schedule, and items to watch",
        ],
      },
      {
        type: "paragraph",
        text:
          "Items beyond minor repair, such as a flashing rebuild or a parapet cap, get quoted separately with the photos to back them up.",
      },
      { type: "heading", level: 2, text: "How Often Should Roof Maintenance Happen?" },
      {
        type: "paragraph",
        text:
          "Twice a year is the standard, and in southern New Mexico the timing writes itself.",
      },
      {
        type: "paragraph",
        text:
          "**Late spring, before monsoon season.** May or early June. The goal is to clear drains, reseal details and fix anything loose before the first 60 mph downburst tests the roof.",
      },
      {
        type: "paragraph",
        text:
          "**Fall, after monsoon season.** October. The goal is to find storm damage while it's a small repair, and to get the roof tight before winter freeze-thaw cycles widen every crack.",
      },
      {
        type: "paragraph",
        text:
          "**After any significant storm.** Hail, or a wind event that moved tiles or shingles anywhere on the street, warrants an extra visit.",
      },
      {
        type: "paragraph",
        text:
          "**Quarterly on some commercial roofs.** Buildings with heavy rooftop HVAC traffic, restaurant exhaust, or a history of ponding often justify four visits.",
      },
      {
        type: "paragraph",
        text:
          "Once a year is better than nothing. Twice a year is what actually keeps a roof ahead of the weather here.",
      },
      {
        type: "image",
        src: "/images/blog/what-is-a-roof-maintenance-plan/maintained-shingle-roof-aerial.webp",
        alt:
          "Aerial view of a well-kept shingle roof on a stucco home in a Las Cruces desert neighbourhood",
        caption:
          "A roof that stays ahead of the weather looks unremarkable from above. That is the point of a maintenance plan.",
      },
      { type: "heading", level: 2, text: "Residential vs Commercial Maintenance Plans" },
      {
        type: "paragraph",
        text: "The checklist is similar. The scope, documentation and stakes differ.",
      },
      {
        type: "paragraph",
        text:
          "**Residential plans** cover a single roof, usually shingle, tile or a coated flat roof on a Pueblo-style home. Visits take an hour or two. The report is for the homeowner and, eventually, a buyer.",
      },
      {
        type: "paragraph",
        text:
          "**Commercial plans** cover larger flat roofs with more penetrations, more foot traffic and more drains. Visits take longer and often include a moisture check on coated or membrane roofs. Documentation matters more: it supports manufacturer warranties, insurance, lease obligations to tenants, and capital planning. Many property managers also need the record to show due diligence if a leak damages a tenant's inventory.",
      },
      {
        type: "paragraph",
        text:
          "Both benefit from the same thing: someone who knows the roof looking at it on a schedule.",
      },
      {
        type: "heading",
        level: 2,
        text: "Does a Maintenance Plan Keep Your Warranty Valid?",
      },
      {
        type: "paragraph",
        text:
          "Often, yes, and this is the part most owners don't learn until they file a claim.",
      },
      {
        type: "paragraph",
        text:
          "Most shingle manufacturer warranties require that the roof be maintained and that damage from neglect, clogged drainage or unaddressed minor issues is excluded. Coating manufacturer warranties on silicone and elastomeric systems are stricter: many require documented annual or semi-annual inspections, and some require them to be performed by an approved contractor. Miss the inspections and the 15 or 20 year warranty can be voided on a technicality.",
      },
      {
        type: "paragraph",
        text:
          "A maintenance plan generates exactly the record those warranties ask for. If you've had a [silicone roof restoration](/roofing/silicone-roof-restoration) or a new shingle roof with a long warranty, the plan is part of protecting that investment, not an extra.",
      },
      { type: "heading", level: 2, text: "How Much Does a Roof Maintenance Plan Cost?" },
      {
        type: "paragraph",
        text:
          "Pricing depends on roof type, size and the number of visits. As general guidance:",
      },
      {
        type: "list",
        items: [
          "**Residential shingle or tile roof:** a few hundred dollars per year for two visits",
          "**Residential coated flat roof:** similar, with the coating check included",
          "**Commercial flat roof:** priced per square foot or per visit, scaling with size and the number of penetrations and drains",
        ],
      },
      {
        type: "paragraph",
        text:
          "Against that, consider what the plan prevents. One [emergency roofing](/roofing/emergency-roofing) call during a monsoon storm, with interior water damage, typically costs more than several years of maintenance. (If you're not sure what counts as one, see [what emergency roof repair is](/blog/what-is-emergency-roof-repair).) A roof that gets maintained reliably reaches the upper end of its lifespan range, which on a shingle roof is five to ten extra years before a replacement that costs tens of thousands. A coated flat roof that gets maintained can be recoated instead of torn off.",
      },
      {
        type: "callout",
        title: "The economics in one line",
        text:
          "The plan is cheap because the things it catches are cheap. The things it prevents are not.",
      },
      {
        type: "heading",
        level: 2,
        text: "What a Maintenance Plan Looks Like in Las Cruces",
      },
      { type: "paragraph", text: "Our climate shapes the checklist." },
      {
        type: "paragraph",
        text:
          "**May visit.** Clear every scupper, canale and drain of the dust and debris that accumulated over the dry season. Reseal pipe boots and counterflashing that baked through the spring. Check parapet caps for cracks. Confirm tiles and shingles are secure before monsoon wind. Walk the attic for ventilation.",
      },
      {
        type: "paragraph",
        text:
          "**October visit.** Look for wind damage: lifted tiles, missing shingles, membrane edges peeled back. Check every flashing and parapet detail for water staining from sideways rain. Clear drains again, since the first storms wash a summer of dust into them. Check coating condition and reflectivity. Seal any cracks before freeze-thaw.",
      },
      {
        type: "paragraph",
        text:
          "Both visits come with the photo report, and anything beyond minor repair is quoted with the pictures.",
      },
      { type: "heading", level: 2, text: "Is a Roof Maintenance Plan Worth It?" },
      { type: "paragraph", text: "An honest answer by situation." },
      {
        type: "paragraph",
        text:
          "**New roof, under five years old.** Worth it mainly for the warranty record and to catch installation defects early. One visit a year is reasonable.",
      },
      {
        type: "paragraph",
        text:
          "**Mid-life roof, 10 to 20 years.** This is where the plan earns its keep. The roof is sound but details are aging, and small catches here add years.",
      },
      {
        type: "paragraph",
        text:
          "**Coated flat roof.** Yes, without question. The coating warranty likely requires it, drains clog here, and a recoat at the right time is the whole point of the system.",
      },
      {
        type: "paragraph",
        text:
          "**Tile roof past 20 years.** Yes, with specific attention to lifting a few tiles and checking the [underlayment](/blog/what-is-roof-underlayment) each visit.",
      },
      {
        type: "paragraph",
        text:
          "**Roof at the end of its life.** A plan won't save a roof that needs replacing. An inspection to confirm that, followed by a [roof replacement](/roofing/roof-replacements), is the honest recommendation.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Roof Maintenance Plans" },
      {
        type: "paragraph",
        text:
          "So, what is a roof maintenance plan? Scheduled visits, a fixed checklist and a written record, so the roof gets looked at before it leaks rather than after. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Twice a year, before and after monsoon season, is the right rhythm for this region.",
          "Many shingle and nearly all coating warranties require documented maintenance. The plan is the documentation.",
          "It pays for itself with the first emergency call it prevents, and it typically adds years to the roof's life.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. Our [roof maintenance plans](/roofing/roof-maintenance) cover residential and commercial roofs, including parapets, stucco transitions and coated flat roofs, with a photo report after every visit. To set one up before the next storm season, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll start with a full [roof inspection](/roofing/roof-inspections) to set the baseline.",
      },
    ],
  },
  {
    slug: "what-is-metal-roofing",
    title: "What Is Metal Roofing? Types, Lifespan and How It Handles New Mexico",
    excerpt:
      "Metal lasts 40 to 70 years, two to three times an asphalt roof, and handles desert sun, hail and monsoon wind better than almost anything else. Here is how the systems differ.",
    metaTitle: "What Is Metal Roofing? Types, Lifespan and Cost",
    metaDescription:
      "What is metal roofing? Compare standing seam and exposed fastener panels, see real lifespan and cost, and how metal handles sun and hail.",
    category: "Roofing Materials",
    tags: [
      "metal roofing",
      "materials",
      "lifespan",
      "flashing",
      "stucco",
      "hail",
      "cool roof",
    ],
    publishedAt: "2026-10-07",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/what-is-metal-roofing/standing-seam-metal-roof-commercial.webp",
    featuredImageAlt:
      "Overhead view of a white standing seam metal roof with raised vertical seams on a commercial building in Las Cruces",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/specialty-roofing",
      "/roofing/roof-installations",
      "/roofing/roof-replacements",
    ],
    keywords: [
      "what is metal roofing",
      "standing seam vs exposed fastener",
      "metal roof lifespan",
      "metal roof cost",
      "metal roofing las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Metal roofing is a roof system made of steel, aluminum, copper or zinc, formed into panels or shingles and installed over a deck and underlayment. It lasts 40 to 70 years, which is two to three times the life of asphalt shingles, and it's one of the best performers available in desert sun, hail and monsoon wind.",
      },
      {
        type: "paragraph",
        text:
          "It's also the material most homeowners in Las Cruces know least about. They've seen it on barns and warehouses and assume it's loud, hot and industrial. Modern residential metal is none of those things, and on the right home it's the last roof the owner ever buys.",
      },
      {
        type: "paragraph",
        text:
          "This guide covers what metal roofing is made of, the two main panel types and which one you want, how long it lasts, how it handles our climate, how it compares to shingles over 30 years, the myths, what it costs, and whether it belongs on a stucco home.",
      },
      { type: "heading", level: 2, text: "What Is Metal Roofing Made Of?" },
      { type: "paragraph", text: "Four metals, each with a different price and personality." },
      {
        type: "paragraph",
        text:
          "**Steel** is the workhorse. It's either galvanized (zinc-coated) or Galvalume (zinc and aluminum alloy coating), then painted. Galvalume resists corrosion better and is the standard for residential panels. Steel is sold by gauge: 24 and 26 gauge are typical for homes, with lower numbers being thicker and stronger.",
      },
      {
        type: "paragraph",
        text:
          "**Aluminum** doesn't rust, which makes it the choice in coastal salt air. It's lighter and softer than steel and costs more. Less common here, where salt isn't a factor.",
      },
      {
        type: "paragraph",
        text:
          "**Copper and zinc** are premium metals that develop a patina over decades and last well past a century. They're used on accents, porches and high-end custom homes rather than whole roofs on most budgets.",
      },
      {
        type: "paragraph",
        text:
          "**The finish matters as much as the metal.** Residential panels carry a paint system, and there are two tiers. PVDF (sold under names like Kynar 500) is the premium finish: it resists fading and chalking under intense UV for decades. Polyester or SMP finishes cost less and fade faster. At our elevation, the finish is where a cheap metal roof shows its age.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Two Main Types: Standing Seam vs Exposed Fastener",
      },
      {
        type: "paragraph",
        text:
          "This is the decision that defines what metal roofing is on your house, and the two systems are very different.",
      },
      { type: "heading", level: 3, text: "Standing Seam" },
      {
        type: "paragraph",
        text:
          "Panels run from ridge to eave with raised vertical seams between them. The panels attach to the deck with concealed clips under the seam. No fastener penetrates the panel surface. The clips let each panel expand and contract freely with temperature, and the raised seams keep water well above the attachment points.",
      },
      {
        type: "paragraph",
        text:
          "Standing seam is the premium residential system. It costs more because the panels are often roll-formed on site to exact length and the installation is more skilled. In return it has no exposed fasteners to loosen or leak, it handles thermal movement cleanly, and it carries the longest warranties.",
      },
      { type: "heading", level: 3, text: "Exposed Fastener" },
      {
        type: "paragraph",
        text:
          "Panels, often corrugated or ribbed, are screwed directly through the face into the deck or purlins, with a rubber washer under each screw head. It's faster and cheaper to install and it's what's on most agricultural and commercial buildings.",
      },
      {
        type: "paragraph",
        text:
          "The weakness is the fasteners. There are thousands of them, each with a rubber washer exposed to sun. The washers dry out and the screws back out as the panels expand and contract. On a 20-year-old exposed fastener roof, a maintenance visit often means replacing hundreds of screws. It's a fine system for a shop or barn. On a home, standing seam is worth the difference.",
      },
      { type: "heading", level: 2, text: "Other Metal Roofing Styles" },
      {
        type: "list",
        items: [
          "**Metal shingles and tiles.** Stamped panels that mimic shake, slate or clay tile, installed in courses like conventional shingles. They give a traditional look with metal performance.",
          "**Corrugated panels.** The classic wavy profile, exposed fastener, common on outbuildings and increasingly on modern-style homes.",
          "**Stone-coated steel.** Steel panels with a bonded layer of stone granules, designed to look like tile or shake from the street. Popular as a lighter alternative to real tile.",
        ],
      },
      { type: "heading", level: 2, text: "How Long Does Metal Roofing Last?" },
      {
        type: "paragraph",
        text:
          "Standing seam steel with a PVDF finish realistically lasts 50 to 70 years. Exposed fastener systems run 30 to 45, with fastener maintenance along the way. Copper and zinc go well past 100.",
      },
      {
        type: "paragraph",
        text:
          "What shortens it: a polyester finish that chalks and fades in 15 years, exposed fastener washers that never get replaced, poor flashing at walls and penetrations, and dissimilar metals in contact (a copper flashing against a steel panel, for instance, corrodes the steel). Scratches through the finish that aren't touched up can rust on galvanized steel, less so on Galvalume.",
      },
      {
        type: "paragraph",
        text:
          "Properly installed and detailed, metal is a once-in-a-lifetime roof. That's the honest comparison against the 20 to 25 years an architectural shingle roof delivers in this climate, and it changes the math on [how often a roof should be replaced](/blog/how-often-should-a-roof-be-replaced).",
      },
      {
        type: "heading",
        level: 2,
        text: "How Does Metal Roofing Handle New Mexico Weather?",
      },
      { type: "paragraph", text: "Better than almost anything else." },
      {
        type: "paragraph",
        text:
          "**UV and heat.** A PVDF-finished metal panel reflects a large share of solar energy, and light colors can qualify as cool roofs. Surface temperature and the cooling load underneath both drop compared with dark shingles. The finish doesn't dry out and shed granules the way asphalt does.",
      },
      {
        type: "paragraph",
        text:
          "**Hail.** Most residential metal panels carry a Class 4 impact rating, the highest available. Hail can dent a thin or soft panel cosmetically, but it rarely compromises the roof. Many insurers discount Class 4 roofs.",
      },
      {
        type: "paragraph",
        text:
          "**Monsoon wind.** Standing seam systems are routinely rated for 140 mph and higher uplift. A 60 to 70 mph downburst that strips 3-tab shingles doesn't move a properly clipped metal panel.",
      },
      {
        type: "paragraph",
        text:
          "**Thermal expansion.** This is where the system choice shows. A 40-degree daily swing moves a 30-foot steel panel measurably. Standing seam clips are designed for it. Exposed fastener screws fight it, and lose over time.",
      },
      {
        type: "paragraph",
        text:
          "**Fire.** Metal is non-combustible and carries a Class A fire rating, which matters in a region with wildfire risk on the edges of the valley.",
      },
      {
        type: "paragraph",
        text:
          "**What to watch.** Dust buildup in low-slope valleys, and the [roof flashing](/blog/what-is-roof-flashing) at stucco parapets and walls, which is the same weak point it is on every roof.",
      },
      { type: "heading", level: 2, text: "Metal Roofing vs Asphalt Shingles" },
      {
        type: "paragraph",
        text:
          "Side by side, here's how standing seam metal stacks up against [architectural asphalt shingles](/blog/what-is-asphalt-shingle-roofing) in this climate.",
      },
      {
        type: "table",
        head: ["", "Standing seam metal", "Architectural shingles"],
        rows: [
          ["Upfront cost", "Two to three times the price of shingles", "The cheapest roof to install"],
          ["Realistic lifespan here", "50 to 70 years", "20 to 25 years in Las Cruces sun"],
          ["Replacements over 60 years", "One roof", "Three roofs"],
          ["Cooling performance", "Reflects heat, cool-roof finishes available", "Dark shingles absorb it"],
          ["Wind rating", "140 mph and up", "110 to 130 mph"],
          ["Hail rating", "Class 4, the highest", "Class 3 to Class 4 by product"],
          ["Maintenance", "Minimal attention", "Annual inspection and periodic repair"],
          ["Resale", "A strong selling point", "Neutral"],
        ],
      },
      {
        type: "paragraph",
        text:
          "Over a 60-year window, a shingle roof gets replaced three times. Metal gets installed once. Add lower cooling bills and possible insurance discounts, and the lifetime cost of metal is often lower, even though the first check is larger. That math is what makes it a sound choice for owners who plan to stay.",
      },
      { type: "heading", level: 2, text: "The Myths: Noise, Lightning, Heat and Rust" },
      {
        type: "paragraph",
        text:
          "**\"Metal roofs are loud in the rain.\"** Over a solid deck with underlayment and attic insulation, a metal roof is no louder than shingles. The barn-roof noise people remember comes from panels screwed to open purlins with nothing underneath.",
      },
      {
        type: "paragraph",
        text:
          "**\"Metal attracts lightning.\"** It doesn't. Lightning strikes the highest object regardless of material. If a metal roof is struck, it disperses the energy and doesn't burn, which is an advantage over shingles.",
      },
      {
        type: "paragraph",
        text:
          "**\"Metal roofs make the house hot.\"** The opposite. A reflective metal finish keeps the attic cooler than dark asphalt. The heat concern comes from unfinished bare metal, which isn't used on homes.",
      },
      {
        type: "paragraph",
        text:
          "**\"Metal rusts.\"** Galvalume steel with a quality paint system is warranted against rust for decades. Rust shows up on scratched galvanized panels or cheap imports, not on properly specified residential metal.",
      },
      { type: "heading", level: 2, text: "What Does Metal Roofing Cost?" },
      {
        type: "paragraph",
        text:
          "Metal is priced per square (100 square feet) and the range is wide: exposed fastener panels at the low end, standing seam in the middle to upper range, and copper or zinc at the top. Expect standing seam to run roughly two to three times the cost of an architectural shingle roof of the same size.",
      },
      {
        type: "paragraph",
        text:
          "What drives it: panel type and gauge, finish tier, roof complexity (hips, valleys, dormers and penetrations all add detail work), and whether the old roof is torn off. Labor is a larger share than on shingles because the detail work is more skilled.",
      },
      {
        type: "paragraph",
        text:
          "Offsets to ask about: homeowner insurance discounts for Class 4 and Class A roofs, lower cooling costs, and the fact that it's the last roof you'll pay for.",
      },
      {
        type: "image",
        src: "/images/blog/what-is-metal-roofing/stucco-home-pitched-roof-dusk.webp",
        alt:
          "Single-storey stucco home with a pitched roof and desert landscaping, photographed at dusk",
        caption:
          "On a pitched stucco home, the decision usually comes down to the flashing at the walls rather than the panel itself.",
      },
      {
        type: "heading",
        level: 2,
        text: "Is Metal Roofing Right for a Stucco Home?",
      },
      {
        type: "paragraph",
        text:
          "Often, yes, and it's becoming common on Las Cruces homes that are ready for a replacement.",
      },
      {
        type: "paragraph",
        text:
          "**The look.** Standing seam in earth tones, dark bronze or weathered copper sits comfortably on Territorial and contemporary Southwest homes, and metal shingles or stone-coated steel can mimic tile on Spanish-style homes at a fraction of the weight.",
      },
      {
        type: "paragraph",
        text:
          "**The flashing.** Metal roofs meet stucco walls and parapets the same way every roof does, and the flashing has to be integrated with the stucco. This is the detail that decides whether the roof leaks, and it's why a contractor who does both trades matters on a stucco home.",
      },
      {
        type: "paragraph",
        text:
          "**Pueblo-style flat roofs.** Metal isn't the answer there. Flat roofs are membrane and coating territory. Metal belongs on pitched roofs, including the pitched sections of a home that mixes both.",
      },
      {
        type: "paragraph",
        text:
          "Metal is part of the [specialty roofing](/roofing/specialty-roofing) work Gilbert & Sons installs, and it's worth a conversation on any pitched-roof home facing a [roof replacement](/roofing/roof-replacements) in the next few years.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Metal Roofing" },
      {
        type: "paragraph",
        text:
          "So, what is metal roofing? Steel, aluminum, copper or zinc panels, installed as standing seam or exposed fastener, that last two to three times longer than shingles and handle desert sun, hail and wind better than almost anything else. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "On a home, choose standing seam with a PVDF finish. Exposed fastener panels belong on shops and barns.",
          "The upfront cost is higher, but one metal roof replaces three shingle roofs over the same span, with lower cooling costs along the way.",
          "On a stucco home, the flashing at walls and parapets is what makes or breaks a metal roof. Get it done by a crew that does both.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We install standing seam and metal shingle roofs on homes and commercial buildings, handle the stucco transitions ourselves, and will tell you honestly whether metal, tile or shingle is the right choice for your roof. For a quote on a new [roof installation](/roofing/roof-installations) or to compare options, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll start with a [roof inspection](/roofing/roof-inspections) and a written comparison.",
      },
    ],
  },
  {
    slug: "how-to-find-a-roof-leak",
    title: "How to Find a Roof Leak: Why the Stain Is Never Under the Hole",
    excerpt:
      "Start at the stain, trace the water uphill through the attic, then check flashing and parapets above that spot. The entry point is rarely where the drip is.",
    metaTitle: "How to Find a Roof Leak: Trace It to the Source",
    metaDescription:
      "How to find a roof leak: why the stain is never under the hole, how to trace it through the attic, and the top leak sources on stucco homes.",
    category: "Roofing",
    tags: [
      "leaks",
      "flashing",
      "parapet",
      "stucco",
      "flat roof",
      "inspection",
      "monsoon",
    ],
    publishedAt: "2026-10-07",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/how-to-find-a-roof-leak/roofer-sealing-vent-pipe-boot.webp",
    featuredImageAlt:
      "Gilbert & Sons roofer kneeling on a shingle roof to seal the base of a vent pipe, with the Organ Mountains behind",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/roof-repairs",
      "/roofing/roof-inspections",
      "/roofing/emergency-roofing",
    ],
    keywords: [
      "how to find a roof leak",
      "roof leak detection",
      "trace a roof leak attic",
      "stucco home roof leak",
      "roof leak repair las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "To find a roof leak, start inside at the stain, trace the water uphill through the attic to where it enters the deck, then check the roof directly above that spot. On a stucco home or a flat-roofed building, check the parapets and roof-to-wall transitions before the open field of the roof, because that's where most leaks here actually begin.",
      },
      {
        type: "paragraph",
        text:
          "The reason this takes a method rather than a glance is simple: the stain on your ceiling is almost never under the hole in your roof. Water enters, runs along a rafter, follows the underlayment downhill, crosses a ceiling joist and drops where gravity finally wins. The entry point can be ten or twenty feet from the drip.",
      },
      {
        type: "paragraph",
        text:
          "This guide walks through how to find a roof leak step by step: how water travels, what to look for inside, how to read the attic, what to check on the roof, the most common sources ranked, the specific places flat roofs and stucco homes leak, how a roofer isolates it with water, and when to stop looking and call.",
      },
      { type: "heading", level: 2, text: "Why the Leak Is Never Where the Stain Is" },
      {
        type: "paragraph",
        text:
          "Water takes the path of least resistance, and on a roof that path is almost always sideways and downhill before it's down.",
      },
      {
        type: "paragraph",
        text:
          "Rain gets past the roofing at a failed flashing or a cracked tile. It lands on the [underlayment](/blog/what-is-roof-underlayment) and runs down the slope. It hits a lap, a nail or a seam and gets through to the deck. It follows the deck to a rafter, runs along the rafter, and drops onto the insulation. It soaks through the insulation to the drywall, spreads, and finally stains at the lowest point, often at a joint between sheets or at a light fixture.",
      },
      {
        type: "paragraph",
        text:
          "Every one of those steps moves the water away from the entry. On a flat roof it's worse, because water can travel the full length of the building between the membrane and the deck before it finds a way down. On a stucco home, water entering at a parapet cap can run inside the wall for a story before it shows at a window head.",
      },
      {
        type: "callout",
        title: "The first rule",
        text:
          "The stain is where to start looking, not where to stop.",
      },
      { type: "heading", level: 2, text: "Step 1: Start Inside" },
      {
        type: "paragraph",
        text:
          "Before going anywhere near the attic or the roof, gather evidence from the stain itself.",
      },
      {
        type: "paragraph",
        text:
          "**Map it.** Note the exact location relative to exterior walls, the roof ridge, chimneys and any rooftop equipment. A stain near an exterior wall points at flashing or a parapet. One near the center of a room points at a penetration or a field leak upslope.",
      },
      {
        type: "paragraph",
        text:
          "**Note when it appears.** This is the single most useful diagnostic.",
      },
      {
        type: "list",
        items: [
          "*During rain, immediately:* an open hole or failed seam close to the stain.",
          "*Hours after rain stops:* water is traveling a long way, or ponding somewhere and draining slowly. Common on flat roofs.",
          "*Only in wind-driven rain:* water is being pushed under laps or past flashing. Points at wall transitions and edges.",
          "*Only in winter or on cold mornings:* possibly condensation in the attic, not a roof leak at all.",
          "*After an HVAC service visit or a satellite install:* foot traffic broke a tile or punctured the membrane.",
        ],
      },
      {
        type: "paragraph",
        text:
          "**Check the walls.** On a stucco home, look at the inside of exterior walls near the stain for bubbling paint or soft drywall. That's water in the wall, which points at the parapet or roof-to-wall flashing rather than the roof field.",
      },
      { type: "heading", level: 2, text: "Step 2: Check the Attic" },
      {
        type: "paragraph",
        text:
          "If you have attic access, this is where leaks get found. Go during or right after rain if you can, with a bright flashlight.",
      },
      { type: "paragraph", text: "**What to look for:**" },
      {
        type: "list",
        items: [
          "**Wet or stained decking.** Fresh water is dark and shiny. Old leaks leave gray or black rings.",
          "**Water trails on rafters.** A dark line running down a rafter is a map. Follow it uphill to where it starts.",
          "**Daylight.** Turn off the flashlight. Any pinpoint of light is a hole.",
          "**Wet or compressed insulation.** Lift it where the stain is below and look at the deck above.",
          "**Rusty nail tips or dripping nails.** Often condensation, but a cluster of them under a specific area can mark a leak.",
          "**Mold or dark staining on the underside of the deck** near valleys, walls and penetrations.",
        ],
      },
      {
        type: "paragraph",
        text:
          "**Trace uphill.** Water runs down. Wherever you find it, the entry is above. Follow the trail up the rafter until it stops, then measure that spot from a reference point (the ridge, a vent pipe, the chimney) so you can find the same spot on the roof.",
      },
      {
        type: "paragraph",
        text:
          "If there's no attic, as on most flat-roofed Pueblo homes and commercial buildings, skip to the roof-specific sections below.",
      },
      { type: "heading", level: 2, text: "Step 3: Inspect the Roof Above" },
      {
        type: "paragraph",
        text:
          "Once you have a spot, look at the roof directly above it and uphill from it. Do this from the ground with binoculars or from a ladder at the eave. Walking a roof while looking for a leak is how homeowners get hurt and how tiles get broken.",
      },
      { type: "paragraph", text: "**Check, in order:**" },
      {
        type: "list",
        ordered: true,
        items: [
          "**Wall intersections** nearest the leak: step flashing, counterflashing, kickout at the bottom.",
          "**Penetrations** uphill: pipe boots, vents, skylights, HVAC lines.",
          "**Chimney**: flashing on all four sides, cricket behind it, cap and crown.",
          "**Valleys** that drain toward the leak.",
          "**The field**: missing, lifted, cracked or curled shingles; cracked, slipped or missing tiles; punctures or open seams on a membrane.",
          "**Edges**: drip edge, eave closures, rake trim.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Most leaks are in the first three items. The field of the roof is the last place to look, not the first.",
      },
      { type: "heading", level: 2, text: "The Most Common Roof Leak Sources, Ranked" },
      {
        type: "paragraph",
        text:
          "From what shows up on repair calls in Las Cruces, roughly in order:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Flashing.** Step flashing, counterflashing and kickout at stucco walls, plus chimney and skylight flashing. The number one source on every roof type. If you're not sure what you're looking at, start with [what roof flashing is](/blog/what-is-roof-flashing).",
          "**Parapet caps and terminations** on flat roofs. Cracked stucco caps, failed counterflashing, membrane pulling away.",
          "**Pipe boots and vent collars.** The rubber dries out in UV and splits.",
          "**Clogged scuppers, canales and drains.** Water backs up, ponds and finds the first weak seam.",
          "**Cracked, slipped or missing tiles** exposing underlayment that then fails.",
          "**Failed underlayment** on an older tile roof, with every tile intact.",
          "**Seam separation** on TPO, PVC or modified bitumen.",
          "**Missing or lifted shingles** after wind.",
          "**Skylights**: failed seals at the curb or the glazing.",
          "**Exposed fasteners** on metal roofs with dried-out washers.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Notice that the actual roofing material doesn't show up until item five. If you're learning how to find a roof leak, that ranking is the most useful thing on this page.",
      },
      { type: "heading", level: 2, text: "Finding Leaks on a Flat Roof" },
      { type: "paragraph", text: "Flat roofs leak differently and the leaks travel farther." },
      {
        type: "paragraph",
        text:
          "**Start at the drains.** Walk the perimeter and check every scupper and canale for debris. A blocked drain means water ponded, and ponding finds every weak seam within reach.",
      },
      {
        type: "paragraph",
        text:
          "**Look for ponding rings.** Dried water lines on the membrane show where water sat. Leaks are usually inside or at the edge of those rings.",
      },
      {
        type: "paragraph",
        text:
          "**Check the parapets.** Cracked caps, stains on the inside face, membrane pulling away at the top edge, cracked stucco around scuppers. On a Pueblo-style home, the parapet is the first suspect for any leak near an exterior wall, and [parapet repair](/blog/what-is-parapet-repair) is usually the fix.",
      },
      {
        type: "paragraph",
        text:
          "**Walk the seams.** On TPO and PVC, look for lifted edges and probe seams gently. On modified bitumen, look for open laps and blisters.",
      },
      {
        type: "paragraph",
        text:
          "**Check around rooftop equipment.** HVAC curbs, condensate lines and anywhere a technician has walked.",
      },
      {
        type: "paragraph",
        text:
          "**On a coated roof,** look for cracks at details, thin spots showing the substrate, and areas where the coating has lifted.",
      },
      {
        type: "paragraph",
        text:
          "Flat roof leaks often need a [roof repair](/roofing/roof-repairs) at the parapet rather than the membrane, which is why calling someone who does both roofing and stucco saves a second visit.",
      },
      { type: "heading", level: 2, text: "Finding Leaks on a Stucco Home" },
      {
        type: "paragraph",
        text:
          "Stucco homes have a category of leak that isn't a roof leak at all, and knowing how to spot it saves a lot of wasted roof repairs.",
      },
      {
        type: "paragraph",
        text:
          "**Look at the stucco below the roofline.** Dark staining, efflorescence (white mineral streaks), bubbling paint or soft spots on a wall directly below where a roof meets it mean water is getting behind the stucco at the transition. The roof may be fine. The flashing where it meets the wall is not.",
      },
      {
        type: "paragraph",
        text:
          "**Check for kickout flashing.** At the bottom of every roof-to-wall intersection there should be a small angled piece diverting water into the gutter. If it's missing, water runs down the wall face behind the stucco. This is one of the most common findings on older homes in the region.",
      },
      {
        type: "paragraph",
        text:
          "**Look at whether stucco runs over the flashing.** If the stucco comes down and covers the top edge of the step flashing instead of stopping above it, water wicks behind the stucco. This is a stucco installation error that shows up as a \"roof leak.\"",
      },
      {
        type: "paragraph",
        text:
          "**Check window heads below the roofline.** Water entering at a parapet or wall transition often shows up first at the top corners of a window a story below.",
      },
      {
        type: "paragraph",
        text:
          "When the water is in the wall, the repair involves opening the [stucco](/stucco), correcting the flashing and rebuilding the wall, not patching the roof.",
      },
      { type: "heading", level: 2, text: "The Water Test" },
      {
        type: "paragraph",
        text:
          "When visual inspection doesn't find it, a roofer isolates the source with a hose. One person is in the attic or inside with a flashlight. The other runs water on the roof, starting at the lowest suspect area and working uphill, one section at a time, several minutes per section. The moment water appears inside, the section being wetted is the source.",
      },
      {
        type: "image",
        src: "/images/blog/how-to-find-a-roof-leak/roofers-working-on-tile-roof.webp",
        alt:
          "Two roofers in hard hats working along the ridge of a tile roof on a Las Cruces property",
        caption:
          "On a tile roof, walking it to hunt for a leak breaks more tiles than it finds leaks. This is the point to hand it over.",
      },
      {
        type: "paragraph",
        text:
          "It's methodical, it takes an hour or two, and it works. It's also a job for a professional on a tile roof, where walking breaks tiles, and on a flat roof, where the leak can be far from where it shows and the test has to be sequenced carefully.",
      },
      { type: "heading", level: 2, text: "When to Stop Looking and Call Someone" },
      {
        type: "list",
        items: [
          "**Water is coming in now and more rain is forecast.** That's an [emergency roofing](/roofing/emergency-roofing) call, not a search. Here's [what emergency roof repair involves](/blog/what-is-emergency-roof-repair) and what to do while you wait.",
          "**Water is near electrical fixtures.** Cut the breaker and call.",
          "**The ceiling is sagging.** Structural, not diagnostic.",
          "**You've checked the attic and the roof from the ground and found nothing.** Two honest attempts is enough. The next step is a professional [roof inspection](/roofing/roof-inspections) with a water test.",
          "**It's a tile roof, a flat roof, or a two-story roof.** The risk of walking it outweighs the benefit of looking yourself.",
          "**The leak comes back after a repair.** The repair fixed a symptom. The source is elsewhere.",
        ],
      },
      { type: "heading", level: 2, text: "The Bottom Line on Finding a Roof Leak" },
      {
        type: "paragraph",
        text:
          "So, how to find a roof leak? Start at the stain, note when it appears, trace the water uphill in the attic to the entry point, then check flashing, parapets and penetrations above that spot before the roof field. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "The stain is never under the hole. Water travels down rafters, across decks and along walls before it drops.",
          "Flashing, parapets and pipe boots cause most leaks. The roofing material itself is well down the list.",
          "On a stucco home, stains on the wall below the roofline mean the leak is at the transition, and the fix is in the stucco and flashing, not the roof.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. Finding leaks on stucco and flat-roofed buildings is most of what we do, and because we handle both the roof and the wall, we fix the source instead of the symptom. If you've got a stain you can't trace, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll inspect the roof, the parapets and the wall transitions together.",
      },
    ],
  },
  {
    slug: "how-long-does-a-flat-roof-last",
    title: "How Long Does a Flat Roof Last? Lifespan by Type in Las Cruces",
    excerpt:
      "Most flat roofs last 15 to 30 years, but here the membrane rarely gives out first. Flat roofs in Las Cruces fail at the parapets, the drains and the seams.",
    metaTitle: "How Long Does a Flat Roof Last? Lifespan by Type",
    metaDescription:
      "How long does a flat roof last? See lifespan by membrane type, why flat roofs fail at parapets and drains, and how to add years to yours.",
    category: "Commercial Roofing",
    tags: [
      "flat roof",
      "lifespan",
      "tpo",
      "roof coating",
      "parapet",
      "commercial",
      "maintenance",
    ],
    publishedAt: "2026-10-19",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/how-long-does-a-flat-roof-last/flat-membrane-roof-drains-parapet.webp",
    featuredImageAlt:
      "Overhead view of a white flat membrane roof on a commercial building with rooftop units, drains and a parapet edge",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/specialty-roofing",
      "/roofing/silicone-roof-restoration",
      "/roofing/roof-maintenance",
    ],
    keywords: [
      "how long does a flat roof last",
      "flat roof lifespan",
      "tpo roof lifespan",
      "flat roof repair or replace",
      "flat roofing las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Most flat roofs last 15 to 30 years, depending on the membrane, how it was installed and how well it's maintained. In Las Cruces, the membrane itself usually isn't what gives out first. Flat roofs here tend to fail at the parapets, the drains and the seams long before the field of the roof wears through.",
      },
      {
        type: "paragraph",
        text:
          "That's an important distinction, because it changes what you do about it. A 15-year-old flat roof with a sound membrane and a cracked parapet cap doesn't need replacing. It needs a repair at the edge. A 15-year-old roof with open seams across the whole surface is a different conversation.",
      },
      {
        type: "paragraph",
        text:
          "This guide answers how long a flat roof lasts by type, explains why flat roofs wear differently from pitched roofs, covers what our climate does to them, lists the signs a flat roof is near the end, and walks through the repair, restore or replace decision.",
      },
      { type: "heading", level: 2, text: "How Long Does a Flat Roof Last by Type?" },
      {
        type: "paragraph",
        text:
          "Realistic ranges for a well-installed, reasonably maintained flat roof in southern New Mexico:",
      },
      {
        type: "table",
        head: ["Flat roof system", "Typical lifespan", "Notes"],
        rows: [
          ["TPO", "20 to 25 years (60 mil), longer for 80 mil", "The white surface handles our sun well, and seam welding quality decides most of its lifespan"],
          ["PVC", "20 to 30 years", "Similar to TPO with better chemical resistance, which makes it the pick under restaurant exhaust"],
          ["EPDM", "20 to 25 years", "Durable rubber, but the black surface absorbs heat and its seams are taped rather than welded"],
          ["Modified bitumen", "15 to 20 years", "Common on older commercial buildings. Holds up to foot traffic, but the asphalt ages under UV unless coated"],
          ["Built-up (tar and gravel)", "15 to 25 years", "Multiple layers make it forgiving, but it's heavy and leaks are hard to trace through the layers"],
          ["Spray polyurethane foam", "20 to 30 years or more", "As long as the protective coating on top is renewed on schedule. The foam breaks down quickly if the coating fails"],
          ["Silicone-coated roofs", "10 to 20 years per application", "The clock resets with each recoat. A sound roof under a maintained coating can keep going for decades"],
        ],
      },
      {
        type: "paragraph",
        text:
          "The spread inside each range comes down to three things: how well it was installed, how well water drains off it, and whether anyone looks at it between leaks.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Flat Roofs Wear Differently From Pitched Roofs",
      },
      {
        type: "paragraph",
        text:
          "A pitched roof sheds water in seconds. A flat roof, which is really a low-slope roof with a quarter inch or so of fall per foot, moves water slowly. That one difference explains most of how a flat roof ages.",
      },
      {
        type: "paragraph",
        text:
          "**Seams carry a constant load.** On a pitched roof, water runs over laps and away. On a flat roof, water sits against seams after every storm. A seam that's 90 percent welded will hold on a slope and leak on a flat roof.",
      },
      {
        type: "paragraph",
        text:
          "**Ponding speeds up wear.** Anywhere water stands for more than 48 hours, the membrane oxidizes faster, debris collects and the deck underneath takes extra load. A roof with ponding areas ages unevenly, with the low spots failing years ahead of the rest.",
      },
      {
        type: "paragraph",
        text:
          "**Foot traffic is part of the design.** Rooftop HVAC units, evaporative coolers, solar arrays and the technicians who service them all live on flat roofs. Every service visit is a chance for a dropped tool or a dragged hose to puncture the membrane.",
      },
      {
        type: "paragraph",
        text:
          "**Every edge is a wall.** Most flat roofs here sit behind parapets, so the perimeter isn't a drip edge, it's a vertical termination where membrane, flashing, stucco and a cap all meet. That makes [parapet repair](/blog/what-is-parapet-repair) one of the most common flat roof services in the region.",
      },
      {
        type: "heading",
        level: 2,
        text: "How New Mexico Climate Affects Flat Roof Lifespan",
      },
      {
        type: "paragraph",
        text:
          "When people ask how long a flat roof lasts in Las Cruces specifically, the honest answer is the middle of the national range, sometimes lower, unless the roof is coated or reflective.",
      },
      {
        type: "paragraph",
        text:
          "**UV oxidation.** Sun at our elevation breaks down exposed membranes year-round. Asphalt-based roofs (modified bitumen and built-up) dry out, crack and lose granules. Single-ply membranes chalk and thin.",
      },
      {
        type: "paragraph",
        text:
          "**Thermal cycling.** A 40-degree swing between afternoon and night is normal. Every cycle stretches and relaxes the membrane, working at seams, fasteners and the transitions at parapets and curbs. Over a decade, that's thousands of cycles.",
      },
      {
        type: "paragraph",
        text:
          "**Monsoon downbursts.** Summer storms bring 50 to 70 mph winds that lift membrane edges and drive rain sideways into parapet caps and counterflashing. A roof that's sound in May can have a lifted corner by August.",
      },
      {
        type: "paragraph",
        text:
          "**Dust and drainage.** A dry season's worth of dust washes into scuppers and canales in the first big storm. Blocked drains mean ponding, and ponding finds every weak seam within reach.",
      },
      {
        type: "paragraph",
        text:
          "**What helps.** Dry air means no moss, no algae and very little freeze-thaw damage. A reflective membrane or coating also cuts heat load dramatically, which is why TPO and silicone-coated roofs tend to outlast dark asphalt roofs here.",
      },
      { type: "heading", level: 2, text: "What Shortens a Flat Roof's Life" },
      { type: "paragraph", text: "The biggest factors, roughly in order:" },
      {
        type: "list",
        ordered: true,
        items: [
          "**Ponding water** from poor slope, a deflected deck or blocked drains",
          "**Parapet failures** that let water in at the top of the wall and behind the membrane",
          "**Clogged scuppers and canales** after dust storms and the first monsoon rains",
          "**Poor seam welding or adhesion** at installation, which shows up three to five years later",
          "**Rooftop equipment traffic** without walk pads",
          "**Skipped maintenance**, where small seam lifts and sealant failures go unaddressed for years",
        ],
      },
      {
        type: "callout",
        title: "The pattern behind all six",
        text:
          "None of these are about the membrane wearing out. They're about water getting somewhere it shouldn't. That's why two flat roofs of the same type and age can be a decade apart in condition.",
      },
      { type: "heading", level: 2, text: "Signs Your Flat Roof Is Near the End" },
      {
        type: "list",
        items: [
          "**Blisters** across the membrane, especially on modified bitumen and built-up roofs",
          "**Alligatoring**, a cracked pattern on asphalt-based surfaces that means the material has dried out",
          "**Open or lifting seams** in multiple areas, not just one spot",
          "**Soft spots underfoot**, which point to wet insulation or a damaged deck below",
          "**Membrane shrinkage** pulling away from parapets and curbs",
          "**Recurring leaks in different locations** after repairs",
          "**Visible deck sag** or ponding areas that are growing each year",
          "**Chalking, thinning or exposed scrim** on single-ply membranes",
        ],
      },
      {
        type: "paragraph",
        text:
          "One or two of these in one area is a repair. Several of them spread across the roof on a system past 15 years is a sign the roof is near replacement, or at least due for a moisture survey before anything else is decided.",
      },
      { type: "heading", level: 2, text: "How to Extend a Flat Roof's Life" },
      {
        type: "paragraph",
        text:
          "The good news about how long a flat roof lasts is that maintenance moves the number more on flat roofs than on any other roof type.",
      },
      {
        type: "list",
        items: [
          "**Inspect twice a year**, before monsoon season and after it. A [roof maintenance plan](/roofing/roof-maintenance) puts this on a schedule.",
          "**Clear every scupper, canale and drain** in spring and again after the first big storm.",
          "**Install walk pads** around HVAC units and along service paths.",
          "**Fix seam lifts and parapet cracks immediately.** On a flat roof, a small opening becomes a large wet area fast because water travels between the membrane and the deck.",
          "**Coat before the membrane fails.** A silicone coating applied while the membrane is still sound adds 10 to 20 years and resets the clock. See [how long roof coating lasts](/blog/how-long-does-roof-coating-last) for lifespan by coating type.",
          "**Address ponding at the source.** Clearing drains, adding a drain, or installing tapered insulation in low spots.",
        ],
      },
      {
        type: "image",
        src: "/images/blog/how-long-does-a-flat-roof-last/coating-applied-to-flat-roof.webp",
        alt:
          "Roofer rolling a reflective coating across a commercial flat roof with rooftop HVAC units and a parapet behind",
        caption:
          "A coating applied while the membrane is still sound is the cheapest decade a flat roof will ever get.",
      },
      { type: "heading", level: 2, text: "Repair, Restore or Replace?" },
      { type: "paragraph", text: "Three questions decide it." },
      {
        type: "paragraph",
        text:
          "**Is the insulation dry?** A moisture survey (infrared or nuclear meter) maps any wet areas under the membrane. If wet insulation covers only small areas, those sections are cut out and replaced, and the rest of the roof can be repaired or restored. If it's widespread, roughly a quarter of the roof or more, replacement is usually the honest answer.",
      },
      {
        type: "paragraph",
        text:
          "**Is the damage local or system-wide?** One open seam or a failed parapet termination is a [roof repair](/roofing/roof-repairs). Open seams, blisters and shrinkage across the whole roof point to a system at the end of its life.",
      },
      {
        type: "paragraph",
        text:
          "**Is the deck sound?** If the deck is solid and the insulation is dry, a [silicone roof restoration](/roofing/silicone-roof-restoration) can add decades at a fraction of replacement cost. If the deck is compromised, a [roof replacement](/roofing/roof-replacements) is the fix.",
      },
      {
        type: "paragraph",
        text:
          "Most flat roofs in Las Cruces that are 12 to 20 years old fall into the restore category. That's worth knowing before you get a replacement quote. For a closer look at the most common membrane here, see [what TPO roofing is](/blog/what-is-tpo-roofing).",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Flat Roof Lifespan" },
      {
        type: "paragraph",
        text:
          "So, how long does a flat roof last? Fifteen to 30 years depending on the type, with TPO, PVC and coated roofs at the longer end in our climate and asphalt-based roofs at the shorter end unless they're coated. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Flat roofs in Las Cruces usually fail at parapets, drains and seams first. Fixing those details is often all a mid-life roof needs.",
          "Ponding water is the single biggest lifespan killer. Keep drains clear and fix low spots.",
          "A silicone coating applied while the roof is still sound can push it decades past its expected life. A moisture survey tells you whether yours qualifies.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We repair, restore and replace TPO, modified bitumen, built-up and coated flat roofs, including the [specialty roofing](/roofing/specialty-roofing) systems and stucco parapets most roofers leave to someone else. To find out how much life your flat roof has left, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll inspect it, check for moisture and give you an honest recommendation.",
      },
    ],
  },
  {
    slug: "can-you-put-a-new-roof-over-an-old-roof",
    title: "Can You Put a New Roof Over an Old Roof? Overlay vs Tear-Off",
    excerpt:
      "Code usually allows one layer of shingles over one existing layer. But an overlay hides the deck, shortens the new roof's life and costs more at the next replacement.",
    metaTitle: "Can You Put a New Roof Over an Old Roof? Overlay Guide",
    metaDescription:
      "Can you put a new roof over an old roof? Learn what code allows, why tear-off usually wins, and when an overlay or recover makes sense.",
    category: "Roofing",
    tags: [
      "roof replacement",
      "tear-off",
      "decking",
      "flashing",
      "roof coating",
      "metal roofing",
      "warranty",
    ],
    publishedAt: "2026-10-19",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/can-you-put-a-new-roof-over-an-old-roof/roof-tear-off-in-progress.webp",
    featuredImageAlt:
      "Two roofers stripping the old roof covering from a roof beside a brick chimney, exposing the battens beneath",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/roof-replacements",
      "/roofing/roof-inspections",
      "/roofing/specialty-roofing",
    ],
    keywords: [
      "can you put a new roof over an old roof",
      "roof overlay vs tear off",
      "roof layover code",
      "second layer of shingles",
      "roof replacement las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Yes, sometimes. Building code generally allows one new layer of asphalt shingles over a single existing layer, as long as the old roof is dry, flat and structurally sound. But just because you can doesn't mean you should. For most pitched roofs, a full tear-off is the better investment. The real exceptions are coating a sound flat roof and, in some cases, installing a metal roof over one layer of shingles.",
      },
      {
        type: "paragraph",
        text:
          "This question usually comes up the moment a homeowner sees two numbers on a quote, one for an overlay and a higher one for a tear-off. The overlay looks like an easy savings. Sometimes it is. More often, it moves the cost down the road and adds to it.",
      },
      {
        type: "paragraph",
        text:
          "This guide explains what an overlay is, what code allows in practice, the honest case for and against it, the situations where it does make sense, and the questions to ask before agreeing to one.",
      },
      { type: "heading", level: 2, text: "What Is a Roof Overlay?" },
      {
        type: "paragraph",
        text:
          "A roof overlay, also called a layover or reroof, means installing new roofing directly on top of the existing roof without removing it. The old shingles stay in place, new underlayment may or may not go down, and the new shingles are nailed through both layers into the deck.",
      },
      {
        type: "paragraph",
        text:
          "A tear-off removes everything down to the bare deck: shingles, nails, old underlayment and old flashing. The deck gets inspected and repaired, then the new roof goes on as a complete system.",
      },
      {
        type: "paragraph",
        text:
          "On flat roofs, the overlay equivalent is called a recover: a new membrane or a coating goes over the existing roof, sometimes with a cover board in between.",
      },
      { type: "heading", level: 2, text: "What Does Building Code Allow?" },
      {
        type: "paragraph",
        text:
          "So can you put a new roof over an old roof under code? The International Residential Code, which most local codes in New Mexico are based on, allows a recover over existing roofing in limited cases. In practice:",
      },
      {
        type: "list",
        items: [
          "**One overlay maximum.** If there are already two layers of shingles, both have to come off.",
          "**The existing roof must be dry and sound.** An overlay isn't allowed over wet, rotted or deteriorated roofing.",
          "**No overlay over tile, slate or wood shake.** Those materials have to be removed.",
          "**Damaged decking has to be addressed**, which is hard to do when you can't see it.",
          "**Flashing and drip edge requirements still apply** to the new roof.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Local jurisdictions can be stricter, and the permit inspector has the final say. Any contractor proposing an overlay should be able to tell you exactly how it meets code on your roof.",
      },
      { type: "heading", level: 2, text: "The Case for an Overlay" },
      {
        type: "paragraph",
        text: "There are real advantages, and it's fair to name them.",
      },
      {
        type: "list",
        items: [
          "**Lower upfront cost.** No tear-off labor and no disposal fees. Savings typically run in the range of a few thousand dollars on an average home.",
          "**Faster installation.** Often a day shorter.",
          "**Less mess and noise.** No debris chute, no full day of tear-off.",
          "**The old roof adds a layer.** In theory, it's an extra barrier while the new roof is going on.",
        ],
      },
      {
        type: "paragraph",
        text:
          "For a short-term owner who plans to sell within a few years, or a detached garage or shed, those advantages can tip the decision.",
      },
      { type: "heading", level: 2, text: "Why Most Roofers Recommend a Tear-Off" },
      {
        type: "paragraph",
        text: "For a home you plan to stay in, the case against an overlay is stronger.",
      },
      {
        type: "paragraph",
        text:
          "**It hides the deck.** Rot, soft spots and old leak damage stay buried. Nobody sees them until they show up as a sag or a stain years later, and by then the repair is bigger. [Roof decking](/blog/what-is-roof-decking) is the foundation of the whole system, and an overlay means installing a new roof on a foundation nobody looked at.",
      },
      {
        type: "paragraph",
        text:
          "**It adds weight.** A second layer of architectural shingles adds roughly 2 to 4 pounds per square foot across the whole roof. Most framing can carry it, but older homes and long spans may not carry it well.",
      },
      {
        type: "paragraph",
        text:
          "**It shortens the life of the new shingles.** Shingles laid over old shingles don't lie perfectly flat. They follow every curl and bump below. They also run hotter, because the second layer traps heat, and heat is what ages shingles fastest in Las Cruces.",
      },
      {
        type: "paragraph",
        text:
          "**It complicates flashing.** Old flashing often gets reused or covered rather than replaced. Since [flashing](/blog/what-is-roof-flashing) causes more leaks than anything else, this is the detail that most often turns an overlay into a callback.",
      },
      {
        type: "paragraph",
        text:
          "**It can void or limit warranties.** Many shingle manufacturers reduce or deny warranty coverage on overlays, and the best enhanced warranties typically require a full tear-off.",
      },
      {
        type: "paragraph",
        text:
          "**It costs more next time.** When the overlay roof wears out, two layers have to come off instead of one. The savings you got today, you pay back with interest at the next replacement.",
      },
      {
        type: "paragraph",
        text:
          "**It affects resale and insurance.** Home inspectors flag two layers. Some insurers adjust premiums or coverage for overlaid roofs.",
      },
      {
        type: "paragraph",
        text:
          "This is why a complete [roof replacement](/roofing/roof-replacements) almost always starts with a tear-off. You can see the full sequence in [how roof replacement works](/blog/how-does-roof-replacement-work).",
      },
      { type: "heading", level: 2, text: "When an Overlay Does Make Sense" },
      {
        type: "paragraph",
        text:
          "There are three situations where going over the existing roof is the right call.",
      },
      {
        type: "paragraph",
        text:
          "**Coating a sound flat roof.** This is the most common and most effective form of recover. A silicone or elastomeric coating applied over a dry, structurally sound flat roof seals it under a seamless membrane, adds 10 to 20 years, and avoids tearing off anything. It's a recognized system with a manufacturer warranty, not a shortcut. The key is a moisture survey first. See [what silicone roof restoration is](/blog/what-is-silicone-roof-restoration) for the full process.",
      },
      {
        type: "paragraph",
        text:
          "**Metal over a single layer of shingles.** Some metal roofing systems are designed to go over one layer of existing shingles, typically on battens or with a slip sheet. Metal is light, so weight is less of a concern, and the existing shingles add a small amount of insulation and sound dampening. It still makes sense to inspect the deck first, and the flashing at walls and penetrations still has to be done right. [Metal roofing](/blog/what-is-metal-roofing) covers the system types in detail.",
      },
      {
        type: "paragraph",
        text:
          "**Recover boards on certain flat roofs.** On some commercial flat roofs with a dry, sound existing membrane, a cover board and a new single-ply membrane can go over the top. This depends on the existing system, the insulation condition and the number of existing layers.",
      },
      {
        type: "image",
        src: "/images/blog/can-you-put-a-new-roof-over-an-old-roof/finished-roofline-eave-detail.webp",
        alt:
          "Close view of a finished roof edge and eave against a clear sky",
        caption:
          "A roof installed on a clean deck gets its full rated life. An overlay rarely does.",
      },
      { type: "heading", level: 2, text: "Overlay vs Tear-Off: Side by Side" },
      {
        type: "paragraph",
        text: "Here's how the two compare on a typical asphalt shingle home.",
      },
      {
        type: "table",
        head: ["", "Overlay", "Tear-off"],
        rows: [
          ["Upfront cost", "Costs less", "Costs more, from labor and disposal"],
          ["Lifespan of the new roof", "Typically a few years less", "The full expected life"],
          ["Deck inspection", "Hides the deck", "Exposes every sheet so damage gets repaired"],
          ["Flashing", "Often reuses old flashing", "Replaces it all"],
          ["Weight", "Adds a full layer", "Keeps the roof at one layer"],
          ["Warranty", "May limit or void manufacturer coverage", "Qualifies for full warranties"],
          ["Next replacement", "Two layers to remove later", "One layer"],
          ["Resale and inspection", "Gets flagged", "A clean record"],
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Questions to Ask Before You Agree to an Overlay",
      },
      {
        type: "paragraph",
        text: "If a contractor proposes going over your existing roof, ask:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**How many layers are on the roof now?** If the answer is two, an overlay isn't an option.",
          "**How do you know the deck is sound?** A walk-on inspection and an attic check are the minimum.",
          "**Will the flashing be replaced or reused?**",
          "**What does the shingle manufacturer's warranty say about overlays?** Ask to see it in writing.",
          "**What's the price difference, exactly?** Compare it with the cost of removing two layers at the next replacement.",
          "**Does it meet local code and will it be permitted?**",
        ],
      },
      {
        type: "paragraph",
        text:
          "A professional [roof inspection](/roofing/roof-inspections) before you decide will answer most of these.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Roof Overlays" },
      {
        type: "paragraph",
        text:
          "So, can you put a new roof over an old roof? Code usually allows one overlay of shingles over a single dry, sound layer, but for most homes a tear-off is the better value over the life of the roof. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "An overlay saves money today, hides the deck and old flashing, and costs more at the next replacement.",
          "Coating a sound flat roof is the one recover that's clearly worth it, and it's a full system with a warranty.",
          "Metal over one layer of shingles can work, but only with a deck inspection and new flashing.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We'll inspect your roof and tell you honestly whether an overlay, a tear-off or a [specialty roofing](/roofing/specialty-roofing) system like coating or metal is the right fit. Call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) and we'll give you a written comparison before you decide.",
      },
    ],
  },
  {
    slug: "what-is-roof-decking",
    title: "What Is Roof Decking? Plywood, OSB and When It Needs Replacing",
    excerpt:
      "Decking is the plywood or OSB layer every other part of the roof is nailed to. It is also the line item nobody can price until the old roof comes off.",
    metaTitle: "What Is Roof Decking? Plywood, OSB and Replacement",
    metaDescription:
      "What is roof decking? Compare plywood and OSB, learn what causes rot, the signs of damaged decking, and why roof quotes price it per sheet.",
    category: "Roofing Materials",
    tags: [
      "decking",
      "materials",
      "roof replacement",
      "underlayment",
      "ventilation",
      "inspection",
      "tile roof",
    ],
    publishedAt: "2026-10-19",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/what-is-roof-decking/osb-sheathing-panels-framing.webp",
    featuredImageAlt:
      "House under construction with timber framing and OSB structural sheathing panels, the same panel material used for roof decking",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/roof-replacements",
      "/roofing/roof-inspections",
      "/roofing/roof-repairs",
    ],
    keywords: [
      "what is roof decking",
      "plywood vs osb roof decking",
      "roof sheathing replacement",
      "damaged roof decking signs",
      "roof decking las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Roof decking, also called sheathing, is the layer of plywood or OSB panels fastened across the rafters or trusses. Everything else on the roof is nailed to it: the underlayment, the flashing, and the shingles, tile or metal on top. It's the structural base of the whole roof, and it's the one part you can't see until the old roof comes off.",
      },
      {
        type: "paragraph",
        text:
          "That's why decking is the line item that surprises people on a roof replacement. The quote includes a per-sheet price for \"decking as needed,\" and nobody knows the final number until tear-off day. Understanding what roof decking is, what damages it and how it's priced takes most of the surprise out of it.",
      },
      {
        type: "paragraph",
        text:
          "This guide covers what decking does, the types and thicknesses, what causes it to fail, the signs of damage from inside and outside the house, why it's priced the way it is, and what's different on flat and tile roofs.",
      },
      { type: "heading", level: 2, text: "What Is Roof Decking and What Does It Do?" },
      { type: "paragraph", text: "Decking does three jobs." },
      {
        type: "paragraph",
        text:
          "**It's the nailing base.** Every shingle nail, underlayment fastener and flashing screw goes into the deck. If the deck is soft or deteriorated, fasteners don't hold, and roofing materials lift in wind.",
      },
      {
        type: "paragraph",
        text:
          "**It gives the roof its structure.** Rafters and trusses carry the load, and decking ties them together into a rigid plane. It spreads weight from roofing, foot traffic and wind loads across the framing.",
      },
      {
        type: "paragraph",
        text:
          "**It supports the waterproofing layers.** Underlayment and roofing need a smooth, continuous surface. Gaps, sags and soft spots in the deck telegraph through to the surface and create places for water to collect.",
      },
      {
        type: "callout",
        title: "What roof decking isn't",
        text:
          "Waterproof. It's wood. Its job is to stay dry under the layers above it, and it fails when those layers let water through.",
      },
      { type: "heading", level: 2, text: "Types of Roof Decking" },
      { type: "heading", level: 3, text: "Plywood vs OSB" },
      {
        type: "paragraph",
        text: "Nearly all modern residential roofs use one of these two.",
      },
      {
        type: "table",
        head: ["", "Plywood", "OSB (oriented strand board)"],
        rows: [
          ["Made from", "Thin wood veneers glued in cross-grain layers", "Wood strands compressed with resin in layered patterns"],
          ["Cost", "Somewhat more per sheet", "Less, and the most common decking on newer homes"],
          ["Wetting", "Handles brief wetting well and dries without much swelling", "Absorbs water more slowly but swells at the edges, and stays swollen"],
          ["Nail holding", "Slightly better", "Strong and consistent when kept dry"],
          ["How it fails", "Usually delaminates in layers", "Edges swell and crumble, and the panel loses strength"],
        ],
      },
      {
        type: "paragraph",
        text:
          "Both meet code for roof decking. In a dry climate like ours, either performs well as long as the roof above it does its job. The difference shows up after a long-term leak, where OSB's edge swelling becomes visible as ridges in the roofline.",
      },
      { type: "heading", level: 3, text: "Plank Decking" },
      {
        type: "paragraph",
        text:
          "Older homes, especially those built before the 1970s, often have solid board decking: 1x6 or 1x8 planks laid across the rafters. Some have spaced boards with gaps between them, which was common under wood shake. Spaced plank decking usually needs a layer of plywood or OSB over it before modern shingles can go on.",
      },
      { type: "heading", level: 3, text: "Concrete and Steel Decks" },
      {
        type: "paragraph",
        text:
          "Commercial flat roofs often sit on poured concrete, precast concrete or corrugated steel decks, with rigid insulation on top and the membrane over that. These don't rot, but steel decks can rust where water sits, and insulation above any deck type can saturate.",
      },
      { type: "heading", level: 2, text: "How Thick Should Roof Decking Be?" },
      { type: "paragraph", text: "Typical thicknesses on residential roofs:" },
      {
        type: "list",
        items: [
          "**7/16 inch OSB or 1/2 inch plywood:** the common minimum for shingle roofs on rafters spaced 24 inches apart",
          "**5/8 inch:** better for tile, which is far heavier, and for roofs that will see foot traffic or heavier loads",
          "**3/4 inch:** used on some high-load or long-span applications",
        ],
      },
      {
        type: "paragraph",
        text:
          "Thicker decking feels more solid underfoot, holds fasteners better and resists sagging between rafters. On a tile roof replacement, upgrading thin decking to 5/8 inch is often worth discussing.",
      },
      {
        type: "image",
        src: "/images/blog/what-is-roof-decking/fasteners-into-roof-deck.webp",
        alt:
          "Nail gun resting on a shingled roof slope beside the drip edge, with a stucco wall alongside",
        caption:
          "Every fastener on the roof ends up in the deck. If the deck is soft, nothing above it holds in wind.",
      },
      { type: "heading", level: 2, text: "What Causes Roof Decking to Fail?" },
      {
        type: "paragraph",
        text:
          "Decking almost never fails on its own. Something lets water reach it, or keeps moisture against it.",
      },
      {
        type: "list",
        items: [
          "**Long-term leaks.** A small leak that runs for years soaks the same area every storm. This is the most common cause.",
          "**Failed flashing.** Water entering at walls, chimneys and penetrations runs down the deck behind the underlayment.",
          "**Poor attic ventilation.** Warm, moist air from the house condenses on the underside of the deck in cold weather. Repeated over years, it rots the deck from below even with a perfect roof on top.",
          "**Ponding on flat roofs.** Standing water finds its way through seams and saturates insulation and decking below.",
          "**Failed underlayment under tile.** Tile roofs leak with intact tiles when the underlayment beneath gives out, and the deck takes the water.",
          "**Overlays.** A second layer of shingles laid over damaged decking hides the problem and lets it grow.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Most of these trace back to the layers above. [Roof underlayment](/blog/what-is-roof-underlayment) and flashing are what keep the deck dry, and when they fail, the deck is next.",
      },
      { type: "heading", level: 2, text: "Signs of Damaged Roof Decking" },
      {
        type: "paragraph",
        text:
          "You can spot many decking problems before tear-off if you know where to look.",
      },
      { type: "paragraph", text: "**From inside the attic:**" },
      {
        type: "list",
        items: [
          "Dark stains or rings on the underside of the deck",
          "Soft or spongy spots when you press up on the decking between rafters",
          "Visible sagging between rafters",
          "Daylight through gaps",
          "Mold or mildew on the wood",
          "Rusted nail tips, especially clustered in one area",
        ],
      },
      { type: "paragraph", text: "**From outside:**" },
      {
        type: "list",
        items: [
          "A wavy or uneven roofline",
          "Visible dips or sags in a roof plane",
          "Shingles that look raised in lines, which can be swollen OSB edges below",
          "Soft spots underfoot (a roofer's observation, not something to test yourself)",
        ],
      },
      {
        type: "paragraph",
        text:
          "If you're tracing a leak, the attic is where decking damage shows first. [How to find a roof leak](/blog/how-to-find-a-roof-leak) walks through what to look for.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Decking Is Priced Per Sheet in Your Quote",
      },
      {
        type: "paragraph",
        text:
          "A good roof replacement quote doesn't give a flat price for decking, and that's a good sign, not a dodge.",
      },
      {
        type: "paragraph",
        text:
          "Nobody can see the deck through the old roof. A roofer can spot soft areas, check the attic and make an educated estimate, but the real condition only shows after tear-off. So instead of guessing high to protect themselves or guessing low and surprising you later, reputable contractors list a per-sheet price for any decking that needs replacing.",
      },
      { type: "paragraph", text: "What to expect and ask for:" },
      {
        type: "list",
        items: [
          "**A clear per-sheet price** in the written quote, for both labor and material",
          "**Photos of damaged decking before it's replaced**, so you can see what you're paying for",
          "**A call or text** if replacement will exceed a set number of sheets",
          "**An honest estimate range** based on the attic inspection",
        ],
      },
      {
        type: "paragraph",
        text:
          "On most re-roofs, a handful of sheets need replacing, usually around old leak points, valleys and penetrations. Widespread replacement usually means a long history of leaks or poor ventilation. This is all part of [how roof replacement works](/blog/how-does-roof-replacement-work), at the deck inspection stage after tear-off.",
      },
      { type: "heading", level: 2, text: "Decking on Flat Roofs and Tile Roofs" },
      {
        type: "paragraph",
        text:
          "**Flat roofs.** On commercial and Pueblo-style flat roofs, wet insulation is often the bigger issue than the deck itself. A moisture survey before any restoration or replacement maps where insulation is saturated. Those areas are cut out, the deck below is checked and repaired, and new insulation goes in. Skipping this step and coating over wet insulation traps the moisture and rots the deck from the top down.",
      },
      {
        type: "paragraph",
        text:
          "**Tile roofs.** Tile adds several times the weight of shingles, so deck thickness and condition matter more. During an underlayment replacement on a [tile roof](/roofing/tile-roofing), the tiles come off, which exposes the deck for inspection and repair before new underlayment goes down. It's the best opportunity in a tile roof's life to fix decking problems.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Roof Decking" },
      {
        type: "paragraph",
        text:
          "So, what is roof decking? The plywood, OSB or plank layer across the rafters that every other part of the roof is fastened to. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Decking fails when water or condensation reaches it, so flashing, underlayment and ventilation are what protect it.",
          "You can spot many problems from the attic before tear-off: stains, soft spots, sagging and daylight.",
          "Per-sheet decking pricing in a quote is normal and fair. Ask for photos before any sheet is replaced.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. Every [roof replacement](/roofing/roof-replacements) we do includes a full deck inspection after tear-off, with photos and a per-sheet price agreed in writing up front. If you're seeing stains or sagging, or want an honest estimate before a replacement, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact). We'll start with a [roof inspection](/roofing/roof-inspections) that includes the attic, and if we find damage, we'll scope the [roof repair](/roofing/roof-repairs) or replacement from there.",
      },
    ],
  },
  {
    slug: "what-is-stucco-remediation",
    title: "What Is Stucco Remediation? When Repair Isn't Enough",
    excerpt:
      "Remediation removes stucco where water is trapped behind it, repairs the structure, corrects the flashing that caused it and rebuilds the wall. Repair only fixes the surface.",
    metaTitle: "What Is Stucco Remediation? When Repair Isn't Enough",
    metaDescription:
      "What is stucco remediation? Learn how it differs from repair, the signs of moisture behind stucco, how probe testing works and the process.",
    category: "Stucco",
    tags: [
      "stucco",
      "moisture",
      "flashing",
      "parapet",
      "eifs",
      "cracks",
      "inspection",
    ],
    publishedAt: "2026-10-19",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/what-is-stucco-remediation/stucco-patches-staining-below-window.webp",
    featuredImageAlt:
      "Stucco wall below a window showing pale patch repairs and discolouration, typical signs of moisture behind the finish",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/stucco",
      "/roofing/roof-inspections",
      "/roofing/roof-repairs",
    ],
    keywords: [
      "what is stucco remediation",
      "stucco remediation vs repair",
      "moisture behind stucco",
      "stucco probe testing",
      "stucco remediation las cruces",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Stucco remediation is the process of removing stucco from areas where moisture has gotten behind it, repairing the damaged sheathing and framing underneath, installing a proper drainage system, and then re-stuccoing the wall. It's the fix when water is trapped behind the wall, not when there's just a crack in the surface.",
      },
      {
        type: "paragraph",
        text:
          "Most homeowners first hear the term in a home inspection report. A buyer's inspector runs a moisture meter along the walls, finds high readings below a window, and recommends \"further evaluation for possible stucco remediation.\" Suddenly a house that looked fine has a line item nobody planned for.",
      },
      {
        type: "paragraph",
        text:
          "This guide explains what stucco remediation is and how it differs from repair, what causes moisture behind stucco in the first place, the signs to watch for, how moisture testing works, the full remediation process, and what to know if you're buying or selling a stucco home in Las Cruces.",
      },
      { type: "heading", level: 2, text: "Stucco Remediation vs Stucco Repair" },
      {
        type: "paragraph",
        text: "The difference between stucco remediation and repair is depth.",
      },
      {
        type: "paragraph",
        text:
          "**Stucco repair** fixes the surface. Hairline cracks get sealed, chips and impact damage get patched, and the finish gets blended to match. The wall behind is assumed to be sound, and it usually is.",
      },
      {
        type: "paragraph",
        text:
          "**Stucco remediation** fixes what's behind the surface. It's needed when water has already gotten through the stucco and the weather-resistive barrier, and is damaging the sheathing, framing or insulation. Patching the surface in that situation hides the problem while the wall keeps rotting.",
      },
      { type: "paragraph", text: "How to tell which one you need:" },
      {
        type: "list",
        items: [
          "**Repair:** cracks without staining, no soft spots, normal moisture readings, damage limited to the surface",
          "**Remediation:** staining, efflorescence, soft or hollow areas, bulging, elevated moisture readings, interior drywall damage, or a musty smell inside near exterior walls",
        ],
      },
      {
        type: "paragraph",
        text:
          "When in doubt, testing settles it. A crack can look the same whether the wall behind it is dry or soaked.",
      },
      { type: "heading", level: 2, text: "What Causes Moisture Behind Stucco?" },
      {
        type: "paragraph",
        text:
          "Stucco is meant to get wet and dry out. Traditional three-coat stucco is porous by design, and the system relies on a drainage plane behind it to carry away any water that soaks through. Remediation becomes necessary when that system is missing, blocked or bypassed.",
      },
      { type: "paragraph", text: "The most common causes:" },
      {
        type: "list",
        items: [
          "**Missing or buried weep screed.** The metal strip at the base of the wall lets water drain out. When it's missing, or buried under soil, pavers or a later stucco coat, water has nowhere to go.",
          "**Failed window and door flashing.** Water enters at the corners of openings and runs down inside the wall. This is the single most common source.",
          "**Stucco run over roof flashing.** Where a roof meets a stucco wall, plaster applied over the top edge of the flashing wicks water behind the system.",
          "**Missing kickout flashing.** At the bottom of a roof-to-wall intersection, water runs down the wall face and behind the stucco.",
          "**Parapet cap failure.** On flat-roofed homes, a cracked stucco cap lets water into the top of the wall, where it travels down inside.",
          "**Sprinklers aimed at walls.** Repeated soaking at the base is a common residential cause.",
          "**Barrier-type EIFS.** Older synthetic stucco systems installed without a drainage plane trap any water that gets in.",
          "**Poor original installation.** Thin coats, no drainage plane, or skipped expansion joints.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Several of these are roofing details as much as stucco details, which is why [parapet repair](/blog/what-is-parapet-repair) and [flashing](/blog/what-is-roof-flashing) correction are often part of a remediation job.",
      },
      {
        type: "image",
        src: "/images/blog/what-is-stucco-remediation/water-staining-below-roofline-stucco.webp",
        alt:
          "Dark water staining running down a stucco wall below the roofline and around a canale on a Las Cruces home",
        caption:
          "Staining that runs down from the roofline points at the transition above it, not at the stucco it shows up on.",
      },
      { type: "heading", level: 2, text: "Signs You Might Need Stucco Remediation" },
      {
        type: "list",
        items: [
          "**Staining or dark streaks**, especially below windows, at corners of openings and below roof lines",
          "**Efflorescence**, white mineral deposits on the surface showing moisture is moving through the wall",
          "**Soft or spongy spots** when you press on the stucco",
          "**Hollow sound** when you tap the wall",
          "**Bulging or bowing** sections",
          "**Cracks with staining** around them, rather than clean hairline cracks",
          "**Interior damage**: swollen baseboards, bubbling paint or soft drywall on exterior walls",
          "**Musty odors** inside near exterior walls",
          "**Peeling or blistering paint** on the stucco surface",
        ],
      },
      {
        type: "paragraph",
        text:
          "Clean hairline cracks with no staining are normal and are a repair item. See [how long stucco lasts](/blog/how-long-does-stucco-last) for what normal aging looks like.",
      },
      { type: "heading", level: 2, text: "How Stucco Moisture Testing Works" },
      {
        type: "paragraph",
        text:
          "You can't see moisture behind stucco, so remediation decisions are based on testing.",
      },
      {
        type: "paragraph",
        text:
          "**Visual inspection.** An inspector walks the exterior and notes staining, cracks, efflorescence, missing weep screed, flashing details at windows and roof lines, and grading at the base of the walls. This identifies where to test.",
      },
      {
        type: "paragraph",
        text:
          "**Non-invasive scanning.** A surface moisture meter or infrared camera can flag areas worth a closer look, but readings through stucco aren't definitive.",
      },
      {
        type: "paragraph",
        text:
          "**Probe testing.** This is the standard. Small holes, about a quarter inch, are drilled through the stucco at targeted locations, typically below window corners, at roof-to-wall intersections, near the base of walls and at known trouble spots. A moisture probe reads the condition of the sheathing behind. The probe also gives a sense of whether the wood is firm or soft. Holes are sealed with a matching sealant afterward.",
      },
      {
        type: "paragraph",
        text:
          "**Reading the results.** Readings are compared against dry baseline readings from the same wall. Elevated readings in a cluster, particularly with soft sheathing, map the area that needs remediation. Normal readings across the wall mean surface repair is enough.",
      },
      {
        type: "callout",
        title: "The report is the scope",
        text:
          "Good remediation is targeted at the areas the testing identified, not the whole house by default.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Stucco Remediation Process Step by Step",
      },
      {
        type: "paragraph",
        text: "Here's what stucco remediation involves on a typical job.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Testing and mapping.** Probe testing defines the affected areas and their boundaries.",
          "**Removal.** Stucco and lath are cut out and removed from the affected sections, extending past the damage into dry wall area so the repair ties into sound material.",
          "**Sheathing and framing repair.** Wet or rotted sheathing is replaced. Framing is inspected, and any damaged studs or plates are repaired or replaced. The wall cavity is allowed to dry, and insulation is replaced where it's wet.",
          "**New weather-resistive barrier and drainage plane.** Two layers of building paper or a drainage wrap go on, properly lapped and integrated with the surrounding barrier.",
          "**Flashing correction.** Window and door flashing, roof-to-wall step flashing, kickout flashing and parapet terminations are corrected. This is the step that keeps the problem from coming back.",
          "**New lath, weep screed and accessories.** Metal lath is installed with proper furring, and weep screed, casing beads and expansion joints are placed where they belong.",
          "**Three-coat stucco and finish matching.** Scratch, brown and finish coats are applied with full cure times, and the finish texture and color are matched to the rest of the house. See [how stucco is applied](/blog/how-is-stucco-applied) for each coat in detail.",
        ],
      },
      {
        type: "paragraph",
        text:
          "The wall comes out of remediation better than it went in, because the details that caused the problem are corrected rather than recreated.",
      },
      { type: "heading", level: 2, text: "Partial vs Full Remediation" },
      {
        type: "paragraph",
        text:
          "**Partial remediation** addresses specific areas, such as below a few windows, one roof-to-wall intersection, or one elevation. This is the most common outcome when testing is done early, and it's far less expensive.",
      },
      {
        type: "paragraph",
        text:
          "**Full remediation** strips the entire house to the sheathing and starts over. It's needed when moisture damage is widespread, usually because of a system-wide installation flaw such as no drainage plane anywhere, or barrier EIFS on every wall.",
      },
      {
        type: "paragraph",
        text:
          "The deciding factor is the testing map. Clusters of high readings in a few areas point to partial. High readings everywhere point to full.",
      },
      {
        type: "heading",
        level: 2,
        text: "Does New Mexico's Climate Make Remediation Less Common?",
      },
      {
        type: "paragraph",
        text:
          "Yes, but not rare. Our dry air means stucco that gets wet dries faster than it would in humid regions, and we see far less of the widespread rot that drove stucco remediation programs in the East and Southeast.",
      },
      {
        type: "paragraph",
        text:
          "But the causes are still here. Monsoon rain arrives hard and sideways and finds every flashing gap at once. Sprinklers aimed at walls soak the same spot daily. Parapets on flat-roofed homes channel water straight into the top of the wall. And a lot of stucco in the region was installed decades ago, before current drainage plane requirements.",
      },
      {
        type: "paragraph",
        text:
          "The result is that remediation in Las Cruces tends to be targeted rather than whole-house: below windows, at parapets, at roof-to-wall transitions and along the base of walls.",
      },
      { type: "heading", level: 2, text: "Remediation and Buying or Selling a Home" },
      {
        type: "paragraph",
        text:
          "If you're **selling**, a pre-listing stucco inspection lets you find and fix problems on your own timeline rather than negotiating them under a buyer's deadline. A clean test report is also a selling point.",
      },
      {
        type: "paragraph",
        text:
          "If you're **buying**, a standard home inspection notes visible stucco issues but rarely includes probe testing. If the report flags staining, soft spots or elevated readings, ask for a stucco-specific inspection before closing. The cost of testing is small compared with the cost of finding damage after you own the house.",
      },
      {
        type: "paragraph",
        text:
          "In either case, the inspection report should identify test locations, readings and recommended scope. Vague recommendations like \"possible moisture intrusion\" need a follow-up test before anyone can price the work.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Stucco Remediation" },
      {
        type: "paragraph",
        text:
          "So, what is stucco remediation? Removing stucco where water is trapped behind it, repairing the damaged structure, installing a proper drainage plane, correcting the flashing that caused it, and re-stuccoing. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Repair fixes the surface. Remediation fixes what's behind it. Testing tells you which one you need.",
          "Most moisture behind stucco comes from flashing at windows, roofs and parapets, plus missing weep screed. The fix has to correct those, not just replace the wet wood.",
          "In Las Cruces, remediation is usually targeted to specific areas, especially when problems are caught early.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed, insured and bonded contractor serving Las Cruces and Doña Ana County since 2010. We handle [stucco](/stucco) remediation from start to finish, including the roof-to-wall flashing and parapet details that most stucco-only crews can't correct. If an inspection flagged moisture or you're seeing staining or soft spots, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact). We'll start with a [roof and exterior inspection](/roofing/roof-inspections), and if the source is at the roof line, we'll handle that [roof repair](/roofing/roof-repairs) as part of the same job.",
      },
    ],
  },
  {
    slug: "different-types-of-roofing-materials",
    title: "Different Types of Roofing Materials: A Complete Guide for Las Cruces Homes",
    excerpt:
      "Shingle, clay tile, concrete tile, metal and slate for pitched roofs; TPO, PVC, modified bitumen, foam and coatings for flat. Here is how each performs in our climate.",
    metaTitle: "Different Types of Roofing Materials: Full Guide",
    metaDescription:
      "Different types of roofing materials compared: shingle, tile, metal and flat roof membranes, with lifespan, cost and how each handles heat.",
    category: "Roofing Materials",
    tags: [
      "materials",
      "lifespan",
      "tile roof",
      "metal roofing",
      "asphalt shingle",
      "flat roof",
      "tpo",
    ],
    publishedAt: "2026-10-22",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/different-types-of-roofing-materials/concrete-tile-roof-overhead.webp",
    featuredImageAlt:
      "Overhead view of a worker in a safety harness on a grey concrete tile roof, showing the interlocking tile profile",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing",
      "/roofing/tile-roofing",
      "/roofing/specialty-roofing",
    ],
    keywords: [
      "different types of roofing materials",
      "roofing materials compared",
      "best roofing material",
      "roof material lifespan",
      "roofing materials las cruces",
    ],
    faqs: [
      {
        question: "What is the most common roofing material in the US?",
        answer:
          "Asphalt shingles. Roughly seven in ten American homes have them, because they're affordable, easy to install and widely available. In Las Cruces they're most common on newer subdivision homes.",
      },
      {
        question: "Which roofing material lasts the longest?",
        answer:
          "Natural slate lasts longest, often 75 to 200 years. Among common materials in southern New Mexico, clay tile (50 to 100+ years) and standing seam metal (50 to 70 years) last longest.",
      },
      {
        question: "What is the cheapest roofing material?",
        answer:
          "3-tab asphalt shingles have the lowest upfront cost, but they also have the shortest lifespan in hot climates. Architectural shingles cost a little more and last noticeably longer.",
      },
      {
        question: "What roofing material is best for flat roofs?",
        answer:
          "In Las Cruces, white TPO or PVC for new flat roofs, and a silicone coating over an existing sound flat roof. Both reflect sun and handle heat better than dark asphalt-based membranes.",
      },
      {
        question: "Is tile too heavy for my house?",
        answer:
          "It depends on the framing. Tile weighs roughly 6 to 12 pounds per square foot, compared with 2 to 4 for shingles. Homes built for tile can carry it. Homes built for shingles often need an engineering review before switching.",
      },
      {
        question: "Can I put tile on a roof that had shingles?",
        answer:
          "Yes, if the framing and decking can support the added weight. A roofer will check rafter size, spacing and deck thickness, and may recommend reinforcement or an engineer's review.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text:
          "The main types of roofing materials are asphalt shingles, clay tile, concrete tile, metal, slate and wood shake for pitched roofs, and TPO, PVC, EPDM, modified bitumen, built-up roofing, spray foam and silicone coatings for flat roofs. They differ most in lifespan, cost, weight and how well they handle heat, UV and storms.",
      },
      {
        type: "paragraph",
        text:
          "That's the short list. Choosing between them is harder, because the right answer depends on your roof's pitch, your home's structure, your budget, and the climate it has to survive. In Las Cruces and the rest of Doña Ana County, that climate means intense sun at around 4,000 feet, summer highs near 95°F, freezing winter nights, and monsoon storms that bring most of the year's 9 to 10 inches of rain in a few hard months.",
      },
      {
        type: "paragraph",
        text:
          "This guide to the different types of roofing materials walks through every common option, how long each lasts, what it costs relative to the others, and how it performs on homes and commercial buildings across southern New Mexico.",
      },
      { type: "heading", level: 2, text: "Quick Facts: Roofing Materials at a Glance" },
      {
        type: "list",
        items: [
          "**Asphalt shingles:** 15 to 25 years in Las Cruces sun, lowest upfront cost, the most common roof in the US.",
          "**Clay tile:** 50 to 100+ years, heavy, excellent in heat; underlayment beneath needs replacing at 20 to 30 years.",
          "**Concrete tile:** 40 to 75 years, heavier than clay, less expensive, color can fade.",
          "**Metal (standing seam):** 50 to 70 years, light, reflective, Class 4 hail rating on most residential panels.",
          "**TPO and PVC (flat roofs):** 20 to 30 years, white and reflective, heat-welded seams.",
          "**Modified bitumen and built-up (flat roofs):** 15 to 25 years, durable but asphalt-based and UV-sensitive unless coated.",
          "**Silicone coating (flat roofs):** 10 to 20 years per application, renewable without tear-off.",
        ],
      },
      { type: "heading", level: 2, text: "What Are the Main Types of Roofing Materials?" },
      {
        type: "paragraph",
        text:
          "The different types of roofing materials fall into two groups based on roof slope.",
      },
      {
        type: "paragraph",
        text:
          "**Pitched roof materials** shed water by overlapping and gravity. They need a slope of roughly 3:12 or steeper (tile and shingles have specific minimums). This group includes asphalt shingles, clay tile, concrete tile, metal, slate, synthetic slate and wood shake.",
      },
      {
        type: "paragraph",
        text:
          "**Flat and low-slope roof materials** form a continuous waterproof membrane, because water drains slowly and sits against seams. This group includes TPO, PVC, EPDM, modified bitumen, built-up roofing, spray polyurethane foam, and liquid-applied coatings like silicone.",
      },
      {
        type: "paragraph",
        text:
          "Most homes in Las Cruces use one group or the other. Some, especially Territorial and newer Southwest-style homes, use both: a flat roof behind parapets on the main body of the house and pitched tile or metal over a porch or addition.",
      },
      { type: "heading", level: 2, text: "Pitched Roof Materials" },
      { type: "heading", level: 3, text: "Asphalt Shingles" },
      {
        type: "paragraph",
        text:
          "**What it is:** a fiberglass mat coated in asphalt and topped with ceramic granules. Sold as 3-tab (single layer, flat look), architectural (laminated, dimensional look) and premium or designer (thicker, mimics slate or shake).",
      },
      {
        type: "list",
        items: [
          "**Lifespan:** 3-tab 15 to 20 years; architectural 20 to 25 years in Las Cruces (rated for 25 to 30 nationally); premium 25 to 40 years.",
          "**Cost:** the lowest upfront cost of any pitched roof.",
          "**Weight:** light, around 2 to 4 pounds per square foot.",
          "**Pros:** affordable, widely available, quick to install and repair, many colors.",
          "**Cons:** shortest lifespan in intense UV, granule loss, curling and brittleness in heat, lower wind ratings on 3-tab.",
          "**In Las Cruces:** the default on newer subdivision homes. Architectural shingles have largely replaced 3-tab because they handle monsoon wind better.",
        ],
      },
      {
        type: "paragraph",
        text:
          "More detail: [what asphalt shingle roofing is](/blog/what-is-asphalt-shingle-roofing).",
      },
      {
        type: "image",
        src: "/images/blog/different-types-of-roofing-materials/asphalt-shingle-roof-vents.webp",
        alt:
          "Brown architectural asphalt shingle roof with vent pipes, overlooking desert terrain and distant mountains",
        caption:
          "Architectural asphalt shingles on a Las Cruces home. The most common roof here, and the shortest-lived under this much sun.",
      },
      { type: "heading", level: 3, text: "Clay Tile" },
      {
        type: "paragraph",
        text:
          "**What it is:** fired clay formed into barrel (S-shaped), flat or interlocking profiles. The color is baked through the material.",
      },
      {
        type: "list",
        items: [
          "**Lifespan:** 50 to 100+ years for the tiles. The underlayment beneath lasts 20 to 30 years.",
          "**Cost:** high upfront, among the most expensive pitched options.",
          "**Weight:** heavy, roughly 6 to 12 pounds per square foot depending on profile.",
          "**Pros:** near-immune to UV, doesn't fade, non-combustible, excellent thermal mass and natural ventilation under each tile.",
          "**Cons:** weight requires adequate framing, tiles crack under foot traffic, underlayment replacement needed mid-life.",
          "**In Las Cruces:** the classic choice on Spanish and Mediterranean-style homes, common in Mesilla and older Las Cruces neighborhoods.",
        ],
      },
      { type: "heading", level: 3, text: "Concrete Tile" },
      {
        type: "paragraph",
        text:
          "**What it is:** sand, cement and water molded into tile shapes, colored on the surface or throughout.",
      },
      {
        type: "list",
        items: [
          "**Lifespan:** 40 to 75 years for the tiles; same underlayment caveat as clay.",
          "**Cost:** less than clay, more than shingles.",
          "**Weight:** heavier than clay, often 9 to 12 pounds per square foot.",
          "**Pros:** durable, fire resistant, wide range of profiles and colors, good heat performance.",
          "**Cons:** surface color fades after 15 to 20 years, slightly more porous than clay, heavy.",
          "**In Las Cruces:** common on newer homes that want a tile look at a lower price.",
        ],
      },
      {
        type: "paragraph",
        text: "More detail: [how long tile roofs last](/blog/how-long-do-tile-roofs-last).",
      },
      { type: "heading", level: 3, text: "Metal Roofing" },
      {
        type: "paragraph",
        text:
          "**What it is:** steel, aluminum, copper or zinc formed into panels or shingles. The main residential types are standing seam (concealed clips, raised seams) and exposed fastener (screwed through the panel face). Stone-coated steel mimics tile or shake.",
      },
      {
        type: "list",
        items: [
          "**Lifespan:** standing seam 50 to 70 years; exposed fastener 30 to 45 with fastener maintenance; copper and zinc 100+.",
          "**Cost:** roughly 2 to 3 times architectural shingles for standing seam.",
          "**Weight:** very light, around 1 to 1.5 pounds per square foot.",
          "**Pros:** long life, reflective finishes, Class 4 hail and high wind ratings, Class A fire rating.",
          "**Cons:** higher upfront cost, skilled installation, cheaper finishes fade.",
          "**In Las Cruces:** growing fast on Territorial, modern and rural homes, especially around Hatch and Deming where wind exposure is higher.",
        ],
      },
      {
        type: "paragraph",
        text: "More detail: [what metal roofing is](/blog/what-is-metal-roofing).",
      },
      { type: "heading", level: 3, text: "Slate and Synthetic Slate" },
      {
        type: "paragraph",
        text:
          "**What it is:** natural quarried stone split into thin shingles, or a polymer or rubber composite made to look like slate.",
      },
      {
        type: "list",
        items: [
          "**Lifespan:** natural slate 75 to 200 years; synthetic 40 to 50.",
          "**Cost:** natural slate is among the most expensive roofs available.",
          "**Weight:** natural slate is very heavy; synthetic is light.",
          "**Pros:** natural slate is nearly permanent and fireproof; synthetic gives the look without the weight.",
          "**Cons:** natural slate needs specialized installers and strong framing.",
          "**In Las Cruces:** rare. Synthetic slate shows up occasionally on custom homes.",
        ],
      },
      { type: "heading", level: 3, text: "Wood Shake and Shingles" },
      { type: "paragraph", text: "**What it is:** split or sawn cedar or redwood." },
      {
        type: "list",
        items: [
          "**Lifespan:** 20 to 40 years with maintenance.",
          "**Pros:** natural look.",
          "**Cons:** fire risk, cracking and splitting in dry heat, high maintenance.",
          "**In Las Cruces:** very rare, and generally a poor fit for the dry climate and wildfire risk on the edges of the valley.",
        ],
      },
      { type: "heading", level: 2, text: "Flat and Low-Slope Roof Materials" },
      { type: "heading", level: 3, text: "TPO" },
      {
        type: "paragraph",
        text:
          "**What it is:** a single-ply thermoplastic membrane, usually white, with heat-welded seams.",
      },
      {
        type: "list",
        items: [
          "**Lifespan:** 20 to 25 years for 60 mil; longer for 80 mil.",
          "**Pros:** reflective, affordable for its performance, welded seams.",
          "**Cons:** puncture risk, seam quality depends on the installer.",
          "**In Las Cruces:** the most common membrane on new commercial and residential flat roofs. Details in [what TPO roofing is](/blog/what-is-tpo-roofing).",
        ],
      },
      { type: "heading", level: 3, text: "PVC" },
      {
        type: "paragraph",
        text: "**What it is:** a single-ply thermoplastic membrane similar to TPO.",
      },
      {
        type: "list",
        items: [
          "**Lifespan:** 20 to 30 years.",
          "**Pros:** excellent chemical and grease resistance, welded seams.",
          "**Cons:** costs more than TPO.",
          "**In Las Cruces:** used on restaurants and buildings with rooftop exhaust.",
        ],
      },
      { type: "heading", level: 3, text: "EPDM" },
      { type: "paragraph", text: "**What it is:** a black synthetic rubber membrane." },
      {
        type: "list",
        items: [
          "**Lifespan:** 20 to 25 years.",
          "**Pros:** flexible, proven, often affordable.",
          "**Cons:** dark surface absorbs heat, seams are taped or glued rather than welded.",
          "**In Las Cruces:** less common because of heat absorption.",
        ],
      },
      { type: "heading", level: 3, text: "Modified Bitumen" },
      {
        type: "paragraph",
        text:
          "**What it is:** asphalt modified with rubber or plastic, applied in rolls by torch, cold adhesive or self-adhesion, often with a granulated cap sheet.",
      },
      {
        type: "list",
        items: [
          "**Lifespan:** 15 to 20 years uncoated.",
          "**Pros:** tough, handles foot traffic, multiple layers.",
          "**Cons:** asphalt ages under UV, dark surfaces absorb heat unless coated.",
          "**In Las Cruces:** common on older commercial buildings and Pueblo-style homes, and a strong candidate for coating.",
        ],
      },
      { type: "heading", level: 3, text: "Built-Up Roofing (Tar and Gravel)" },
      {
        type: "paragraph",
        text:
          "**What it is:** alternating layers of asphalt and reinforcing felt, topped with gravel.",
      },
      {
        type: "list",
        items: [
          "**Lifespan:** 15 to 25 years.",
          "**Pros:** redundant layers, durable surface.",
          "**Cons:** heavy, leaks are hard to trace, gravel complicates repairs.",
          "**In Las Cruces:** found on older flat roofs, often replaced or coated today.",
        ],
      },
      { type: "heading", level: 3, text: "Spray Polyurethane Foam" },
      {
        type: "paragraph",
        text:
          "**What it is:** liquid foam sprayed onto the roof deck, expanding into a seamless insulating layer, then coated for UV protection.",
      },
      {
        type: "list",
        items: [
          "**Lifespan:** 20 to 30+ years if the topcoat is renewed on schedule.",
          "**Pros:** seamless, adds insulation, can build slope to fix ponding.",
          "**Cons:** foam degrades quickly if the coating fails.",
        ],
      },
      { type: "heading", level: 3, text: "Silicone and Elastomeric Coatings" },
      {
        type: "paragraph",
        text:
          "**What it is:** a liquid-applied membrane rolled or sprayed over an existing sound flat roof.",
      },
      {
        type: "list",
        items: [
          "**Lifespan:** silicone 10 to 20 years per application; acrylic 5 to 10.",
          "**Pros:** seamless, reflective, renewable by recoating, no tear-off.",
          "**Cons:** only works over a dry, structurally sound roof.",
          "**In Las Cruces:** one of the most cost-effective ways to extend a flat roof. See [what silicone roof restoration is](/blog/what-is-silicone-roof-restoration).",
        ],
      },
      { type: "heading", level: 2, text: "Which Roofing Materials Last the Longest?" },
      {
        type: "paragraph",
        text:
          "Ranked by realistic lifespan in a hot, high-UV climate like Las Cruces:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Natural slate:** 75 to 200 years",
          "**Clay tile:** 50 to 100+ years (with underlayment replaced mid-life)",
          "**Standing seam metal:** 50 to 70 years",
          "**Concrete tile:** 40 to 75 years",
          "**Synthetic slate:** 40 to 50 years",
          "**Exposed fastener metal:** 30 to 45 years",
          "**Spray foam (maintained):** 20 to 30+ years",
          "**PVC and TPO:** 20 to 30 years",
          "**Architectural shingles:** 20 to 25 years",
          "**Modified bitumen and built-up:** 15 to 25 years",
          "**3-tab shingles:** 15 to 20 years",
        ],
      },
      {
        type: "paragraph",
        text:
          "For flat roofs specifically, see [how long a flat roof lasts](/blog/how-long-does-a-flat-roof-last) by type.",
      },
      { type: "heading", level: 2, text: "Which Roofing Materials Are Most Affordable?" },
      {
        type: "paragraph",
        text: "Ranked from lowest to highest upfront cost for a typical home:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "3-tab asphalt shingles",
          "Architectural asphalt shingles",
          "Silicone coating over an existing flat roof",
          "Modified bitumen and built-up",
          "TPO and EPDM",
          "PVC",
          "Exposed fastener metal",
          "Concrete tile",
          "Standing seam metal",
          "Clay tile",
          "Natural slate",
        ],
      },
      {
        type: "callout",
        title: "Upfront cost isn't lifetime cost",
        text:
          "Over 60 years, a home might need three asphalt shingle roofs and only one metal or clay tile roof. When owners plan to stay, the higher-priced materials often cost less per year of service.",
      },
      {
        type: "heading",
        level: 2,
        text: "What Roofing Materials Are Most Common in Las Cruces and Southern New Mexico?",
      },
      { type: "paragraph", text: "The building styles here drive the material choices." },
      {
        type: "list",
        items: [
          "**Pueblo Revival and adobe-style homes:** flat roofs behind parapets, usually TPO, modified bitumen, built-up or a coated roof, with canales draining through the parapet walls.",
          "**Territorial-style homes:** flat main roofs with pitched metal or tile over porches.",
          "**Spanish and Mediterranean-style homes:** clay or concrete tile.",
          "**Newer subdivisions in Las Cruces, Anthony and El Paso:** architectural asphalt shingles, with concrete tile on higher-end builds.",
          "**Rural homes in Hatch, Deming and the surrounding valley:** metal roofing is increasingly common for its wind and hail performance.",
          "**Commercial buildings:** TPO, modified bitumen, built-up and silicone-coated flat roofs.",
        ],
      },
      { type: "heading", level: 2, text: "How Do You Choose the Right Roofing Material?" },
      { type: "paragraph", text: "Six factors decide it:" },
      {
        type: "list",
        ordered: true,
        items: [
          "**Roof pitch.** Flat and low-slope roofs need membranes or coatings. Shingles and tile need minimum slopes.",
          "**Structure and weight capacity.** Tile is several times heavier than shingles or metal. Switching to tile often requires an engineering check.",
          "**Budget, upfront and lifetime.** Compare cost per year of expected life, not just the first check.",
          "**Climate.** In Las Cruces, prioritize UV resistance, reflectivity, wind ratings and hail ratings.",
          "**Architectural and HOA rules.** Some HOAs restrict materials and colors. The historic district in Mesilla has design rules, so check with the town before changing a roof's look there.",
          "**How long you'll own the home.** Short horizons favor lower upfront cost. Long horizons favor tile and metal.",
        ],
      },
      { type: "heading", level: 2, text: "Can You Switch to a Different Roofing Material?" },
      { type: "paragraph", text: "Usually, with planning." },
      {
        type: "list",
        items: [
          "**Shingles to metal:** straightforward. Metal is lighter, and some systems can go over one layer of shingles.",
          "**Shingles to tile:** possible, but tile weighs far more. Framing and [roof decking](/blog/what-is-roof-decking) may need to be upgraded, and an engineer may need to sign off.",
          "**Tile to shingles or metal:** reduces weight, so structure isn't a concern, but the look changes significantly.",
          "**Flat roof membrane to coating:** often the best option for an aging flat roof that's still sound.",
          "**Flat roof to pitched:** a major structural project, rarely done.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently Asked Questions" },
      { type: "heading", level: 3, text: "What is the most common roofing material in the US?" },
      {
        type: "paragraph",
        text:
          "Asphalt shingles. Roughly seven in ten American homes have them, because they're affordable, easy to install and widely available. In Las Cruces they're most common on newer subdivision homes.",
      },
      { type: "heading", level: 3, text: "Which roofing material lasts the longest?" },
      {
        type: "paragraph",
        text:
          "Natural slate lasts longest, often 75 to 200 years. Among common materials in southern New Mexico, clay tile (50 to 100+ years) and standing seam metal (50 to 70 years) last longest.",
      },
      { type: "heading", level: 3, text: "What is the cheapest roofing material?" },
      {
        type: "paragraph",
        text:
          "3-tab asphalt shingles have the lowest upfront cost, but they also have the shortest lifespan in hot climates. Architectural shingles cost a little more and last noticeably longer.",
      },
      { type: "heading", level: 3, text: "What roofing material is best for flat roofs?" },
      {
        type: "paragraph",
        text:
          "In Las Cruces, white TPO or PVC for new flat roofs, and a silicone coating over an existing sound flat roof. Both reflect sun and handle heat better than dark asphalt-based membranes.",
      },
      { type: "heading", level: 3, text: "Is tile too heavy for my house?" },
      {
        type: "paragraph",
        text:
          "It depends on the framing. Tile weighs roughly 6 to 12 pounds per square foot, compared with 2 to 4 for shingles. Homes built for tile can carry it. Homes built for shingles often need an engineering review before switching.",
      },
      { type: "heading", level: 3, text: "Can I put tile on a roof that had shingles?" },
      {
        type: "paragraph",
        text:
          "Yes, if the framing and decking can support the added weight. A roofer will check rafter size, spacing and deck thickness, and may recommend reinforcement or an engineer's review.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Roofing Materials" },
      {
        type: "paragraph",
        text:
          "There are more than a dozen different types of roofing materials, but in Las Cruces the real choices come down to a handful. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "For pitched roofs, architectural shingles are the budget choice, while clay tile and standing seam metal are the long-life choices.",
          "For flat roofs, white TPO and silicone coatings handle our heat and UV best.",
          "Compare cost per year of service, not upfront price, and confirm your structure can carry the material you want.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed (NM License #377887), insured and bonded contractor based in Las Cruces and serving Doña Ana County and southern New Mexico since 2010, including Mesilla, Hatch, Anthony, Deming and El Paso. We install and repair shingle, [tile](/roofing/tile-roofing), metal and flat roof systems, plus [silicone roof restoration](/roofing/silicone-roof-restoration) and other [specialty roofing](/roofing/specialty-roofing). To compare materials for your home or building, see our [roofing services](/roofing), call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) for a [roof installation](/roofing/roof-installations) estimate.",
      },
    ],
  },
  {
    slug: "best-roofing-material-for-hot-climates",
    title: "What Is the Best Roofing Material for Hot Climates? A Las Cruces Guide",
    excerpt:
      "Clay tile and reflective standing seam metal for pitched roofs, white TPO or a silicone coating for flat. Here is how each handles 4,000-foot sun, UV and monsoon storms.",
    metaTitle: "Best Roofing Material for Hot Climates | Las Cruces",
    metaDescription:
      "What is the best roofing material for hot climates? See how tile, metal, shingles and flat roofs handle Las Cruces heat, UV and storms.",
    category: "Roofing Materials",
    tags: [
      "materials",
      "cool roof",
      "tile roof",
      "metal roofing",
      "tpo",
      "roof coating",
      "ventilation",
    ],
    publishedAt: "2026-10-22",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/best-roofing-material-for-hot-climates/tile-roof-home-desert-sun.webp",
    featuredImageAlt:
      "Single-storey stucco home with a concrete tile roof and desert landscaping under strong afternoon sun",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/tile-roofing",
      "/roofing/specialty-roofing",
      "/roofing/silicone-roof-restoration",
    ],
    keywords: [
      "best roofing material for hot climates",
      "cool roof las cruces",
      "best roof for desert heat",
      "reflective roofing material",
      "hot climate roofing new mexico",
    ],
    faqs: [
      {
        question: "What is the coolest roofing material?",
        answer:
          "White TPO, white silicone coatings and reflective metal finishes stay coolest at the surface. Clay tile also keeps attics cool through thermal mass and airflow beneath each tile.",
      },
      {
        question: "Does a metal roof make a house hotter?",
        answer:
          "No. A reflective or light-colored metal roof usually keeps the attic cooler than dark asphalt shingles. The heat concern comes from unfinished bare metal, which isn't used on homes.",
      },
      {
        question: "What color roof is best for hot weather?",
        answer:
          "Light colors such as white, light gray and tan reflect the most heat. Cool-roof rated products in any color are designed to reflect more sunlight than standard finishes.",
      },
      {
        question: "How long do shingles last in New Mexico?",
        answer:
          "Architectural shingles typically last 20 to 25 years in Las Cruces, and 3-tab shingles 15 to 20 years. Intense UV and daily temperature swings shorten their life compared with milder climates.",
      },
      {
        question: "Is tile worth the cost in a hot climate?",
        answer:
          "For owners who plan to stay long-term, usually yes. Clay tile can last 50 to 100+ years and handles heat exceptionally well, so its cost per year of service is often lower than shingles.",
      },
      {
        question: "What is the best flat roof for desert heat?",
        answer:
          "White TPO or PVC for a new flat roof, or a silicone coating over an existing sound flat roof. Both reflect sunlight and resist UV much better than dark asphalt-based membranes.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text:
          "The best roofing material for hot climates is clay tile or standing seam metal with a reflective finish for pitched roofs, and white TPO or a silicone-coated roof for flat roofs. These hold up best to intense UV, high surface temperatures and daily heat swings. Asphalt shingles work in hot climates but have the shortest lifespan.",
      },
      {
        type: "paragraph",
        text:
          "In Las Cruces, \"hot climate\" means more than summer temperatures. The city sits around 4,000 feet, so the sun is stronger than at sea level. Summer highs run near 95°F, roof surfaces climb far above that, and nights can drop 30 to 40 degrees. The same summer brings monsoon downbursts and occasional hail. The best roof here has to handle heat, UV, thermal cycling, wind and impact all at once.",
      },
      {
        type: "paragraph",
        text:
          "This guide explains what heat does to a roof, what makes a material good for hot climates, the best options ranked, and which one fits each type of home in southern New Mexico.",
      },
      { type: "heading", level: 2, text: "Quick Facts: Roofing for Hot Climates" },
      {
        type: "list",
        items: [
          "**Best pitched roof materials for heat:** clay tile, standing seam metal (light or reflective finish), concrete tile.",
          "**Best flat roof options for heat:** white TPO or PVC, silicone-coated roofs.",
          "**Shortest-lived in heat:** asphalt shingles, especially dark 3-tab.",
          "**Realistic lifespans in Las Cruces:** clay tile 50 to 100+ years, standing seam metal 50 to 70, concrete tile 40 to 75, TPO 20 to 25, architectural shingles 20 to 25.",
          "**Biggest heat factors besides material:** roof color, attic ventilation and underlayment quality.",
        ],
      },
      { type: "heading", level: 2, text: "What Does Heat Actually Do to a Roof?" },
      { type: "paragraph", text: "Heat damages roofs in four ways." },
      {
        type: "paragraph",
        text:
          "**UV breakdown.** Ultraviolet light breaks the chemical bonds in asphalt, plastics and paint finishes. At our elevation, UV exposure is stronger than in most of the country. Asphalt shingles lose the oils that keep them flexible, their granules loosen, and the shingle turns brittle. Membranes chalk and thin. Paint finishes fade.",
      },
      {
        type: "paragraph",
        text:
          "**Surface temperature.** A dark roof in July can reach temperatures far above the air temperature. That heat moves into the attic and the building below, raising cooling costs, and it bakes roofing materials from above.",
      },
      {
        type: "paragraph",
        text:
          "**Thermal cycling.** Las Cruces commonly swings 30 to 40 degrees between afternoon and night. Every swing expands and contracts the roof, loosening fasteners, stressing seams and cracking rigid materials over time. Thousands of these cycles add up.",
      },
      {
        type: "paragraph",
        text:
          "**Attic heat from below.** Without good ventilation, heat builds up under the roof deck and cooks shingles and underlayment from underneath. This is why two identical roofs on neighboring homes can age at very different rates. [Roof underlayment](/blog/what-is-roof-underlayment) takes much of this abuse.",
      },
      {
        type: "heading",
        level: 2,
        text: "What Makes a Roofing Material Good for Hot Climates?",
      },
      { type: "paragraph", text: "Six qualities matter most:" },
      {
        type: "list",
        ordered: true,
        items: [
          "**UV resistance.** The material or its finish shouldn't break down, chalk or fade under constant sun.",
          "**Reflectivity.** Light-colored and reflective surfaces stay cooler and lower cooling costs.",
          "**Thermal mass and airflow.** Tile absorbs heat slowly and lets air move beneath it, which reduces heat transfer into the attic.",
          "**Tolerance for expansion and contraction.** Materials need to move with daily temperature swings without cracking, loosening or splitting at seams.",
          "**Compatibility with good ventilation.** The system should allow balanced attic intake and exhaust.",
          "**Wind and hail ratings.** In southern New Mexico, the hottest months are also monsoon months.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "The Best Roofing Materials for Hot Climates, Ranked",
      },
      { type: "heading", level: 3, text: "1. Clay Tile" },
      {
        type: "paragraph",
        text:
          "**Why it works:** clay is fired at high temperatures, so UV doesn't break it down and its color doesn't fade. Barrel tiles create an air gap that lets heat escape before it reaches the deck, and the tile's thermal mass slows heat transfer.",
      },
      {
        type: "list",
        items: [
          "**Lifespan here:** 50 to 100+ years for the tiles.",
          "**Limits:** heavy, higher cost, tiles crack under foot traffic, and underlayment beneath needs replacing at 20 to 30 years.",
          "**Best for:** Spanish, Mediterranean and Southwest-style homes built to carry tile. More on [how long tile roofs last](/blog/how-long-do-tile-roofs-last).",
        ],
      },
      { type: "heading", level: 3, text: "2. Standing Seam Metal With a PVDF Finish" },
      {
        type: "paragraph",
        text:
          "**Why it works:** a light-colored or reflective metal panel reflects a large share of the sun's energy. PVDF (Kynar) finishes resist fading for decades. Concealed clip systems let panels expand and contract freely with daily temperature swings.",
      },
      {
        type: "list",
        items: [
          "**Lifespan here:** 50 to 70 years.",
          "**Limits:** higher upfront cost, skilled installation required, cheaper polyester finishes fade.",
          "**Best for:** Territorial, modern and rural homes, and any home where long life and wind resistance matter. See [what metal roofing is](/blog/what-is-metal-roofing) for panel types.",
        ],
      },
      { type: "heading", level: 3, text: "3. Concrete Tile" },
      {
        type: "paragraph",
        text:
          "**Why it works:** similar heat performance to clay, with thermal mass and airflow beneath.",
      },
      {
        type: "list",
        items: [
          "**Lifespan here:** 40 to 75 years.",
          "**Limits:** surface color fades in 15 to 20 years, heavier than clay.",
          "**Best for:** homes wanting a tile look at a lower cost than clay.",
        ],
      },
      { type: "heading", level: 3, text: "4. White TPO or PVC (Flat Roofs)" },
      {
        type: "paragraph",
        text:
          "**Why it works:** white single-ply membranes reflect sun and run far cooler than black membranes or asphalt. Heat-welded seams handle thermal movement well.",
      },
      {
        type: "list",
        items: [
          "**Lifespan here:** 20 to 25 years for 60 mil TPO, longer for 80 mil and PVC.",
          "**Limits:** seam quality depends on the installer, puncture risk from foot traffic.",
          "**Best for:** new flat roofs on commercial buildings and Pueblo-style homes. Details in [what TPO roofing is](/blog/what-is-tpo-roofing).",
        ],
      },
      { type: "heading", level: 3, text: "5. Silicone-Coated Flat Roofs" },
      {
        type: "paragraph",
        text:
          "**Why it works:** silicone is among the most UV-stable roof coatings available, stays reflective, and handles ponding water. It goes over an existing sound roof without tear-off.",
      },
      {
        type: "list",
        items: [
          "**Lifespan here:** 10 to 20 years per application, renewable by recoating.",
          "**Limits:** only works on a dry, structurally sound roof.",
          "**Best for:** aging flat roofs that are still sound.",
        ],
      },
      {
        type: "image",
        src: "/images/blog/best-roofing-material-for-hot-climates/reflective-coating-flat-roof.webp",
        alt:
          "Roofer applying a white reflective coating across a commercial flat roof with rooftop HVAC units behind",
        caption:
          "A white reflective coating is the cheapest way to turn an existing flat roof into a cool roof.",
      },
      { type: "heading", level: 3, text: "6. Architectural Asphalt Shingles in Light Colors" },
      {
        type: "paragraph",
        text:
          "**Why it works:** affordable and widely available. Light colors and good ventilation reduce heat damage.",
      },
      {
        type: "list",
        items: [
          "**Lifespan here:** 20 to 25 years.",
          "**Limits:** shortest life of the good options, granule loss and curling in UV.",
          "**Best for:** budget-driven projects and subdivision homes where shingles are standard.",
        ],
      },
      { type: "heading", level: 3, text: "7. Spray Foam With a Reflective Coating" },
      {
        type: "paragraph",
        text:
          "**Why it works:** adds insulation and creates a seamless surface that can be built up to improve drainage. The coating reflects heat.",
      },
      {
        type: "list",
        items: [
          "**Lifespan here:** 20 to 30+ years if the coating is renewed.",
          "**Limits:** foam breaks down quickly if the coating is neglected.",
        ],
      },
      { type: "heading", level: 2, text: "Is Metal or Tile Better for Desert Heat?" },
      { type: "paragraph", text: "Both are excellent. The better choice depends on the home." },
      {
        type: "list",
        items: [
          "**Heat performance:** both are top tier. Tile wins on thermal mass and airflow. Reflective metal wins on surface reflectivity.",
          "**Lifespan:** clay tile can outlast metal, but its underlayment needs replacing mid-life. Standing seam metal runs 50 to 70 years with little maintenance.",
          "**Weight:** tile is heavy and may need structural upgrades. Metal is very light.",
          "**Wind:** standing seam metal is typically rated for 140 mph and up. Tile performs well when properly fastened but can lift if under-fastened.",
          "**Hail:** most residential metal carries a Class 4 rating. Tile can crack under large hail.",
          "**Look:** tile suits Spanish and Mediterranean homes. Metal suits Territorial, modern and rural homes.",
          "**Cost:** both are premium. Clay tile is usually the highest.",
        ],
      },
      { type: "heading", level: 2, text: "Are Asphalt Shingles a Bad Choice in Hot Climates?" },
      {
        type: "paragraph",
        text:
          "No, but they're the shortest-lived choice. Architectural shingles rated for 30 years usually deliver 20 to 25 in Las Cruces. You can get more out of them by choosing:",
      },
      {
        type: "list",
        items: [
          "Lighter colors that run cooler",
          "Architectural or premium shingles over 3-tab",
          "Class 4 impact-rated shingles for hail",
          "Balanced attic ventilation",
          "Quality synthetic underlayment",
        ],
      },
      {
        type: "paragraph",
        text:
          "For a budget-conscious owner, a well-installed shingle roof is a reasonable choice. Just plan for a shorter replacement cycle. See [how often a roof should be replaced](/blog/how-often-should-a-roof-be-replaced) by material.",
      },
      { type: "heading", level: 2, text: "Does Roof Color Really Matter?" },
      {
        type: "paragraph",
        text:
          "Yes. Dark roofs absorb more solar energy and run significantly hotter at the surface than light or reflective roofs. That affects both cooling bills and how fast the roofing material ages.",
      },
      {
        type: "list",
        items: [
          "**Light colors** (white, tan, light gray) reflect more heat.",
          "**Cool-roof rated products** are tested for solar reflectance and thermal emittance and are available in shingles, tile, metal and coatings.",
          "**Dark colors** can still be practical in metal, which comes in reflective dark finishes, but dark asphalt shingles run hottest.",
        ],
      },
      { type: "heading", level: 2, text: "What About Monsoon Wind and Hail?" },
      {
        type: "paragraph",
        text:
          "In southern New Mexico, the best roof for heat also has to handle the storms that arrive in the same months.",
      },
      {
        type: "list",
        items: [
          "**Wind:** monsoon downbursts often reach 50 to 70 mph in the Mesilla Valley. Standing seam metal (140+ mph ratings) and architectural shingles (110 to 130 mph) handle this. Older 3-tab shingles are near their limit.",
          "**Hail:** Class 4 rated metal and shingles resist hail best. Tile can crack under large hail.",
          "**Sideways rain:** every material depends on proper [roof flashing](/blog/what-is-roof-flashing) at walls and parapets.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Which Roofing Material Is Best for My Type of Home?",
      },
      {
        type: "list",
        items: [
          "**Pueblo Revival and adobe-style homes in Las Cruces and Mesilla:** white TPO or a silicone-coated roof behind the parapets.",
          "**Territorial-style homes:** a coated or TPO flat roof on the main body, with standing seam metal on pitched porches.",
          "**Spanish and Mediterranean homes:** clay tile, or concrete tile on a tighter budget.",
          "**Newer subdivision homes in Las Cruces, Anthony and El Paso:** light-colored architectural shingles, or standing seam metal for a longer-life upgrade.",
          "**Rural homes in Hatch, Deming and the surrounding valley:** standing seam metal for its wind and hail performance.",
          "**Commercial buildings:** white TPO, PVC, or a silicone restoration of the existing roof.",
        ],
      },
      {
        type: "paragraph",
        text:
          "For a side-by-side of every material, see [different types of roofing materials](/blog/different-types-of-roofing-materials).",
      },
      {
        type: "heading",
        level: 2,
        text: "What Else Keeps a Roof Cool Besides the Material?",
      },
      {
        type: "list",
        items: [
          "**Attic ventilation.** Balanced intake at the eaves and exhaust at the ridge removes trapped heat.",
          "**Quality underlayment.** Synthetic underlayment tolerates heat far better than felt.",
          "**Radiant barriers.** Foil layers under the deck reflect heat back out.",
          "**Insulation.** Keeps attic heat out of the living space.",
          "**Light-colored or reflective finishes.** On any material that offers them.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently Asked Questions" },
      { type: "heading", level: 3, text: "What is the coolest roofing material?" },
      {
        type: "paragraph",
        text:
          "White TPO, white silicone coatings and reflective metal finishes stay coolest at the surface. Clay tile also keeps attics cool through thermal mass and airflow beneath each tile.",
      },
      { type: "heading", level: 3, text: "Does a metal roof make a house hotter?" },
      {
        type: "paragraph",
        text:
          "No. A reflective or light-colored metal roof usually keeps the attic cooler than dark asphalt shingles. The heat concern comes from unfinished bare metal, which isn't used on homes.",
      },
      { type: "heading", level: 3, text: "What color roof is best for hot weather?" },
      {
        type: "paragraph",
        text:
          "Light colors such as white, light gray and tan reflect the most heat. Cool-roof rated products in any color are designed to reflect more sunlight than standard finishes.",
      },
      { type: "heading", level: 3, text: "How long do shingles last in New Mexico?" },
      {
        type: "paragraph",
        text:
          "Architectural shingles typically last 20 to 25 years in Las Cruces, and 3-tab shingles 15 to 20 years. Intense UV and daily temperature swings shorten their life compared with milder climates.",
      },
      { type: "heading", level: 3, text: "Is tile worth the cost in a hot climate?" },
      {
        type: "paragraph",
        text:
          "For owners who plan to stay long-term, usually yes. Clay tile can last 50 to 100+ years and handles heat exceptionally well, so its cost per year of service is often lower than shingles.",
      },
      { type: "heading", level: 3, text: "What is the best flat roof for desert heat?" },
      {
        type: "paragraph",
        text:
          "White TPO or PVC for a new flat roof, or a silicone coating over an existing sound flat roof. Both reflect sunlight and resist UV much better than dark asphalt-based membranes.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Roofing for Hot Climates" },
      {
        type: "paragraph",
        text:
          "The best roofing material for hot climates is the one that resists UV, reflects heat and moves with daily temperature swings without failing. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "For pitched roofs, clay tile and standing seam metal with a reflective finish are the strongest choices in Las Cruces.",
          "For flat roofs, white TPO or a silicone coating outperform dark asphalt membranes.",
          "Color, ventilation and underlayment matter almost as much as the material.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed (NM License #377887), insured and bonded contractor based in Las Cruces and serving Doña Ana County and southern New Mexico since 2010, including Mesilla, Hatch, Anthony, Deming and El Paso. We install [tile roofing](/roofing/tile-roofing), metal and other [specialty roofing](/roofing/specialty-roofing), white TPO, and [silicone roof restoration](/roofing/silicone-roof-restoration) for flat roofs. To find the right roof for your home and our climate, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact) for a [roof installation](/roofing/roof-installations) estimate.",
      },
    ],
  },
  {
    slug: "best-time-to-replace-a-roof",
    title: "When Is the Best Time to Replace a Roof in Las Cruces?",
    excerpt:
      "Fall and spring are the best windows here. Summer brings heat and monsoon storms, and winter is workable in a way it is not in colder states.",
    metaTitle: "Best Time to Replace a Roof in Las Cruces, NM",
    metaDescription:
      "When is the best time to replace a roof? See why fall and spring work best in Las Cruces, what summer heat does, and whether winter works.",
    category: "Roofing",
    tags: [
      "roof replacement",
      "monsoon",
      "homeowner guide",
      "roof coating",
      "tile roof",
      "inspection",
    ],
    publishedAt: "2026-10-22",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/best-time-to-replace-a-roof/crew-installing-new-roof.webp",
    featuredImageAlt:
      "Two roofers in hard hats working along the ridge of a roof during a replacement on a clear day",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/roof-replacements",
      "/roofing/roof-inspections",
      "/roofing/emergency-roofing",
    ],
    keywords: [
      "best time to replace a roof",
      "roof replacement season las cruces",
      "winter roof replacement new mexico",
      "monsoon season roofing",
      "roof replacement scheduling",
    ],
    faqs: [
      {
        question: "What month is best to replace a roof in Las Cruces?",
        answer:
          "October and November are typically the best months. Monsoon season is over, temperatures are mild and rain is rare. April and May are also excellent, apart from windy days.",
      },
      {
        question: "Can a roof be replaced in the rain?",
        answer:
          "No. Crews don't tear off or install roofing during rain. They watch the forecast, only remove what they can dry in the same day, and cover exposed areas before any storm.",
      },
      {
        question: "What temperature is too cold to install shingles?",
        answer:
          "Asphalt shingles can be installed in cool weather, but their adhesive strips seal best above roughly 40 to 45°F. In colder conditions, crews hand-seal shingles or rely on the next warm, sunny days to activate the seal.",
      },
      {
        question: "Is it cheaper to replace a roof in winter?",
        answer:
          "Not usually by much. Material prices follow national trends. Winter can offer more flexible scheduling, and in Las Cruces most winter days are workable.",
      },
      {
        question: "How long does a roof replacement take?",
        answer:
          "Most shingle roofs take 1 to 3 days on site. Tile roofs and large flat roofs take longer. The full process, from estimate to cleanup, is typically 1 to 3 weeks.",
      },
      {
        question: "Should I replace my roof before selling my home?",
        answer:
          "If the roof is failing, leaking or near the end of its life, replacing it usually helps the sale, since inspectors and lenders will flag it. If it's sound, a roof inspection and documentation may be enough.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text:
          "In Las Cruces, the best time to replace a roof is fall, from October through early December, or spring, from March through May. Temperatures are mild, rain is rare and crews have better availability. June through September is the hardest window because of extreme heat and monsoon storms. Winter replacement is possible here on most days.",
      },
      {
        type: "paragraph",
        text:
          "Most national advice about the best time to replace a roof is written for places with cold, snowy winters and mild summers. Southern New Mexico is the reverse. Our winters are short and mild by comparison, January lows sit just below freezing, and the real obstacle is summer: highs near 95°F, roof surfaces far hotter than that, and a monsoon season that brings much of the year's 9 to 10 inches of rain between July and September.",
      },
      {
        type: "paragraph",
        text:
          "This guide covers each season for roofing in Las Cruces, why fall wins, whether winter and summer work, how the season affects cost, and when you shouldn't wait at all.",
      },
      { type: "heading", level: 2, text: "Quick Facts: Roof Replacement Timing in Las Cruces" },
      {
        type: "list",
        items: [
          "**Best months:** October, November and early December; March, April and May.",
          "**Hardest months:** June through September (heat and monsoon storms).",
          "**Winter:** workable on most days; asphalt shingles seal best above roughly 40 to 45°F.",
          "**Typical on-site time:** 1 to 3 days for most shingle roofs, longer for tile and large flat roofs.",
          "**Lead time:** usually 1 to 3 weeks from estimate to crew date, longer after a major storm.",
          "**Don't wait if:** you have active leaks, storm damage, a sagging deck, or a home sale coming up.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "What Is the Best Season to Replace a Roof in Southern New Mexico?",
      },
      { type: "heading", level: 3, text: "Fall: The Best Overall" },
      {
        type: "paragraph",
        text:
          "Fall is the best time to replace a roof in Las Cruces. Monsoon season is over, October highs are typically around 80°F, and rain is rare. Shingles go down at temperatures where they're flexible enough to install cleanly and warm enough to seal. The new roof is in place before winter freeze-thaw nights and well ahead of next summer's heat and storms.",
      },
      { type: "heading", level: 3, text: "Spring: Strong, With One Catch" },
      {
        type: "paragraph",
        text:
          "March through May offers mild temperatures and very little rain, which makes it another excellent window. The catch is wind. Spring dust storms and gusty afternoons are common across the Mesilla Valley and especially in open areas around Hatch and Deming. Crews work around high-wind days, since loose materials and fresh shingles don't mix with 40 mph gusts.",
      },
      { type: "heading", level: 3, text: "Summer: The Hardest Window" },
      {
        type: "paragraph",
        text: "June through September is the most difficult time to replace a roof here.",
      },
      {
        type: "list",
        items: [
          "**Heat:** roof surfaces in July get far hotter than the air temperature. Asphalt shingles soften and scuff easily under foot traffic, and crews have to start before dawn and stop early.",
          "**Monsoon storms:** from July through September, afternoon storms can build quickly, with 50 to 70 mph downbursts and heavy rain. A roof that's torn off has to be dried in before every storm.",
          "**Demand:** storm damage drives a spike in repair calls, which tightens schedules.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Summer replacement is still done, especially when damage forces it. It just takes more planning.",
      },
      { type: "heading", level: 3, text: "Winter: Workable in Las Cruces" },
      {
        type: "paragraph",
        text:
          "Unlike in northern states, winter roofing is practical here on most days. January highs are often near 60°F even when nights dip below freezing. The considerations:",
      },
      {
        type: "list",
        items: [
          "**Cold mornings.** Crews start later so materials warm up.",
          "**Shingle sealing.** Asphalt shingles have adhesive strips that seal with sun and warmth. Below about 40 to 45°F they may not seal right away. They typically seal on the first warm, sunny days, and crews can hand-seal shingles in colder conditions.",
          "**Occasional storms.** Winter rain and the rare snow event are short, and crews schedule around them.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Tile and metal are less temperature-sensitive than shingles, which makes them easier to install in winter.",
      },
      { type: "heading", level: 2, text: "Why Is Fall the Best Time to Replace a Roof?" },
      { type: "paragraph", text: "Four reasons:" },
      {
        type: "list",
        ordered: true,
        items: [
          "**Mild temperatures.** Materials install cleanly and shingles seal well.",
          "**The driest stretch after monsoon.** Rain risk is low, so the roof doesn't sit exposed during a storm.",
          "**Ready for winter.** The new roof is sealed before freeze-thaw nights start working on any weak spots.",
          "**Ready for summer.** You're two full seasons ahead of next year's heat and monsoon storms.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Fall is also when monsoon damage becomes obvious. Owners who found leaks or missing shingles during the summer can schedule a planned replacement rather than an emergency one.",
      },
      {
        type: "image",
        src: "/images/blog/best-time-to-replace-a-roof/completed-roof-aerial.webp",
        alt:
          "Overhead drone view of a completed shingle roof on a single-storey home with a clear driveway",
        caption:
          "A replacement finished in October is sealed before the first freeze and two seasons ahead of the next monsoon.",
      },
      { type: "heading", level: 2, text: "Can You Replace a Roof in Winter in Las Cruces?" },
      {
        type: "paragraph",
        text:
          "Yes. Winter roof replacement in Las Cruces is far more practical than in colder parts of the country. Most winter days warm up enough for normal work. The main adjustments are later start times on cold mornings and making sure shingles seal properly, either naturally on the next warm days or by hand-sealing. Tile, metal and most flat roof systems are less affected by cooler temperatures.",
      },
      {
        type: "heading",
        level: 2,
        text: "Should You Avoid Replacing a Roof During Monsoon Season?",
      },
      {
        type: "paragraph",
        text:
          "When you have a choice, yes. July through September brings a real chance of afternoon storms most days. A good crew handles it by tearing off only what it can dry in the same day, watching the radar, and keeping tarps and underlayment ready. But the risk of an exposed deck during a downburst is higher than at any other time of year.",
      },
      {
        type: "paragraph",
        text:
          "When you don't have a choice, such as after storm damage or with active leaks, waiting is the bigger risk. An [emergency roof repair](/blog/what-is-emergency-roof-repair) can stabilize the roof until a planned replacement makes sense.",
      },
      { type: "heading", level: 2, text: "Does the Season Affect Roof Replacement Cost?" },
      {
        type: "paragraph",
        text:
          "Season affects scheduling and availability more than price, but it can still matter.",
      },
      {
        type: "list",
        items: [
          "**After major storms,** demand spikes and schedules fill up. Insurance-driven work can push lead times out by weeks.",
          "**During the busy fall and spring windows,** booking early gets you your preferred dates.",
          "**Material prices** follow national trends more than local seasons.",
          "**Waiting for a perfect season** can cost more than it saves if the roof keeps leaking and damages the deck, insulation or ceilings.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Does the Best Time Depend on the Roofing Material?",
      },
      { type: "paragraph", text: "Yes." },
      {
        type: "list",
        items: [
          "**Asphalt shingles:** the most temperature-sensitive. Ideal in mild weather; summer heat makes them scuff and winter cold slows sealing.",
          "**Clay and concrete tile:** much less sensitive to temperature. The main concern is keeping the deck dry while underlayment is exposed.",
          "**Metal:** installs well in almost any dry weather.",
          "**TPO and other flat membranes:** need dry conditions. Adhesives and welding equipment have temperature ranges, but our climate allows most of the year.",
          "**Silicone and other coatings:** need a dry roof and moderate temperatures. Spring and fall are ideal, and coatings shouldn't go down right before a storm.",
        ],
      },
      { type: "heading", level: 2, text: "When Should You NOT Wait for the Perfect Season?" },
      { type: "paragraph", text: "Don't wait if:" },
      {
        type: "list",
        items: [
          "**You have active leaks.** Every storm adds damage to the deck, insulation and ceilings.",
          "**There's storm damage.** Missing shingles, lifted tiles or torn membrane need attention now. Insurance claims also have timelines.",
          "**The deck is sagging or soft.** That's a structural issue. See [what roof decking is](/blog/what-is-roof-decking) for the warning signs.",
          "**You're selling the home.** Buyers, inspectors and lenders will flag a failing roof regardless of the season.",
          "**The roof is well past its expected life** and repairs are becoming frequent.",
        ],
      },
      {
        type: "paragraph",
        text:
          "If you're weighing a cheaper shortcut instead, read [can you put a new roof over an old roof](/blog/can-you-put-a-new-roof-over-an-old-roof) before deciding.",
      },
      {
        type: "callout",
        title: "The short version",
        text:
          "The best time to replace a roof is fall or spring, but the right time is when the roof needs it.",
      },
      {
        type: "heading",
        level: 2,
        text: "How Far Ahead Should You Schedule a Roof Replacement?",
      },
      {
        type: "paragraph",
        text:
          "Plan on 1 to 3 weeks from estimate to crew date in normal conditions, and longer after a major storm or during the busiest fall weeks. That window covers:",
      },
      {
        type: "list",
        items: [
          "An inspection and written estimate",
          "Choosing materials and colors",
          "Ordering materials, which is fast for shingles and can take longer for specialty tile or metal",
          "Pulling the permit",
          "Scheduling the crew around the weather",
        ],
      },
      {
        type: "paragraph",
        text:
          "If you want your roof done in October or November, contacting a roofer in August or September gets you the best choice of dates. For what happens on the day itself, see [how roof replacement works](/blog/how-does-roof-replacement-work).",
      },
      { type: "heading", level: 2, text: "How Do You Know It's Time to Replace, Not Repair?" },
      {
        type: "paragraph",
        text: "The season only matters once you know the roof needs replacing. The signs:",
      },
      {
        type: "list",
        items: [
          "The roof is near or past its expected lifespan",
          "Repairs are needed more than once a year, in different places",
          "Damage covers roughly 30% or more of the roof",
          "Widespread curling, granule loss, cracked tiles or open seams",
          "Soft or sagging decking",
        ],
      },
      {
        type: "paragraph",
        text:
          "[How often a roof should be replaced](/blog/how-often-should-a-roof-be-replaced) covers expected lifespans by material, and a [roof inspection](/roofing/roof-inspections) will tell you where yours stands.",
      },
      { type: "heading", level: 2, text: "Frequently Asked Questions" },
      { type: "heading", level: 3, text: "What month is best to replace a roof in Las Cruces?" },
      {
        type: "paragraph",
        text:
          "October and November are typically the best months. Monsoon season is over, temperatures are mild and rain is rare. April and May are also excellent, apart from windy days.",
      },
      { type: "heading", level: 3, text: "Can a roof be replaced in the rain?" },
      {
        type: "paragraph",
        text:
          "No. Crews don't tear off or install roofing during rain. They watch the forecast, only remove what they can dry in the same day, and cover exposed areas before any storm.",
      },
      { type: "heading", level: 3, text: "What temperature is too cold to install shingles?" },
      {
        type: "paragraph",
        text:
          "Asphalt shingles can be installed in cool weather, but their adhesive strips seal best above roughly 40 to 45°F. In colder conditions, crews hand-seal shingles or rely on the next warm, sunny days to activate the seal.",
      },
      { type: "heading", level: 3, text: "Is it cheaper to replace a roof in winter?" },
      {
        type: "paragraph",
        text:
          "Not usually by much. Material prices follow national trends. Winter can offer more flexible scheduling, and in Las Cruces most winter days are workable.",
      },
      { type: "heading", level: 3, text: "How long does a roof replacement take?" },
      {
        type: "paragraph",
        text:
          "Most shingle roofs take 1 to 3 days on site. Tile roofs and large flat roofs take longer. The full process, from estimate to cleanup, is typically 1 to 3 weeks.",
      },
      { type: "heading", level: 3, text: "Should I replace my roof before selling my home?" },
      {
        type: "paragraph",
        text:
          "If the roof is failing, leaking or near the end of its life, replacing it usually helps the sale, since inspectors and lenders will flag it. If it's sound, a [roof inspection](/roofing/roof-inspections) and documentation may be enough.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on When to Replace a Roof" },
      {
        type: "paragraph",
        text:
          "The best time to replace a roof in Las Cruces is fall or spring, and winter is workable here in a way it isn't in colder states. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "October and November are the best months: mild, dry and ahead of both winter and next summer.",
          "Avoid monsoon season when you can, but never delay a replacement the roof needs because of the season.",
          "Book a few weeks ahead to get the dates you want, especially for fall.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed (NM License #377887), insured and bonded contractor based in Las Cruces and serving Doña Ana County and southern New Mexico since 2010, including Mesilla, Hatch, Anthony, Deming and El Paso. We schedule [roof replacements](/roofing/roof-replacements) year-round around the weather, handle [emergency roofing](/roofing/emergency-roofing) when storms don't wait, and offer [silicone roof restoration](/roofing/silicone-roof-restoration) for flat roofs that don't need a full replacement. To book a fall or spring replacement, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact).",
      },
    ],
  },
  {
    slug: "how-to-prepare-your-roof-for-winter",
    title: "How to Prepare Your Roof for Winter in Las Cruces: A Practical Checklist",
    excerpt:
      "Winter here is mild, but freeze-thaw nights turn every crack monsoon season left behind into a leak. A 12-step checklist for late October and November.",
    metaTitle: "How to Prepare Your Roof for Winter in Las Cruces",
    metaDescription:
      "How to prepare your roof for winter in Las Cruces: a 12-step checklist for flashing, parapets, drains, tile and stucco.",
    category: "Roof Maintenance",
    tags: [
      "maintenance",
      "inspection",
      "flashing",
      "parapet",
      "stucco",
      "tile roof",
      "flat roof",
      "ventilation",
    ],
    publishedAt: "2026-10-22",
    author: { name: "Gilbert & Sons Roofing and Stucco" },
    featuredImage:
      "/images/blog/how-to-prepare-your-roof-for-winter/gutter-and-roof-wall-check.webp",
    featuredImageAlt:
      "Close view of a shingle roof meeting a stucco wall above a gutter, with the step and kickout flashing visible",
    status: "published",
    showEstimateCta: false,
    relatedServices: [
      "/roofing/roof-maintenance",
      "/roofing/roof-inspections",
      "/roofing/roof-repairs",
    ],
    keywords: [
      "how to prepare your roof for winter",
      "winterize roof las cruces",
      "fall roof maintenance checklist",
      "freeze thaw roof damage",
      "winter roof prep new mexico",
    ],
    faqs: [
      {
        question: "When should I winterize my roof in Las Cruces?",
        answer:
          "Late October through November. Monsoon damage is visible by then, temperatures are good for repairs, and the roof is sealed before the first hard freezes.",
      },
      {
        question: "Does it freeze enough in Las Cruces to damage a roof?",
        answer:
          "Yes. January lows regularly drop below freezing. Repeated freeze-thaw cycles widen existing cracks in stucco, parapet caps, tile and sealant, so small openings turn into leaks.",
      },
      {
        question: "Can snow damage a flat roof?",
        answer:
          "Las Cruces averages only about 2 inches of snow a year, so snow load is rarely a concern. The bigger risk is melting snow backing up behind blocked scuppers and canales and finding weak seams.",
      },
      {
        question: "Why does my roof leak only on cold mornings?",
        answer:
          "That's often condensation, not a roof leak. Warm, moist indoor air condenses on the cold underside of the roof deck. Better attic ventilation and insulation usually solve it.",
      },
      {
        question: "Should I seal stucco cracks before winter?",
        answer:
          "Yes. Seal hairline cracks before the first hard freeze so water can't get in and freeze. Wider or diagonal cracks, or cracks with staining, should be checked by a professional.",
      },
      {
        question: "How much does a fall roof inspection cost?",
        answer:
          "Many roofers, including Gilbert & Sons, include an inspection when you request a quote. Standalone inspections nationally run roughly $120 to $400, depending on the roof and the report.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text:
          "To prepare your roof for winter in Las Cruces, clear gutters, scuppers and canales; check and seal flashing and parapet caps; replace cracked tiles or missing shingles; seal stucco cracks before freezing nights; and check attic ventilation to prevent condensation. Late October through November is the right time to do it.",
      },
      {
        type: "paragraph",
        text:
          "Most advice on how to prepare your roof for winter is written for places with heavy snow and ice dams. Las Cruces is different. Winters here are mild by comparison, with January highs often near 60°F and only about 2 inches of snow in an average year. But January lows regularly drop below freezing, and those freeze-thaw nights do real damage to any roof or stucco wall that already has a small opening. Add the cracks, lifted shingles and clogged drains left behind by monsoon season, and fall is the moment to close everything up.",
      },
      {
        type: "paragraph",
        text:
          "This guide explains what winter does to roofs in southern New Mexico, gives a 12-step checklist, covers flat roofs, tile roofs and stucco walls separately, and shows which jobs are safe to do yourself.",
      },
      { type: "heading", level: 2, text: "Quick Facts: Winter Roof Prep in Las Cruces" },
      {
        type: "list",
        items: [
          "**When:** late October through November, after monsoon season and before the first hard freeze.",
          "**Main winter risk:** freeze-thaw cycles widening cracks in stucco, parapet caps, tile and sealant.",
          "**Second risk:** attic condensation on cold nights, which can rot decking from below.",
          "**Flat roof priority:** clear scuppers and canales, since dust and debris from summer storms block them.",
          "**Snow:** about 2 inches a year on average; rarely a load issue, but it can sit on flat roofs and parapets.",
          "**Professional help:** recommended for anything that requires walking a tile, steep or two-story roof.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "What Does Winter Do to Roofs in Southern New Mexico?",
      },
      {
        type: "paragraph",
        text:
          "**Freeze-thaw cycles.** Water gets into a hairline crack during the day, freezes at night and expands, then thaws and works deeper the next day. Repeated over a winter, this widens cracks in stucco walls, parapet caps, concrete tile, mortar and sealant joints. A crack that let in a little water in September can let in a lot by February.",
      },
      {
        type: "paragraph",
        text:
          "**Cold-night condensation.** When warm, moist air from inside the house reaches the cold underside of the roof deck, it condenses. Without good attic ventilation, that moisture soaks into the decking and insulation night after night. It can show up as a ceiling stain on a cold morning with no rain at all.",
      },
      {
        type: "paragraph",
        text:
          "**Occasional snow and ice.** Las Cruces averages only a couple of inches of snow a year, but when it falls it can sit on flat roofs and against parapets, then melt and refreeze. Water backs up behind blocked canales and finds weak seams.",
      },
      {
        type: "paragraph",
        text:
          "**Winter wind.** Cold fronts bring gusty days that can lift already-loose shingles and tiles.",
      },
      {
        type: "paragraph",
        text:
          "**Leftover monsoon damage.** Summer downbursts lift shingles, crack tiles, loosen flashing and fill drains with debris. Winter finds every one of those weak spots.",
      },
      {
        type: "heading",
        level: 2,
        text: "Do Roofs in Las Cruces Really Need Winter Preparation?",
      },
      {
        type: "paragraph",
        text:
          "Yes, but for different reasons than in colder states. A sound roof will handle a Las Cruces winter easily. The problem is roofs that aren't fully sound after summer. Freeze-thaw is what turns a small crack into a leak and a hairline stucco crack into water behind the wall. An hour or two of preparation in the fall prevents most winter roof calls.",
      },
      { type: "heading", level: 2, text: "Your Winter Roof Checklist" },
      {
        type: "paragraph",
        text:
          "Each item is marked **DIY** (safe for most homeowners from the ground or a ladder) or **Pro** (best left to a roofer).",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Clear gutters and downspouts. (DIY from a ladder)** Remove leaves, dust and debris so water drains away from the house.",
          "**Clear scuppers, canales and roof drains. (Pro on most roofs)** On flat roofs, this is the most important winter task. Blocked drains cause ponding, and ponding water that freezes and thaws finds every weak seam.",
          "**Remove debris from flat roofs and behind rooftop equipment. (Pro)** Leaves and dust collect behind HVAC units and evaporative coolers and hold moisture against the membrane.",
          "**Inspect and seal flashing. (Pro)** Check flashing at walls, chimneys, vents and skylights for lifted metal and cracked sealant. Flashing is where most leaks start. See [what roof flashing is](/blog/what-is-roof-flashing).",
          "**Check parapet caps and seal cracks. (Pro)** Cracked parapet caps let water into the top of the wall, where freezing makes it worse. More in [what parapet repair is](/blog/what-is-parapet-repair).",
          "**Replace cracked or slipped tiles and missing shingles. (Pro)** Every gap exposes underlayment to water and freeze-thaw.",
          "**Reseal pipe boots and vent collars. (Pro)** Rubber collars dry out and crack after a summer of sun.",
          "**Seal stucco cracks below the roofline. (DIY for hairline cracks; Pro for wider ones)** Seal hairline cracks with an elastomeric sealant before the first hard freeze. Wider or diagonal cracks, or any with staining, need a professional look. See [how long stucco lasts](/blog/how-long-does-stucco-last) for the warning signs.",
          "**Check attic ventilation and insulation. (DIY to look; Pro to fix)** Make sure soffit and ridge vents aren't blocked by insulation or debris. Look for frost, damp insulation or stains on the underside of the deck on cold mornings.",
          "**Trim overhanging branches. (DIY or arborist)** Branches scrape roofing in winter wind and drop debris into valleys and gutters.",
          "**Check flat roof coatings. (Pro)** Look for cracks, thin spots or peeling at seams and parapets on silicone or elastomeric coatings.",
          "**Turn sprinklers away from walls. (DIY)** Sprinklers hitting stucco walls keep the base wet, and freezing water at the base causes cracking and damage.",
        ],
      },
      {
        type: "callout",
        title: "Bonus step: get a professional inspection",
        text:
          "If monsoon storms hit your area this summer, or your roof is more than 10 years old, a fall [roof inspection](/roofing/roof-inspections) catches problems while they're still small. Here's [what a roof inspection includes](/blog/what-does-a-roof-inspection-include).",
      },
      { type: "heading", level: 2, text: "How to Prepare a Flat Roof for Winter" },
      {
        type: "paragraph",
        text:
          "Flat roofs on Pueblo-style homes and commercial buildings need the most attention before winter.",
      },
      {
        type: "list",
        items: [
          "**Clear every scupper and canale.** Summer storms wash months of dust into them.",
          "**Look for ponding areas.** Water that stays more than 48 hours after rain marks a low spot. In winter, ponded water can freeze and thaw repeatedly.",
          "**Check seams and membrane edges** for lifting, especially at parapets and curbs.",
          "**Inspect parapet caps and counterflashing.** The top of the parapet is where most flat roof leaks start.",
          "**Check coating condition** on silicone or elastomeric roofs.",
          "**Know what light snow does.** A couple of inches of snow on a flat roof isn't a structural concern, but it holds moisture against the membrane and parapets as it melts.",
        ],
      },
      { type: "heading", level: 2, text: "How to Prepare a Tile Roof for Winter" },
      {
        type: "list",
        items: [
          "**Look for cracked, chipped or slipped tiles** from the ground with binoculars. Don't walk a tile roof, since tiles break underfoot.",
          "**Check valleys and behind chimneys for debris.**",
          "**Look for exposed underlayment** at eaves and wherever tiles have shifted.",
          "**Watch for ceiling stains with no visible tile damage.** That usually means the [underlayment](/blog/what-is-roof-underlayment) beneath has failed.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Concrete tile is more porous than clay and more affected by freeze-thaw, so cracked concrete tiles are worth replacing before winter.",
      },
      {
        type: "image",
        src: "/images/blog/how-to-prepare-your-roof-for-winter/roofer-checking-tile-eave.webp",
        alt:
          "Roofer in a safety harness on a ladder checking the tile eave of a stucco building",
        caption:
          "Anything that needs a ladder or a walk on tile is the part to hand over. Tiles break underfoot and falls are the most common serious roof injury.",
      },
      { type: "heading", level: 2, text: "How to Protect Stucco Walls Before Winter" },
      {
        type: "paragraph",
        text:
          "Stucco and roofs work as one system on most Las Cruces homes, and freeze-thaw targets stucco cracks first.",
      },
      {
        type: "list",
        items: [
          "**Seal hairline cracks** with a quality elastomeric sealant.",
          "**Look for staining, efflorescence or soft spots,** especially below windows and roof lines. These mean water is already behind the stucco.",
          "**Make sure the weep screed at the base of the wall is clear** of soil, mulch and pavers so water can drain out.",
          "**Turn sprinklers away from walls.**",
          "**Check where roofs meet stucco walls** for missing kickout flashing and stucco covering the flashing.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "What Can You Do Yourself, and What Should a Roofer Handle?",
      },
      { type: "paragraph", text: "**Safe for most homeowners:**" },
      {
        type: "list",
        items: [
          "Clearing gutters from a stable ladder",
          "Looking over the roof from the ground with binoculars",
          "Sealing hairline stucco cracks at ground level",
          "Checking the attic for stains, frost and blocked vents",
          "Turning sprinklers away from walls",
          "Trimming small branches from the ground",
        ],
      },
      { type: "paragraph", text: "**Best left to a roofer:**" },
      {
        type: "list",
        items: [
          "Walking any tile, steep or two-story roof",
          "Flashing, parapet and pipe boot repairs",
          "Replacing tiles or shingles",
          "Clearing scuppers and canales on flat roofs behind parapets",
          "Coating repairs",
          "Any work in wind, cold mornings or wet conditions",
        ],
      },
      {
        type: "paragraph",
        text:
          "Falls from roofs are among the most common serious home injuries. When in doubt, look from the ground and call for help.",
      },
      { type: "heading", level: 2, text: "When Should You Prepare Your Roof for Winter?" },
      {
        type: "paragraph",
        text:
          "If you're wondering when to prepare your roof for winter, late October through November is ideal in Las Cruces. By then, monsoon damage is visible, temperatures are mild enough for sealants and repairs to cure properly, and you're ahead of the first hard freezes. A [roof maintenance plan](/blog/what-is-a-roof-maintenance-plan) puts this fall check on a schedule every year.",
      },
      { type: "heading", level: 2, text: "What Are the Warning Signs of Winter Roof Damage?" },
      { type: "paragraph", text: "Watch for these through the winter:" },
      {
        type: "list",
        items: [
          "**Ceiling stains after cold nights,** even with no rain, which point to condensation",
          "**New stains after snow or rain** near exterior walls or chimneys",
          "**Icicles or ice at canales and scuppers,** which show water is backing up",
          "**New or wider stucco cracks,** especially near the roofline",
          "**Frost or damp insulation in the attic**",
          "**Granules or tile pieces on the ground**",
        ],
      },
      {
        type: "paragraph",
        text:
          "If you notice any of these, a [roof repair](/roofing/roof-repairs) now is far cheaper than one after a full winter of freeze-thaw.",
      },
      { type: "heading", level: 2, text: "Frequently Asked Questions" },
      { type: "heading", level: 3, text: "When should I winterize my roof in Las Cruces?" },
      {
        type: "paragraph",
        text:
          "Late October through November. Monsoon damage is visible by then, temperatures are good for repairs, and the roof is sealed before the first hard freezes.",
      },
      { type: "heading", level: 3, text: "Does it freeze enough in Las Cruces to damage a roof?" },
      {
        type: "paragraph",
        text:
          "Yes. January lows regularly drop below freezing. Repeated freeze-thaw cycles widen existing cracks in stucco, parapet caps, tile and sealant, so small openings turn into leaks.",
      },
      { type: "heading", level: 3, text: "Can snow damage a flat roof?" },
      {
        type: "paragraph",
        text:
          "Las Cruces averages only about 2 inches of snow a year, so snow load is rarely a concern. The bigger risk is melting snow backing up behind blocked scuppers and canales and finding weak seams.",
      },
      { type: "heading", level: 3, text: "Why does my roof leak only on cold mornings?" },
      {
        type: "paragraph",
        text:
          "That's often condensation, not a roof leak. Warm, moist indoor air condenses on the cold underside of the roof deck. Better attic ventilation and insulation usually solve it.",
      },
      { type: "heading", level: 3, text: "Should I seal stucco cracks before winter?" },
      {
        type: "paragraph",
        text:
          "Yes. Seal hairline cracks before the first hard freeze so water can't get in and freeze. Wider or diagonal cracks, or cracks with staining, should be checked by a professional.",
      },
      { type: "heading", level: 3, text: "How much does a fall roof inspection cost?" },
      {
        type: "paragraph",
        text:
          "Many roofers, including Gilbert & Sons, include an inspection when you request a quote. Standalone inspections nationally run roughly $120 to $400, depending on the roof and the report.",
      },
      { type: "heading", level: 2, text: "The Bottom Line on Winter Roof Prep" },
      {
        type: "paragraph",
        text:
          "Learning how to prepare your roof for winter in Las Cruces is mostly about closing up what summer opened. Three takeaways:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Clear drains, seal flashing and parapet caps, and replace broken tiles or shingles before the first freeze.",
          "Seal stucco cracks and turn sprinklers away from walls, since freeze-thaw targets stucco first.",
          "Check attic ventilation to prevent cold-night condensation, and leave roof walking to a professional.",
        ],
      },
      { type: "heading", level: 2, text: "Contact Gilbert & Sons Roofing and Stucco" },
      {
        type: "paragraph",
        text:
          "Gilbert & Sons Roofing and Stucco is a licensed (NM License #377887), insured and bonded contractor based in Las Cruces and serving Doña Ana County and southern New Mexico since 2010, including Mesilla, Hatch, Anthony, Deming and El Paso. Our fall [roof maintenance](/roofing/roof-maintenance) visits cover every item on this checklist, including the parapets, canales and [stucco](/stucco) transitions most roofers skip. To get your roof ready before the first freeze, call 575-649-2316, email gilbertandsons2010@gmail.com, or [request an estimate through our contact page](/#contact).",
      },
    ],
  },
];
