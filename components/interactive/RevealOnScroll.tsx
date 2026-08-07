"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none" | "clip" | "image";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const directionOffsets: Record<Direction, string> = {
  up: "translateY(28px)",
  left: "translateX(-28px)",
  right: "translateX(28px)",
  none: "scale(0.96)",
  clip: "none",
  image: "translateY(22px) scale(0.96)",
};

export default function RevealOnScroll({
  children,
  direction = "up",
  delayMs = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  delayMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

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

  const duration = direction === "image" ? 750 : direction === "clip" ? 650 : 650;

  const style =
    direction === "clip"
      ? {
          clipPath: visible ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          transition: `clip-path ${duration}ms ${EASE} ${delayMs}ms`,
        }
      : {
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : directionOffsets[direction],
          transition: `opacity ${duration}ms ${EASE} ${delayMs}ms, transform ${duration}ms ${EASE} ${delayMs}ms`,
          willChange: "opacity, transform",
        };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
