import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AgentChat from "@/components/AgentChat";
import { clinic, SITE_URL } from "@/lib/clinic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const description =
  "Sadhana Eye Care, Marine Lines — Dr. Dipti Shah, ophthalmologist with 28 years specialising in cataract surgery and LASIK in South Mumbai. Book an appointment today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Sadhana Eye Care | Dr. Dipti Shah — Ophthalmologist in Marine Lines, Mumbai",
    template: "%s | Sadhana Eye Care",
  },
  description,
  applicationName: clinic.name,
  keywords: [
    "ophthalmologist Marine Lines",
    "eye doctor Marine Lines Mumbai",
    "cataract surgery Mumbai",
    "LASIK surgery South Mumbai",
    "Dr Dipti Shah",
    "Sadhana Eye Care",
    "glaucoma specialist Marine Lines",
    "eye specialist Princess Street",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: clinic.name,
    title:
      "Sadhana Eye Care | Dr. Dipti Shah — Ophthalmologist in Marine Lines, Mumbai",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadhana Eye Care | Dr. Dipti Shah, Marine Lines Mumbai",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable} h-full`}
    >
      <body className="flex min-h-full flex-col pb-16 lg:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <AgentChat />
        <MobileCtaBar />
      </body>
    </html>
  );
}
