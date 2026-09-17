"use client";

import { useState, type FormEvent } from "react";
import { serviceOptions } from "@/lib/service-options";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";
type Size = "default" | "large";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Web3Forms blocks server-to-server calls on the free plan, so the browser
 * posts to their API directly. Their docs state the access key is designed to
 * be public ("Don't worry this can be public"); it only identifies the form
 * and cannot be used to read submissions.
 */
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const GENERIC_ERROR = `Something went wrong. Please call us at ${siteConfig.phone}.`;

const baseInputClass =
  "w-full px-4 border border-border-subtle bg-surface-main text-brand-ink placeholder:text-text-secondary focus:outline-none focus:border-brand-primary transition-colors";

const sizeClass: Record<Size, string> = {
  default: "min-h-[52px] text-base",
  large: "min-h-[56px] text-base md:text-[17px]",
};

export default function ContactForm({
  size = "default",
  idPrefix = "contact",
}: {
  size?: Size;
  /** Keeps input ids unique when the form is rendered more than once per page. */
  idPrefix?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const inputClass = `${baseInputClass} ${sizeClass[size]}`;
  const gapClass = size === "large" ? "gap-5" : "gap-4";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    try {
      if (!WEB3FORMS_ACCESS_KEY) {
        // Misconfiguration: fail visibly rather than pretend the request sent.
        console.error(
          "[contact] NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set — submission was not sent."
        );
        throw new Error(GENERIC_ERROR);
      }

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Estimate Request — Gilbert & Sons",
          from_name: `${siteConfig.shortName} Website`,
          // Makes Reply in Gmail go straight back to the customer.
          replyto: value("email"),
          botcheck: value("botcheck"),
          // Keys become the labels shown in the delivered email.
          Name: value("name"),
          Phone: value("phone"),
          Email: value("email"),
          "Service Needed": value("service"),
          "Property Type": value("propertyType") || "Not specified",
          Message: value("message"),
        }),
      });

      const body = (await response.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || body.success === false) {
        console.error(
          `[contact] Web3Forms rejected the submission (status ${response.status}): ` +
            `${body.message ?? "no message"}`
        );
        throw new Error(GENERIC_ERROR);
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : GENERIC_ERROR);
    }
  };

  if (status === "success") {
    return (
      <div className="border border-border-subtle p-8 text-center">
        <p className="font-heading font-semibold text-xl text-brand-ink">Request received.</p>
        <p className="text-text-secondary mt-2">
          We&rsquo;ll be in touch shortly. For anything urgent, call 575-649-2316.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col ${gapClass}`}>
      <div className={`grid sm:grid-cols-2 ${gapClass}`}>
        <div>
          <label htmlFor={`${idPrefix}-name`} className="sr-only">
            Name
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            required
            autoComplete="name"
            placeholder="Name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-phone`} className="sr-only">
            Phone
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            placeholder="Phone"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className="sr-only">
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          required
          type="email"
          autoComplete="email"
          placeholder="Email"
          className={inputClass}
        />
      </div>

      <div className={`grid sm:grid-cols-2 ${gapClass}`}>
        <div>
          <label htmlFor={`${idPrefix}-service`} className="sr-only">
            Service needed
          </label>
          <select
            id={`${idPrefix}-service`}
            name="service"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Service Needed
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-property-type`} className="sr-only">
            Property type
          </label>
          <select
            id={`${idPrefix}-property-type`}
            name="propertyType"
            defaultValue="Residential"
            className={inputClass}
          >
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-message`} className="sr-only">
          Tell us what&rsquo;s going on
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={size === "large" ? 5 : 4}
          placeholder="Tell us what's going on"
          className={`${inputClass} ${size === "large" ? "min-h-[150px]" : "min-h-[120px]"} py-3`}
        />
      </div>

      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {status === "error" && <p className="text-sm text-brand-primary">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`${
          size === "large" ? "min-h-[56px]" : "min-h-[52px]"
        } px-6 rounded-btn bg-brand-primary text-white border-2 border-brand-ink font-heading font-semibold uppercase tracking-[0.04em] text-sm cursor-pointer transition-colors duration-150 hover:bg-brand-primary-dark hover:border-brand-primary-dark disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {status === "submitting" ? "Sending…" : "Request an Estimate"}
      </button>
    </form>
  );
}
