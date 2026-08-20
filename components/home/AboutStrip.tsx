import Image from "next/image";
import CTAButton from "@/components/shared/CTAButton";
import EstimateButton from "@/components/estimate/EstimateButton";
import FadeIn from "@/components/shared/FadeIn";
import { siteConfig } from "@/lib/site-config";

const points = [
  {
    title: "Commercial & Residential",
    body: "We provide commercial and residential roofing and stucco services, built on quality workmanship and reliability.",
  },
  {
    title: `${new Date().getFullYear() - siteConfig.established}+ Years in the Industry`,
    body: `Serving Las Cruces and Doña Ana County since ${siteConfig.established}.`,
  },
  {
    title: "Insured & Bonded",
    body: "We are fully licensed, insured, and bonded—providing peace of mind and legal protection for every roofing and stucco project we complete.",
  },
];

export default function AboutStrip() {
  return (
    <section className="bg-brand-dark">
      <div className="grid lg:grid-cols-2">
        <FadeIn className="bg-brand-primary px-6 md:px-10 py-16 md:py-20 flex flex-col">
          <ul className="flex flex-col gap-8 flex-1">
            {points.map((point) => (
              <li key={point.title} className="flex items-start gap-4">
                <span className="shrink-0 text-white text-xl font-heading font-semibold leading-none mt-0.5">
                  »
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-white">{point.title}</h3>
                  <p className="text-sm text-white/85 mt-2 leading-relaxed">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 w-40 rounded-md bg-white p-3">
            <Image
              src="/bbb.webp"
              alt="Better Business Bureau Accredited Business"
              width={330}
              height={220}
              className="w-full h-auto"
            />
          </div>
        </FadeIn>

        <FadeIn delay={100} className="bg-surface-main px-6 md:px-10 py-16 md:py-20 flex flex-col justify-center">
          <h2 className="section-title font-heading font-semibold text-brand-ink max-w-xl">
            About {siteConfig.name}
          </h2>
          <span className="mt-6 block w-14 h-1 bg-brand-primary" aria-hidden="true" />

          <div className="mt-8 grid sm:grid-cols-2 gap-8">
            <p className="text-text-secondary leading-relaxed">
              {siteConfig.owner} started {siteConfig.shortName} in {siteConfig.established}, and
              it&rsquo;s been doing roofing and stucco work in Las Cruces and Doña Ana County ever
              since. It&rsquo;s a local, licensed, insured and bonded contractor — not a franchise,
              and not a call center routing your number to a subcontractor you&rsquo;ve never met.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We&rsquo;re a BBB Accredited Business, and we work on single-family homes, rental
              properties and commercial buildings alike — everything from a single stucco patch
              to a full roof replacement. Roofing and stucco are our core trades.
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="bg-surface-dark px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-border-on-dark">
        <p className="font-heading font-semibold text-xl text-text-on-dark">Get a Free Estimate</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <EstimateButton variant="primary" showArrow>
            Get a Free Estimate
          </EstimateButton>
          <CTAButton href={siteConfig.phoneHref} variant="secondary-dark">
            Call {siteConfig.phone}
          </CTAButton>
        </div>
      </FadeIn>
    </section>
  );
}
