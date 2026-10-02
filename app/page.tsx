import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Services from "@/components/home/Services";
import RoofingServiceCards from "@/components/home/RoofingServiceCards";
import StuccoFeature from "@/components/home/StuccoFeature";
import FieldNotes from "@/components/home/FieldNotes";
import RecentWork from "@/components/home/RecentWork";
import AboutStrip from "@/components/home/AboutStrip";
import Process from "@/components/home/Process";
import FeaturedTestimonials from "@/components/home/FeaturedTestimonials";
import ContactSection from "@/components/home/ContactSection";
import { testimonials } from "@/lib/testimonials";

// Self-referencing canonical. Written absolute rather than relative like the
// other routes, because metadataBase resolves "/" to the bare origin and this
// needs the trailing slash. Title and description are inherited from the root
// layout and intentionally not overridden here.
export const metadata: Metadata = {
  alternates: { canonical: "https://gilbertandsonsroofingandstucco.com/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <RoofingServiceCards />
      <StuccoFeature />
      <FieldNotes />
      <RecentWork />
      <AboutStrip />
      <Process />
      <FeaturedTestimonials items={testimonials} />
      <ContactSection />
    </>
  );
}
