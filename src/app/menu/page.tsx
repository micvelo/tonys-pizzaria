import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { getMenu } from "@/lib/data";
import { menuSchema } from "@/lib/schema";
import { ORDER_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The full Tony's Pizzaria menu: New York style pizza, slice specials, wings, salads, calzones, desserts, and catering. Order pickup or delivery online.",
  alternates: { canonical: "/menu" },
};

export const revalidate = 3600;

export default async function MenuPage() {
  const menu = await getMenu();

  return (
    <>
      <JsonLd data={menuSchema(menu)} />

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="font-display text-4xl text-yellow neon-text sm:text-5xl">Our Menu</h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/85">
            Every pie is hand-tossed to order with dough and sauce made from scratch daily.
            Ready to order? Choose pickup or delivery below.
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

      <nav
        aria-label="Menu categories"
        className="sticky top-[57px] z-40 overflow-x-auto border-b border-ink/10 bg-cream/95 backdrop-blur"
      >
        <ul className="mx-auto flex max-w-6xl gap-1 whitespace-nowrap px-4 py-2 text-sm sm:px-6">
          {menu.map((category) => (
            <li key={category.id}>
              <a
                href={`#${category.slug}`}
                className="block rounded-full px-3 py-1.5 font-semibold text-ink/70 hover:bg-ink/5 hover:text-ink"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-4xl divide-y divide-ink/10 px-4 sm:px-6">
        {menu.map((category) => (
          <section key={category.id} id={category.slug} className="scroll-mt-32 py-12">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">{category.name}</h2>
            {category.description && (
              <p className="mt-2 text-sm text-foreground/60">{category.description}</p>
            )}
            <ul className="mt-6 space-y-5">
              {category.items.map((item) => (
                <li key={item.id} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-base text-ink">
                      {item.name}
                      {item.size_label && (
                        <span className="ml-2 rounded-full bg-teal/10 px-2 py-0.5 text-xs font-sans font-semibold text-teal-dark">
                          {item.size_label}
                        </span>
                      )}
                      {item.is_featured && (
                        <span className="ml-2 rounded-full bg-yellow/30 px-2 py-0.5 text-xs font-sans font-semibold text-ink/70">
                          Fan favorite
                        </span>
                      )}
                    </p>
                    {item.description && (
                      <p className="mt-1 text-sm text-foreground/60">{item.description}</p>
                    )}
                  </div>
                  {item.price != null && (
                    <span className="whitespace-nowrap font-display text-base text-teal-dark">
                      ${item.price.toFixed(2)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="bg-cream py-14 text-center">
        <h2 className="font-display text-2xl text-ink">Ready to Order?</h2>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
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
      </section>
    </>
  );
}
