import SectionMarker from "@/components/shared/SectionMarker";

const steps = [
  { number: "01", title: "Tell Us What's Going On", body: "Call or request a free estimate online — tell us what you're seeing." },
  { number: "02", title: "Inspection", body: "We look at the property in person and assess the actual condition." },
  { number: "03", title: "Recommendation & Quote", body: "We explain what we found and give you a clear, honest quote." },
  { number: "04", title: "Professional Work", body: "Our crew completes the work and cleans up when it's done." },
];

export default function Process() {
  return (
    <section className="bg-surface-main">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <SectionMarker number="08" label="How It Works" />
        <h2 className="section-title font-heading font-semibold text-brand-ink mt-6 max-w-2xl">
          From first call to finished work.
        </h2>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border-subtle" aria-hidden="true" />
          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative flex md:flex-col gap-4 md:gap-0">
                <div className="relative shrink-0">
                  <span className="hidden md:flex w-12 h-12 rounded-full bg-surface-main border-2 border-brand-primary text-brand-primary font-heading font-semibold items-center justify-center relative z-10">
                    {step.number}
                  </span>
                  <span className="md:hidden section-marker text-brand-primary">{step.number}</span>
                </div>
                <div className="md:mt-6">
                  <h3 className="font-heading font-semibold text-lg text-brand-ink">{step.title}</h3>
                  <p className="text-sm text-text-secondary mt-2 max-w-[220px]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
