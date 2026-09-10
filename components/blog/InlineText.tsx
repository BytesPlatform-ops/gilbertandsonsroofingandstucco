import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * Renders the small inline vocabulary used in article copy:
 *   [label](/roofing)  [label](https://example.com)  **bold**
 *
 * Bold segments are rendered recursively, so a link inside bold — such as
 * `**[Asphalt shingle roofs](/blog/…).**` — still resolves to a real link
 * instead of leaking its markup onto the page. Bold cannot nest inside bold,
 * so the recursion is one level deep.
 *
 * Everything is turned into React nodes — no HTML string is ever injected —
 * so unmatched brackets or stray asterisks render as literal text instead of
 * breaking the page.
 */
const INLINE_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

export default function InlineText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(INLINE_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) nodes.push(text.slice(lastIndex, index));

    const [full, linkLabel, href, boldText] = match;

    if (linkLabel && href) {
      const isExternal = /^https?:\/\//.test(href);
      nodes.push(
        isExternal ? (
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary underline underline-offset-4 decoration-brand-primary/40 hover:decoration-brand-primary transition-colors"
          >
            {linkLabel}
          </a>
        ) : (
          <Link
            key={key++}
            href={href}
            className="text-brand-primary underline underline-offset-4 decoration-brand-primary/40 hover:decoration-brand-primary transition-colors"
          >
            {linkLabel}
          </Link>
        )
      );
    } else if (boldText) {
      nodes.push(
        <strong key={key++} className="font-semibold text-brand-ink">
          <InlineText text={boldText} />
        </strong>
      );
    }

    lastIndex = index + full.length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));

  return (
    <>
      {nodes.map((node, index) => (
        <Fragment key={index}>{node}</Fragment>
      ))}
    </>
  );
}
