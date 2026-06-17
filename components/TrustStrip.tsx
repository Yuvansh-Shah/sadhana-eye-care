import { clinic } from "@/lib/clinic";

const stats = [
  { value: `${clinic.specialistYears}+ years`, label: "Specialist experience" },
  { value: `${clinic.stats.googleRating}★`, label: "Rated on Google" },
  { value: clinic.stats.practoRecommend, label: "Recommended on Practo" },
  {
    value: clinic.stats.instagramFollowers,
    label: "Followers on Instagram",
  },
];

/** Row of headline trust statistics. */
export default function TrustStrip({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const value = tone === "dark" ? "text-white" : "text-brand-900";
  const label = tone === "dark" ? "text-brand-200" : "text-brand-600";
  const divide = tone === "dark" ? "divide-brand-700" : "divide-brand-100";

  return (
    <dl
      className={`grid grid-cols-2 divide-y divide-x ${divide} overflow-hidden sm:grid-cols-4 sm:divide-y-0`}
    >
      {stats.map((s) => (
        <div key={s.label} className="px-4 py-5 text-center sm:py-6">
          <dt className={`font-display text-3xl font-semibold ${value}`}>
            {s.value}
          </dt>
          <dd
            className={`mt-1 text-xs font-medium uppercase tracking-wide ${label}`}
          >
            {s.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
