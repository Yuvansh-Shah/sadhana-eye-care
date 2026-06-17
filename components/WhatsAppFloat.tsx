import { whatsappHref, clinic } from "@/lib/clinic";
import { WhatsAppIcon } from "./SocialIcons";

/** Floating WhatsApp contact button — sits above the mobile CTA bar. */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref(
        `Hello, I would like to enquire about an appointment at ${clinic.name}.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with the clinic on WhatsApp"
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 lg:bottom-6 lg:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
