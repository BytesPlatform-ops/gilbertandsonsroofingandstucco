import type { Metadata } from "next";
import RoofingServiceLayout from "@/components/roofing/RoofingServiceLayout";
import { roofingServiceContent } from "@/lib/roofing-service-content";

const page = roofingServiceContent["specialty-roofing"];

export const metadata: Metadata = {
  title: { absolute: page.seoTitle },
  description: page.metaDescription,
  alternates: { canonical: "/roofing/specialty-roofing" },
};

export default function Page() {
  return <RoofingServiceLayout page={page} />;
}
