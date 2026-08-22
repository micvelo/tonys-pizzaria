import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Our History",
  description:
    'The story of Tony\'s Pizzaria: family-owned and operated since June 1959, when Johnny "Tony" Barrios began sharing his family\'s pizza recipes at Surfer\'s Point, Ventura, California.',
  alternates: { canonical: "/our-history" },
};

export default function OurHistoryPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Our History | Tony's Pizzaria",
          about: {
            "@type": "Restaurant",
            name: "Tony's Pizzaria",
          },
        }}
      />

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <p className="font-display text-xs tracking-[0.3em] text-teal">EST. 1959</p>
          <h1 className="font-display mt-2 text-4xl text-yellow neon-text sm:text-5xl">
            Welcome to the Original Tony&rsquo;s Pizzaria
          </h1>
          <p className="mt-3 text-cream/85">at Surfer&rsquo;s Point, Ventura Beach, California</p>
        </div>
        <div className="bg-diner-lights h-1.5 w-full" />
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-lg leading-relaxed text-foreground/80 sm:px-6">
          <p>
            Family-owned & operated since June of 1959, when Johnny &ldquo;Tony&rdquo; Barrios
            decided to share his classic recipes, which until then had only been passed down from
            generation to generation within the Barrios family. Today Tony&rsquo;s children Bruce,
            Tony & Linda and nephew Abel are keeping their father&rsquo;s legacy alive and are now
            running the Pizzaria. Here at Tony&rsquo;s, every pizza is made with love.
          </p>
          <p>
            Small and quaint, this timeless landmark continues to be a local favorite specializing
            in New York style hand tossed pizza. Our dough and sauce is made from scratch daily.
            We only use the best local ingredients and chop our vegetables every day. Our fresh
            mozzarella is of premium quality and grated every day. We blend just the right amount
            of spices to create our signature homemade sausage.
          </p>
          <p>
            Come! Please enjoy the Barrios family recipes that so many have loved in this very
            same location for over 50 years, keeping locals and visitors alike coming back!
          </p>
          <p className="font-display text-2xl text-ink">
            Every pie is made to order and as Tony says &ldquo;Every Pizza is a
            Masterpizza!&rdquo;
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 py-16 sm:grid-cols-3 sm:px-6">
          {[
            { year: "1959", label: "Johnny “Tony” Barrios opens Tony’s Pizzaria" },
            { year: "2019", label: "Celebrated 60 years at Surfer’s Point" },
            { year: "2022", label: "Unveiled a hand-built neon sign for the 63rd anniversary" },
          ].map((milestone) => (
            <div key={milestone.year} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="font-display text-3xl text-teal-dark">{milestone.year}</p>
              <p className="mt-2 text-sm text-foreground/70">{milestone.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
