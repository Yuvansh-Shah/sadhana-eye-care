import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

/** Header band for interior pages. */
export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
}) {
  return (
    <div className="border-b border-brand-100 bg-brand-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-6">
          <Breadcrumbs items={crumbs} />
        </div>
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent-700">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-brand-900 sm:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-700/85">
            {lead}
          </p>
        )}
      </div>
    </div>
  );
}
