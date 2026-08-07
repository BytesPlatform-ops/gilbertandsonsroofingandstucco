import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex flex-wrap items-center gap-2 text-text-secondary">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-ink">
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-ink" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
