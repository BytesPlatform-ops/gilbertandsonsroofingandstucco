import type { Metadata } from "next";
import Link from "next/link";
import SectionMarker from "@/components/shared/SectionMarker";
import CTAButton from "@/components/shared/CTAButton";
import EstimateButton from "@/components/estimate/EstimateButton";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SafeMedia from "@/components/shared/SafeMedia";
import FadeIn from "@/components/shared/FadeIn";
import { siteConfig } from "@/lib/site-config";
import { serviceAreas } from "@/lib/service-areas";

export const metadata: Metadata = {
  title: "Roofing & Stucco Service Areas",
  description:
    "Gilbert & Sons Roofing and Stucco is based in Las Cruces, NM and serves Doña Ana County and the surrounding Southern New Mexico region.",
  alternates: { canonical: "/service-areas" },
};

const areaNotes: Record<string, string> = {
  "dona-ana":
    "Just north of Las Cruces along the Rio Grande, Doña Ana's older homes and newer builds deal with the same high-desert sun and monsoon swings that drive roof and stucco wear across the valley.",
  mesilla:
    "Historic adobe and stucco construction is common in Mesilla, where exterior finish work usually means matching an existing texture and color rather than starting from scratch.",
  "university-park":
    "Close to NMSU, University Park's mix of older shingle roofs and stucco exteriors sees regular wear from Las Cruces summers and seasonal wind.",
  hatch:
    "North along I-25, Hatch's rural properties face the same intense sun and occasional hail that roofs across the valley are built to handle.",
  chaparral:
    "East of Las Cruces near the Franklin Mountains, Chaparral properties see strong wind events that put extra stress on roofing and exterior stucco.",
  anthony:
    "Straddling the New Mexico–Texas line, Anthony homes deal with the same desert heat and seasonal storms as the rest of the Mesilla Valley.",
  "sunland-park":
    "In the southern tip of Doña Ana County, Sunland Park's stucco and roofing needs mirror the El Paso–Las Cruces border region's climate.",
  deming:
    "West of Las Cruces in Luna County, Deming's exposed desert properties see significant sun and wind exposure over the life of a roof.",
  "truth-or-consequences":
    "North in Sierra County, Truth or Consequences properties face wide temperature swings between hot days and cool desert nights.",
  "silver-city":
    "At higher elevation in Grant County, Silver City sees more moisture and occasional snow load than the valley floor, which changes how roofs and stucco age.",
  ruidoso:
    "Up in the Sacramento Mountains, Ruidoso's elevation makes snow load and moisture bigger factors for roofing than they are down in the valley.",
  "el-paso":
    "Just across the state line, El Paso shares the Mesilla Valley's climate and many of the same roofing and stucco needs as Las Cruces.",
};

export default function ServiceAreasPage() {
  const otherAreas = serviceAreas.filter((area) => !area.primary);

  return (
    <>
      <section className="relative bg-brand-dark pt-[92px] md:pt-[132px] overflow-hidden">
        <div className="relative min-h-[46vh] flex items-end">
          <SafeMedia
            src="/projects/aerial-shingle-roof-05.jpg"
            alt="Aerial view of a residential roof in the Las Cruces area"
            fill
            priority
            rounded={false}
            className="opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
          <div className="relative z-10 mx-auto max-w-[1200px] w-full px-5 md:px-8 pb-14 pt-24">
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
            </div>
            <FadeIn>
              <p className="section-marker text-text-on-dark-secondary mb-4">Where We Work</p>
              <h1 className="section-title font-heading font-semibold uppercase text-text-on-dark max-w-3xl">
                Roofing &amp; stucco across Southern New Mexico.
              </h1>
              <p className="body-large text-text-on-dark-secondary mt-6 max-w-xl">
                We&rsquo;re based in Las Cruces, NM and serve Doña Ana County and the
                surrounding region. If you&rsquo;re not sure whether your property
                is in range, call us and we&rsquo;ll tell you straight.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <EstimateButton variant="primary" showArrow>
                  Free Estimate
                </EstimateButton>
                <CTAButton href={siteConfig.phoneHref} variant="secondary-dark">
                  Call {siteConfig.phone}
                </CTAButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <SectionMarker number="01" label="Primary Market" />
        </FadeIn>
        <FadeIn delay={80} className="mt-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-feature)] border-2 border-brand-ink shadow-brutal-sm">
            <SafeMedia
              src="/projects/aerial-roof-overview-01.jpg"
              alt="Completed roofing project in Las Cruces, NM"
              fill
              rounded={false}
            />
          </div>
          <div>
            <h2 className="section-title font-heading font-semibold text-brand-ink">
              Las Cruces, NM
            </h2>
            <p className="body-large text-text-secondary mt-6 max-w-lg">
              Las Cruces is home base — {siteConfig.address.line1},{" "}
              {siteConfig.address.line2}. It&rsquo;s where we&rsquo;ve done the
              most work since {siteConfig.established}, and where our roofing
              and stucco crews are on the ground most often.
            </p>
            <div className="mt-8">
              <CTAButton href="/service-areas/las-cruces" variant="secondary-light" showArrow>
                Roofing &amp; Stucco in Las Cruces
              </CTAButton>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="bg-surface-subtle border-y border-border-subtle">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
          <FadeIn>
            <SectionMarker number="02" label="Also Serving" />
            <h2 className="section-title font-heading font-semibold text-brand-ink mt-6 max-w-2xl">
              The wider Doña Ana County region.
            </h2>
          </FadeIn>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-border-subtle border border-border-subtle">
            {otherAreas.map((area, index) => (
              <FadeIn
                key={area.slug}
                id={area.slug}
                delay={(index % 2) * 70}
                className="bg-surface-main p-8 scroll-mt-[132px]"
              >
                <h3 className="font-heading font-semibold text-xl uppercase text-brand-ink">
                  {area.name}
                </h3>
                <p className="text-text-secondary mt-3 text-sm leading-relaxed">
                  {areaNotes[area.slug]}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-16 md:py-20">
        <FadeIn>
          <SectionMarker number="—" label="What We Do" />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/roofing"
              className="px-5 py-3 border border-border-subtle text-sm font-heading font-semibold uppercase tracking-[0.03em] text-brand-ink hover:border-brand-primary"
            >
              Roofing
            </Link>
            <Link
              href="/stucco"
              className="px-5 py-3 border border-border-subtle text-sm font-heading font-semibold uppercase tracking-[0.03em] text-brand-ink hover:border-brand-primary"
            >
              Stucco
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
