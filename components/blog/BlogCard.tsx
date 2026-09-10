import Link from "next/link";
import SafeMedia from "@/components/shared/SafeMedia";
import { formatDate } from "@/lib/blog/utils";
import type { BlogCardData } from "@/lib/blog/types";

/**
 * Article card. The whole card is one anchor, so it is keyboard reachable and
 * announced as a single link; hover effects are colour/transform only and
 * driven from the anchor's group state.
 */
export default function BlogCard({ post }: { post: BlogCardData }) {
  return (
    <article className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col border-2 border-border-subtle bg-surface-main transition-colors duration-150 ease-out hover:border-brand-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      >
        <div className="relative aspect-[3/2] overflow-hidden">
          <SafeMedia
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            rounded={false}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          {post.isDraft && (
            <span className="absolute top-3 left-3 bg-brand-ink text-text-on-dark section-marker px-2.5 py-1">
              Draft
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-text-secondary">
            <span className="section-marker text-brand-primary">{post.category}</span>
            <span aria-hidden="true" className="w-1 h-1 bg-border-subtle" />
            <time dateTime={post.publishedAt} className="text-xs">
              {formatDate(post.publishedAt)}
            </time>
          </div>

          <h3 className="mt-3 font-heading font-semibold text-xl leading-snug text-brand-ink">
            {post.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between gap-4 pt-6">
            <span className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary">
              Read Article
              <span
                aria-hidden="true"
                className="transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </span>
            <span className="text-xs text-text-secondary whitespace-nowrap">
              {post.readTime} min read
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
