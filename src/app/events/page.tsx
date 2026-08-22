import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { getEvents } from "@/lib/data";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events & News",
  description:
    "Live music, anniversaries, and news from Tony's Pizzaria at Surfer's Point, Ventura, California.",
  alternates: { canonical: "/events" },
};

export const revalidate = 3600;

function formatDate(dateStr: string | null) {
  if (!dateStr) return null;
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: events.map((event, i) => ({
            "@type": "Event",
            position: i + 1,
            name: event.title,
            startDate: event.event_date ?? undefined,
            description: event.summary ?? undefined,
            url: `${SITE_URL}/events#${event.slug}`,
            location: {
              "@type": "Place",
              name: "Tony's Pizzaria",
              address: "186 E. Thompson Blvd., Ventura, CA 93001",
            },
          })),
        }}
      />

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h1 className="font-display text-4xl text-yellow neon-text sm:text-5xl">
            Events &amp; News
          </h1>
          <p className="mt-3 text-cream/85">Live music, milestones, and stories from Surfer&rsquo;s Point.</p>
        </div>
        <div className="bg-diner-lights h-1.5 w-full" />
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl divide-y divide-ink/10 px-4 sm:px-6">
          {events.length === 0 && (
            <p className="py-16 text-center text-foreground/60">
              No events posted right now &mdash; check back soon.
            </p>
          )}
          {events.map((event) => (
            <article key={event.id} id={event.slug} className="scroll-mt-24 py-10">
              {event.event_date && (
                <p className="font-display text-sm text-teal-dark">{formatDate(event.event_date)}</p>
              )}
              <h2 className="font-display mt-1 text-2xl text-ink">{event.title}</h2>
              {(event.start_time || event.end_time) && (
                <p className="mt-1 text-sm font-semibold text-foreground/60">
                  {event.start_time}
                  {event.start_time && event.end_time && " – "}
                  {event.end_time}
                </p>
              )}
              {event.summary && <p className="mt-3 text-foreground/80">{event.summary}</p>}
              {event.body && (
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-foreground/70">
                  {event.body}
                </p>
              )}
              {event.external_url && (
                <a
                  href={event.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-bold text-teal-dark hover:underline"
                >
                  Read more &rarr;
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
