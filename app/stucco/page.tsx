import type { Metadata } from "next";
import Link from "next/link";
import SectionMarker from "@/components/shared/SectionMarker";
import CTAButton from "@/components/shared/CTAButton";
import EstimateButton from "@/components/estimate/EstimateButton";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SafeMedia from "@/components/shared/SafeMedia";
import FAQAccordion from "@/components/shared/FAQAccordion";
import FadeIn from "@/components/shared/FadeIn";
import OptionExplorer from "@/components/interactive/OptionExplorer";
import MediaLibrary from "@/components/interactive/MediaLibrary";
import { siteConfig, supportingServices } from "@/lib/site-config";
import { getProjectMedia } from "@/lib/project-media";

export const metadata: Metadata = {
  title: { absolute: "Stucco Contractor in Las Cruces, NM | Gilbert & Sons" },
  description:
    "Stucco and EIFS installation, repair and parapet work in Las Cruces, NM. Residential & commercial exterior finishing since 2010. Free estimates.",
  alternates: { canonical: "/stucco" },
};

const explorerOptions = [
  {
    key: "repair",
    label: "Repair",
    image: null,
    beforeAfter: {
      before: "/projects/stucco-repair-before.png",
      after: "/projects/stucco-repair-after.png",
      beforeAlt: "Stucco wall with patched, unfinished repair areas",
      afterAlt: "Same stucco wall with the finish blended and matched to the surrounding exterior",
    },
    heading: "Matching the Existing Finish",
    body: "Stucco repair involves more than filling damage. Texture, finish and surrounding surfaces need to be blended carefully so repaired areas fit naturally with the existing exterior. Drag the slider to compare a repair before and after.",
  },
  {
    key: "residential",
    label: "Residential",
    image: "/projects/stucco-house-exterior-02.webp",
    heading: "Residential Stucco",
    body: "We apply stucco finishes to homes across Las Cruces, giving properties a durable, low-maintenance exterior built for New Mexico's climate.",
  },
  {
    key: "commercial",
    label: "Commercial",
    image: "/projects/stucco-project-construction-01.webp",
    heading: "Commercial Stucco",
    body: "For commercial buildings, stucco and EIFS provide a durable finish that requires minimal upkeep — periodic cleaning and inspection keeps it performing well.",
  },
  {
    key: "eifs",
    label: "EIFS",
    image: "/projects/ai-house-exterior-tile-roof-01.png",
    heading: "EIFS",
    body: "EIFS (Exterior Insulation Finish System) offers durability, versatility and aesthetic appeal for commercial buildings, with additional thermal protection for improved comfort.",
  },
  {
    key: "parapet",
    label: "Parapet",
    image: "/projects/aerial-roof-overview-01.jpg",
    heading: "Parapets & Repairs",
    body: "Parapet walls face water infiltration, cracking and structural deterioration over time. We repair these roof-edge elements as part of our stucco and roofing work.",
  },
  {
    key: "finish",
    label: "Finish",
    image: "/projects/ai-house-exterior-golden-hour-01.png",
    heading: "Texture & Color",
    body: "Stucco is available in a range of textures and colors to complement your property's architectural style.",
  },
];

const materialBenefits = [
  "Durable and resistant to fire, rot and harsh weather",
  "Strong insulation that can lower heating and cooling costs",
  "Available in a range of textures and colors",
  "Enhances curb appeal for a modern or traditional look",
  "Requires minimal upkeep with periodic cleaning and inspection",
];

const faqs = [
  {
    question: "What's the difference between stucco and EIFS?",
    answer:
      "Traditional stucco is a cement-based finish. EIFS (Exterior Insulation Finish System) adds a layer of foam insulation beneath the finish coat, offering additional thermal protection.",
  },
  {
    question: "Do you repair cracked or damaged stucco?",
    answer:
      "Yes, including parapet repair where water infiltration and cracking are common on roof-edge walls.",
  },
  {
    question: "Is stucco available in different colors and textures?",
    answer:
      "Yes, stucco can be finished in a range of textures and colors to complement your property's architectural style.",
  },
  {
    question: "Do you provide stucco for both homes and commercial buildings?",
    answer: "Yes, we provide residential and commercial stucco and EIFS services.",
  },
];

