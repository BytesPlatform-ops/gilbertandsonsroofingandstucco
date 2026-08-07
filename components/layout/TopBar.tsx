"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16v16H4z" opacity="0" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`hidden md:block fixed inset-x-0 top-0 z-50 bg-brand-dark text-text-on-dark-secondary overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
        scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 h-10 flex items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-6">
          <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-text-on-dark transition-colors">
            <PhoneIcon />
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 hover:text-text-on-dark transition-colors"
          >
            <MailIcon />
            {siteConfig.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <PinIcon />
          {siteConfig.address.line1}, {siteConfig.address.line2}
        </div>
      </div>
    </div>
  );
}
