import type { Metadata } from "next";
import RoofingServiceLayout from "@/components/roofing/RoofingServiceLayout";
import { roofingServiceContent } from "@/lib/roofing-service-content";

const page = roofingServiceContent["roof-replacements"];

export const metadata: Metadata = {
  title: { absolute: page.seoTitle },
  description: page.metaDescription,
  alternates: { canonical: "/roofing/roof-replacements" },
};

export default function Page() {
  return <RoofingServiceLayout page={page} />;
}
