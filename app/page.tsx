import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Services from "@/components/home/Services";
import RoofingFeature from "@/components/home/RoofingFeature";
import StuccoFeature from "@/components/home/StuccoFeature";
import FieldNotes from "@/components/home/FieldNotes";
import RecentWork from "@/components/home/RecentWork";
import WhyGilbert from "@/components/home/WhyGilbert";
import Process from "@/components/home/Process";
import FeaturedTestimonials from "@/components/home/FeaturedTestimonials";
import ContactSection from "@/components/home/ContactSection";
import { testimonials } from "@/lib/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <RoofingFeature />
      <StuccoFeature />
      <FieldNotes />
      <RecentWork />
      <WhyGilbert />
      <Process />
      <FeaturedTestimonials items={testimonials} />
      <ContactSection />
    </>
  );
}
