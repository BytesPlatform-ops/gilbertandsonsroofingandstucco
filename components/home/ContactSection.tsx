import SectionMarker from "@/components/shared/SectionMarker";
import ContactForm from "@/components/shared/ContactForm";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import { siteConfig } from "@/lib/site-config";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-surface-main scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <RevealOnScroll>
          <SectionMarker number="10" label="Contact" />
        </RevealOnScroll>

        <div className="mt-10 grid lg:grid-cols-2 gap-16">
          <RevealOnScroll direction="left">
            <div>
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
                  className="text-2xl font-heading font-semibold text-brand-ink hover:text-brand-primary"
                >
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="text-text-secondary hover:text-brand-ink">
                  {siteConfig.email}
                </a>
                <p className="text-text-secondary">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delayMs={120}>
            <ContactForm />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
