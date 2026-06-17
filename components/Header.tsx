"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { navLinks } from "@/lib/nav";
import { clinic, telHref } from "@/lib/clinic";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "border-brand-100 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(l.href)
                  ? "bg-brand-50 text-brand-700"
                  : "text-brand-800 hover:bg-brand-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            href={telHref(clinic.primaryPhone)}
            variant="secondary"
            size="md"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call
          </Button>
          <Button href="/contact#appointment" variant="primary" size="md">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" /> Book
            Appointment
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-xl text-brand-800 hover:bg-brand-50 lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-brand-100 bg-white lg:hidden"
        >
          <nav
            className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8"
            aria-label="Mobile"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive(l.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-brand-800 hover:bg-brand-50"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Button
                href={telHref(clinic.primaryPhone)}
                variant="secondary"
                size="lg"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Call
              </Button>
              <Button href="/contact#appointment" variant="primary" size="lg">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" /> Book
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
