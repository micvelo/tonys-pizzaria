import type { Metadata } from "next";
import { ORDER_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Merchandise",
  description: "Shop Tony's Pizzaria apparel — order online for pickup or delivery in Ventura, CA.",
  alternates: { canonical: "/merchandise" },
};

export default function MerchandisePage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h1 className="font-display text-4xl text-yellow neon-text sm:text-5xl">
            Tony&rsquo;s Merchandise
          </h1>
          <p className="mt-4 text-cream/85">
            Grab Tony&rsquo;s apparel in-store, or order online for pickup or delivery.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={ORDER_LINKS.pickup}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal px-6 py-3 text-sm font-bold text-ink hover:bg-teal-dark hover:text-white"
            >
              Order Pickup
            </a>
            <a
              href={ORDER_LINKS.delivery}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow px-6 py-3 text-sm font-bold text-ink hover:brightness-95"
            >
              Order Delivery
            </a>
          </div>
        </div>
        <div className="bg-diner-lights h-1.5 w-full" />
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
          <p className="text-foreground/70">
            T-shirts, hats, and more featuring Tony&rsquo;s neon sign and &ldquo;Every Pizza is a
            Masterpizza!&rdquo; branding. Stop by 186 E. Thompson Blvd. to see what&rsquo;s in
            stock, or check the apparel section when you order online.
          </p>
        </div>
      </section>
    </>
  );
}
