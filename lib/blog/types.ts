/**
 * Blog content model.
 *
 * Articles are plain typed data — no CMS, no MDX, no runtime parsing of raw
 * HTML. Body content is a discriminated union of blocks so the renderer stays
 * a Server Component and every article is type-checked at build time.
 */

/**
 * Authoring vocabulary for categories. This is the allowed set a writer may
 * pick from — the categories actually *shown* in the UI are derived from the
 * posts that exist (see `getCategoriesInUse`), so an unused entry here never
 * renders an empty filter.
 */
export const BLOG_CATEGORIES = [
  "Roofing",
  "Stucco",
  "Roof Maintenance",
  "Storm Damage",
  "Roofing Materials",
  "Commercial Roofing",
  "Homeowner Guides",
  "Local Guides",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogAuthor = {
  name: string;
  /** Optional role. Only use a title that is genuinely true of the person. */
  title?: string;
};

/**
 * Inline markup supported inside `text` and list `items`:
 *   [label](/roofing/roof-repairs)   internal link
 *   [label](https://example.com)     external link (opens in a new tab)
 *   **bold**
 * Anything else is rendered as literal text — no raw HTML is ever injected.
 */
export type InlineText = string;

export type ContentBlock =
  | { type: "paragraph"; text: InlineText }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; ordered?: boolean; items: InlineText[] }
  | { type: "callout"; title?: string; text: InlineText }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string };

export type BlogPostStatus = "draft" | "published";

export type BlogPost = {
  /** URL segment. Must be unique and kebab-case: /blog/{slug} */
  slug: string;
  /** Visible <h1> and card heading. */
  title: string;
  /** Card + featured summary. Also the OG description fallback. */
  excerpt: string;
  /** SEO <title>. Rendered absolute — the parent brand suffix is not appended. */
  metaTitle: string;
  /** SEO meta description. */
  metaDescription: string;
  category: BlogCategory;
  tags: string[];
  /** ISO date, "YYYY-MM-DD". Drives sorting and <time datetime>. */
  publishedAt: string;
  /** ISO date. Set when an article is materially revised. */
  updatedAt?: string;
  author: BlogAuthor;
  featuredImage: string;
  /** Meaningful description of the image — never the filename. */
  featuredImageAlt: string;
  /** The newest post with `featured: true` gets the large slot on /blog. */
  featured?: boolean;
  /** Minutes. Omit to let it be estimated from the content. */
  readTime?: number;
  /** Only "published" posts are listed, prerendered, indexed or in the sitemap. */
  status: BlogPostStatus;
  /**
   * Hrefs of existing service routes to link from the article footer, e.g.
   * "/roofing/roof-repairs". Labels are resolved from the site's real route
   * data, so nothing is invented here.
   */
  relatedServices?: string[];
  /** Target keywords. Metadata only — never rendered as visible text. */
  keywords?: string[];
  /**
   * Set false when the article already ends with its own contact/CTA section,
   * so the generic estimate box is not rendered a second time. Defaults true.
   */
  showEstimateCta?: boolean;
  content: ContentBlock[];
};

/** Slim projection handed to the client-side filter — no body content. */
export type BlogCardData = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  featuredImage: string;
  featuredImageAlt: string;
  readTime: number;
  isDraft: boolean;
};
