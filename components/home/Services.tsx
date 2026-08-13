"use client";

import { useState } from "react";
import Link from "next/link";
import SafeMedia from "@/components/shared/SafeMedia";
import SectionMarker from "@/components/shared/SectionMarker";
import EstimateButton from "@/components/estimate/EstimateButton";
import FadeIn from "@/components/shared/FadeIn";
import { coreServices } from "@/lib/core-services";

const linkClass =
  "inline-flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary cursor-pointer transition-colors duration-150 hover:text-brand-primary-dark hover:underline underline-offset-4";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = coreServices[activeIndex];

  return (
    <section className="bg-surface-main">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <SectionMarker number="02" label="What We Do" />
          <h2 className="section-title font-heading font-semibold text-brand-ink mt-6 max-w-2xl">
            Roofing and stucco first. Painting and plastering when a job calls for it.
          </h2>
        </FadeIn>

        <FadeIn delay={100} className="hidden lg:grid grid-cols-[minmax(0,340px)_1fr] gap-16 mt-16">
          <ul className="flex flex-col border-t border-border-subtle">
            {coreServices.map((service, index) => (
              <li key={service.slug} className="border-b border-border-subtle">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group w-full flex items-center gap-5 px-3 py-6 text-left cursor-pointer transition-colors duration-150 ${
                    index === activeIndex
                      ? "bg-surface-subtle text-brand-ink"
                      : "text-text-secondary hover:bg-surface-subtle hover:text-brand-ink"
                  }`}
                >
                  <span className="section-marker w-8 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading font-semibold text-2xl uppercase tracking-[0.01em]">
                    {service.title}
                  </span>
                  <span
                    className={`ml-auto h-0.5 w-8 transition-colors duration-150 ${
                      index === activeIndex
                        ? "bg-brand-primary"
                        : "bg-transparent group-hover:bg-brand-primary"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-10 items-center">
            {active.href ? (
              <Link
                href={active.href}
                aria-label={active.cta}
                className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-feature)] border-2 border-brand-ink shadow-brutal-sm block group"
              >
                <SafeMedia src={active.image} alt={active.title} fill rounded={false} />
              </Link>
            ) : (
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-feature)] border-2 border-brand-ink shadow-brutal-sm">
                <SafeMedia src={active.image} alt={active.title} fill rounded={false} />
              </div>
            )}
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
              <div className="mt-6">
                {active.href ? (
                  <Link href={active.href} className={linkClass}>
                    {active.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <EstimateButton unstyled showArrow className={linkClass}>
                    {active.cta}
                  </EstimateButton>
                )}
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="lg:hidden flex flex-col gap-10 mt-12">
          {coreServices.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 70} className="border-t border-border-subtle pt-8">
              <span className="section-marker text-text-secondary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-heading font-semibold text-brand-ink mt-2">{service.title}</h3>
              {service.href ? (
                <Link
                  href={service.href}
                  aria-label={service.cta}
                  className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-feature)] mt-4 block"
                >
                  <SafeMedia src={service.image} alt={service.title} fill rounded={false} />
                </Link>
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-feature)] mt-4">
                  <SafeMedia src={service.image} alt={service.title} fill rounded={false} />
                </div>
              )}
              <p className="text-text-secondary mt-4">{service.description}</p>
              <div className="mt-4">
                {service.href ? (
                  <Link href={service.href} className={linkClass}>
                    {service.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <EstimateButton unstyled showArrow className={linkClass}>
                    {service.cta}
                  </EstimateButton>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
