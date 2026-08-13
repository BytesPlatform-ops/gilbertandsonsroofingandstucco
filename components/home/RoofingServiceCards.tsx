import Link from "next/link";
import SafeMedia from "@/components/shared/SafeMedia";
import SectionMarker from "@/components/shared/SectionMarker";
import CTAButton from "@/components/shared/CTAButton";
import FadeIn from "@/components/shared/FadeIn";
import { roofingServices } from "@/lib/roofing-services";
import { roofingServiceContent } from "@/lib/roofing-service-content";

export default function RoofingServiceCards() {
  return (
    <section className="bg-surface-subtle border-y border-border-subtle">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <SectionMarker number="03" label="Roofing Services" />
          <h2 className="section-title font-heading font-semibold text-brand-ink mt-6 max-w-2xl">
            Every roofing service we offer.
          </h2>
          <p className="body-large text-text-secondary mt-6 max-w-xl">
            From a routine inspection to a full replacement — pick what you
            need below, or call us and we&rsquo;ll help you figure it out.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {roofingServices.map((service, index) => (
            <FadeIn key={service.slug} delay={(index % 4) * 80} className="h-full">
              <Link
                href={service.href}
                className="group h-full bg-[#faf7f2] border-2 border-brand-ink/15 rounded-md overflow-hidden flex flex-col transition-colors duration-150 hover:border-brand-primary hover:bg-white"
              >
                <div className="relative aspect-[4/3] border-b-2 border-brand-ink/15 group-hover:border-brand-primary transition-colors duration-150">
                  <SafeMedia
                    src={roofingServiceContent[service.slug].heroImage}
                    alt={service.title}
                    fill
                    rounded={false}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-semibold text-base uppercase tracking-[0.01em] text-brand-ink group-hover:text-brand-primary transition-colors duration-150">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-text-secondary mt-2 flex-1">{service.description}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary">
                    Learn More
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10">
          <CTAButton href="/roofing" variant="secondary-light" showArrow>
            View All Roofing Services
          </CTAButton>
        </FadeIn>
      </div>
    </section>
  );
}
