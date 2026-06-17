import StarRating from "./StarRating";
import type { Review } from "@/lib/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6">
      <StarRating rating={review.rating} />
      <blockquote className="mt-4 flex-1 leading-relaxed text-brand-800">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-between border-t border-brand-100 pt-4">
        <span className="font-semibold text-brand-900">{review.author}</span>
        <span className="text-xs font-medium uppercase tracking-wider text-brand-400">
          via {review.source}
        </span>
      </figcaption>
    </figure>
  );
}
