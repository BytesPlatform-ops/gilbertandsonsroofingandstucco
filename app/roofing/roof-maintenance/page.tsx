import type { Metadata } from "next";
import RoofingServiceLayout from "@/components/roofing/RoofingServiceLayout";
import { roofingServiceContent } from "@/lib/roofing-service-content";

const page = roofingServiceContent["roof-maintenance"];

export const metadata: Metadata = {
  title: { absolute: page.seoTitle },
  description: page.metaDescription,
  alternates: { canonical: "/roofing/roof-maintenance" },
};

export default function Page() {
  return <RoofingServiceLayout page={page} />;
}
