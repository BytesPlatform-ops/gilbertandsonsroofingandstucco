import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SectionMarker from "@/components/shared/SectionMarker";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SafeMedia from "@/components/shared/SafeMedia";
import FadeIn from "@/components/shared/FadeIn";
import CTAButton from "@/components/shared/CTAButton";
import EstimateButton from "@/components/estimate/EstimateButton";
import ArticleBody from "@/components/blog/ArticleBody";
import ArticleTOC from "@/components/blog/ArticleTOC";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { siteConfig } from "@/lib/site-config";
import {
  formatDate,
  getPostBySlug,
  getPublishedPosts,
  getRelatedPosts,
  readTimeOf,
  serviceLinksFor,
} from "@/lib/blog/utils";

const baseUrl = "https://gilbertandsonsroofingandstucco.com";

/** Only published articles are prerendered; a draft slug 404s in production. */
export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  const url = `${baseUrl}/blog/${post.slug}`;
  const isDraft = post.status === "draft";

  return {
    // Absolute: metaTitle already carries the brand, so the parent title
    // template must not append it a second time.
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    // A draft is only reachable in dev, but keep it out of any index regardless.
    ...(isDraft ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: "article",
      url,
      siteName: siteConfig.name,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      images: [{ url: post.featuredImage, alt: post.featuredImageAlt }],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const readTime = readTimeOf(post);
  const related = getRelatedPosts(post);
  const serviceLinks = serviceLinksFor(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${baseUrl}${post.featuredImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Organization", name: post.author.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/blog/${post.slug}` },
    articleSection: post.category,
    ...(post.tags.length > 0 ? { keywords: post.tags.join(", ") } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article>
        <section className="bg-brand-dark pt-[92px] md:pt-[132px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8 pt-16 pb-12 md:pt-20 md:pb-14">
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: post.title },
                ]}
              />
            </div>
            <FadeIn>
              <p className="section-marker text-text-on-dark-secondary mb-4">
                Blog · {post.category}
              </p>
              <h1 className="section-title font-heading font-semibold uppercase text-text-on-dark max-w-4xl">
                {post.title}
              </h1>
              <p className="body-large text-text-on-dark-secondary mt-6 max-w-2xl">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-on-dark-secondary">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span aria-hidden="true" className="w-1 h-1 bg-white/30" />
                <span>{readTime} min read</span>
                <span aria-hidden="true" className="w-1 h-1 bg-white/30" />
                <span>{post.author.name}</span>
                {post.status === "draft" && (
                  <span className="section-marker bg-white/10 text-text-on-dark px-2.5 py-1">
                    Draft
                  </span>
                )}
              </div>
            </FadeIn>
          </div>

          <div className="mx-auto max-w-[1200px] px-5 md:px-8 pb-16 md:pb-20">
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <SafeMedia
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                fill
                priority
                rounded={false}
                sizes="(min-width: 1200px) 1136px, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,800px)_minmax(0,1fr)] lg:gap-16">
            <div className="min-w-0">
              <ArticleTOC content={post.content} variant="mobile" />
              <ArticleBody content={post.content} />

              {serviceLinks.length > 0 && (
                <div className="mt-16 pt-10 border-t-2 border-brand-ink">
                  <SectionMarker number="—" label="Related Services" />
                  <ul className="mt-6 flex flex-col">
                    {serviceLinks.map((link) => (
                      <li key={link.href} className="border-b border-border-subtle">
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between gap-4 py-4 transition-colors duration-150 hover:text-brand-primary"
                        >
                          <span className="font-heading font-semibold text-lg text-brand-ink group-hover:text-brand-primary">
                            {link.label}
                          </span>
                          <span
                            aria-hidden="true"
                            className="text-brand-primary transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {post.showEstimateCta !== false && (
              <div className="mt-12 bg-surface-subtle border-2 border-border-subtle p-8">
                <h2 className="font-heading font-semibold text-2xl text-brand-ink">
                  Questions about your own roof?
                </h2>
                <p className="mt-3 text-text-secondary">
                  Gilbert &amp; Sons has served Las Cruces and Doña Ana County since{" "}
                  {siteConfig.established}. Licensed, insured and bonded.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <EstimateButton variant="primary" showArrow>
                    Get an Estimate
                  </EstimateButton>
                  <CTAButton href={siteConfig.phoneHref} variant="secondary-light">
                    Call {siteConfig.phone}
                  </CTAButton>
                </div>
              </div>
              )}
            </div>

            <aside className="hidden lg:block">
              <ArticleTOC content={post.content} variant="desktop" />
            </aside>
          </div>
        </section>
      </article>

      <RelatedPosts posts={related} />
    </>
  );
}
