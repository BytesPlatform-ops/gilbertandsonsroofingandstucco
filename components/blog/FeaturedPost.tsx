import Link from "next/link";
import SafeMedia from "@/components/shared/SafeMedia";
import { formatDate, readTimeOf } from "@/lib/blog/utils";
import type { BlogPost } from "@/lib/blog/types";

/** Large editorial slot for the newest featured article. */
export default function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article>
      <Link
        href={`/blog/${post.slug}`}
        className="group grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
      >
        <div className="relative aspect-[4/3] overflow-hidden border-2 border-border-subtle transition-colors duration-150 ease-out group-hover:border-brand-ink">
          <SafeMedia
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            priority
            rounded={false}
            sizes="(min-width: 1024px) 570px, 100vw"
            className="transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          {post.status === "draft" && (
            <span className="absolute top-4 left-4 bg-brand-ink text-text-on-dark section-marker px-2.5 py-1">
              Draft
            </span>
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-text-secondary">
            <span className="section-marker text-brand-primary">{post.category}</span>
            <span aria-hidden="true" className="w-1 h-1 bg-border-subtle" />
            <time dateTime={post.publishedAt} className="text-xs">
              {formatDate(post.publishedAt)}
            </time>
            <span aria-hidden="true" className="w-1 h-1 bg-border-subtle" />
            <span className="text-xs">{readTimeOf(post)} min read</span>
          </div>

          <h3 className="mt-5 font-heading font-semibold text-brand-ink text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.05]">
            {post.title}
          </h3>

          <p className="body-large mt-5 text-text-secondary max-w-xl">{post.excerpt}</p>

          <span className="mt-8 inline-flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-[0.04em] text-brand-primary">
            Read Article
            <span
              aria-hidden="true"
              className="transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
