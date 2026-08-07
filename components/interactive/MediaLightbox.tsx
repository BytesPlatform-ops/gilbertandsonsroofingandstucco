"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { ProjectMedia } from "@/lib/project-media";

export default function MediaLightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: ProjectMedia[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const item = items[index];

  useEffect(() => {
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
      if (event.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (event.key === "Tab") event.preventDefault();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-brand-dark/96 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-5 md:px-8 h-20 shrink-0">
        <span className="section-marker text-text-on-dark-secondary">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close media viewer"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="w-11 h-11 flex items-center justify-center text-white text-2xl"
        >
          ×
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-5 md:px-16 min-h-0">
        <button
          type="button"
          aria-label="Previous"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + items.length) % items.length);
          }}
          className="hidden sm:flex w-11 h-11 shrink-0 items-center justify-center border border-white/25 text-white mr-4"
        >
          ←
        </button>

        <div
          className="relative w-full h-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image src={item.src} alt={item.alt} fill className="object-contain" />
        </div>

        <button
          type="button"
          aria-label="Next"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % items.length);
          }}
          className="hidden sm:flex w-11 h-11 shrink-0 items-center justify-center border border-white/25 text-white ml-4"
        >
          →
        </button>
      </div>

      <div
        className="px-5 md:px-8 py-6 shrink-0 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="section-marker text-text-on-dark-secondary">
          {item.category === "roofing" ? "Roofing" : "Stucco"} · {item.propertyType === "commercial" ? "Commercial" : "Residential"}
        </p>
        <h3 className="font-heading font-semibold text-lg text-text-on-dark mt-2">{item.title}</h3>
        <p className="text-sm text-text-on-dark-secondary mt-1">{item.description}</p>
      </div>
    </div>
  );
}
