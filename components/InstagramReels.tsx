import Image from "next/image";
import { Play } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import { reels } from "@/lib/reels";
import InstagramGrid from "./InstagramGrid";

/**
 * Featured Instagram reels (lib/reels.ts) as fixed-ratio cards that open the
 * reel on Instagram when clicked.
 *
 * Official Instagram embeds were dropped here: they have a 326px minimum
 * width, render as very tall un-restylable cards, and scale unpredictably.
 * Fixed-aspect cards stay consistent at every viewport and load instantly.
 *
 * Falls back to a static preview grid when no reels are configured.
 */
export default function InstagramReels() {
  if (reels.length === 0) {
    return <InstagramGrid />;
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
      {reels.map((reel, i) => (
        <a
          key={reel.url}
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 ring-1 ring-inset ring-white/10 transition-transform hover:-translate-y-0.5"
        >
          {reel.cover && (
            <Image
              src={reel.cover}
              alt={`Instagram reel from Dr. Dipti Shah`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover"
            />
          )}

          {/* Legibility overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-black/15" />

          <InstagramIcon className="absolute left-2.5 top-2.5 h-5 w-5 text-white/85" />

          {/* Play button */}
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-110">
              <Play
                className="h-5 w-5 translate-x-0.5 fill-brand-700 text-brand-700"
                aria-hidden="true"
              />
            </span>
          </span>

          <span className="absolute inset-x-0 bottom-0 p-2.5 text-xs font-semibold text-white">
            Watch reel
          </span>
          <span className="sr-only">Open Instagram reel {i + 1}</span>
        </a>
      ))}
    </div>
  );
}
