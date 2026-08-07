import type { Metadata } from "next";
import RoofingServiceLayout from "@/components/roofing/RoofingServiceLayout";
import { roofingServiceContent } from "@/lib/roofing-service-content";

const page = roofingServiceContent["silicone-roof-restoration"];

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: "/roofing/silicone-roof-restoration" },
};

export default function Page() {
  return <RoofingServiceLayout page={page} />;
}
