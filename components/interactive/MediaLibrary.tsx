"use client";

import { useState } from "react";
import SafeMedia from "@/components/shared/SafeMedia";
import MediaLightbox from "@/components/interactive/MediaLightbox";
import { projectMedia, type ProjectMedia } from "@/lib/project-media";

const filters = [
  { key: "all", label: "All" },
  { key: "roofing", label: "Roofing" },
  { key: "stucco", label: "Stucco" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function MediaLibrary({ items = projectMedia }: { items?: ProjectMedia[] }) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const availableKeys = new Set<FilterKey>([
    "all",
    ...items.map((item) => item.category),
    ...items.map((item) => item.propertyType),
  ]);
  const visibleFilters = filters.filter((f) => availableKeys.has(f.key));

  const filtered = items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "roofing" || filter === "stucco") return item.category === filter;
    return item.propertyType === filter;
  });

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {visibleFilters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 text-sm font-heading font-semibold uppercase tracking-[0.03em] border cursor-pointer transition-colors duration-150 ${
              filter === f.key
                ? "bg-brand-primary text-white border-brand-primary"
                : "border-white/20 text-text-on-dark-secondary hover:bg-white/10 hover:text-text-on-dark hover:border-white/60"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden border border-white/10 cursor-pointer transition-colors duration-150 hover:border-white/60"
          >
            <SafeMedia src={item.src} alt={item.alt} fill rounded={false} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
            <div className="absolute left-3 right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-end justify-between gap-2">
              <span>
                <span className="block text-xs font-heading font-semibold uppercase tracking-[0.03em] text-white">
                  {item.title}
                </span>
                <span className="block text-[10px] text-text-on-dark-secondary mt-0.5">Las Cruces, NM</span>
              </span>
              <span className="shrink-0 text-white text-sm" aria-hidden="true">↗</span>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <MediaLightbox
          items={filtered}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  );
}
