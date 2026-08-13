import SectionMarker from "@/components/shared/SectionMarker";
import ContactForm from "@/components/shared/ContactForm";
import FadeIn from "@/components/shared/FadeIn";
import { siteConfig } from "@/lib/site-config";

export default function ContactSection() {
  return (
    // scroll-mt clears the fixed top bar + header when linked to as /#contact.
    <section id="contact" className="bg-surface-main scroll-mt-[92px] md:scroll-mt-[132px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <SectionMarker number="10" label="Contact" />
        </FadeIn>

        <div className="mt-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] gap-12 lg:gap-16">
          <FadeIn>
            <h2 className="section-title font-heading font-semibold text-brand-ink max-w-lg">
              Let&rsquo;s take a look at your property.
            </h2>
            <p className="body-large text-text-secondary mt-6 max-w-md">
              Tell us what&rsquo;s going on and we&rsquo;ll get back to you with next
              steps. For anything urgent, call us directly.
            </p>

            <div className="mt-10 flex flex-col gap-4 border-t border-border-subtle pt-8">
              <a
                href={siteConfig.phoneHref}
                className="text-2xl font-heading font-semibold text-brand-ink transition-colors duration-150 hover:text-brand-primary"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-text-secondary transition-colors duration-150 hover:text-brand-ink hover:underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
              <p className="text-text-secondary">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100} className="min-w-0">
            <ContactForm size="large" idPrefix="contact-section" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
