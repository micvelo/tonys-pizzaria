"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, ORDER_LINKS, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-cream shadow-lg shadow-black/30">
      <div className="bg-diner-lights h-1.5 w-full" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/tonys-logo.png"
            alt="Tony's Pizzaria, Est. 1959"
            width={56}
            height={56}
            priority
            className="h-12 w-12 sm:h-14 sm:w-14"
          />
          <span className="hidden text-sm text-cream/80 sm:inline">Pizzaria &middot; Ventura, CA</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-cream/90 transition hover:text-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={ORDER_LINKS.pickup}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal px-4 py-2 text-sm font-bold text-ink transition hover:bg-teal-dark hover:text-white"
          >
            Order Pickup
          </a>
          <a
            href={ORDER_LINKS.delivery}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow px-4 py-2 text-sm font-bold text-ink transition hover:brightness-95"
          >
            Order Delivery
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-cream transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-cream transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-cream transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2 text-sm font-semibold uppercase tracking-wide text-cream/90 hover:bg-white/5 hover:text-yellow"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex gap-2">
            <a
              href={ORDER_LINKS.pickup}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full bg-teal px-4 py-2 text-center text-sm font-bold text-ink"
            >
              Pickup
            </a>
            <a
              href={ORDER_LINKS.delivery}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full bg-yellow px-4 py-2 text-center text-sm font-bold text-ink"
            >
              Delivery
            </a>
          </div>
        </div>
      )}
      <span className="sr-only">{SITE_NAME}</span>
    </header>
  );
}
