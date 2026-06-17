import type { ReactNode } from "react";

type Tint = "white" | "sand" | "brand" | "brand-dark";

const tints: Record<Tint, string> = {
  white: "bg-white",
  sand: "bg-sand-50",
  brand: "bg-brand-50",
  "brand-dark": "bg-brand-900 text-white",
};

/** Full-width section band with a centred content container. */
export function Section({
  children,
  tint = "white",
  id,
  className = "",
  spacing = "normal",
}: {
  children: ReactNode;
  tint?: Tint;
  id?: string;
  className?: string;
  spacing?: "normal" | "tight";
}) {
  const pad = spacing === "tight" ? "py-12 sm:py-16" : "py-16 sm:py-24";
  return (
    <section id={id} className={`${tints[tint]} ${pad} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

/** Eyebrow + heading + lead paragraph block. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  const titleColor = tone === "light" ? "text-white" : "text-brand-900";
  const leadColor = tone === "light" ? "text-brand-100" : "text-brand-700/85";
  const eyebrowColor = tone === "light" ? "text-accent-300" : "text-accent-700";

  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.16em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      )}
      <As
        className={`font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </As>
      {lead && (
        <p className={`mt-4 text-lg leading-relaxed ${leadColor}`}>{lead}</p>
      )}
    </div>
  );
}
