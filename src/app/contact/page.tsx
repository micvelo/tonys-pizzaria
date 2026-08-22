import type { Metadata } from "next";
import { BUSINESS, HOURS, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Hours",
  description:
    "Contact Tony's Pizzaria in Ventura, CA: address, phone number, hours of operation, and directions to Surfer's Point.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-5xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl text-ink">Contact &amp; Hours</h1>
          <address className="mt-6 space-y-1 not-italic text-lg text-foreground/80">
            <p className="font-display text-ink">Tony&rsquo;s Pizzaria</p>
            <p>{BUSINESS.streetAddress}</p>
            <p>
              {BUSINESS.addressLocality}, {BUSINESS.addressRegion} {BUSINESS.postalCode}
            </p>
            <p>
              <a href={`tel:${BUSINESS.phone}`} className="font-bold text-teal-dark hover:underline">
                {BUSINESS.phoneDisplay}
              </a>
            </p>
          </address>

          <div className="mt-8">
            <h2 className="font-display text-lg text-ink">Hours of Operation</h2>
            <ul className="mt-2 space-y-1 text-foreground/70">
              {HOURS.map((h) => (
                <li key={h.days}>
                  <span className="font-semibold text-ink">{h.days}:</span> {h.hours}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-foreground/50">
              *Patio remains open 1 hour after closing.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-teal-dark hover:underline"
            >
              Facebook
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-teal-dark hover:underline"
            >
              Instagram
            </a>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Tony%27s+Pizzaria+186+E+Thompson+Blvd+Ventura+CA+93001"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition hover:bg-ink-soft"
          >
            Get Directions
          </a>
        </div>

        <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-ink/15 bg-ink/[0.03] p-8 text-center text-sm text-foreground/60">
          A block from the beach at Surfer&rsquo;s Point &mdash; look for the neon sign.
        </div>
      </div>
    </section>
  );
}
