export type ButtonVariant = "primary" | "secondary-dark" | "secondary-light";

/**
 * Shared button chrome for links (CTAButton) and modal triggers
 * (EstimateButton) so every CTA on the site looks identical.
 *
 * Hover states are colour-only by design — background, text and border.
 * No transforms, shadows or motion.
 */
export const buttonBase =
  "inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-btn font-heading font-semibold uppercase tracking-[0.04em] text-sm border-2 cursor-pointer transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white border-brand-ink hover:bg-brand-primary-dark hover:border-brand-primary-dark",
  "secondary-dark":
    "bg-transparent border-white/40 text-white hover:bg-white hover:text-brand-ink hover:border-white",
  "secondary-light":
    "bg-transparent border-brand-ink/25 text-brand-ink hover:bg-brand-ink hover:text-white hover:border-brand-ink",
};

export function buttonClass(variant: ButtonVariant, className = "") {
  return `${buttonBase} ${buttonVariants[variant]} ${className}`;
}
