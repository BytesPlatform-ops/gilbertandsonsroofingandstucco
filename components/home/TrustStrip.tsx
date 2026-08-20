import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";

function BuildingsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 21V8l7-4 7 4v13" />
      <path d="M9 21v-6h4v6M9 11h.01M14 11h.01M9 15h.01M14 15h.01" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="8" r="6" />
      <path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7" />
    </svg>
  );
}

export default function TrustStrip() {
  const items = [
    { icon: BuildingsIcon, stat: "Comm. + Res.", desc: "Homes and businesses" },
    { icon: ShieldIcon, stat: "Licensed", desc: "Insured & bonded contractor" },
    { icon: BadgeIcon, stat: "BBB Accredited", desc: "Better Business Bureau" },
    { icon: PinIcon, stat: "Local", desc: "Las Cruces & Doña Ana County" },
  ];

  return (
    <section className="bg-brand-dark border-b border-border-on-dark">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 flex-1">
            {items.map(({ icon: Icon, stat, desc }, index) => (
              <FadeIn
                key={stat}
                delay={index * 70}
                className="flex flex-col items-center text-center gap-3 rounded-md border border-white/15 bg-surface-dark-raised px-4 py-6"
              >
                <span className="w-12 h-12 rounded-full border border-brand-primary/40 flex items-center justify-center text-brand-primary">
                  <Icon />
                </span>
                <div>
                  <p className="font-heading font-semibold text-text-on-dark">{stat}</p>
                  <p className="text-xs text-text-on-dark-secondary mt-1">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Separate, bigger logo at the end of the strip — its own
              standalone container so it grabs attention on its own,
              not squeezed into one of the small cards above. */}
          <FadeIn
            delay={280}
            className="shrink-0 lg:w-40 rounded-md border border-white/15 bg-white flex items-center justify-center p-4"
          >
            <Image
              src="/bbb.webp"
              alt="Better Business Bureau Accredited Business"
              width={140}
              height={140}
              className="w-full h-auto max-h-24 lg:max-h-none object-contain"
            />
          </FadeIn>
        </div>
      </div>

      <div className="border-t border-border-on-dark">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-8">
          <FadeIn className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 rounded-md border border-white/15 bg-surface-dark-raised px-5 py-6 sm:px-6">
            <span className="shrink-0 w-11 h-11 rounded-full border-2 border-brand-primary flex items-center justify-center text-brand-primary">
              <ShieldIcon />
            </span>
            <div>
              <p className="font-heading font-semibold text-text-on-dark uppercase tracking-[0.02em]">
                Insured &amp; Bonded
              </p>
              <p className="text-sm text-text-on-dark-secondary mt-1 max-w-2xl">
                We are fully licensed, insured, and bonded—providing peace of
                mind and legal protection for every roofing and stucco project
                we complete.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
