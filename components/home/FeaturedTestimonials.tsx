"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionMarker from "@/components/shared/SectionMarker";
import EstimateButton from "@/components/estimate/EstimateButton";
import { siteConfig } from "@/lib/site-config";
import type { Testimonial } from "@/lib/testimonials";

const avatarTones = ["bg-brand-primary", "bg-white/20", "bg-[#6b5f4f]"];
const CARD_WIDTH = 380;
const AUTO_ROTATE_MS = 1500;

function StarRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2L4.6 17.8l1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, tone }: { testimonial: Testimonial; tone: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.quote.length > 180;
  const displayText = expanded || !isLong ? testimonial.quote : `${testimonial.quote.slice(0, 180).trimEnd()}…`;

  return (
    <div
      className="shrink-0 snap-start bg-surface-dark-raised border-2 border-white/10 rounded-md p-6 flex flex-col transition-colors duration-150 hover:border-brand-primary"
      style={{ width: CARD_WIDTH }}
    >
      <div className="flex items-center gap-3">
        <span
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-semibold shrink-0 ${tone}`}
          aria-hidden="true"
        >
          {testimonial.name.charAt(0)}
        </span>
        <span className="font-heading font-semibold text-text-on-dark">{testimonial.name}</span>
      </div>
      <StarRow className="text-brand-primary mt-3" />
      <p className="text-sm text-text-on-dark-secondary leading-relaxed mt-3 flex-1">{displayText}</p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary cursor-pointer transition-colors duration-150 hover:text-white self-start"
        >
          {expanded ? "Show less" : "Read more"}
          <span aria-hidden="true">→</span>
        </button>
      )}
    </div>
  );
}

export default function FeaturedTestimonials({
  items,
  number = "09",
  label = "Customer Stories",
}: {
  items: Testimonial[];
  number?: string;
  label?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // Bumped on manual navigation so the timer restarts from that click.
  const [timerKey, setTimerKey] = useState(0);
  const count = items.length;

  // Drive the scroller off activeIndex so the visible card, its name and
  // its quote always move together.
  useEffect(() => {
    const el = scrollerRef.current;
    const card = el?.children[activeIndex] as HTMLElement | undefined;
    if (!el || !card) return;
    el.scrollLeft = card.offsetLeft - el.offsetLeft;
  }, [activeIndex]);

  useEffect(() => {
    if (count < 2) return;
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, AUTO_ROTATE_MS);
    return () => window.clearInterval(intervalId);
  }, [count, timerKey]);

  const step = (dir: 1 | -1) => {
    setActiveIndex((prev) => (prev + dir + count) % count);
    setTimerKey((key) => key + 1);
  };

  return (
    <section className="relative bg-brand-dark min-h-[85svh] lg:min-h-[92svh] flex items-center border-y border-border-on-dark">
      <div className="mx-auto max-w-[1400px] w-full px-5 md:px-8 py-20 lg:py-0">
        <SectionMarker number={number} label={label} tone="dark" />

        <h2 className="hero-title font-heading font-semibold uppercase text-text-on-dark mt-6 mb-14">
          What people
          <br />
          are saying.
        </h2>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          <div className="border-2 border-white/15 rounded-md p-6 bg-surface-dark-raised">
            <Image
              src="/brand/logo-mark-white.png"
              alt="Gilbert & Sons Roofing & Stucco Inc."
              width={160}
              height={92}
              className="h-12 w-auto mb-4"
            />
            <h3 className="font-heading font-semibold text-lg text-text-on-dark">Gilbert &amp; Sons</h3>
            <p className="text-sm text-text-on-dark-secondary mt-1">Roofing &amp; Stucco Contractor</p>
            <div className="mt-5 flex flex-col gap-2 text-xs font-heading font-semibold uppercase tracking-[0.03em] text-text-on-dark-secondary border-t border-white/10 pt-5">
              <span>Licensed · Insured · Bonded</span>
              <span>BBB Member</span>
              <span>Serving Las Cruces since {siteConfig.established}</span>
            </div>
            <EstimateButton variant="primary" className="mt-6 w-full justify-center">
              Get a Free Estimate
            </EstimateButton>
          </div>

          <div className="min-w-0">
            <div
              ref={scrollerRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
            >
              {items.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  tone={avatarTones[index % avatarTones.length]}
                />
              ))}
            </div>
            <div className="flex gap-2 mt-6">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => step(-1)}
                className="w-11 h-11 flex items-center justify-center border-2 border-white/25 text-white cursor-pointer transition-colors duration-150 hover:bg-white hover:text-brand-ink hover:border-white"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => step(1)}
                className="w-11 h-11 flex items-center justify-center border-2 border-white/25 text-white cursor-pointer transition-colors duration-150 hover:bg-white hover:text-brand-ink hover:border-white"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
