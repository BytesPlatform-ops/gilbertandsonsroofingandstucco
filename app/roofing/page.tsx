import type { Metadata } from "next";
import SectionMarker from "@/components/shared/SectionMarker";
import CTAButton from "@/components/shared/CTAButton";
import EstimateButton from "@/components/estimate/EstimateButton";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SafeMedia from "@/components/shared/SafeMedia";
import RoofingNavigator from "@/components/roofing/RoofingNavigator";
import FullScreenStoryScene from "@/components/interactive/FullScreenStoryScene";
import { siteConfig, supportingServices } from "@/lib/site-config";
import { VIDEO_LINKS, type StoryMediaItem } from "@/lib/site-media";

const roofingStories: StoryMediaItem[] = [
  {
    id: "roof-installation",
    title: "Roof Installation",
    description: "Materials and tools staged mid-installation — underlayment, shingles and a nail gun ready to go.",
    meta: "ROOF INSTALLATION",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.ROOFING_INSTALLATION,
    posterUrl: "/projects/ai-roof-nailing-detail-01.png",
  },
  {
    id: "flashing-repair",
    title: "Flashing & Repair",
    description: "Flashing repaired at a roof-wall transition — one of the most common leak points.",
    meta: "ROOF REPAIR",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.ROOFING_REPAIR,
    posterUrl: "/projects/ai-roofer-flashing-detail-01.png",
  },
  {
    id: "tile-roofing",
    title: "Tile Roofing",
    description: "Clay tile underlayment mid-installation, ahead of the tile going back down.",
    meta: "TILE ROOFING",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.TILE_ROOFING,
    posterUrl: "/projects/ai-tile-underlayment-install-01.png",
  },
  {
    id: "roof-replacement",
    title: "Roof Replacement",
    description: "A full roof replacement, straight-overhead view once the new roof was complete.",
    meta: "ROOF REPLACEMENT",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.ROOFING_REPLACEMENT,
    posterUrl: "/projects/aerial-shingle-roof-03.jpg",
  },
  {
    id: "commercial-restoration",
    title: "Commercial Restoration",
    description: "Silicone coating applied to a commercial flat roof to renew waterproofing.",
    meta: "COMMERCIAL RESTORATION",
    mediaType: "video",
    videoUrl: VIDEO_LINKS.COMMERCIAL_RESTORATION,
    posterUrl: "/projects/ai-roofer-coating-application-01.png",
  },
  {
    id: "gutter-roofline",
    title: "Gutter & Roofline",
    description: "Gutters and roofline checked as part of routine maintenance.",
    meta: "GUTTER & ROOFLINE INSPECTION",
    mediaType: "image",
    imageUrl: "/projects/ai-roofer-gutter-inspection-01.png",
  },
];

export const metadata: Metadata = {
  title: "Roofing Services in Las Cruces, NM",
  description:
    "Roof installation, repair, replacement, inspection, maintenance, emergency and specialty roofing services from Gilbert & Sons in Las Cruces, NM.",
  alternates: { canonical: "/roofing" },
};

export default function RoofingHubPage() {
  return (
    <>
      <section className="relative bg-brand-dark pt-[92px] md:pt-[132px] overflow-hidden">
        <div className="relative min-h-[56vh] flex items-end">
          <SafeMedia
            src="/projects/aerial-roof-overview-01.jpg"
            alt="Aerial view of a Gilbert & Sons roofing project in Las Cruces, NM"
            fill
            priority
            rounded={false}
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
          <div className="relative z-10 mx-auto max-w-[1200px] w-full px-5 md:px-8 pb-14 pt-24">
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Roofing" }]} />
            </div>
            <p className="section-marker text-text-on-dark-secondary mb-4">
              Roofing · Las Cruces, NM
            </p>
            <h1 className="section-title font-heading font-semibold uppercase text-text-on-dark max-w-3xl">
              Roofing that&rsquo;s built to perform.
            </h1>
            <p className="body-large text-text-on-dark-secondary mt-6 max-w-xl">
              We offer a comprehensive range of roofing services for residential and
              commercial clients across New Mexico — designed to deliver high-quality,
              reliable and durable roofing that protects your property.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <EstimateButton variant="primary" showArrow>
                Free Estimate
              </EstimateButton>
              <CTAButton href={siteConfig.phoneHref} variant="secondary-dark">
                Call {siteConfig.phone}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <SectionMarker number="01" label="Choose a Service" />
        <div className="mt-10">
          <RoofingNavigator />
        </div>
      </section>

      <FullScreenStoryScene
        number="04"
        label="Roofing Projects"
        heading={
          <>
            See how the
            <br />
            work comes
            <br />
            together.
          </>
        }
        backgroundWord="PROTECTION STARTS ABOVE."
        stories={roofingStories}
        tone="brand"
      />

      <section className="bg-surface-subtle border-t border-border-subtle">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-16 md:py-20">
          <SectionMarker number="—" label="Also Available" />
          <div className="mt-8 flex flex-wrap gap-4">
            {supportingServices.map((service) => (
              <span
                key={service.label}
                className="px-5 py-3 border border-border-subtle bg-surface-main text-sm font-heading font-semibold uppercase tracking-[0.03em] text-brand-ink"
              >
                {service.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
