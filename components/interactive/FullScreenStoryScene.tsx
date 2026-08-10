"use client";

import { useEffect, useState, type ReactNode } from "react";
import SafeMedia from "@/components/shared/SafeMedia";
import SectionMarker from "@/components/shared/SectionMarker";
import type { StoryMediaItem } from "@/lib/site-media";

const AUTO_ROTATE_MS = 1500;

type Tone = "dark" | "brand";

function StoryMedia({
  item,
  isActive,
  priority,
}: {
  item: StoryMediaItem;
  isActive: boolean;
  priority?: boolean;
}) {
  if (isActive && item.mediaType === "video" && item.videoUrl) {
    return (
      <SafeMedia
        type="video"
        videoUrl={item.videoUrl}
        src={item.posterUrl}
        alt={item.title}
        fill
        rounded={false}
        playVideo
        objectPosition={item.objectPosition}
      />
    );
  }
  return (
    <SafeMedia
      src={item.imageUrl ?? item.posterUrl}
      alt={item.title}
      fill
      rounded={false}
      priority={priority}
      objectPosition={item.objectPosition}
    />
  );
}

/**
 * Layered project stack. The fan-out offsets are static layout values —
 * cards swap instantly on click. No autoplay, drag or transition.
 */
export default function FullScreenStoryScene({
  number,
  label,
  heading,
  backgroundWord,
  stories,
  tone = "dark",
}: {
  number: string;
  label: string;
  heading: ReactNode;
  backgroundWord: string;
  stories: StoryMediaItem[];
  tone?: Tone;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  // Bumped on every manual interaction so the auto-rotate timer restarts
  // from that moment instead of firing immediately after a click.
  const [timerKey, setTimerKey] = useState(0);
  const count = stories.length;
  const active = stories[activeIndex];

  const go = (delta: number) => {
    setActiveIndex((prev) => (prev + delta + count) % count);
    setTimerKey((key) => key + 1);
  };

  const goTo = (index: number) => {
    setActiveIndex(index);
    setTimerKey((key) => key + 1);
  };

  // The image, title, description and counter all read from activeIndex,
  // so they can never fall out of sync.
  useEffect(() => {
    if (count < 2) return;
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, AUTO_ROTATE_MS);
    return () => window.clearInterval(intervalId);
  }, [count, timerKey]);

  const bgClass = tone === "dark" ? "bg-brand-dark" : "bg-brand-primary";
  const textOnClass = tone === "dark" ? "text-text-on-dark" : "text-white";
  const textOnSecondaryClass = tone === "dark" ? "text-text-on-dark-secondary" : "text-white/70";
  const borderOnClass = tone === "dark" ? "border-white/15" : "border-white/25";

  return (
    <section className={`relative overflow-hidden ${bgClass} min-h-[85svh] lg:min-h-[92svh] flex items-center`}>
      <p
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-heading font-semibold uppercase whitespace-nowrap text-white"
        style={{
          fontSize: "clamp(3.5rem, 11vw, 11rem)",
          letterSpacing: "-0.02em",
          opacity: tone === "dark" ? 0.05 : 0.08,
        }}
      >
        {backgroundWord}
      </p>

      <div className="relative z-10 mx-auto max-w-[1500px] w-full px-5 md:px-8 py-20 md:py-0">
        <div className="grid lg:grid-cols-[300px_1fr_320px] gap-10 lg:gap-8 items-center">
          <div>
            <SectionMarker number={number} label={label} tone="dark" />
            <h2 className={`text-4xl md:text-5xl font-heading font-semibold uppercase mt-6 leading-[0.95] ${textOnClass}`}>
              {heading}
            </h2>
          </div>

          {/* Desktop layered stack */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-[520px] aspect-[4/5]">
              {stories.map((story, i) => {
                const raw = i - activeIndex;
                const half = Math.floor(count / 2);
                const pos = ((raw + half + count) % count) - half;
                if (pos !== 0 && pos !== 1 && pos !== -1) return null;
                const isActive = pos === 0;

                return (
                  <button
                    key={story.id}
                    type="button"
                    aria-label={isActive ? undefined : `Show ${story.title}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => {
                      if (!isActive) goTo(i);
                    }}
                    className={`absolute inset-0 m-auto rounded-[16px] overflow-hidden border-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] transition-colors duration-150 ${
                      isActive
                        ? "border-white cursor-default"
                        : "border-white/30 cursor-pointer hover:border-white"
                    }`}
                    style={{
                      transform: `translateX(${pos * 70}px) rotate(${pos * -5}deg) scale(${isActive ? 1 : 0.94})`,
                      zIndex: isActive ? 30 : 10,
                    }}
                  >
                    <StoryMedia item={story} isActive={isActive} priority={isActive} />
                    {!isActive && <div className="absolute inset-0 bg-brand-dark/35" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile / tablet: single active card */}
          <div className="lg:hidden relative aspect-[4/5] max-w-[420px] mx-auto w-full rounded-[16px] overflow-hidden border-2 border-white/25">
            <StoryMedia item={active} isActive priority />
          </div>

          <div className="text-center lg:text-left">
            <h3 className={`text-xl font-heading font-semibold ${textOnClass}`}>{active.title}</h3>
            <p className={`mt-3 leading-relaxed ${textOnSecondaryClass}`}>{active.description}</p>
            <p className={`mt-6 text-xs font-heading font-semibold uppercase tracking-[0.04em] ${textOnSecondaryClass}`}>
              {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")} — {active.meta}
            </p>

            <div className="flex justify-center lg:justify-start gap-2 mt-6">
              <button
                type="button"
                aria-label="Previous story"
                onClick={() => go(-1)}
                className={`w-11 h-11 flex items-center justify-center border-2 ${borderOnClass} ${textOnClass} cursor-pointer transition-colors duration-150 hover:bg-white hover:text-brand-ink hover:border-white`}
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next story"
                onClick={() => go(1)}
                className={`w-11 h-11 flex items-center justify-center border-2 ${borderOnClass} ${textOnClass} cursor-pointer transition-colors duration-150 hover:bg-white hover:text-brand-ink hover:border-white`}
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
