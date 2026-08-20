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
