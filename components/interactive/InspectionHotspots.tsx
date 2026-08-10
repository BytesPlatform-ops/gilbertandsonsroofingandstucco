"use client";

import { useState } from "react";
import SafeMedia from "@/components/shared/SafeMedia";

const hotspots = [
  {
    key: "surface",
    label: "Roof Surface",
    x: 62,
    y: 38,
    body: "We check the overall condition of the roofing surface — wear, granule loss, and visible aging.",
  },
  {
    key: "flashing",
    label: "Flashing",
    x: 30,
    y: 55,
    body: "Flashing seals joints and transitions. Failed flashing is one of the most common sources of leaks.",
  },
  {
    key: "edges",
    label: "Edges",
    x: 80,
    y: 68,
    body: "Roof edges and eaves take on extra wind and water exposure, so we check them closely.",
  },
  {
    key: "drainage",
    label: "Drainage",
    x: 45,
    y: 78,
    body: "Proper drainage keeps water moving off the roof instead of pooling or backing up.",
  },
  {
    key: "damage",
    label: "Visible Damage",
    x: 20,
    y: 25,
    body: "Missing or damaged shingles, cracked tile, or punctures are flagged for repair.",
  },
];

export default function InspectionHotspots() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const active = hotspots.find((h) => h.key === activeKey);

  return (
    <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-feature)]">
        <SafeMedia
          src="/projects/roof-detail-01.jpg"
          alt="Roof surface used to illustrate common inspection points"
          fill
          rounded={false}
        />
        {hotspots.map((hotspot) => (
          <button
            key={hotspot.key}
            type="button"
            onClick={() => setActiveKey(hotspot.key === activeKey ? null : hotspot.key)}
            onMouseEnter={() => setActiveKey(hotspot.key)}
            aria-label={hotspot.label}
            aria-pressed={activeKey === hotspot.key}
            className="absolute w-11 h-11 -ml-[22px] -mt-[22px] flex items-center justify-center cursor-pointer"
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
          >
            <span
              className={`w-4 h-4 rounded-full border-2 transition-colors duration-150 ${
                activeKey === hotspot.key
                  ? "bg-brand-primary border-white"
                  : "bg-white/80 border-brand-primary"
              }`}
            />
          </button>
        ))}
      </div>

      <div>
        <span className="section-marker text-text-secondary">Hotspots</span>
        {active ? (
          <div className="mt-3">
            <h3 className="text-xl font-heading font-semibold text-brand-ink">{active.label}</h3>
            <p className="text-text-secondary mt-2">{active.body}</p>
          </div>
        ) : (
          <p className="text-text-secondary mt-3">
            Hover or tap a point on the photo to see what we check during a roof inspection.
          </p>
        )}
        <ul className="mt-6 flex flex-col gap-1">
          {hotspots.map((hotspot) => (
            <li key={hotspot.key}>
              <button
                type="button"
                onClick={() => setActiveKey(hotspot.key)}
                onMouseEnter={() => setActiveKey(hotspot.key)}
                className={`text-sm py-2 px-2 border-b border-border-subtle w-full text-left cursor-pointer transition-colors duration-150 ${
                  activeKey === hotspot.key
                    ? "bg-surface-subtle text-brand-primary font-semibold"
                    : "text-text-secondary hover:bg-surface-subtle hover:text-brand-ink"
                }`}
              >
                {hotspot.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
