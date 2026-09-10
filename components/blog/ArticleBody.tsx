import SafeMedia from "@/components/shared/SafeMedia";
import InlineText from "@/components/blog/InlineText";
import { headingId } from "@/lib/blog/utils";
import type { ContentBlock } from "@/lib/blog/types";

/**
 * Renders an article's content blocks. Server Component — no client JS.
 * Reading measure is capped by the parent container, not here.
 */
export default function ArticleBody({ content }: { content: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-7 md:gap-8">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-[1.0625rem] md:text-lg leading-[1.75] text-text-secondary">
                <InlineText text={block.text} />
              </p>
            );

          case "heading": {
            const id = headingId(block.text);
            return block.level === 2 ? (
              <h2
                key={index}
                id={id}
                className="scroll-mt-32 font-heading font-semibold text-brand-ink text-2xl md:text-[2rem] leading-tight mt-4 md:mt-6 pt-2 border-t border-border-subtle"
              >
                {block.text}
              </h2>
            ) : (
              <h3
                key={index}
                id={id}
                className="scroll-mt-32 font-heading font-semibold text-brand-ink text-xl md:text-2xl leading-snug mt-2"
              >
                {block.text}
              </h3>
            );
          }

          case "list": {
            const items = block.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex gap-3.5">
                <span
                  aria-hidden="true"
                  className={
                    block.ordered
                      ? "shrink-0 font-heading font-semibold text-sm text-brand-primary pt-1 tabular-nums"
                      : "shrink-0 w-1.5 h-1.5 mt-[0.7em] bg-brand-primary"
                  }
                >
                  {block.ordered ? String(itemIndex + 1).padStart(2, "0") : null}
                </span>
                <span className="text-[1.0625rem] md:text-lg leading-[1.7] text-text-secondary">
                  <InlineText text={item} />
                </span>
              </li>
            ));

            return block.ordered ? (
              <ol key={index} className="flex flex-col gap-3.5">
                {items}
              </ol>
            ) : (
              <ul key={index} className="flex flex-col gap-3.5">
                {items}
              </ul>
            );
          }

          case "callout":
            return (
              <aside
                key={index}
                className="border-l-2 border-brand-primary bg-surface-subtle px-6 py-5"
              >
                {block.title && (
                  <p className="section-marker text-brand-primary mb-2">{block.title}</p>
                )}
                <p className="text-base md:text-[1.0625rem] leading-[1.7] text-text-secondary">
                  <InlineText text={block.text} />
                </p>
              </aside>
            );

          case "quote":
            return (
              <blockquote key={index} className="border-t-2 border-b-2 border-brand-ink py-7 my-2">
                <p className="font-heading font-semibold text-xl md:text-2xl leading-snug text-brand-ink">
                  {block.text}
                </p>
                {block.attribution && (
                  <footer className="section-marker text-text-secondary mt-4">
                    {block.attribution}
                  </footer>
                )}
              </blockquote>
            );

          case "image":
            return (
              <figure key={index} className="my-2">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <SafeMedia
                    src={block.src}
                    alt={block.alt}
                    fill
                    rounded={false}
                    sizes="(min-width: 1024px) 800px, 100vw"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-sm text-text-secondary border-l-2 border-border-subtle pl-4">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "table":
            return (
              <figure key={index} className="my-2">
                {/* Wide tables scroll inside their own box so the page never does. */}
                <div className="overflow-x-auto border border-border-subtle">
                  <table className="w-full min-w-[520px] border-collapse text-left">
                    <thead>
                      <tr className="bg-surface-subtle">
                        {block.head.map((cell) => (
                          <th
                            key={cell}
                            scope="col"
                            className="section-marker text-brand-ink px-4 py-3 border-b border-border-subtle whitespace-nowrap"
                          >
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-border-subtle last:border-b-0">
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="px-4 py-3 text-base text-text-secondary align-top"
                            >
                              <InlineText text={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-sm text-text-secondary">{block.caption}</figcaption>
                )}
              </figure>
            );
        }
      })}
    </div>
  );
}
