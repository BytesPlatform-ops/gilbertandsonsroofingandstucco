import FullScreenStoryScene from "@/components/interactive/FullScreenStoryScene";
import { VIDEO_LINKS, type StoryMediaItem } from "@/lib/site-media";

const stories: StoryMediaItem[] = [
  {
    id: "completed-roof",
    title: "Completed Roof",
    description: "A finished residential shingle roof, viewed from above — clean lines and proper ventilation.",
    meta: "COMPLETED ROOF, AERIAL VIEW",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.HOME_PROJECT_01,
    posterUrl: "/projects/aerial-roof-overview-01.jpg",
  },
  {
    id: "stucco-exterior",
    title: "Stucco Exterior",
    description: "A residential stucco finish, giving the property a durable, low-maintenance exterior.",
    meta: "RESIDENTIAL STUCCO EXTERIOR",
    mediaType: "image",
    imageUrl: "/projects/stucco-house-exterior-01.webp",
  },
  {
    id: "flashing-repair",
    title: "Flashing Repair",
    description: "Flashing work at a roof-wall transition — one of the most common sources of leaks when it fails.",
    meta: "FLASHING REPAIR",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.HOME_PROJECT_02,
    posterUrl: "/projects/ai-roofer-flashing-detail-01.png",
  },
  {
    id: "ridge-line",
    title: "Ridge Line Detail",
    description: "Clean ridge lines and consistent shingle layout on a finished roofing project.",
    meta: "SHINGLE ROOF, RIDGE LINE",
    mediaType: "image",
    imageUrl: "/projects/aerial-shingle-roof-06.jpg",
  },
  {
    id: "residential-roofline",
    title: "Residential Roofline",
    description: "A completed shingle roof, built to hold up to New Mexico's sun and weather.",
    meta: "SHINGLE ROOF, EVENING LIGHT",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.HOME_PROJECT_03,
    posterUrl: "/projects/ai-house-exterior-golden-hour-01.png",
  },
  {
    id: "commercial-stucco",
    title: "Commercial Stucco & EIFS",
    description: "A commercial exterior finishing project, partway through the process.",
    meta: "COMMERCIAL STUCCO & EIFS",
    mediaType: "image",
    imageUrl: "/projects/stucco-project-construction-01.webp",
  },
];

export default function RecentWork() {
  return (
    <FullScreenStoryScene
      number="06"
      label="Recent Work"
      heading={
        <>
          Built in
          <br />
          the field.
        </>
      }
      backgroundWord="BUILT TO PROTECT."
      stories={stories}
      tone="dark"
    />
  );
}
