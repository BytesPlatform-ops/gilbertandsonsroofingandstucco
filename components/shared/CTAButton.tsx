import Link from "next/link";
import type { ReactNode } from "react";
import { buttonClass, type ButtonVariant } from "@/components/shared/buttonStyles";

export default function CTAButton({
  href,
  children,
  variant = "primary",
  showArrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      <span>{children}</span>
      {showArrow && <span aria-hidden="true">→</span>}
    </Link>
  );
}
