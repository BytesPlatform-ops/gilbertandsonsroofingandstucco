"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { roofingServices } from "@/lib/roofing-services";
import { serviceAreas } from "@/lib/service-areas";
import EstimateButton from "@/components/estimate/EstimateButton";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [roofingOpen, setRoofingOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const dark = !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 z-50 transition-[background-color,border-color,height,top] duration-[240ms] ease-out ${
          scrolled ? "top-0" : "top-0 md:top-10"
        } ${
          scrolled
            ? "bg-surface-main/95 backdrop-blur border-b border-border-subtle"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 md:px-8">
          <div
            className={`flex items-center justify-between transition-[height] duration-[240ms] ease-out ${
              scrolled ? "h-[72px]" : "h-[92px]"
            }`}
          >
            <Link href="/" className="flex items-center shrink-0" aria-label="Gilbert & Sons home">
              <Image
                src={dark ? "/brand/logo-mark-white.png" : "/brand/logo-mark-black.png"}
                alt="Gilbert & Sons Roofing & Stucco Inc."
                width={220}
                height={127}
                priority
                className="h-14 w-auto md:h-16"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {primaryNav.map((item) =>
                item.label === "Roofing" ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setRoofingOpen(true)}
                    onMouseLeave={() => setRoofingOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`group relative px-2.5 xl:px-4 py-2 text-sm font-heading font-semibold uppercase tracking-[0.04em] transition-colors ${
                        dark ? "text-white" : "text-brand-ink"
                      } hover:text-brand-primary`}
                    >
                      Roofing
                      <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-transparent transition-colors duration-150 ease-out group-hover:bg-brand-primary" />
                    </Link>
                    <div
                      className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-opacity duration-150 ${
                        roofingOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                    >
                      <div className="w-72 rounded-md border border-border-subtle bg-surface-main shadow-lg overflow-hidden">
                        <Link
                          href="/roofing"
                          className="block px-5 py-3 text-sm font-semibold text-brand-ink border-b border-border-subtle hover:bg-surface-subtle"
                        >
                          Roofing Overview
                        </Link>
                        {roofingServices.map((service) => (
                          <Link
                            key={service.slug}
                            href={service.href}
                            className="block px-5 py-2.5 text-sm text-text-secondary hover:bg-surface-subtle hover:text-brand-ink"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : item.label === "Service Areas" ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setAreasOpen(true)}
                    onMouseLeave={() => setAreasOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`group relative px-2.5 xl:px-4 py-2 text-sm font-heading font-semibold uppercase tracking-[0.04em] transition-colors ${
                        dark ? "text-white" : "text-brand-ink"
                      } hover:text-brand-primary`}
                    >
                      Service Areas
                      <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-transparent transition-colors duration-150 ease-out group-hover:bg-brand-primary" />
                    </Link>
                    <div
                      className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-opacity duration-150 ${
                        areasOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                    >
                      <div className="w-64 rounded-md border border-border-subtle bg-surface-main shadow-lg overflow-hidden max-h-[70vh] overflow-y-auto">
                        <Link
                          href="/service-areas"
                          className="block px-5 py-3 text-sm font-semibold text-brand-ink border-b border-border-subtle hover:bg-surface-subtle"
                        >
                          All Service Areas
                        </Link>
                        {serviceAreas.map((area) => (
                          <Link
                            key={area.slug}
                            href={area.href}
                            className="block px-5 py-2.5 text-sm text-text-secondary hover:bg-surface-subtle hover:text-brand-ink"
                          >
                            {area.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative px-2.5 xl:px-4 py-2 text-sm font-heading font-semibold uppercase tracking-[0.04em] transition-colors ${
                      dark ? "text-white" : "text-brand-ink"
                    } hover:text-brand-primary`}
                  >
                    {item.label}
                    <span className="absolute left-2.5 right-2.5 xl:left-4 xl:right-4 -bottom-0.5 h-0.5 bg-brand-primary scale-x-0 origin-left transition-transform duration-[250ms] ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <a
                href={siteConfig.phoneHref}
                className={`hidden xl:block text-sm font-heading font-semibold tracking-[0.02em] whitespace-nowrap ${
                  dark ? "text-white" : "text-brand-ink"
                } hover:text-brand-primary transition-colors`}
              >
                {siteConfig.phone}
              </a>
              <EstimateButton variant="primary" className="whitespace-nowrap">Get Free Estimate</EstimateButton>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11"
            >
              <span className={`block h-0.5 w-6 ${dark ? "bg-white" : "bg-brand-ink"}`} />
              <span className={`block h-0.5 w-6 ${dark ? "bg-white" : "bg-brand-ink"}`} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
