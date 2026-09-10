"use client";

import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import type { BlogCardData, BlogCategory } from "@/lib/blog/types";

const ALL = "All" as const;
type Filter = typeof ALL | BlogCategory;

/**
 * The only interactive piece of /blog. It receives a slim, already-sorted card
 * list from the server and renders every card on first paint, so the full
 * article list is in the server-rendered HTML and does not depend on JS.
 * Filtering is local state on top of that.
 */
export default function BlogGrid({
  posts,
  categories,
}: {
  posts: BlogCardData[];
  categories: BlogCategory[];
}) {
  const [active, setActive] = useState<Filter>(ALL);

  const filters: Filter[] = [ALL, ...categories];
  const visible = active === ALL ? posts : posts.filter((post) => post.category === active);

  return (
    <>
      {categories.length > 1 && (
        <nav aria-label="Filter articles by category" className="mt-8">
          {/* Horizontal scroll keeps the row on one line on narrow screens
              without pushing the page into horizontal overflow. */}
          <ul className="flex gap-2 overflow-x-auto scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap">
            {filters.map((filter) => {
              const isActive = filter === active;
              return (
                <li key={filter} className="shrink-0">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(filter)}
                    className={`px-4 py-2.5 border-2 font-heading font-semibold uppercase tracking-[0.04em] text-xs cursor-pointer transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
                      isActive
                        ? "bg-brand-ink border-brand-ink text-text-on-dark"
                        : "bg-surface-main border-border-subtle text-text-secondary hover:border-brand-ink hover:text-brand-ink"
                    }`}
                  >
                    {filter}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {visible.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-10 border-2 border-border-subtle bg-surface-subtle px-6 py-10 text-center text-text-secondary">
          No articles in this category yet.
        </p>
      )}
    </>
  );
}
