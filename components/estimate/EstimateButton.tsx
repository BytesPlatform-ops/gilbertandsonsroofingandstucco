"use client";

import type { ReactNode } from "react";
import { useEstimate } from "@/components/estimate/EstimateProvider";
import { buttonClass, type ButtonVariant } from "@/components/shared/buttonStyles";

/**
 * The only way to start an estimate. Renders as a CTA button by default;
 * pass `unstyled` with your own className for inline/link-style triggers.
 */
export default function EstimateButton({
  children = "Get a Free Estimate",
  variant = "primary",
  showArrow = false,
  className = "",
  unstyled = false,
}: {
  children?: ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
  unstyled?: boolean;
}) {
  const { openEstimate } = useEstimate();

  return (
    <button
      type="button"
      onClick={openEstimate}
      className={unstyled ? className : buttonClass(variant, className)}
    >
      <span>{children}</span>
      {showArrow && <span aria-hidden="true">→</span>}
    </button>
  );
}
