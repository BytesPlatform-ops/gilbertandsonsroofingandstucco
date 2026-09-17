import type { Metadata } from "next";
import Link from "next/link";
import SectionMarker from "@/components/shared/SectionMarker";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SafeMedia from "@/components/shared/SafeMedia";
import FadeIn from "@/components/shared/FadeIn";
import CTAButton from "@/components/shared/CTAButton";
import EstimateButton from "@/components/estimate/EstimateButton";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogGrid from "@/components/blog/BlogGrid";
import { siteConfig } from "@/lib/site-config";
import {
  getCategoriesInUse,
  getFeaturedPost,
  getVisiblePosts,
  toCardData,
} from "@/lib/blog/utils";

export const metadata: Metadata = {
  // Absolute: the root layout template would otherwise append the full brand.
  title: { absolute: "Roofing & Stucco Blog | Gilbert & Sons" },
  description:
    "Roofing and stucco tips for Las Cruces and Southern New Mexico property owners from Gilbert & Sons. Maintenance, repairs, materials and local guidance.",
  alternates: { canonical: "/blog" },
};

const crossLinks = [
  {
    href: "/roofing",
    label: "Roofing Services",
    description: "Installation, repair, replacement, inspection and emergency roofing.",
  },
  {
    href: "/stucco",
    label: "Stucco Services",
    description: "Stucco and EIFS installation, repair and parapet work.",
  },
  {
    href: "/service-areas",
    label: "Service Areas",
    description: "Las Cruces, Doña Ana County and Southern New Mexico.",
  },
];

export default function BlogPage() {
  const posts = getVisiblePosts();
  const featured = getFeaturedPost(posts);
  // The featured article already has a large slot, so it is not repeated below.
  const gridPosts = posts.filter((post) => post.slug !== featured?.slug);
  const categories = getCategoriesInUse(gridPosts);

  return (
    <>
      <section className="relative bg-brand-dark pt-[92px] md:pt-[132px] overflow-hidden">
        <div className="relative min-h-[46vh] flex items-end">
          <SafeMedia
            src="/projects/ai-house-exterior-golden-hour-01.png"
            alt="Home exterior in Las Cruces, New Mexico at golden hour"
            fill
            priority
            rounded={false}
            sizes="100vw"
            className="opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
          <div className="relative z-10 mx-auto max-w-[1200px] w-full px-5 md:px-8 pb-14 pt-24">
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
            </div>
            <FadeIn>
              <p className="section-marker text-text-on-dark-secondary mb-4">
                Roofing &amp; Stucco Resources · Las Cruces, NM
              </p>
              <h1 className="section-title font-heading font-semibold uppercase text-text-on-dark max-w-3xl">
                Practical advice for New Mexico roofs and exteriors.
              </h1>
              <p className="body-large text-text-on-dark-secondary mt-6 max-w-xl">
                Straightforward guidance on roofing, stucco, maintenance, storm damage and
                protecting your property in the Southern New Mexico climate.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
          <FadeIn>
            <SectionMarker number="01" label="Articles" />
            <div className="mt-8 border-2 border-border-subtle bg-surface-subtle px-6 py-16 md:py-20 text-center">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-brand-ink">
                Articles are on the way.
              </h2>
              <p className="body-large text-text-secondary mt-4 max-w-xl mx-auto">
                We&apos;re putting together practical roofing and stucco guidance for Las Cruces
                property owners. In the meantime, our service pages cover the work in detail.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href="/roofing" variant="primary" showArrow>
                  Roofing Services
                </CTAButton>
                <CTAButton href="/stucco" variant="secondary-light">
                  Stucco Services
                </CTAButton>
              </div>
            </div>
          </FadeIn>
        </section>
      ) : (
        <>
          {featured && (
            <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
              <FadeIn>
                <SectionMarker number="01" label="Featured" />
              </FadeIn>
              <FadeIn className="mt-10">
                <FeaturedPost post={featured} />
              </FadeIn>
            </section>
          )}

          <section
            className={`mx-auto max-w-[1200px] px-5 md:px-8 pb-20 md:pb-28 ${
              featured ? "pt-4" : "py-20 md:py-28"
            }`}
          >
            <FadeIn>
              <SectionMarker number={featured ? "02" : "01"} label="Articles" />
              <h2 className="section-title font-heading font-semibold text-brand-ink mt-6 max-w-2xl">
                Latest from the field.
              </h2>
            </FadeIn>
            {gridPosts.length > 0 ? (
              <BlogGrid posts={gridPosts.map(toCardData)} categories={categories} />
            ) : (
              <p className="mt-10 border-2 border-border-subtle bg-surface-subtle px-6 py-10 text-center text-text-secondary">
                More articles are on the way.
              </p>
            )}
          </section>
        </>
      )}

      <section className="bg-surface-subtle border-y border-border-subtle">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-16 md:py-20">
          <FadeIn>
            <SectionMarker number={posts.length === 0 ? "02" : "03"} label="Explore Services" />
          </FadeIn>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {crossLinks.map((link, index) => (
              <FadeIn key={link.href} delay={index * 80}>
                <Link
                  href={link.href}
                  className="group block h-full bg-surface-main border-2 border-border-subtle p-6 rounded-md transition-colors duration-150 ease-out hover:bg-surface-subtle hover:border-brand-ink"
                >
                  <h3 className="font-heading font-semibold text-lg text-brand-ink mb-2">
                    {link.label}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">{link.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary group-hover:underline underline-offset-4">
                    Explore
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <EstimateButton variant="primary" showArrow>
              Get an Estimate
            </EstimateButton>
            <CTAButton href={siteConfig.phoneHref} variant="secondary-light">
              Call {siteConfig.phone}
            </CTAButton>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
