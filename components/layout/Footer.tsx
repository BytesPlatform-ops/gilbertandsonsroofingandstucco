import Image from "next/image";
import Link from "next/link";
import { primaryNav, siteConfig, supportingServices } from "@/lib/site-config";
import { roofingServices } from "@/lib/roofing-services";
import CTAButton from "@/components/shared/CTAButton";
import EstimateButton from "@/components/estimate/EstimateButton";

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-text-on-dark">
      <div className="relative overflow-hidden border-b border-border-on-dark">
        <svg
          className="absolute inset-x-0 -top-px w-full h-6 text-surface-main"
          viewBox="0 0 1440 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline points="0,24 720,0 1440,24" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
        </svg>

        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28 text-center">
          <p className="section-marker text-text-on-dark-secondary mb-6">Contact</p>
          <h2 className="section-title font-heading font-semibold text-text-on-dark max-w-3xl mx-auto">
            Get a free estimate today.
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <EstimateButton variant="primary" showArrow>
              Get a Free Estimate
            </EstimateButton>
            <CTAButton href={siteConfig.phoneHref} variant="secondary-dark">
              Call {siteConfig.phone}
            </CTAButton>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2">
          <Image
            src="/brand/logo-mark-white.png"
            alt="Gilbert & Sons Roofing & Stucco Inc."
            width={220}
            height={127}
            className="h-16 w-auto mb-5"
          />
          <p className="text-sm text-text-on-dark-secondary max-w-xs leading-relaxed">
            Licensed, insured and bonded roofing and stucco contractor serving
            Las Cruces and Doña Ana County since {siteConfig.established}.
          </p>
          <a
            href={siteConfig.social.facebook}
            className="inline-block mt-5 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-text-on-dark-secondary hover:text-text-on-dark hover:underline underline-offset-4 transition-colors duration-150"
          >
            Facebook
          </a>
        </div>

        <div>
          <h3 className="section-marker text-text-on-dark mb-5">Navigation</h3>
          <ul className="flex flex-col gap-3">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="group relative inline-block text-sm text-text-on-dark-secondary hover:text-text-on-dark transition-colors">
                  {item.label}
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-transparent transition-colors duration-150 ease-out group-hover:bg-brand-primary" />
                </Link>
              </li>
            ))}
            {supportingServices.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="group relative inline-block text-sm text-text-on-dark-secondary hover:text-text-on-dark transition-colors">
                  {item.label}
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-transparent transition-colors duration-150 ease-out group-hover:bg-brand-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="section-marker text-text-on-dark mb-5">Roofing</h3>
          <ul className="flex flex-col gap-3">
            {roofingServices.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={service.href} className="group relative inline-block text-sm text-text-on-dark-secondary hover:text-text-on-dark transition-colors">
                  {service.shortTitle}
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-transparent transition-colors duration-150 ease-out group-hover:bg-brand-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border-on-dark">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-on-dark-secondary">
          <p>
            {siteConfig.address.line1}, {siteConfig.address.line2} · {siteConfig.phone} ·{" "}
            {siteConfig.email}
          </p>
          <p>© {new Date().getFullYear()} Gilbert &amp; Sons Roofing and Stucco Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
