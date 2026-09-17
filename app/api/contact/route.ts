import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import { siteConfig } from "@/lib/site-config";

// Nodemailer needs the Node.js runtime — it opens a real SMTP socket.
export const runtime = "nodejs";

type QuoteFormPayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  propertyType?: "Residential" | "Commercial";
  message: string;
};

/** Message shown to the visitor whenever delivery fails, for any reason. */
const DELIVERY_ERROR = `We couldn't send your request. Please call us at ${siteConfig.phone}.`;

/**
 * Where estimate requests land. Defaults to the business inbox in
 * site-config so a missing CONTACT_TO_EMAIL can never silently misroute mail.
 */
const TO_EMAIL = process.env.CONTACT_TO_EMAIL?.trim() || siteConfig.email;

const SMTP_HOST = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT?.trim() || "465");
// Port 465 is implicit TLS; 587 upgrades with STARTTLS.
const SMTP_SECURE = (process.env.SMTP_SECURE?.trim() || String(SMTP_PORT === 465)) === "true";
const SMTP_USER = process.env.SMTP_USER?.trim() || "";
const SMTP_PASS = process.env.SMTP_PASS || "";

/**
 * Gmail only accepts mail whose envelope sender is the authenticated
 * account, so From is always SMTP_USER and the visitor's address goes in
 * Reply-To instead.
 */
const FROM_EMAIL = SMTP_USER;

/** Names of the env vars that must be set for SMTP delivery to work. */
function missingSmtpVars() {
  const missing: string[] = [];
  if (!SMTP_USER) missing.push("SMTP_USER");
  if (!SMTP_PASS) missing.push("SMTP_PASS");
  return missing;
}

// Reused across invocations so we aren't renegotiating TLS on every submit.
let transporter: Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      // Without these a stalled SMTP server would hang the request — and the
      // visitor's submit button — indefinitely.
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
  }
  return transporter;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function buildEmail(payload: QuoteFormPayload) {
  const rows: [string, string][] = [
    ["Name", payload.name],
    ["Phone", payload.phone],
    ["Email", payload.email],
    ["Service Needed", payload.service],
    ["Property Type", payload.propertyType || "Not specified"],
    ["Message", payload.message],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const html = `<table style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;font-size:14px">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="padding:6px 16px 6px 0;vertical-align:top;color:#666">${label}</td><td style="padding:6px 0;vertical-align:top;color:#111">${escapeHtml(
        value
      ).replace(/\n/g, "<br />")}</td></tr>`
  )
  .join("\n")}
</table>`;

  return { text, html };
}

/**
 * SMTP errors carry useful diagnostics but can also echo back the command
 * that failed, so only the safe, credential-free fields are logged — and as
 * a flat string, so the detail survives every log transport.
 */
function describeSmtpError(error: unknown) {
  const err = error as NodeJS.ErrnoException & { responseCode?: number; command?: string };
  const parts = [
    err?.name && `name=${err.name}`,
    err?.code && `code=${err.code}`,
    err?.responseCode && `responseCode=${err.responseCode}`,
    err?.command && `command=${err.command}`,
    err?.message && `message=${err.message}`,
  ].filter(Boolean);
  return parts.length > 0 ? parts.join(" ") : String(error);
}

export async function POST(request: Request) {
  let payload: Partial<QuoteFormPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, service, message } = payload;

  if (!name?.trim() || !phone?.trim() || !email?.trim() || !service?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const submission: QuoteFormPayload = {
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    service: service.trim(),
    propertyType: payload.propertyType,
    message: message.trim(),
  };

  const missing = missingSmtpVars();
  if (missing.length > 0) {
    // Surfacing this as an error rather than a silent success: a visitor
    // who sees "Request received" when nothing was sent is worse than one
    // who is told to call.
    console.error(
      `[contact] SMTP is not configured — missing ${missing.join(", ")}. ` +
        `Estimate request from ${submission.email} was NOT delivered to ${TO_EMAIL}.`
    );
    return NextResponse.json({ error: DELIVERY_ERROR }, { status: 500 });
  }

  const { text, html } = buildEmail(submission);

  try {
    const info = await getTransporter().sendMail({
      from: { name: `${siteConfig.shortName} Website`, address: FROM_EMAIL },
      to: TO_EMAIL,
      replyTo: { name: submission.name, address: submission.email },
      subject: `New estimate request — ${submission.name} (${submission.service})`,
      text,
      html,
    });

    console.info(
      `[contact] Estimate request delivered to ${TO_EMAIL} (messageId ${info.messageId}, ` +
        `accepted ${info.accepted?.length ?? 0}, rejected ${info.rejected?.length ?? 0}).`
    );
  } catch (error) {
    console.error(
      `[contact] SMTP delivery to ${TO_EMAIL} failed via ${SMTP_HOST}:${SMTP_PORT} — ` +
        describeSmtpError(error)
    );
    return NextResponse.json({ error: DELIVERY_ERROR }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
