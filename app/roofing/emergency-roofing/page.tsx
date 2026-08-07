import type { Metadata } from "next";
import RoofingServiceLayout from "@/components/roofing/RoofingServiceLayout";
import { roofingServiceContent } from "@/lib/roofing-service-content";

const page = roofingServiceContent["emergency-roofing"];

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: "/roofing/emergency-roofing" },
};

export default function Page() {
  return <RoofingServiceLayout page={page} />;
}
