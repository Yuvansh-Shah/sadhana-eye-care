import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Aspect = "wide" | "video" | "square" | "portrait" | "tall";

const aspects: Record<Aspect, string> = {
  wide: "aspect-[3/2]",
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4]",
};

/**
 * Renders a real optimised photo when `src` is given, otherwise a styled
 * placeholder. To add a photo: drop the file in /public/images and pass its
 * path as `src` (e.g. src="/images/clinic-reception.jpg").
 */
export default function ImagePlaceholder({
  label,
  src,
  icon: Icon = ImageIcon,
  aspect = "wide",
  tone = "brand",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className = "",
}: {
  label: string;
  src?: string;
  icon?: LucideIcon;
  aspect?: Aspect;
  tone?: "brand" | "sand";
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative ${aspects[aspect]} ${className} overflow-hidden rounded-2xl ring-1 ring-inset ring-brand-900/10`}
      >
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  const bg =
    tone === "sand"
      ? "from-sand-100 to-sand-50 text-brand-400"
      : "from-brand-100 to-brand-50 text-brand-400";
  return (
    <div
      role="img"
      aria-label={`${label} (photograph to be added)`}
      className={`${aspects[aspect]} ${className} flex flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br ${bg} ring-1 ring-inset ring-brand-200/60`}
    >
      <Icon className="h-8 w-8" aria-hidden="true" strokeWidth={1.5} />
      <span className="px-4 text-center text-xs font-medium uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
