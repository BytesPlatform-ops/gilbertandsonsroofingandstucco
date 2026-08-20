import FullScreenStoryScene from "@/components/interactive/FullScreenStoryScene";
import { VIDEO_LINKS, type StoryMediaItem } from "@/lib/site-media";

const stories: StoryMediaItem[] = [
  {
    id: "completed-roof",
    title: "Completed Roof, Aerial View",
    description: "A finished residential shingle roof, viewed from above — clean lines, proper ventilation and tight ridge work.",
    meta: "COMPLETED ROOF, AERIAL VIEW",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.HOME_PROJECT_03,
    posterUrl: "/projects/gilbert-sons-completed-roof-flyover-poster.jpg",
  },
  {
    id: "crew-fleet",
    title: "On the Job",
    description: "The Gilbert & Sons truck fleet on-site — the same crew and trucks you'll see show up for your estimate.",
    meta: "GILBERT & SONS, ON SITE",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.FLEET_AND_CREW,
    posterUrl: "/projects/gilbert-sons-truck-fleet-poster.jpg",
  },
  {
    id: "tile-roof-repair",
    title: "Tile Roof, Storm Damage",
    description: "A tile roof tarped and secured over a damaged section ahead of repair.",
    meta: "TILE ROOF, STORM REPAIR",
    mediaType: "image",
    imageUrl: "/projects/tile-roof-storm-repair-01.jpg",
  },
  {
    id: "crew-loading-underlayment",
    title: "Staging Materials",
    description: "Underlayment staged and ready to go up — the prep work behind every roof we install.",
    meta: "MATERIAL STAGING",
    mediaType: "image",
    imageUrl: "/projects/crew-loading-underlayment-01.jpg",
  },
  {
    id: "base-sheet-loading",
    title: "Loading the Base Sheet",
    description: "Bob Gilbert loading base sheet roofing material ahead of a job.",
    meta: "GETTING READY TO INSTALL",
    mediaType: "image",
    imageUrl: "/projects/crew-base-sheet-loading-01.jpg",
  },
  {
    id: "commercial-roof-aerial",
    title: "Commercial Roof, Aerial View",
    description: "A finished commercial flat roof, viewed from above.",
    meta: "COMMERCIAL ROOFING",
    mediaType: "image",
    imageUrl: "/projects/commercial-flat-roof-aerial-02.jpg",
  },
  {
    id: "vent-flashing-detail",
    title: "Vent Flashing Detail",
    description: "Flashing sealed around a roof vent pipe — a common spot for leaks when it isn't done right.",
    meta: "FLASHING DETAIL",
    mediaType: "image",
    imageUrl: "/projects/vent-boot-flashing-detail-01.jpg",
  },
  {
    id: "roof-coating",
    title: "Roof Coating Application",
    description: "Coating applied to a flat roof section, with an adjoining tile roof and solar array nearby.",
    meta: "ROOF COATING",
    mediaType: "image",
    imageUrl: "/projects/roof-coating-application-02.jpg",
  },
  {
    id: "stucco-exterior",
    title: "Stucco Exterior",
    description: "A residential stucco finish, giving the property a durable, low-maintenance exterior.",
    meta: "RESIDENTIAL STUCCO EXTERIOR",
    mediaType: "image",
    imageUrl: "/projects/stucco-house-exterior-01.webp",
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
