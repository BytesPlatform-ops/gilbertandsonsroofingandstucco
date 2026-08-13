"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Scroll-triggered fade/rise-in. Always starts hidden on both server and
 * client — the reveal only happens after an effect runs — so there's no
 * SSR/client markup mismatch. Reduced-motion users still get the element
 * (opacity flips instantly, no transition), it just doesn't fade.
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 16,
  as: Tag = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms, applied only once the element is visible. */
  delay?: number;
  /** Starting vertical offset in px. */
  y?: number;
  /** Wrapper element — use "li" inside a <ul>/<ol>, etc. Defaults to "div". */
  as?: ElementType;
  /** Passed straight through — useful for anchor-link scroll targets. */
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none motion-reduce:duration-0 ${
        visible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        translate: visible ? "0 0" : `0 ${y}px`,
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </Tag>
  );
}
