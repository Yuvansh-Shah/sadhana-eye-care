import { Star } from "lucide-react";

/** A 5-star rating display. */
export default function StarRating({
  rating = 5,
  size = "md",
  label,
}: {
  rating?: number;
  size?: "sm" | "md";
  label?: string;
}) {
  const px = size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5";
  const rounded = Math.round(rating);
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={label ?? `Rated ${rating} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${px} ${
            i <= rounded
              ? "fill-accent-400 text-accent-400"
              : "fill-brand-100 text-brand-100"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
