import SafeMedia from "@/components/shared/SafeMedia";
import SectionMarker from "@/components/shared/SectionMarker";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTAButton from "@/components/shared/CTAButton";
import FAQAccordion from "@/components/shared/FAQAccordion";
import FadeIn from "@/components/shared/FadeIn";
import OptionExplorer from "@/components/interactive/OptionExplorer";
import RoofLayerExplorer from "@/components/interactive/RoofLayerExplorer";
import InspectionHotspots from "@/components/interactive/InspectionHotspots";
import EstimateButton from "@/components/estimate/EstimateButton";
import { roofingServices } from "@/lib/roofing-services";
import type { RoofingServicePage } from "@/lib/roofing-service-content";
import { siteConfig } from "@/lib/site-config";

export default function RoofingServiceLayout({ page }: { page: RoofingServicePage }) {
  const related = page.relatedSlugs
    .map((slug) => roofingServices.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <section className="relative bg-brand-dark pt-[92px] md:pt-[132px] overflow-hidden">
        <div className="relative min-h-[52vh] md:min-h-[62vh] flex items-end">
          <SafeMedia
            src={page.heroImage}
            alt={page.title}
            fill
            priority
            rounded={false}
            sizes="100vw"
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
          <div className="relative z-10 mx-auto max-w-[1200px] w-full px-5 md:px-8 pb-14 pt-24">
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Roofing", href: "/roofing" },
                  { label: roofingServices.find((s) => s.slug === page.slug)?.shortTitle ?? page.title },
                ]}
              />
            </div>
            <FadeIn>
              <p className="section-marker text-text-on-dark-secondary mb-4">{page.eyebrow}</p>
              <h1 className="section-title font-heading font-semibold uppercase text-text-on-dark max-w-3xl">
                {page.title}
              </h1>
              <p className="body-large text-text-on-dark-secondary mt-6 max-w-xl">{page.intro}</p>
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
          {page.backgroundPhrase}
        </p>

        <div className="relative z-10 mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="flex flex-col gap-16 md:gap-24">
            {page.sections.map((section, index) => (
              <FadeIn key={section.heading} delay={index * 60}>
                <div
                  className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-16 shrink-0">
                    <span className="section-marker text-text-secondary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-ink mb-4">
                      {section.heading}
                    </h2>
                    <p className="body-large text-text-secondary max-w-2xl">{section.body}</p>
                    {section.bullets && (
                      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-center gap-3 text-sm font-medium text-brand-ink border-b border-border-subtle pb-3"
                          >
                            <span className="w-1.5 h-1.5 bg-brand-primary shrink-0" aria-hidden="true" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {page.interactive && (
            <div className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-border-subtle">
              <FadeIn>
                <SectionMarker number="—" label={page.interactive.label} />
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-ink mt-6 mb-10">
                  {page.interactive.heading}
                </h2>
              </FadeIn>
              {page.interactive.kind === "options" && (
                <OptionExplorer
                  options={page.interactive.options}
                  ctaLabel={page.interactive.ctaLabel}
                  ctaHref={page.interactive.ctaHref}
                />
              )}
              {page.interactive.kind === "layers" && <RoofLayerExplorer />}
              {page.interactive.kind === "hotspots" && <InspectionHotspots />}
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-surface-subtle border-y border-border-subtle">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-16 md:py-20">
            <FadeIn>
              <SectionMarker number="—" label="Related Roofing Services" />
            </FadeIn>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((service, index) => (
                <FadeIn key={service.slug} delay={index * 80}>
                  <a
                    href={service.href}
                    className="group block bg-surface-main border-2 border-border-subtle p-6 rounded-md transition-colors duration-150 ease-out hover:bg-surface-subtle hover:border-brand-ink"
                  >
                    <h3 className="font-heading font-semibold text-lg text-brand-ink mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary group-hover:underline underline-offset-4">
                      Explore
                      <span aria-hidden="true">→</span>
                    </span>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[800px] px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <SectionMarker number="FAQ" label="Common Questions" />
          <div className="mt-8">
            <FAQAccordion items={page.faqs} />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
