import { BUSINESS, OPENING_HOURS_SPEC, SITE_URL, SOCIAL_LINKS, SITE_NAME } from "./constants";
import type { MenuCategoryWithItems } from "./types";

export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: SITE_NAME,
    servesCuisine: ["Pizza", "Italian American", "New York Style Pizza"],
    priceRange: BUSINESS.priceRange,
    telephone: BUSINESS.phone,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: OPENING_HOURS_SPEC.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
    foundingDate: "1959-06-01",
    founder: {
      "@type": "Person",
      name: 'Johnny "Tony" Barrios',
    },
    slogan: "Every Pizza is a Masterpizza!",
  };
}

export function menuSchema(categories: MenuCategoryWithItems[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE_URL}/menu/#menu`,
    name: `${SITE_NAME} Menu`,
    hasMenuSection: categories.map((category) => ({
      "@type": "MenuSection",
      name: category.name,
      description: category.description ?? undefined,
      hasMenuItem: category.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description ?? undefined,
        ...(item.price
          ? {
              offers: {
                "@type": "Offer",
                price: item.price,
                priceCurrency: "USD",
              },
            }
          : {}),
      })),
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
