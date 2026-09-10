import { headingId } from "@/lib/blog/utils";
import type { ContentBlock } from "@/lib/blog/types";

/**
 * Contents built from the article's H2 blocks. Because headings are structured
 * data rather than parsed HTML, this needs no client JS at all — plain anchor
 * links, a native <details> on mobile and sticky positioning on desktop.
 *
 * Rendered once per breakpoint by the article page: `variant="mobile"` above
 * the body, `variant="desktop"` in the side column.
 */
export default function ArticleTOC({
  content,
  variant,
}: {
  content: ContentBlock[];
  variant: "mobile" | "desktop";
}) {
  const headings = content.filter(
    (block): block is Extract<ContentBlock, { type: "heading" }> =>
      block.type === "heading" && block.level === 2
  );

  // Not worth a contents list for a single section.
  if (headings.length < 2) return null;

  const links = headings.map((heading) => (
    <li key={heading.text}>
      <a
        href={`#${headingId(heading.text)}`}
        className="block py-1.5 pl-4 -ml-px text-sm leading-snug text-text-secondary border-l-2 border-border-subtle transition-colors duration-150 hover:text-brand-ink hover:border-brand-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      >
        {heading.text}
      </a>
    </li>
  ));

  if (variant === "mobile") {
    return (
      <details className="lg:hidden border-2 border-border-subtle bg-surface-subtle px-5 py-4 mb-10">
        <summary className="section-marker text-brand-ink cursor-pointer">Contents</summary>
        <nav aria-label="Article contents" className="mt-4">
          <ul className="flex flex-col">{links}</ul>
        </nav>
      </details>
    );
  }

  return (
    <nav aria-label="Article contents" className="sticky top-28">
      <p className="section-marker text-brand-ink mb-4">Contents</p>
      <ul className="flex flex-col">{links}</ul>
    </nav>
  );
}
