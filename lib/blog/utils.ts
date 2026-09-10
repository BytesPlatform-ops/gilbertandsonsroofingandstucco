import { roofingServices } from "@/lib/roofing-services";
import { blogPosts } from "@/lib/blog/posts";
import type { BlogCardData, BlogCategory, BlogPost, ContentBlock } from "@/lib/blog/types";

/**
 * Draft articles are visible while running `next dev` so a writer can preview
 * an unfinished post at its real URL. In a production build they are excluded
 * everywhere — listing, related posts, prerendered params and sitemap — and the
 * article route returns a 404.
 */
export const draftsVisible = process.env.NODE_ENV === "development";

/** Words per minute used when `readTime` is not set explicitly. */
const WORDS_PER_MINUTE = 220;

function blockText(block: ContentBlock): string {
  switch (block.type) {
    case "paragraph":
    case "heading":
      return block.text;
    case "list":
      return block.items.join(" ");
    case "callout":
      return `${block.title ?? ""} ${block.text}`;
    case "quote":
      return `${block.text} ${block.attribution ?? ""}`;
    case "image":
      return block.caption ?? "";
    case "table":
      return [...block.head, ...block.rows.flat()].join(" ");
  }
}

export function estimateReadTime(content: ContentBlock[]): number {
  const words = content
    .map(blockText)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function readTimeOf(post: BlogPost): number {
  return post.readTime ?? estimateReadTime(post.content);
}

/** Stable ISO -> epoch. Returns 0 for an unparseable date so sorting never throws. */
function timeOf(isoDate: string): number {
  const ms = Date.parse(isoDate);
  return Number.isNaN(ms) ? 0 : ms;
}

/** Newest first, with slug as a deterministic tiebreak for same-day posts. */
function byNewest(a: BlogPost, b: BlogPost): number {
  const diff = timeOf(b.publishedAt) - timeOf(a.publishedAt);
  return diff !== 0 ? diff : a.slug.localeCompare(b.slug);
}

/** Published articles only — the canonical list for anything public. */
export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.status === "published").sort(byNewest);
}

/** What the /blog page renders: adds drafts during `next dev` only. */
export function getVisiblePosts(): BlogPost[] {
  if (!draftsVisible) return getPublishedPosts();
  return [...blogPosts].sort(byNewest);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getVisiblePosts().find((post) => post.slug === slug);
}

/** The newest featured article, or undefined when none is flagged. */
export function getFeaturedPost(posts: BlogPost[]): BlogPost | undefined {
  return posts.find((post) => post.featured);
}

/** Categories that actually have at least one article, in site order. */
export function getCategoriesInUse(posts: BlogPost[]): BlogCategory[] {
  const seen = new Set<BlogCategory>();
  for (const post of posts) seen.add(post.category);
  return [...seen];
}

/**
 * Related articles, best match first: same category, then shared tags, then
 * recency. Never includes the current article, and returns fewer than `limit`
 * rather than padding with unrelated posts.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const pool = draftsVisible ? getVisiblePosts() : getPublishedPosts();
  const tags = new Set(post.tags);

  return pool
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((tag) => tags.has(tag)).length;
      const score = (candidate.category === post.category ? 3 : 0) + sharedTags;
      return { candidate, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || byNewest(a.candidate, b.candidate))
    .slice(0, limit)
    .map((entry) => entry.candidate);
}

/** "2026-09-10" -> "September 10, 2026". UTC-pinned so the day never shifts. */
export function formatDate(isoDate: string): string {
  const ms = Date.parse(isoDate);
  if (Number.isNaN(ms)) return isoDate;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(ms));
}

export function toCardData(post: BlogPost): BlogCardData {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    publishedAt: post.publishedAt,
    featuredImage: post.featuredImage,
    featuredImageAlt: post.featuredImageAlt,
    readTime: readTimeOf(post),
    isDraft: post.status === "draft",
  };
}

/** Anchor id for an article H2/H3, used by the table of contents. */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/**
 * Labels for the site's real routes. `relatedServices` stores hrefs only, so a
 * link label always comes from existing site data rather than being retyped.
 */
const staticRouteLabels: Record<string, string> = {
  "/roofing": "Roofing Services",
  "/stucco": "Stucco Services",
  "/service-areas": "Service Areas",
  "/service-areas/las-cruces": "Las Cruces, NM",
};

export function serviceLinksFor(post: BlogPost): { label: string; href: string }[] {
  return (post.relatedServices ?? [])
    .map((href) => {
      const service = roofingServices.find((entry) => entry.href === href);
      const label = service?.title ?? staticRouteLabels[href];
      return label ? { label, href } : null;
    })
    .filter((entry): entry is { label: string; href: string } => entry !== null);
}
