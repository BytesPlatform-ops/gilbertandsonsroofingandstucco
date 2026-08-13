import type { Metadata } from "next";
import Link from "next/link";
import SectionMarker from "@/components/shared/SectionMarker";
import CTAButton from "@/components/shared/CTAButton";
import EstimateButton from "@/components/estimate/EstimateButton";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SafeMedia from "@/components/shared/SafeMedia";
import FAQAccordion from "@/components/shared/FAQAccordion";
import FadeIn from "@/components/shared/FadeIn";
import MediaLibrary from "@/components/interactive/MediaLibrary";
import { siteConfig } from "@/lib/site-config";
import { roofingServices } from "@/lib/roofing-services";
import { getProjectMedia } from "@/lib/project-media";

export const metadata: Metadata = {
  title: "Roofing & Stucco in Las Cruces, NM",
  description:
    "Roof repair, replacement, inspection and stucco services in Las Cruces, NM from Gilbert & Sons — licensed, insured and bonded, serving the city since 2010.",
  alternates: { canonical: "/service-areas/las-cruces" },
};

const faqs = [
  {
    question: "How do I know if something's actually wrong with my roof?",
    answer:
      "Common signs include missing or curling shingles, granules collecting in gutters, water stains on interior ceilings, and daylight visible through the attic. If you're not sure what you're looking at, that's exactly what an inspection is for — we'll tell you plainly what we find.",
  },
  {
    question: "How do you decide between repair and full replacement?",
    answer:
      "It comes down to the roof's age, how widespread the damage is, and whether the underlying structure is sound. A localized leak on a roof with years of life left usually just needs a repair. Widespread wear, multiple problem areas, or a roof near the end of its expected lifespan is when replacement makes more sense. We'll walk you through what we see and why before recommending either one.",
  },
  {
    question: "What do you actually check during a roof inspection?",
    answer:
      "We look at shingles or roofing material condition, flashing around chimneys and vents, gutters, signs of water intrusion, and the general structure of the roof. You'll get a straightforward explanation of what's fine, what to watch, and what needs attention now.",
  },
  {
    question: "What happens after I request a free estimate?",
    answer:
      "We'll follow up to schedule a time to look at the property in person, assess the actual condition, and give you a clear quote based on what we find — not a guess over the phone.",
  },
  {
    question: "Do you work on my type of roof?",
    answer:
      "We work on asphalt shingle, tile, metal and flat/commercial roofing systems, including silicone roof restoration for commercial buildings. If you're unsure whether your roof type is covered, call us and ask directly.",
  },
  {
    question: "Do you serve my part of Las Cruces?",
    answer:
      `We're based at ${siteConfig.address.line1} and work throughout Las Cruces and the surrounding Doña Ana County area. If you're near the city, we likely cover it — call ${siteConfig.phone} to confirm.`,
  },
];

export default function LasCrucesServiceAreaPage() {
  return (
    <>
      <section className="relative bg-brand-dark pt-[92px] md:pt-[132px] overflow-hidden">
        <div className="relative min-h-[56vh] flex items-end">
          <SafeMedia
            src="/projects/aerial-shingle-roof-07.jpg"
            alt="Aerial view of a completed roofing project in Las Cruces, NM"
            fill
            priority
            rounded={false}
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
          <div className="relative z-10 mx-auto max-w-[1200px] w-full px-5 md:px-8 pb-14 pt-24">
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Service Areas", href: "/service-areas" },
                  { label: "Las Cruces" },
                ]}
              />
            </div>
            <FadeIn>
              <p className="section-marker text-text-on-dark-secondary mb-4">
                Primary Service Area
              </p>
              <h1 className="section-title font-heading font-semibold uppercase text-text-on-dark max-w-3xl">
                Roofing &amp; Stucco in Las Cruces, NM
              </h1>
              <p className="body-large text-text-on-dark-secondary mt-6 max-w-xl">
                Gilbert &amp; Sons is based right here — {siteConfig.address.line1},{" "}
                {siteConfig.address.line2}. Roofing and stucco for Las Cruces homes
                and businesses since {siteConfig.established}.
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
          <SectionMarker number="01" label="Roofing in Las Cruces" />
          <h2 className="section-title font-heading font-semibold text-brand-ink mt-6 max-w-2xl">
            Built for high desert sun, wind and monsoon storms.
          </h2>
          <p className="body-large text-text-secondary mt-6 max-w-2xl">
            Las Cruces roofs deal with intense summer sun, sudden monsoon
            downpours and the occasional hailstorm — often within the same
            season. That combination is hard on shingles, flashing and
            underlayment, which is why regular inspection and prompt repair
            matter here more than in milder climates.
          </p>
        </FadeIn>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle border border-border-subtle">
          {roofingServices.map((service, index) => (
            <FadeIn key={service.slug} delay={(index % 3) * 70}>
              <Link
                href={service.href}
                className="block bg-surface-main p-6 h-full transition-colors duration-150 hover:bg-surface-subtle group"
              >
                <h3 className="font-heading font-semibold text-lg text-brand-ink group-hover:text-brand-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary mt-2">{service.description}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-8">
          <CTAButton href="/roofing" variant="secondary-light" showArrow>
            View All Roofing Services
          </CTAButton>
        </FadeIn>
      </section>

      <section className="bg-surface-subtle border-y border-border-subtle">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
          <FadeIn className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionMarker number="02" label="Stucco in Las Cruces" />
              <h2 className="section-title font-heading font-semibold text-brand-ink mt-6 max-w-lg">
                Exterior finish built for the desert.
              </h2>
              <p className="body-large text-text-secondary mt-6 max-w-lg">
                Stucco and EIFS are the standard exterior finish across Las
                Cruces for good reason — they hold up to sun exposure and
                temperature swings while keeping maintenance low. We install
                and repair stucco on homes and commercial buildings
                throughout the city, including parapet and crack repair on
                existing exteriors.
              </p>
              <div className="mt-8">
                <CTAButton href="/stucco" variant="secondary-light" showArrow>
                  Explore Stucco
                </CTAButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-feature)] border-2 border-brand-ink shadow-brutal-sm">
              <SafeMedia
                src="/projects/stucco-house-exterior-02.webp"
                alt="Residential stucco exterior in Las Cruces, NM"
                fill
                rounded={false}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <SectionMarker number="03" label="Why Las Cruces Trusts Us" />
        </FadeIn>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle border border-border-subtle">
          {[
            { title: `Established ${siteConfig.established}`, body: "Local roofing and stucco work in Las Cruces for over a decade." },
            { title: "Licensed & Bonded", body: siteConfig.contractorLicense },
            { title: "Insured", body: "Coverage in place before work starts on your property." },
            { title: "BBB Member", body: "Credibility you can verify independently." },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={index * 70} className="bg-surface-main p-8">
              <h3 className="font-heading font-semibold text-lg text-brand-ink">{item.title}</h3>
              <p className="text-sm text-text-secondary mt-3">{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
          <FadeIn>
            <SectionMarker number="04" label="Real Work" tone="dark" />
            <h2 className="section-title font-heading font-semibold text-text-on-dark mt-6 mb-10 max-w-2xl">
              Roofing and stucco projects around Las Cruces.
            </h2>
          </FadeIn>
          <MediaLibrary items={getProjectMedia()} />
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <SectionMarker number="FAQ" label="Common Questions" />
          <div className="mt-8">
            <FAQAccordion items={faqs} />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
