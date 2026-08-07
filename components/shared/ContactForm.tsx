"use client";

import { useState, type FormEvent } from "react";
import { serviceOptions } from "@/lib/service-options";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full min-h-[52px] px-4 border border-border-subtle bg-surface-main text-brand-ink placeholder:text-text-secondary focus:outline-none focus:border-brand-primary transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please call us instead.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" required placeholder="Name" className={inputClass} />
        <input name="phone" required type="tel" placeholder="Phone" className={inputClass} />
      </div>
      <input name="email" required type="email" placeholder="Email" className={inputClass} />

      <div className="grid sm:grid-cols-2 gap-4">
        <select name="service" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Service Needed
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select name="propertyType" defaultValue="Residential" className={inputClass}>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>

      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell us what's going on"
        className={`${inputClass} min-h-[120px] py-3`}
      />

      {status === "error" && <p className="text-sm text-brand-primary">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[52px] px-6 rounded-btn bg-brand-primary text-white font-heading font-semibold uppercase tracking-[0.04em] text-sm hover:bg-brand-primary-dark transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request Free Estimate"}
      </button>
    </form>
  );
}
