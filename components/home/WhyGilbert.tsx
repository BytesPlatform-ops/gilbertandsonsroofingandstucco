import SectionMarker from "@/components/shared/SectionMarker";
import FadeIn from "@/components/shared/FadeIn";
import { siteConfig } from "@/lib/site-config";

const proof = [
  {
    number: "01",
    title: "Local Experience",
    body: `Established in ${siteConfig.established}, serving Las Cruces and Doña Ana County.`,
  },
  {
    number: "02",
    title: "Commercial + Residential",
    body: "Solutions built for homes and businesses alike.",
  },
  {
    number: "03",
    title: "Professional Workmanship",
    body: "Experienced workmanship and quality materials on every project.",
  },
  {
    number: "04",
    title: "Licensed · Insured · Bonded",
    body: "Added peace of mind on every job we take on.",
  },
  {
    number: "05",
    title: "BBB Member",
    body: "Established local credibility you can verify.",
  },
];

export default function WhyGilbert() {
  return (
    <section className="bg-brand-dark">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <SectionMarker number="07" label="Why Gilbert & Sons" tone="dark" />
          <h2 className="section-title font-heading font-semibold uppercase text-text-on-dark mt-8 max-w-3xl">
            Experience matters when your property is underneath it.
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border-on-dark border border-border-on-dark">
          {proof.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 70}
              className="bg-surface-dark-raised p-7 flex flex-col h-full"
            >
              <span className="section-marker text-text-on-dark-secondary">{item.number}</span>
              <h3 className="font-heading font-semibold text-lg text-text-on-dark mt-4">{item.title}</h3>
              <p className="text-sm text-text-on-dark-secondary mt-3">{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
