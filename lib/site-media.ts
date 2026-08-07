/**
 * Central video/media configuration.
 *
 * Paste real video URLs here — nothing else needs to change.
 * Every value below is intentionally blank until real footage exists.
 * Components fall back to the poster/image automatically when a URL is empty,
 * so the site never breaks or shows a broken video icon.
 */

export const VIDEO_LINKS = {
  HOME_HERO: "/projects/hero-roofline-video.mp4",

  HOME_PROJECT_01: "", // ADD ROOF INSTALLATION VIDEO
  HOME_PROJECT_02: "", // ADD ROOF REPAIR VIDEO
  HOME_PROJECT_03: "", // ADD COMPLETED ROOF / STUCCO VIDEO

  ROOFING_INSTALLATION: "", // ADD ROOF INSTALLATION VIDEO
  ROOFING_REPAIR: "", // ADD ROOF REPAIR VIDEO
  ROOFING_REPLACEMENT: "", // ADD ROOF REPLACEMENT VIDEO
  ROOFING_INSPECTION: "", // ADD ROOF INSPECTION VIDEO
  TILE_ROOFING: "", // ADD TILE ROOFING VIDEO
  COMMERCIAL_RESTORATION: "", // ADD SILICONE / COMMERCIAL RESTORATION VIDEO

  STUCCO_REPAIR: "", // ADD STUCCO REPAIR VIDEO
  STUCCO_APPLICATION: "", // ADD STUCCO APPLICATION VIDEO
  STUCCO_FINISHED_EXTERIOR: "", // ADD FINISHED STUCCO EXTERIOR VIDEO
} as const;

export const heroMedia = {
  videoUrl: VIDEO_LINKS.HOME_HERO,
  posterUrl: "/projects/hero-video-poster.jpg",
  objectPositionDesktop: "center center",
  objectPositionMobile: "center center",
};

export const mediaSettings = {
  hero: { autoplay: true, loop: true, muted: true },
  projectStory: { autoplay: true, autoplayMs: 5000, startDelayMs: 2000 },
  projectCarousel: { autoplay: true, autoplayMs: 5000, startDelayMs: 2000 },
  testimonialSlider: { autoplay: true, autoplayMs: 6000, startDelayMs: 2000 },
  roofingCarousel: { autoplay: true, autoplayMs: 5500, startDelayMs: 2000 },
};

export type MediaSourceType = "file" | "youtube" | "vimeo";

export interface StoryMediaItem {
  id: string;
  title: string;
  description: string;
  meta: string;
  mediaType: "image" | "video";
  imageUrl?: string;
  videoUrl?: string;
  posterUrl?: string;
  objectPosition?: string;
  sourceType?: MediaSourceType;
}

/**
 * Flat placeholder list — one entry per real-world project video we expect to add.
 * Not wired into a specific component; use as a quick reference / copy source
 * when filling in VIDEO_LINKS or building new StoryMediaItem arrays.
 */
export const projectVideos: StoryMediaItem[] = [
  {
    id: "roof-installation",
    title: "Roof Installation",
    description: "A closer look at the installation process, from prepared roof surfaces through the finished roofing system.",
    meta: "ROOF INSTALLATION",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.ROOFING_INSTALLATION,
    posterUrl: "/projects/ai-roof-nailing-detail-01.png",
  },
  {
    id: "roof-repair",
    title: "Roof Repair",
    description: "Focused repair work around shingles, flashing and roof transitions where water intrusion or wear can develop.",
    meta: "ROOF REPAIR",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.ROOFING_REPAIR,
    posterUrl: "/projects/ai-roofer-flashing-detail-01.png",
  },
  {
    id: "roof-replacement",
    title: "Roof Replacement",
    description: "A full roof replacement from tear-off through a completed, finished roofing system.",
    meta: "ROOF REPLACEMENT",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.ROOFING_REPLACEMENT,
    posterUrl: "/projects/aerial-shingle-roof-03.jpg",
  },
  {
    id: "roof-inspection",
    title: "Roof Inspection",
    description: "A hands-on inspection of roofing edges, shingles and vulnerable connection points before recommending repair or replacement.",
    meta: "ROOF INSPECTION",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.ROOFING_INSPECTION,
    posterUrl: "/projects/roof-detail-02.jpg",
  },
  {
    id: "tile-roofing",
    title: "Tile Roofing",
    description: "Tile roofing work showing both the visible finished surface and the waterproofing system beneath it.",
    meta: "TILE ROOFING",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.TILE_ROOFING,
    posterUrl: "/projects/ai-tile-underlayment-install-01.png",
  },
  {
    id: "commercial-roof-restoration",
    title: "Commercial Roof Restoration",
    description: "Preparation, repairs and coating application across a commercial roofing surface.",
    meta: "COMMERCIAL RESTORATION",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.COMMERCIAL_RESTORATION,
    posterUrl: "/projects/ai-roofer-coating-application-01.png",
  },
  {
    id: "stucco-repair",
    title: "Stucco Repair",
    description: "Stucco repair blending texture and finish so repaired areas fit naturally with the existing exterior.",
    meta: "STUCCO REPAIR",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.STUCCO_REPAIR,
    posterUrl: "/projects/ai-stucco-patch-progress-01.png",
  },
  {
    id: "stucco-application",
    title: "Stucco Application",
    description: "Stucco applied to give the property a durable, low-maintenance exterior finish.",
    meta: "STUCCO APPLICATION",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.STUCCO_APPLICATION,
    posterUrl: "/projects/stucco-project-construction-01.webp",
  },
];
