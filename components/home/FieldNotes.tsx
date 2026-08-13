import SectionMarker from "@/components/shared/SectionMarker";
import MediaLibrary from "@/components/interactive/MediaLibrary";
import FadeIn from "@/components/shared/FadeIn";

export default function FieldNotes() {
  return (
    <section className="bg-brand-dark">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <SectionMarker number="05" label="Field Notes" tone="dark" />
          <h2 className="section-title font-heading font-semibold text-text-on-dark mt-6 max-w-2xl">
            See the work in motion.
          </h2>
        </FadeIn>
        <div className="mt-10">
          <MediaLibrary />
        </div>
      </div>
    </section>
  );
}
