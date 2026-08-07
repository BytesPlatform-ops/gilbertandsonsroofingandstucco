import type { Metadata } from "next";
import SectionMarker from "@/components/shared/SectionMarker";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SafeMedia from "@/components/shared/SafeMedia";
import FeaturedTestimonials from "@/components/home/FeaturedTestimonials";
import { siteConfig } from "@/lib/site-config";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Gilbert & Sons Roofing and Stucco Inc. — locally owned by Bob Gilbert, serving Las Cruces and Doña Ana County, New Mexico since 2010.",
  alternates: { canonical: "/about" },
};

const workPhotos = [
  "/projects/aerial-shingle-roof-06.jpg",
  "/projects/stucco-house-exterior-01.webp",
  "/projects/aerial-shingle-roof-02.jpg",
  "/projects/roof-detail-01.jpg",
  "/projects/stucco-project-construction-01.webp",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-brand-dark pt-[92px] md:pt-[132px] overflow-hidden">
        <div className="relative min-h-[46vh] flex items-end">
          <SafeMedia
            src="/projects/aerial-shingle-roof-06.jpg"
            alt="Gilbert & Sons roofing crew project in Las Cruces, NM"
            fill
            priority
            rounded={false}
            className="opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
          <div className="relative z-10 mx-auto max-w-[1200px] w-full px-5 md:px-8 pb-14 pt-24">
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
            </div>
            <p className="section-marker text-text-on-dark-secondary mb-4">About Us</p>
            <h1 className="section-title font-heading font-semibold uppercase text-text-on-dark max-w-3xl">
              Local, licensed, and built on referrals.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionMarker number="01" label={`Established ${siteConfig.established}`} />
            <h2 className="section-title font-heading font-semibold text-brand-ink mt-6">
              Owned by Bob Gilbert.
            </h2>
          </div>
          <p className="body-large text-text-secondary">
            Gilbert &amp; Sons Roofing and Stucco Inc. is owned by Bob Gilbert and has
            served Las Cruces and Doña Ana County, New Mexico since {siteConfig.established}.
            We provide commercial and residential roofing, stucco, and related exterior
            services — including roof repairs, leak inspections, and work across
            multiple roofing systems.
          </p>
        </div>
      </section>

      <section className="bg-surface-subtle border-y border-border-subtle">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionMarker number="02" label="Local Experience" />
              <h2 className="section-title font-heading font-semibold text-brand-ink mt-6">
                Commercial &amp; residential.
              </h2>
            </div>
            <p className="body-large text-text-secondary">
              We work on homes and businesses across Las Cruces and Doña Ana County,
              bringing the same quality craftsmanship, reliability and customer
              satisfaction to every project — from a single repair to a full
              commercial exterior.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <SectionMarker number="03" label="What We Stand On" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle border border-border-subtle">
          {["Price", "Quality", "Warranty", "Service"].map((value) => (
            <div key={value} className="bg-surface-main p-8">
              <h3 className="font-heading font-semibold text-xl uppercase text-brand-ink">{value}</h3>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {["Licensed", "Insured", "Bonded", "BBB Member", "Eco-Friendly Materials"].map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 border border-border-subtle text-xs font-heading font-semibold uppercase tracking-[0.04em] text-brand-ink"
            >
              {badge}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-surface-subtle border-y border-border-subtle">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
          <SectionMarker number="04" label="Our Work" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="col-span-2 row-span-2 relative aspect-square md:aspect-auto md:h-full min-h-[260px]">
              <SafeMedia src={workPhotos[0]} alt="Gilbert & Sons roofing project" fill rounded={false} />
            </div>
            {workPhotos.slice(1).map((photo, index) => (
              <div key={photo} className="relative aspect-square col-span-1">
                <SafeMedia
                  src={photo}
                  alt={`Gilbert & Sons roofing and stucco project ${index + 2}`}
                  fill
                  rounded={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedTestimonials items={testimonials} number="05" label="Customer Stories" />
    </>
  );
}
