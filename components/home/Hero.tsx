import CTAButton from "@/components/shared/CTAButton";
import SafeMedia from "@/components/shared/SafeMedia";
import HeroEstimateCard from "@/components/home/HeroEstimateCard";
import { siteConfig } from "@/lib/site-config";
import { heroMedia, mediaSettings } from "@/lib/site-media";

const HERO_GRADIENT =
  "linear-gradient(90deg, rgba(23,19,15,.72) 0%, rgba(23,19,15,.42) 45%, rgba(23,19,15,.14) 75%, rgba(23,19,15,.18) 100%)";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="relative flex min-h-[85svh] md:min-h-[100svh]">
        <div className="absolute inset-0 z-0">
          <SafeMedia
            type="video"
            videoUrl={heroMedia.videoUrl}
            src={heroMedia.posterUrl}
            alt="Gilbert & Sons roofing project"
            fill
            priority
            rounded={false}
            playVideo={mediaSettings.hero.autoplay}
            loop={mediaSettings.hero.loop}
            muted={mediaSettings.hero.muted}
            objectPosition={heroMedia.objectPositionDesktop}
          />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: HERO_GRADIENT }} aria-hidden="true" />

        {/*
          A real grid, not flex — the right column is a fixed track so the
          form is flush against the container's right edge instead of just
          trailing after the headline with leftover space to its right.
        */}
        <div className="relative z-[2] w-full flex items-center px-5 md:px-8 lg:px-10 xl:px-16 pt-[108px] md:pt-[148px] pb-16">
          <div className="w-full grid md:grid-cols-[minmax(0,1fr)_400px] lg:grid-cols-[minmax(0,1fr)_430px] xl:grid-cols-[minmax(0,1fr)_460px] gap-8 lg:gap-10 xl:gap-16 items-center">
            <div className="min-w-0 max-w-2xl">
              <p className="section-marker text-text-on-dark-secondary mb-6">
                {siteConfig.serviceArea}
              </p>
              <h1 className="hero-title font-heading font-semibold uppercase text-text-on-dark">
                Roofing that stands up to the elements.
              </h1>
              <p className="body-large text-text-on-dark-secondary mt-7 max-w-md">
                Residential and commercial roofing and stucco, built for New Mexico
                weather. Licensed, insured and bonded since {siteConfig.established}.
              </p>
              <div className="mt-10">
                <CTAButton href={siteConfig.phoneHref} variant="secondary-dark">
                  Call {siteConfig.phone}
                </CTAButton>
              </div>
            </div>

            <div className="hidden md:block w-full">
              <HeroEstimateCard />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden relative z-[2] px-5 py-14 bg-brand-dark">
        <HeroEstimateCard />
      </div>
    </section>
  );
}
