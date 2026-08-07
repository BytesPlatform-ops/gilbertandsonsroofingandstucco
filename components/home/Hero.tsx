"use client";

import { useEffect, useRef } from "react";
import { motion, MotionConfig } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";
import SafeMedia from "@/components/shared/SafeMedia";
import HeroEstimateCard from "@/components/home/HeroEstimateCard";
import { siteConfig } from "@/lib/site-config";
import { heroMedia, mediaSettings } from "@/lib/site-media";

const EASE = [0.22, 1, 0.36, 1] as const;

const HERO_GRADIENT =
  "linear-gradient(90deg, rgba(23,19,15,.72) 0%, rgba(23,19,15,.42) 45%, rgba(23,19,15,.14) 75%, rgba(23,19,15,.18) 100%)";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollOffsetRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (reduceMotion || !isDesktop) return;

    const applyTransform = () => {
      if (!bgRef.current) return;
      const { x, y } = pointerRef.current;
      bgRef.current.style.transform = `translate3d(${x}px, ${scrollOffsetRef.current + y}px, 0) scale(1.06)`;
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        scrollOffsetRef.current = Math.min(y * 0.006, 2);
        applyTransform();
        ticking = false;
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const relX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const relY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      pointerRef.current = { x: relX * 4, y: relY * 3 };
      applyTransform();
    };

    const onPointerLeave = () => {
      pointerRef.current = { x: 0, y: 0 };
      applyTransform();
    };

    applyTransform();
    const el = heroRef.current;
    window.addEventListener("scroll", onScroll, { passive: true });
    el?.addEventListener("pointermove", onPointerMove);
    el?.addEventListener("pointerleave", onPointerLeave);
    return () => {
      window.removeEventListener("scroll", onScroll);
      el?.removeEventListener("pointermove", onPointerMove);
      el?.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden bg-brand-dark">
        <div ref={heroRef} className="relative min-h-[85svh] md:min-h-[100svh]">
          <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
            <SafeMedia
              type="video"
              videoUrl={heroMedia.videoUrl}
              src={heroMedia.posterUrl}
              alt="Gilbert & Sons roofing project"
              fill
              priority
              rounded={false}
              playVideo={mediaSettings.hero.autoplay}
              loop={mediaSettings.hero.loop}
              muted={mediaSettings.hero.muted}
              objectPosition={heroMedia.objectPositionDesktop}
              className="scale-[1.06]"
            />
          </div>
          <div className="absolute inset-0 z-[1]" style={{ background: HERO_GRADIENT }} aria-hidden="true" />

          <div className="relative z-[2] h-full flex items-center px-5 md:px-10 lg:px-16 pt-[92px] md:pt-[132px] pb-16 md:pb-0">
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="section-marker text-text-on-dark-secondary mb-6"
              >
                {siteConfig.serviceArea}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                className="hero-title font-heading font-semibold uppercase text-text-on-dark"
              >
                Roofing that stands up to the elements.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
                className="body-large text-text-on-dark-secondary mt-7 max-w-md"
              >
                Residential and commercial roofing and stucco, built for New Mexico
                weather. Licensed, insured and bonded since {siteConfig.established}.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
                className="mt-10"
              >
                <CTAButton href={siteConfig.phoneHref} variant="secondary-dark">
                  Call {siteConfig.phone}
                </CTAButton>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            className="hidden lg:block absolute z-[3] top-1/2 right-8 xl:right-14 -translate-y-1/2 w-full max-w-[420px]"
          >
            <HeroEstimateCard />
          </motion.div>
        </div>

        <div className="lg:hidden relative z-[2] px-5 md:px-10 py-14 bg-brand-dark">
          <HeroEstimateCard />
        </div>
      </section>
    </MotionConfig>
  );
}
