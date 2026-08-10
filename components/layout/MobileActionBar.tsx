"use client";

import { useEstimate } from "@/components/estimate/EstimateProvider";
import { siteConfig } from "@/lib/site-config";

export default function MobileActionBar() {
  const { open, openEstimate } = useEstimate();

  // The sticky bar sits above page content, so it has to get out of the way
  // while the estimate modal is open — otherwise it covers the form.
  if (open) return null;

  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 flex bg-surface-dark border-t border-border-on-dark"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={siteConfig.phoneHref}
        className="flex-1 flex items-center justify-center h-14 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-white border-r border-border-on-dark transition-colors duration-150 hover:bg-surface-dark-raised"
      >
        Call Now
      </a>
      <button
        type="button"
        onClick={openEstimate}
        className="flex-1 flex items-center justify-center h-14 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-white bg-brand-primary cursor-pointer transition-colors duration-150 hover:bg-brand-primary-dark"
      >
        Free Estimate
      </button>
    </div>
  );
}
