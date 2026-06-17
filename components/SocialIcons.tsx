// Brand glyphs. lucide-react removed its social/brand icons, so these are
// provided as lightweight inline SVGs that match lucide's stroke style.

type IconProps = { className?: string };

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false as const,
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable={false}
      className={className}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.04c-.24.68-1.42 1.31-1.95 1.36-.5.05-1.13.21-3.66-.78-3.07-1.21-5.04-4.36-5.2-4.56-.15-.2-1.24-1.65-1.24-3.15s.79-2.24 1.07-2.55c.28-.31.61-.39.81-.39h.58c.19 0 .44-.07.69.53.24.59.83 2.04.9 2.19.07.15.12.32.02.52-.1.2-.15.32-.3.5l-.45.53c-.15.15-.31.32-.13.62.18.3.79 1.31 1.7 2.12 1.17 1.04 2.16 1.36 2.46 1.51.3.15.48.13.66-.08.18-.2.76-.89.96-1.19.2-.3.41-.25.69-.15.28.1 1.77.83 2.07.98.3.15.5.22.58.35.07.13.07.74-.17 1.42Z" />
    </svg>
  );
}