export default function StuccoPage() {
  return (
    <>
      <section className="relative bg-brand-dark pt-[92px] md:pt-[132px] overflow-hidden">
        <div className="relative min-h-[56vh] flex items-end">
          <SafeMedia
            src="/projects/stucco-house-exterior-01.webp"
            alt="Residential stucco exterior finished by Gilbert & Sons in Las Cruces, NM"
            fill
            priority
            rounded={false}
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
          <div className="relative z-10 mx-auto max-w-[1200px] w-full px-5 md:px-8 pb-14 pt-24">
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Stucco" }]} />
            </div>
            <FadeIn>
              <p className="section-marker text-text-on-dark-secondary mb-4">
                Stucco · Las Cruces, NM
              </p>
              <h1 className="section-title font-heading font-semibold uppercase text-text-on-dark max-w-3xl">
                Built for the New Mexico exterior.
              </h1>
              <p className="body-large text-text-on-dark-secondary mt-6 max-w-xl">
                Exterior finishing solutions for commercial and residential
                properties — durable, versatile and built to handle the desert
                climate.
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

      <section className="relative overflow-hidden py-20 md:py-28">
        <p
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-heading font-semibold uppercase text-brand-ink opacity-[0.035] whitespace-nowrap"
          style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)", letterSpacing: "-0.02em" }}
        >
          THE FIRST LINE OF DEFENSE.
        </p>
        <div className="relative z-10 mx-auto max-w-[1200px] px-5 md:px-8">
          <FadeIn>
            <SectionMarker number="01" label="Explore Stucco" />
            <h2 className="section-title font-heading font-semibold text-brand-ink mt-6 mb-12 max-w-2xl">
              One finish, several applications.
            </h2>
          </FadeIn>
          <OptionExplorer options={explorerOptions} />
        </div>
      </section>

      <section className="bg-surface-subtle border-y border-border-subtle">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
          <FadeIn>
            <SectionMarker number="02" label="Material Benefits" />
            <h2 className="section-title font-heading font-semibold text-brand-ink mt-6 max-w-2xl">
              Why stucco holds up here.
            </h2>
          </FadeIn>
          <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {materialBenefits.map((benefit, index) => (
              <FadeIn
                key={benefit}
                delay={index * 60}
                as="li"
                className="flex items-start gap-3 py-3 border-b border-border-subtle text-brand-ink font-medium"
              >
                <span className="w-1.5 h-1.5 bg-brand-primary shrink-0 mt-2" aria-hidden="true" />
                {benefit}
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
          <FadeIn>
            <SectionMarker number="03" label="Real Work" tone="dark" />
            <h2 className="section-title font-heading font-semibold text-text-on-dark mt-6 mb-10 max-w-2xl">
              Stucco projects in the field.
            </h2>
          </FadeIn>
          <MediaLibrary items={getProjectMedia({ category: "stucco" })} />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-16 md:py-20">
        <FadeIn>
          <SectionMarker number="—" label="Related Services" />
          <div className="mt-8 flex flex-wrap gap-4">
            {supportingServices.map((service) => (
              <Link
                key={service.label}
                href={service.href}
                className="px-5 py-3 border border-border-subtle text-sm font-heading font-semibold uppercase tracking-[0.03em] text-brand-ink hover:border-brand-primary"
              >
                {service.label}
              </Link>
            ))}
            <Link
              href="/roofing"
              className="px-5 py-3 border border-border-subtle text-sm font-heading font-semibold uppercase tracking-[0.03em] text-brand-ink hover:border-brand-primary"
            >
              Roofing
            </Link>
          </div>
        </FadeIn>
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
