import { siteConfig } from "@/lib/site-config";

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

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

function BadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="8" r="6" />
      <path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7" />
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

export default function TrustStrip() {
  const years = new Date().getFullYear() - siteConfig.established;

  const items = [
    { icon: CalendarIcon, stat: `${years}+ Years`, desc: `Serving Las Cruces since ${siteConfig.established}` },
    { icon: BuildingsIcon, stat: "Comm. + Res.", desc: "Homes and businesses" },
    { icon: ShieldIcon, stat: "Licensed", desc: "Insured & bonded contractor" },
    { icon: BadgeIcon, stat: "BBB Member", desc: "Accredited business" },
    { icon: PinIcon, stat: "Local", desc: "Las Cruces & Doña Ana County" },
  ];

  return (
    <section className="bg-brand-dark border-b border-border-on-dark">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {items.map(({ icon: Icon, stat, desc }) => (
            <div key={stat} className="flex flex-col items-center text-center gap-3">
              <span className="w-12 h-12 rounded-full border border-brand-primary/40 flex items-center justify-center text-brand-primary">
                <Icon />
              </span>
              <div>
                <p className="font-heading font-semibold text-text-on-dark">{stat}</p>
                <p className="text-xs text-text-on-dark-secondary mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
