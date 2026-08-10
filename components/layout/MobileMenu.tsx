"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { roofingServices } from "@/lib/roofing-services";
import { useEstimate } from "@/components/estimate/EstimateProvider";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [roofingExpanded, setRoofingExpanded] = useState(false);
  const { openEstimate } = useEstimate();

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-brand-dark/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute inset-y-0 right-0 w-full max-w-sm bg-surface-dark text-text-on-dark flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-[80px] border-b border-border-on-dark shrink-0">
          <Image
            src="/brand/logo-mark-white.png"
            alt="Gilbert & Sons"
            width={160}
            height={92}
            className="h-11 w-auto"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col">
            {primaryNav.map((item) =>
              item.label === "Roofing" ? (
                <li key={item.href} className="border-b border-border-on-dark">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="py-4 text-lg font-heading font-semibold uppercase tracking-[0.03em] flex-1 transition-colors duration-150 hover:text-brand-primary"
                    >
                      Roofing
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle roofing services"
                      aria-expanded={roofingExpanded}
                      onClick={() => setRoofingExpanded((v) => !v)}
                      className="w-11 h-11 flex items-center justify-center text-xl"
                    >
                      {roofingExpanded ? "−" : "+"}
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
                      roofingExpanded ? "max-h-[600px]" : "max-h-0"
                    }`}
                  >
                    <ul className="pb-3 pl-3">
                      {roofingServices.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={service.href}
                            onClick={onClose}
                            className="block py-2.5 text-sm text-text-on-dark-secondary hover:text-text-on-dark"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href} className="border-b border-border-on-dark">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-4 text-lg font-heading font-semibold uppercase tracking-[0.03em] transition-colors duration-150 hover:text-brand-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="p-5 border-t border-border-on-dark shrink-0 flex flex-col gap-3">
          <a
            href={siteConfig.phoneHref}
            className="min-h-[52px] flex items-center justify-center rounded-btn border border-white/25 font-heading font-semibold uppercase tracking-[0.04em] text-sm transition-colors duration-150 hover:bg-white hover:text-brand-ink hover:border-white"
          >
            Call {siteConfig.phone}
          </a>
          <button
            type="button"
            onClick={() => {
              onClose();
              openEstimate();
            }}
            className="min-h-[52px] flex items-center justify-center rounded-btn bg-brand-primary font-heading font-semibold uppercase tracking-[0.04em] text-sm cursor-pointer transition-colors duration-150 hover:bg-brand-primary-dark"
          >
            Get a Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
}
