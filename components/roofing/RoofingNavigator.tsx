"use client";

import { useState } from "react";
import Link from "next/link";
import SafeMedia from "@/components/shared/SafeMedia";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import { roofingServices } from "@/lib/roofing-services";
import { roofingServiceContent } from "@/lib/roofing-service-content";

export default function RoofingNavigator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = roofingServices[activeIndex];
  const activeContent = roofingServiceContent[active.slug];

  return (
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
      <RevealOnScroll direction="left">
        <ul className="hidden lg:flex flex-col border-t border-border-subtle">
          {roofingServices.map((service, index) => (
            <li key={service.slug} className="border-b border-border-subtle">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group w-full flex items-center gap-5 py-5 text-left transition-colors ${
                  index === activeIndex ? "text-brand-ink" : "text-text-secondary hover:text-brand-ink"
                }`}
              >
                <span className="section-marker w-8 shrink-0">{String(index + 1).padStart(2, "0")}</span>
                <span
                  className={`font-heading font-semibold text-xl uppercase tracking-[0.01em] transition-transform duration-[280ms] ease-out ${
                    index === activeIndex ? "translate-x-2" : "group-hover:translate-x-2"
                  }`}
                >
                  {service.shortTitle}
                </span>
                <span
                  className={`ml-auto w-2 h-2 bg-brand-primary shrink-0 transition-opacity duration-200 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
        </ul>
      </RevealOnScroll>

      <RevealOnScroll direction="image" delayMs={150} className="hidden lg:block relative">
        <div className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-feature)] border-2 border-brand-ink shadow-brutal-sm">
          <SafeMedia
            src={activeContent.heroImage}
            alt={active.title}
            fill
            rounded={false}
            className="transition-transform duration-500 group-hover:scale-[1.035]"
          />
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-heading font-semibold text-brand-ink">{active.title}</h3>
          <p className="text-text-secondary mt-3 max-w-xl">{active.description}</p>
          <Link
            href={active.href}
            className="group/link inline-flex items-center gap-1.5 mt-5 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary hover:text-brand-primary-dark"
          >
            Explore {active.shortTitle}
            <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
          </Link>
        </div>
      </RevealOnScroll>

      <div className="lg:hidden flex flex-col divide-y divide-border-subtle border-t border-b border-border-subtle">
        {roofingServices.map((service, index) => (
          <details key={service.slug} open={index === 0} className="group">
            <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
              <span className="flex items-center gap-4">
                <span className="section-marker w-8 shrink-0">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-heading font-semibold text-lg uppercase">{service.shortTitle}</span>
              </span>
              <span className="text-xl group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="pb-6 pl-12">
              <p className="text-sm text-text-secondary mb-4">{service.description}</p>
              <Link
                href={service.href}
                className="text-sm font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary"
              >
                Explore {service.shortTitle} →
              </Link>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
