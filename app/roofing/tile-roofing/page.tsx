import type { Metadata } from "next";
import RoofingServiceLayout from "@/components/roofing/RoofingServiceLayout";
import { roofingServiceContent } from "@/lib/roofing-service-content";

const page = roofingServiceContent["tile-roofing"];

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: "/roofing/tile-roofing" },
};

export default function Page() {
  return <RoofingServiceLayout page={page} />;
}
