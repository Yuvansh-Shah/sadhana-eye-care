"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./ReviewCard";
import type { Review } from "@/lib/reviews";

/** Accessible, dependency-free scroll-snap carousel for reviews. */
export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]"
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous reviews"
          className="grid h-11 w-11 place-items-center rounded-full border border-brand-200 bg-white text-brand-700 transition-colors hover:bg-brand-50"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next reviews"
          className="grid h-11 w-11 place-items-center rounded-full border border-brand-200 bg-white text-brand-700 transition-colors hover:bg-brand-50"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
