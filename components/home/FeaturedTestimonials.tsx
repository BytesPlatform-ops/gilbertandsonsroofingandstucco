"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionMarker from "@/components/shared/SectionMarker";
import EstimateButton from "@/components/estimate/EstimateButton";
import FadeIn from "@/components/shared/FadeIn";
import { siteConfig } from "@/lib/site-config";
import { mediaSettings } from "@/lib/site-media";
import type { Testimonial } from "@/lib/testimonials";

const avatarTones = ["bg-brand-primary", "bg-brand-ink", "bg-[#6b5f4f]"];
const CARD_WIDTH = 380;
const CARD_GAP = 20; // must match the `gap-5` on the track
const SLIDE_MS = 650;
const SLIDE_EASING = "cubic-bezier(0.32, 0.72, 0, 1)";
const DRAG_THRESHOLD = 60;

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
      className="shrink-0 bg-[#faf7f2] border-2 border-brand-ink/10 rounded-md p-6 flex flex-col transition-colors duration-150 hover:border-brand-primary"
      style={{ width: `min(${CARD_WIDTH}px, 82vw)` }}
    >
      <div className="flex items-center gap-3">
        <span
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-semibold shrink-0 ${tone}`}
          aria-hidden="true"
        >
          {testimonial.name.charAt(0)}
        </span>
        <span className="font-heading font-semibold text-brand-ink">{testimonial.name}</span>
      </div>
      <StarRow className="text-brand-primary mt-3" />
      <p className="text-sm text-text-secondary leading-relaxed mt-3 flex-1">{displayText}</p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary cursor-pointer transition-colors duration-150 hover:text-brand-primary-dark hover:underline underline-offset-4 self-start"
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
  const count = items.length;
  const trackRef = useRef<HTMLDivElement>(null);

  // `index` runs past `count` so the track can slide forward into the cloned
  // copies, then silently reset to the equivalent real slide.
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [stride, setStride] = useState(CARD_WIDTH + CARD_GAP);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  // Bumped on manual navigation so the timer restarts from that interaction.
  const [timerKey, setTimerKey] = useState(0);

  // Three copies give enough runway that wide viewports showing two or three
  // cards at once never reveal the end of the track mid-transition.
  const slides = count > 1 ? [...items, ...items, ...items] : items;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  // Measure the real card pitch so the translate math survives the responsive
  // `min(380px, 82vw)` card width.
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const first = track?.children[0] as HTMLElement | undefined;
      const second = track?.children[1] as HTMLElement | undefined;
      if (first && second) setStride(second.offsetLeft - first.offsetLeft);
      else if (first) setStride(first.offsetWidth + CARD_GAP);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [count]);

  const indexRef = useRef(0);
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (count < 2) return;
      setTimerKey((key) => key + 1);
      if (dir === 1 || indexRef.current > 0) {
        setIndex((prev) => prev + dir);
        return;
      }
      // Going back from the first slide: jump forward one full set with the
      // transition off, then animate backwards from there two frames later,
      // once `animate` has been restored.
      setAnimate(false);
      setIndex(count);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIndex(count - 1));
      });
    },
    [count],
  );

  useEffect(() => {
    if (count < 2 || paused || reducedMotion) return;
    const intervalId = window.setInterval(
      () => setIndex((prev) => prev + 1),
      mediaSettings.testimonialSlider.autoplayMs,
    );
    return () => window.clearInterval(intervalId);
  }, [count, timerKey, paused, reducedMotion]);

  // Once the slide into the cloned set finishes, snap back to the matching
  // real slide with the transition off — visually identical, so it reads as a
  // continuous loop.
  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    if (index >= count) {
      setAnimate(false);
      setIndex(index % count);
    }
  };

  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (count < 2 || event.pointerType === "mouse") return;
    dragStartX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    setPaused(true);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    setDragOffset(event.clientX - dragStartX.current);
  };

  const endDrag = () => {
    if (dragStartX.current === null) return;
    const offset = dragOffset;
    dragStartX.current = null;
    setIsDragging(false);
    setDragOffset(0);
    setPaused(false);
    if (Math.abs(offset) > DRAG_THRESHOLD) step(offset < 0 ? 1 : -1);
  };

  const activeDot = ((index % count) + count) % count;
  const transitionOff = !animate || isDragging || reducedMotion;

  return (
    <section className="relative bg-brand-dark min-h-[85svh] lg:min-h-[92svh] flex items-center border-y border-border-on-dark">
      <div className="mx-auto max-w-[1400px] w-full px-5 md:px-8 py-20 lg:py-0">
        <FadeIn>
          <SectionMarker number={number} label={label} tone="dark" />

          <h2 className="hero-title font-heading font-semibold uppercase text-text-on-dark mt-6 mb-14">
            What people
            <br />
            are saying.
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          <FadeIn className="border-2 border-white/15 rounded-md p-6 bg-surface-dark-raised">
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
              <span>{new Date().getFullYear() - siteConfig.established}+ Years in the Industry</span>
              <span>Licensed · Insured · Bonded</span>
              <span className="flex items-center gap-2 normal-case tracking-normal">
                <Image
                  src="/bbb.webp"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full bg-white object-contain p-0.5 shrink-0"
                />
                <span className="uppercase tracking-[0.03em]">BBB Accredited Business</span>
              </span>
              <span>Serving Las Cruces since {siteConfig.established}</span>
              <span>{siteConfig.contractorLicense}</span>
            </div>
            <EstimateButton variant="primary" className="mt-6 w-full justify-center">
              Get a Free Estimate
            </EstimateButton>
          </FadeIn>

          <div className="min-w-0">
            <div
              className="overflow-hidden pb-2 touch-pan-y"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={() => setPaused(false)}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              aria-roledescription="carousel"
              aria-label="Customer testimonials"
            >
              <div
                ref={trackRef}
                className="flex gap-5 will-change-transform"
                onTransitionEnd={handleTransitionEnd}
                style={{
                  transform: `translate3d(${-(index * stride) + dragOffset}px, 0, 0)`,
                  transition: transitionOff ? "none" : `transform ${SLIDE_MS}ms ${SLIDE_EASING}`,
                }}
              >
                {slides.map((testimonial, slideIndex) => (
                  <TestimonialCard
                    key={`${testimonial.name}-${slideIndex}`}
                    testimonial={testimonial}
                    tone={avatarTones[slideIndex % count % avatarTones.length]}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <div className="flex gap-2">
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

              <div className="flex gap-2">
                {items.map((testimonial, dotIndex) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Go to testimonial ${dotIndex + 1}`}
                    aria-current={dotIndex === activeDot}
                    onClick={() => {
                      setIndex(dotIndex);
                      setTimerKey((key) => key + 1);
                    }}
                    className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                      dotIndex === activeDot ? "w-7 bg-brand-primary" : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
