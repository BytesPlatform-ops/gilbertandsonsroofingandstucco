import { NextResponse } from "next/server";

type QuoteFormPayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  propertyType?: "Residential" | "Commercial";
  message: string;
};

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

  console.log("New estimate request:", payload);

  return NextResponse.json({ ok: true });
}
