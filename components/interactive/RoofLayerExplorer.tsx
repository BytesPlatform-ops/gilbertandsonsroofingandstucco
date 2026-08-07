"use client";

import { useState } from "react";

const layers = [
  {
    key: "tile",
    label: "Tile",
    tone: "bg-[#8a3b2a]",
    body: "The tile surface gives a tile roof its appearance and helps shed water off the roofing system.",
  },
  {
    key: "underlayment",
    label: "Underlayment",
    tone: "bg-[#3a3530]",
    body: "The waterproof barrier beneath the tile is critically important to the roofing system's performance — this is what actually keeps water out.",
  },
  {
    key: "deck",
    label: "Roof Deck / Support",
    tone: "bg-[#c9c2b4]",
    body: "The structural deck beneath the underlayment supports the entire roofing system.",
  },
];

export default function RoofLayerExplorer() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="grid md:grid-cols-[1fr_320px] gap-10 items-center">
      <div className="flex flex-col gap-2 md:gap-3">
        {layers.map((layer, index) => {
          const isActive = index === activeIndex;
          const offset = index < activeIndex ? -10 : index > activeIndex ? 10 : 0;
          return (
            <button
              key={layer.key}
              type="button"
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`relative h-20 md:h-24 ${layer.tone} border transition-transform duration-300 ease-out flex items-center px-6 ${
                isActive ? "border-brand-primary" : "border-black/10"
              }`}
              style={{ transform: `translateY(${offset}px)`, zIndex: isActive ? 10 : 1 }}
            >
              <span
                className={`font-heading font-semibold text-sm md:text-base uppercase tracking-[0.03em] ${
                  layer.key === "deck" ? "text-brand-ink" : "text-white"
                }`}
              >
                {layer.label}
              </span>
            </button>
          );
        })}
      </div>

      <div key={layers[activeIndex].key} className="animate-[fadeIn_0.3s_ease]">
        <span className="section-marker text-text-secondary">
          {String(activeIndex + 1).padStart(2, "0")} / {String(layers.length).padStart(2, "0")}
        </span>
        <h3 className="text-xl font-heading font-semibold text-brand-ink mt-2">
          {layers[activeIndex].label}
        </h3>
        <p className="text-text-secondary mt-3">{layers[activeIndex].body}</p>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}
