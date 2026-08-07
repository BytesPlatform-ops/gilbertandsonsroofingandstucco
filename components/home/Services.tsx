"use client";

import { useState } from "react";
import Link from "next/link";
import SafeMedia from "@/components/shared/SafeMedia";
import SectionMarker from "@/components/shared/SectionMarker";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import { coreServices } from "@/lib/core-services";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = coreServices[activeIndex];

  return (
    <section className="bg-surface-main">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <RevealOnScroll>
          <SectionMarker number="02" label="What We Do" />
          <h2 className="section-title font-heading font-semibold text-brand-ink mt-6 max-w-2xl">
            Five trades. One crew you can count on.
          </h2>
        </RevealOnScroll>

        <div className="hidden lg:grid grid-cols-[minmax(0,340px)_1fr] gap-16 mt-16">
          <RevealOnScroll direction="left" delayMs={100}>
            <ul className="flex flex-col border-t border-border-subtle">
              {coreServices.map((service, index) => (
                <li key={service.slug} className="border-b border-border-subtle">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`group w-full flex items-center gap-5 py-6 text-left transition-colors ${
                      index === activeIndex ? "text-brand-ink" : "text-text-secondary hover:text-brand-ink"
                    }`}
                  >
                    <span className="section-marker w-8 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-heading font-semibold text-2xl uppercase tracking-[0.01em] transition-transform duration-[280ms] ease-out ${
                        index === activeIndex ? "translate-x-2" : "group-hover:translate-x-2"
                      }`}
                    >
                      {service.title}
                    </span>
                    <span
                      className={`ml-auto h-px bg-brand-primary transition-all duration-300 ${
                        index === activeIndex ? "w-8" : "w-0 group-hover:w-8"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll direction="image" delayMs={200} className="grid grid-cols-2 gap-10 items-center">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-feature)] border-2 border-brand-ink shadow-brutal-sm">
              <SafeMedia
                src={active.image}
                alt={active.title}
                fill
                rounded={false}
                className="transition-transform duration-500 group-hover:scale-[1.035]"
              />
            </div>
            <div>
              <span className="section-marker text-text-secondary">
                {String(activeIndex + 1).padStart(2, "0")} / {String(coreServices.length).padStart(2, "0")}
              </span>
              <h3 className="text-3xl font-heading font-semibold text-brand-ink mt-3">{active.title}</h3>
              <p className="text-text-secondary mt-4">{active.description}</p>
              <ul className="mt-6 flex flex-col gap-2">
                {active.items.map((item) => (
                  <li key={item} className="text-sm text-brand-ink border-b border-border-subtle pb-2">
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={active.href}
                className="group/link inline-flex items-center gap-2 mt-6 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary hover:text-brand-primary-dark"
              >
                {active.cta}
                <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>

        <div className="lg:hidden flex flex-col gap-10 mt-12">
          {coreServices.map((service, index) => (
            <RevealOnScroll key={service.slug} delayMs={index * 90}>
              <div className="border-t border-border-subtle pt-8">
                <span className="section-marker text-text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-heading font-semibold text-brand-ink mt-2">{service.title}</h3>
                {service.image && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-feature)] mt-4">
                    <SafeMedia src={service.image} alt={service.title} fill rounded={false} />
                  </div>
                )}
                <p className="text-text-secondary mt-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-block mt-4 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary"
                >
                  {service.cta} →
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
