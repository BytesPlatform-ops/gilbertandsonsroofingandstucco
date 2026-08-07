"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, MotionConfig, AnimatePresence, useReducedMotion, type PanInfo } from "framer-motion";
import SafeMedia from "@/components/shared/SafeMedia";
import SectionMarker from "@/components/shared/SectionMarker";
import { mediaSettings, type StoryMediaItem } from "@/lib/site-media";

type Tone = "dark" | "brand";

const SPRING = { type: "spring" as const, stiffness: 240, damping: 30 };
const EASE = [0.22, 1, 0.36, 1] as const;

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

function StoryInner({
  number,
  label,
  heading,
  backgroundWord,
  stories,
  tone = "dark",
  autoplay,
  autoplayMs,
}: {
  number: string;
  label: string;
  heading: ReactNode;
  backgroundWord: string;
  stories: StoryMediaItem[];
  tone?: Tone;
  autoplay?: boolean;
  autoplayMs?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [entered, setEntered] = useState(false);
  const [stackHovered, setStackHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const count = stories.length;
  const active = stories[activeIndex];
  const reducedMotion = useReducedMotion();

  const autoplayEnabled = autoplay ?? mediaSettings.projectStory.autoplay;
  const interval = autoplayMs ?? mediaSettings.projectStory.autoplayMs;
  const startDelay = mediaSettings.projectStory.startDelayMs;

  const resumeAtRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);

  useEffect(() => {
    pausedRef.current = stackHovered;
  }, [stackHovered]);

  useEffect(() => {
    draggingRef.current = dragging;
  }, [dragging]);

  const go = (delta: number) => {
    setActiveIndex((prev) => (prev + delta + count) % count);
  };

  const registerInteraction = () => {
    resumeAtRef.current = Date.now() + 9000;
  };

  useEffect(() => {
    if (!autoplayEnabled || reducedMotion || count < 2) return;
    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      const tick = () => {
        if (pausedRef.current || draggingRef.current) return;
        if (Date.now() < resumeAtRef.current) return;
        if (document.hidden) return;
        setActiveIndex((prev) => (prev + 1) % count);
      };
      tick();
      intervalId = window.setInterval(tick, interval);
    }, startDelay);
    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [autoplayEnabled, reducedMotion, interval, startDelay, count]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    setDragging(false);
    registerInteraction();
    if (info.offset.x < -60 || info.velocity.x < -400) go(1);
    else if (info.offset.x > 60 || info.velocity.x > 400) go(-1);
  };

  const bgClass = tone === "dark" ? "bg-brand-dark" : "bg-brand-primary";
  const textOnClass = tone === "dark" ? "text-text-on-dark" : "text-white";
  const textOnSecondaryClass = tone === "dark" ? "text-text-on-dark-secondary" : "text-white/70";
  const borderOnClass = tone === "dark" ? "border-white/15" : "border-white/25";

  return (
    <section className={`relative overflow-hidden ${bgClass} min-h-[85svh] lg:min-h-[92svh] flex items-center`}>
      <p
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-heading font-semibold uppercase whitespace-nowrap text-white"
        style={{ fontSize: "clamp(3.5rem, 11vw, 11rem)", letterSpacing: "-0.02em", opacity: tone === "dark" ? 0.05 : 0.08 }}
      >
        {backgroundWord}
      </p>

      <div className="relative z-10 mx-auto max-w-[1500px] w-full px-5 md:px-8 py-20 md:py-0">
        <div className="grid lg:grid-cols-[300px_1fr_320px] gap-10 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <SectionMarker number={number} label={label} tone="dark" />
            <h2 className={`text-4xl md:text-5xl font-heading font-semibold uppercase mt-6 leading-[0.95] ${textOnClass}`}>
              {heading}
            </h2>
          </motion.div>

          {/* Desktop layered stack */}
          <div className="hidden lg:flex justify-center">
            <motion.div
              drag="x"
              dragElastic={0.12}
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => {
                setDragging(true);
                registerInteraction();
              }}
              onDragEnd={handleDragEnd}
              onHoverStart={() => setStackHovered(true)}
              onHoverEnd={() => setStackHovered(false)}
              onViewportEnter={() => setEntered(true)}
              viewport={{ once: true, amount: 0.35 }}
              className="relative w-full max-w-[520px] aspect-[4/5] cursor-grab active:cursor-grabbing"
            >
              {stories.map((story, i) => {
                const raw = i - activeIndex;
                const half = Math.floor(count / 2);
                const pos = ((raw + half + count) % count) - half;
                if (pos !== 0 && pos !== 1 && pos !== -1) return null;
                const isActive = pos === 0;
                const hoverKick = stackHovered ? 14 : 0;
                const hoverRotateKick = stackHovered ? 1.2 : 0;

                const targetX = entered ? pos * (70 + hoverKick) : pos * 18;
                const targetY = entered ? (isActive && stackHovered ? -5 : 0) : 12;
                const targetRotate = entered ? pos * (-5 - hoverRotateKick) : 0;
                const targetScale = entered ? (isActive ? (stackHovered ? 1.025 : 1) : 0.94) : 0.85;

                return (
                  <motion.button
                    key={story.id}
                    type="button"
                    aria-label={isActive ? undefined : `Show ${story.title}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => {
                      if (!isActive) {
                        setActiveIndex(i);
                        registerInteraction();
                      }
                    }}
                    className={`absolute inset-0 m-auto rounded-[16px] overflow-hidden border-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] ${
                      isActive ? "border-white" : "border-white/30"
                    }`}
                    initial={false}
                    animate={{
                      x: targetX,
                      y: targetY,
                      rotate: targetRotate,
                      scale: targetScale,
                      opacity: entered ? 1 : 0,
                      zIndex: isActive ? 30 : 10,
                    }}
                    transition={SPRING}
                    style={{ cursor: isActive ? "default" : "pointer" }}
                  >
                    <StoryMedia item={story} isActive={isActive} priority={isActive} />
                    {!isActive && <div className="absolute inset-0 bg-brand-dark/35" />}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Mobile / tablet: single active card, swipe */}
          <motion.div
            drag="x"
            dragElastic={0.15}
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={() => {
              setDragging(true);
              registerInteraction();
            }}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:hidden relative aspect-[4/5] max-w-[420px] mx-auto w-full rounded-[16px] overflow-hidden border-2 border-white/25"
          >
            <StoryMedia item={active} isActive priority />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className={`text-xl font-heading font-semibold ${textOnClass}`}>{active.title}</h3>
                <p className={`mt-3 leading-relaxed ${textOnSecondaryClass}`}>{active.description}</p>
                <p className={`mt-6 text-xs font-heading font-semibold uppercase tracking-[0.04em] ${textOnSecondaryClass}`}>
                  {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")} — {active.meta}
                </p>
              </motion.div>
            </AnimatePresence>

            {autoplayEnabled && (
              <div className={`mt-4 h-px w-28 mx-auto lg:mx-0 overflow-hidden ${tone === "dark" ? "bg-white/15" : "bg-white/25"}`}>
                <div
                  key={activeIndex}
                  className="h-full bg-brand-primary"
                  style={{
                    animation: `story-progress ${interval}ms linear forwards`,
                    animationPlayState: stackHovered || dragging ? "paused" : "running",
                    animationDelay: `${startDelay}ms`,
                  }}
                />
              </div>
            )}

            <div className="flex justify-center lg:justify-start gap-2 mt-6">
              <button
                type="button"
                aria-label="Previous story"
                onClick={() => {
                  go(-1);
                  registerInteraction();
                }}
                className={`w-11 h-11 flex items-center justify-center border-2 ${borderOnClass} ${textOnClass} hover:bg-white/10 transition-colors`}
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next story"
                onClick={() => {
                  go(1);
                  registerInteraction();
                }}
                className={`w-11 h-11 flex items-center justify-center border-2 ${borderOnClass} ${textOnClass} hover:bg-white/10 transition-colors`}
              >
                →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function FullScreenStoryScene(props: {
  number: string;
  label: string;
  heading: ReactNode;
  backgroundWord: string;
  stories: StoryMediaItem[];
  tone?: Tone;
  autoplay?: boolean;
  autoplayMs?: number;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <StoryInner {...props} />
    </MotionConfig>
  );
}
