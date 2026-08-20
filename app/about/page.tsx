import type { Metadata } from "next";
import Image from "next/image";
import SectionMarker from "@/components/shared/SectionMarker";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SafeMedia from "@/components/shared/SafeMedia";
import CTAButton from "@/components/shared/CTAButton";
import EstimateButton from "@/components/estimate/EstimateButton";
import FadeIn from "@/components/shared/FadeIn";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Gilbert & Sons Roofing and Stucco Inc. — locally owned by Bob Gilbert, serving Las Cruces and Doña Ana County, New Mexico since 2010.",
  alternates: { canonical: "/about" },
};

const workPhotos = [
  "/projects/aerial-shingle-roof-06.jpg",
  "/projects/stucco-house-exterior-01.webp",
  "/projects/roof-installation.jpg",
  "/projects/roof-replacement.jpg",
  "/projects/roof-maintenance.jpg",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-brand-dark pt-[92px] md:pt-[132px] overflow-hidden">
        <div className="relative min-h-[46vh] flex items-end">
          <SafeMedia
            src="/projects/company-truck-01.webp"
            alt="Gilbert & Sons company truck on a job site in Las Cruces, NM"
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
            <FadeIn>
              <p className="section-marker text-text-on-dark-secondary mb-4">About Us</p>
              <h1 className="section-title font-heading font-semibold uppercase text-text-on-dark max-w-3xl">
                Local, licensed, and built on referrals.
              </h1>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <FadeIn className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionMarker number="01" label={`Established ${siteConfig.established}`} />
            <h2 className="section-title font-heading font-semibold text-brand-ink mt-6">
              Owned by Bob Gilbert.
            </h2>
          </div>
          <p className="body-large text-text-secondary">
            Bob Gilbert started Gilbert &amp; Sons in {siteConfig.established}, and it&rsquo;s
            been doing roofing and stucco work in Las Cruces and Doña Ana County
            ever since. It&rsquo;s a local, licensed, insured and bonded contractor —
            not a franchise, and not a call center routing your number to a
            subcontractor you&rsquo;ve never met.
          </p>
        </FadeIn>
      </section>

      <section className="bg-surface-subtle border-y border-border-subtle">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
          <FadeIn className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionMarker number="02" label="Local Experience" />
              <h2 className="section-title font-heading font-semibold text-brand-ink mt-6">
                Commercial &amp; residential.
              </h2>
            </div>
            <p className="body-large text-text-secondary">
              We work on single-family homes, rental properties and commercial
              buildings across Las Cruces and Doña Ana County — everything from a
              single stucco patch to a full roof replacement. Roofing and stucco
              are our core trades; painting and plastering support that work when
              a project calls for it.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <SectionMarker number="03" label="What We Stand On" />
        </FadeIn>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle border border-border-subtle">
          {["Price", "Quality", "Warranty", "Service"].map((value, index) => (
            <FadeIn key={value} delay={index * 70} className="bg-surface-main p-8">
              <h3 className="font-heading font-semibold text-xl uppercase text-brand-ink">{value}</h3>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={100} className="mt-10 flex flex-wrap gap-3">
          {[
            `${new Date().getFullYear() - siteConfig.established}+ Years in the Industry`,
            "Licensed",
            "Insured",
            "Bonded",
            siteConfig.contractorLicense,
          ].map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 border border-border-subtle text-xs font-heading font-semibold uppercase tracking-[0.04em] text-brand-ink"
            >
              {badge}
            </span>
          ))}
          <span className="flex items-center gap-2 px-4 py-2 border border-border-subtle text-xs font-heading font-semibold uppercase tracking-[0.04em] text-brand-ink">
            <Image
              src="/bbb.webp"
              alt=""
              width={18}
              height={18}
              className="w-[18px] h-[18px] object-contain"
            />
            BBB Accredited Business
          </span>
        </FadeIn>
      </section>

      <section className="bg-surface-subtle border-y border-border-subtle">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
          <FadeIn>
            <SectionMarker number="04" label="Our Work" />
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-4">
            <FadeIn className="col-span-2 row-span-2 relative aspect-square md:aspect-auto md:h-full min-h-[260px]">
              <SafeMedia src={workPhotos[0]} alt="Gilbert & Sons roofing project" fill rounded={false} />
            </FadeIn>
            {workPhotos.slice(1).map((photo, index) => (
              <FadeIn
                key={photo}
                delay={(index + 1) * 70}
                className="relative aspect-square col-span-1"
              >
                <SafeMedia
                  src={photo}
                  alt={`Gilbert & Sons roofing and stucco project ${index + 2}`}
                  fill
                  rounded={false}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
          <FadeIn>
            <SectionMarker number="05" label="Get Started" tone="dark" />
            <h2 className="section-title font-heading font-semibold uppercase text-text-on-dark mt-6 max-w-2xl">
              Talk to us about your property.
            </h2>
            <p className="body-large text-text-on-dark-secondary mt-6 max-w-lg">
              Tell us what&rsquo;s going on and we&rsquo;ll take it from there —
              no pressure, just a straight answer.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <EstimateButton variant="primary" showArrow>
                Get a Free Estimate
              </EstimateButton>
              <CTAButton href={siteConfig.phoneHref} variant="secondary-dark">
                Call {siteConfig.phone}
              </CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
