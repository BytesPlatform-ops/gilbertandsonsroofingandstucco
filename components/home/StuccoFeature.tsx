import SafeMedia from "@/components/shared/SafeMedia";
import SectionMarker from "@/components/shared/SectionMarker";
import CTAButton from "@/components/shared/CTAButton";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";

const benefits = ["Durability", "Weather Protection", "Energy Efficiency", "Texture & Color Options"];

export default function StuccoFeature() {
  return (
    <section className="bg-surface-main">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 pt-20 md:pt-28">
        <SectionMarker number="04" label="Stucco" />
      </div>

      <RevealOnScroll direction="image" className="relative mt-8 h-[80vh] min-h-[520px] w-full overflow-hidden">
        <SafeMedia
          src="/projects/stucco-house-exterior-01.webp"
          alt="Residential stucco exterior finished by Gilbert & Sons"
          fill
          rounded={false}
          className="scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/20 to-transparent" />

        <div className="relative z-10 h-full mx-auto max-w-[1200px] px-5 md:px-8 flex flex-col justify-end pb-16">
          <h2 className="section-title font-heading font-semibold uppercase text-text-on-dark max-w-lg">
            Built for the New Mexico exterior.
          </h2>
          <p className="body-large text-text-on-dark-secondary mt-6 max-w-md">
            Stucco and EIFS finishing for homes and commercial buildings —
            durable, energy-efficient, and finished in the texture and color
            that fits your property.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {benefits.map((benefit) => (
              <span
                key={benefit}
                className="px-4 py-2 border border-white/25 text-xs font-heading font-semibold uppercase tracking-[0.04em] text-text-on-dark"
              >
                {benefit}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <CTAButton href="/stucco" variant="primary" showArrow>
              Explore Stucco
            </CTAButton>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
