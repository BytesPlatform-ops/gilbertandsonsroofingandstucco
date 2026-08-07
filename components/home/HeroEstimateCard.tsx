import ContactForm from "@/components/shared/ContactForm";

export default function HeroEstimateCard({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-surface-main rounded-md shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] border-t-4 border-brand-primary p-6 md:p-7 ${className}`}>
      <h2 className="text-xl font-heading font-semibold text-brand-ink">Get a Free Estimate</h2>
      <p className="text-sm text-text-secondary mt-1 mb-5">
        Tell us what&rsquo;s going on — we&rsquo;ll get back to you.
      </p>
      <ContactForm />
    </div>
  );
}
