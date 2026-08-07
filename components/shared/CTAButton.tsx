import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary-dark" | "secondary-light";

const base =
  "group inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-btn font-heading font-semibold uppercase tracking-[0.04em] text-sm border-2 transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out motion-reduce:transition-colors motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-primary text-white border-brand-ink hover:bg-brand-primary-dark hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--brand-ink)] active:translate-x-px active:translate-y-px active:shadow-[1px_1px_0_0_var(--brand-ink)]",
  "secondary-dark":
    "border-white/40 text-white hover:bg-white/10 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(255,255,255,0.35)] active:translate-x-px active:translate-y-px active:shadow-[1px_1px_0_0_rgba(255,255,255,0.35)]",
  "secondary-light":
    "border-brand-ink/25 text-brand-ink hover:bg-brand-ink/5 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--brand-ink)] active:translate-x-px active:translate-y-px active:shadow-[1px_1px_0_0_var(--brand-ink)]",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  showArrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      {showArrow && (
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}
