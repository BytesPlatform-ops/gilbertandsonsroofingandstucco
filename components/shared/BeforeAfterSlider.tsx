"use client";

import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import SafeMedia from "@/components/shared/SafeMedia";

function PlaceholderPane({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-surface-subtle border border-dashed border-border-subtle">
      <span className="text-xs md:text-sm uppercase tracking-[0.12em] font-heading font-semibold text-text-secondary px-4 text-center">
        {label}
      </span>
    </div>
  );
}

/**
 * Draggable before/after comparison. Works with or without real images —
 * pass `beforeSrc`/`afterSrc` as null (or omit) to show a clearly labeled
 * placeholder pane instead, so the component is usable before real photos
 * exist.
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  beforePlaceholder = "BEFORE STUCCO IMAGE",
  afterPlaceholder = "AFTER STUCCO IMAGE",
  className = "",
}: {
  beforeSrc?: string | null;
  afterSrc?: string | null;
  beforeAlt?: string;
  afterAlt?: string;
  beforePlaceholder?: string;
  afterPlaceholder?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  // Percent of the container width where the divider sits — "before" shows
  // to the left of it, "after" is the full image underneath.
  const [position, setPosition] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(event.clientX);
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    } else if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-feature)] border-2 border-brand-ink shadow-brutal-sm select-none touch-none cursor-ew-resize ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {/* After — full image, sits underneath */}
      <div className="absolute inset-0">
        {afterSrc ? (
          <SafeMedia src={afterSrc} alt={afterAlt} fill rounded={false} />
        ) : (
          <PlaceholderPane label={afterPlaceholder} />
        )}
      </div>

      {/* Before — clipped to the handle position */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {beforeSrc ? (
          <SafeMedia src={beforeSrc} alt={beforeAlt} fill rounded={false} />
        ) : (
          <PlaceholderPane label={beforePlaceholder} />
        )}
      </div>

      <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-brand-ink/80 text-white text-[10px] font-heading font-semibold uppercase tracking-[0.1em] pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-brand-ink/80 text-white text-[10px] font-heading font-semibold uppercase tracking-[0.1em] pointer-events-none">
        After
      </span>

      <div
        className="absolute inset-y-0 w-0.5 bg-white pointer-events-none"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      />

      <div
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-2 border-brand-ink shadow-brutal-sm flex items-center justify-center text-brand-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
        style={{ left: `${position}%` }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}
