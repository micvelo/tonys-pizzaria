import Image from "next/image";
import { BUSINESS, HOURS, SOCIAL_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="bg-diner-lights h-1.5 w-full" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/tonys-logo.png"
            alt={SITE_NAME}
            width={72}
            height={72}
            className="h-16 w-16"
          />
          <address className="mt-3 not-italic leading-relaxed text-cream/80">
            {BUSINESS.streetAddress}
            <br />
            {BUSINESS.addressLocality}, {BUSINESS.addressRegion} {BUSINESS.postalCode}
            <br />
            <a href={`tel:${BUSINESS.phone}`} className="hover:text-yellow">
              {BUSINESS.phoneDisplay}
            </a>
          </address>
        </div>

        <div>
          <h2 className="font-display text-lg text-yellow">Hours</h2>
          <ul className="mt-3 space-y-1 text-cream/80">
            {HOURS.map((h) => (
              <li key={h.days}>
                <span className="font-semibold text-cream">{h.days}:</span> {h.hours}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-cream/60">*Patio remains open 1 hour after closing.</p>
        </div>

        <div>
          <h2 className="font-display text-lg text-yellow">Follow Us</h2>
          <div className="mt-3 flex gap-4">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 hover:text-yellow"
            >
              Facebook
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 hover:text-yellow"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-cream/50">
        &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
