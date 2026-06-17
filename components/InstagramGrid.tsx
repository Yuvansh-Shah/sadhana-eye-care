import { Play } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import { clinic } from "@/lib/clinic";

// Static preview of the type of educational content on Dr. Shah's Instagram.
// Replace with a live feed via the Instagram Basic Display API (PRD 6.2).
const posts = [
  "Understanding cataracts — and when surgery helps",
  "What really happens during LASIK",
  "Screen strain: simple habits to protect your eyes",
  "Diabetes and your eyes — why screening matters",
  "Signs it is time to see an eye doctor",
  "Caring for your child's vision",
];

export default function InstagramGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {posts.map((caption, i) => (
        <a
          key={i}
          href={clinic.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 p-4 ring-1 ring-inset ring-white/10 transition-transform hover:-translate-y-0.5"
        >
          <InstagramIcon className="absolute left-3 top-3 h-5 w-5 text-white/70" />
          <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-white/15 backdrop-blur">
            <Play className="h-3.5 w-3.5 text-white" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium leading-snug text-white">
            {caption}
          </span>
          <span className="sr-only">View on Instagram</span>
        </a>
      ))}
    </div>
  );
}
