import { clinic, googleMapsEmbed } from "@/lib/clinic";

/** Google Maps embed (no API key required). */
export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <iframe
      title={`Map to ${clinic.name}, ${clinic.address.locality}`}
      src={googleMapsEmbed()}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`h-full w-full border-0 ${className}`}
    />
  );
}
