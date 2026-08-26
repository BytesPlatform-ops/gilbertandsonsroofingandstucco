"use client";

import { useState } from "react";
import Link from "next/link";
import SafeMedia from "@/components/shared/SafeMedia";
import BeforeAfterSlider from "@/components/shared/BeforeAfterSlider";
import EstimateButton from "@/components/estimate/EstimateButton";

const ctaClass =
  "inline-flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary cursor-pointer transition-colors duration-150 hover:text-brand-primary-dark hover:underline underline-offset-4";

export type ExplorerOption = {
  key: string;
  label: string;
  image: string | null;
  heading: string;
  body: string;
  note?: string;
  /** Renders a draggable before/after slider instead of `image` — pass null srcs for placeholders. */
  beforeAfter?: {
    before: string | null;
    after: string | null;
    beforeAlt?: string;
    afterAlt?: string;
  };
};

export default function OptionExplorer({
  options,
  ctaLabel,
  ctaHref,
  hoverPreview = true,
}: {
  options: ExplorerOption[];
  ctaLabel?: string;
  ctaHref?: string;
  hoverPreview?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = options[activeIndex];

  return (
    <div className="grid md:grid-cols-[minmax(0,280px)_1fr] gap-8 md:gap-12 items-start">
      <div className="flex flex-wrap md:flex-col gap-2 md:gap-0 md:border-t md:border-border-subtle">
        {options.map((option, index) => (
          <button
            key={option.key}
            type="button"
            onClick={() => setActiveIndex(index)}
            onMouseEnter={hoverPreview ? () => setActiveIndex(index) : undefined}
            aria-pressed={index === activeIndex}
            className={`group min-h-[44px] px-4 md:px-3 md:py-4 md:border-b md:border-border-subtle text-left border cursor-pointer transition-colors duration-150 ${
              index === activeIndex
                ? "bg-brand-ink text-white md:bg-surface-subtle md:text-brand-ink md:border-transparent md:border-b-border-subtle"
                : "border-border-subtle text-text-secondary hover:bg-surface-subtle hover:text-brand-ink md:border-transparent md:border-b-border-subtle"
            }`}
          >
            <span className="inline-flex items-center gap-2 font-heading font-semibold text-sm md:text-base uppercase tracking-[0.02em]">
              <span
                className={`hidden md:inline-block w-1.5 h-1.5 shrink-0 transition-colors duration-150 ${
                  index === activeIndex
                    ? "bg-brand-primary"
                    : "bg-transparent group-hover:bg-brand-primary"
                }`}
                aria-hidden="true"
              />
              {option.label}
            </span>
          </button>
        ))}
      </div>

      <div>
        {active.beforeAfter ? (
          <div className="mb-6">
            <BeforeAfterSlider
              beforeSrc={active.beforeAfter.before}
              afterSrc={active.beforeAfter.after}
              beforeAlt={active.beforeAfter.beforeAlt ?? `${active.heading} — before`}
              afterAlt={active.beforeAfter.afterAlt ?? `${active.heading} — after`}
            />
          </div>
        ) : (
          active.image && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-feature)] border-2 border-brand-ink shadow-brutal-sm mb-6">
              <SafeMedia src={active.image} alt={active.heading} fill rounded={false} />
            </div>
          )
        )}
        <h3 className="text-2xl font-heading font-semibold text-brand-ink">{active.heading}</h3>
        <p className="text-text-secondary mt-3 max-w-xl">{active.body}</p>
        {active.note && (
          <p className="text-sm text-brand-primary font-medium mt-4 border-l-2 border-brand-primary pl-3">
            {active.note}
          </p>
        )}
        {ctaLabel &&
          (ctaHref ? (
            <Link href={ctaHref} className={`mt-6 ${ctaClass}`}>
              {ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          ) : (
            // No href means "start an estimate" — routes to the shared modal.
            <EstimateButton unstyled showArrow className={`mt-6 ${ctaClass}`}>
              {ctaLabel}
            </EstimateButton>
          ))}
      </div>
    </div>
  );
}
