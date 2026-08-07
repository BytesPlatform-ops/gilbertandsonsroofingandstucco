import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function MobileActionBar() {
  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 flex bg-surface-dark border-t border-border-on-dark"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={siteConfig.phoneHref}
        className="flex-1 flex items-center justify-center h-14 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-white border-r border-border-on-dark"
      >
        Call Now
      </a>
      <Link
        href="/#contact"
        className="flex-1 flex items-center justify-center h-14 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-white bg-brand-primary"
      >
        Free Estimate
      </Link>
    </div>
  );
}
