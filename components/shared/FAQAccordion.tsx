"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-border-subtle">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question} className="border-b border-border-subtle">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-heading font-semibold text-lg text-brand-ink">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 w-8 h-8 flex items-center justify-center border border-border-subtle text-lg text-brand-ink"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
                isOpen ? "max-h-[400px]" : "max-h-0"
              }`}
            >
              <p className="pb-6 pr-10 text-text-secondary leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
