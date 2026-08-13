"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import ContactForm from "@/components/shared/ContactForm";

type EstimateContextValue = {
  open: boolean;
  openEstimate: () => void;
  closeEstimate: () => void;
};

const EstimateContext = createContext<EstimateContextValue | null>(null);

/**
 * Single source of truth for the "Get a Free Estimate" experience.
 * Every estimate CTA on the site opens this one modal, so the form is
 * always rendered at viewport level — never inside a card or a
 * half-width grid column that would squeeze it.
 */
export function useEstimate() {
  const context = useContext(EstimateContext);
  if (!context) {
    throw new Error("useEstimate must be used inside <EstimateProvider>");
  }
  return context;
}

function EstimateModal({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    // Lock the page behind the modal without letting the layout shift when
    // the scrollbar disappears.
    const { body, documentElement } = document;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, []);

  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  return (
    <div
      // Fixed to the viewport, above the header (50), mobile menu (60) and
      // lightbox (80) so nothing can overlap or clip the form.
      className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="estimate-modal-title"
    >
      <div
        className="fixed inset-0 bg-brand-dark/75"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative flex min-h-full items-center justify-center py-4 md:py-10">
        <div
          ref={panelRef}
          tabIndex={-1}
          className="relative w-[calc(100vw-24px)] max-w-[860px] bg-surface-main rounded-md border-t-4 border-brand-primary shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] outline-none"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close estimate form"
            className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center text-2xl leading-none text-text-secondary border border-transparent rounded-btn hover:text-brand-ink hover:bg-surface-subtle hover:border-border-subtle"
          >
            ×
          </button>

          <div className="max-h-[calc(100svh-32px)] md:max-h-[calc(100svh-80px)] overflow-y-auto px-5 py-8 md:px-10 md:py-10">
            <h2
              id="estimate-modal-title"
              className="text-2xl md:text-3xl font-heading font-semibold text-brand-ink pr-12"
            >
              Get a Free Estimate
            </h2>
            <p className="text-text-secondary mt-2 mb-7 max-w-xl">
              Tell us what&rsquo;s going on and we&rsquo;ll get back to you with
              next steps. For anything urgent, call 575-649-2316.
            </p>
            <ContactForm size="large" idPrefix="estimate-modal" />
          </div>
        </div>
      </div>
    </div>
  );
}

const subscribeNoop = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function EstimateProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  // Portals can only render after hydration — gating on this avoids a
  // server/client markup mismatch.
  const mounted = useSyncExternalStore(subscribeNoop, getClientSnapshot, getServerSnapshot);

  const openEstimate = useCallback(() => setOpen(true), []);
  const closeEstimate = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openEstimate, closeEstimate }),
    [open, openEstimate, closeEstimate]
  );

  return (
    <EstimateContext.Provider value={value}>
      {children}
      {mounted && open
        ? createPortal(<EstimateModal onClose={closeEstimate} />, document.body)
        : null}
    </EstimateContext.Provider>
  );
}
