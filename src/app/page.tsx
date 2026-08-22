import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { getMenu } from "@/lib/data";
import { BUSINESS, ORDER_LINKS, SITE_TAGLINE } from "@/lib/constants";

const FAQS = [
  {
    question: "Where is Tony's Pizzaria located?",
    answer:
      "Tony's Pizzaria is at 186 E. Thompson Blvd. in Ventura, California, at Surfer's Point — a short walk from the beach and the Ventura Pier.",
  },
  {
    question: "How long has Tony's Pizzaria been open?",
    answer:
      'Tony\'s Pizzaria has been family-owned and operated since June 1959, when founder Johnny "Tony" Barrios started sharing his family\'s pizza recipes with Ventura.',
  },
  {
    question: "Does Tony's Pizzaria offer delivery and pickup?",
    answer:
      "Yes. Order pickup or delivery online through Tony's Pizzaria's ordering partner, ChowNow, linked from the menu page and every order button on this site.",
  },
  {
    question: "What style of pizza does Tony's Pizzaria make?",
    answer:
      "Tony's makes New York style hand-tossed pizza with dough and sauce made from scratch daily, fresh-cut vegetables, premium mozzarella grated daily, and a signature homemade sausage.",
  },
  {
    question: "Does Tony's Pizzaria cater or support fundraisers?",
    answer:
      "Yes. Tony's Pizzaria caters events of any size and has supported Ventura schools and non-profits with pizza fundraisers for over 60 years — a percentage of every fundraiser purchase is donated back to the organization.",
  },
];

export default async function HomePage() {
  const menu = await getMenu();
  const sliceSpecials = menu.find((c) => c.slug === "slice-specials")?.items ?? [];
  const localFavorites = menu.find((c) => c.slug === "local-favorites")?.items.slice(0, 6) ?? [];

  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, var(--color-teal) 0%, transparent 40%), radial-gradient(circle at 80% 0%, var(--color-yellow) 0%, transparent 35%)",
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-display text-xs tracking-[0.3em] text-teal sm:text-sm">
            SURFER&rsquo;S POINT &middot; VENTURA, CALIFORNIA &middot; SINCE 1959
          </p>
          <h1 className="font-display text-4xl leading-tight text-yellow neon-text sm:text-6xl">
            {SITE_TAGLINE}
          </h1>
          <p className="max-w-2xl text-base text-cream/85 sm:text-lg">
            Family-owned, New York style hand-tossed pizza made fresh daily, a block from the
            beach. Fresh dough, homemade sauce, and the Barrios family recipe since 1959.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={ORDER_LINKS.pickup}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal px-6 py-3 text-sm font-bold text-ink transition hover:bg-teal-dark hover:text-white"
            >
              Order Pickup
            </a>
            <a
              href={ORDER_LINKS.delivery}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow px-6 py-3 text-sm font-bold text-ink transition hover:brightness-95"
            >
              Order Delivery
            </a>
            <Link
              href="/menu"
              className="rounded-full border border-cream/30 px-6 py-3 text-sm font-bold text-cream transition hover:border-yellow hover:text-yellow"
            >
              View Full Menu
            </Link>
          </div>
        </div>
        <div className="bg-diner-lights h-1.5 w-full" />
      </section>

      {/* Slice specials */}
      {sliceSpecials.length > 0 && (
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="mb-8 text-center">
              <p className="font-display text-xs tracking-[0.3em] text-teal-dark">
                MONDAY &ndash; FRIDAY, 11:00 AM &ndash; 3:00 PM
              </p>
              <h2 className="font-display mt-2 text-3xl text-ink sm:text-4xl">
                Tony&rsquo;s Slice Specials
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {sliceSpecials.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border-2 border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl text-ink">{item.name}</h3>
                    {item.price && (
                      <span className="font-display text-xl text-teal-dark">
                        ${item.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local favorites */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">Local Favorites</h2>
            <Link href="/menu" className="text-sm font-bold text-teal-dark hover:underline">
              See the full menu &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {localFavorites.map((item) => (
              <div key={item.id} className="rounded-2xl bg-ink/[0.03] p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg text-ink">{item.name}</h3>
                  {item.price && (
                    <span className="whitespace-nowrap font-bold text-teal-dark">
                      ${item.price.toFixed(2)}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History teaser */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-display text-xs tracking-[0.3em] text-teal">SINCE 1959</p>
            <h2 className="font-display mt-2 text-3xl text-yellow sm:text-4xl">
              A Ventura Landmark, Family-Run for Three Generations
            </h2>
            <p className="mt-4 text-cream/85">
              When Johnny &ldquo;Tony&rdquo; Barrios opened his doors in June of 1959, he shared
              recipes that had only ever been passed down within the family. Today his children
              and nephew keep that legacy alive at the same Surfer&rsquo;s Point location &mdash;
              dough and sauce made from scratch every day, vegetables chopped fresh, and mozzarella
              grated daily.
            </p>
            <Link
              href="/our-history"
              className="mt-6 inline-block rounded-full border border-yellow px-6 py-3 text-sm font-bold text-yellow transition hover:bg-yellow hover:text-ink"
            >
              Read Our Full Story
            </Link>
          </div>
          <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="font-display text-2xl leading-snug text-cream">
              &ldquo;California beach pizza perfected!&rdquo;
            </p>
            <footer className="mt-4 text-sm text-cream/60">
              &mdash; Dustin S., Los Angeles, CA
            </footer>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-center text-3xl text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 divide-y divide-ink/10">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base text-ink">
                  {faq.question}
                  <span className="ml-4 text-teal-dark transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-foreground/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-ink">Find Us at Surfer&rsquo;s Point</h2>
            <p className="mt-3 text-foreground/70">
              {BUSINESS.streetAddress}, {BUSINESS.addressLocality}, {BUSINESS.addressRegion}{" "}
              {BUSINESS.postalCode}
            </p>
            <p className="mt-1 text-foreground/70">
              <a href={`tel:${BUSINESS.phone}`} className="font-bold text-teal-dark hover:underline">
                {BUSINESS.phoneDisplay}
              </a>
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Tony%27s+Pizzaria+186+E+Thompson+Blvd+Ventura+CA+93001"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition hover:bg-ink-soft"
            >
              Get Directions
            </a>
          </div>
          <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-ink/15 bg-ink/[0.03] p-8 text-center text-sm text-foreground/60">
            A block from the beach at Surfer&rsquo;s Point &mdash; look for the neon sign.
          </div>
        </div>
      </section>
    </>
  );
}
