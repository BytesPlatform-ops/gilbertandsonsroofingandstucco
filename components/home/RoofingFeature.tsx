"use client";

import { useState } from "react";
import Link from "next/link";
import SafeMedia from "@/components/shared/SafeMedia";
import SectionMarker from "@/components/shared/SectionMarker";
import CTAButton from "@/components/shared/CTAButton";

const tabs = [
  {
    key: "install",
    label: "Install",
    title: "Roof Installations",
    body: "Professional roof installation using top-grade materials and industry-leading techniques.",
    image: "/projects/aerial-shingle-roof-02.jpg",
    href: "/roofing/roof-installations",
  },
  {
    key: "repair",
    label: "Repair",
    title: "Roof Repairs",
    body: "Repairs for leaks, storm damage and general wear and tear before they become bigger problems.",
    image: "/projects/roof-detail-01.jpg",
    href: "/roofing/roof-repairs",
  },
  {
    key: "replace",
    label: "Replace",
    title: "Roof Replacements",
    body: "Full roof replacement when a roof reaches the end of its life or repair isn't the right call.",
    image: "/projects/aerial-shingle-roof-03.jpg",
    href: "/roofing/roof-replacements",
  },
  {
    key: "inspect",
    label: "Inspect",
    title: "Roof Inspections",
    body: "Thorough inspections that identify potential issues before they turn into costly repairs.",
    image: "/projects/roof-detail-02.jpg",
    href: "/roofing/roof-inspections",
  },
  {
    key: "restore",
    label: "Restore",
    title: "Silicone Roof Restoration",
    body: "Commercial roof renewal with silicone and elastomeric coatings — less disruption than a full tear-off.",
    image: "/projects/aerial-shingle-roof-08.jpg",
    href: "/roofing/silicone-roof-restoration",
  },
];

export default function RoofingFeature() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="bg-surface-subtle border-y border-border-subtle">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <SectionMarker number="03" label="Roofing" />
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
          <div>
            <h2 className="section-title font-heading font-semibold text-brand-ink">
              Protection starts at the top.
            </h2>
            <p className="body-large text-text-secondary mt-6 max-w-lg">
              Gilbert &amp; Sons provides residential and commercial roofing for
              New Mexico weather — installations, repairs, replacements,
              inspections, maintenance, emergency service, specialty systems,
              tile roofing and commercial silicone restoration.
            </p>

            <div className="mt-10 flex flex-wrap gap-2 border-b border-border-subtle pb-2">
              {tabs.map((t, index) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  className={`px-4 py-2 text-sm font-heading font-semibold uppercase tracking-[0.03em] border-2 cursor-pointer transition-colors duration-150 ${
                    index === active
                      ? "bg-brand-ink text-white border-brand-ink"
                      : "bg-transparent border-transparent text-text-secondary hover:bg-surface-main hover:text-brand-ink hover:border-brand-ink"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-heading font-semibold text-brand-ink">{tab.title}</h3>
              <p className="text-text-secondary mt-3 max-w-md">{tab.body}</p>
              <Link
                href={tab.href}
                className="inline-block mt-4 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary transition-colors duration-150 hover:text-brand-primary-dark hover:underline underline-offset-4"
              >
                Learn More →
              </Link>
            </div>

            <div className="mt-10">
              <CTAButton href="/roofing" variant="secondary-light" showArrow>
                View All Roofing Services
              </CTAButton>
            </div>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-[var(--radius-feature)]">
            <SafeMedia src={tab.image} alt={tab.title} fill rounded={false} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
