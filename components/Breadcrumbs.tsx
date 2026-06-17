import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/clinic";
import JsonLd from "./JsonLd";

export type Crumb = { label: string; href: string };

/** Visual breadcrumb trail plus BreadcrumbList structured data. */
export default function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: Crumb[];
  tone?: "dark" | "light";
}) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
    })),
  };

  const link =
    tone === "light"
      ? "text-brand-200 hover:text-white"
      : "text-brand-500 hover:text-brand-700";
  const current = tone === "light" ? "text-white" : "text-brand-800";
  const sep = tone === "light" ? "text-brand-300" : "text-brand-300";

  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span className={`font-medium ${current}`} aria-current="page">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className={`transition-colors ${link}`}>
                  {c.label}
                </Link>
              )}
              {!last && (
                <ChevronRight
                  className={`h-3.5 w-3.5 ${sep}`}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
