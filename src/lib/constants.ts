export const SITE_NAME = "Tony's Pizzaria";
export const SITE_TAGLINE = "Every Pizza is a Masterpizza!";
export const SITE_DESCRIPTION =
  "Family-owned since 1959, Tony's Pizzaria has served New York style hand-tossed pizza at Surfer's Point in Ventura, California for over 65 years. Fresh dough and sauce made from scratch daily.";

// Update NEXT_PUBLIC_SITE_URL once the production domain is connected.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tonys-pizzaria.vercel.app";

export const BUSINESS = {
  name: "Tony's Pizzaria",
  streetAddress: "186 E. Thompson Blvd.",
  addressLocality: "Ventura",
  addressRegion: "CA",
  postalCode: "93001",
  addressCountry: "US",
  phone: "+1-805-643-8425",
  phoneDisplay: "(805) 643-8425",
  priceRange: "$$",
  geo: {
    latitude: 34.2777,
    longitude: -119.2937,
  },
};

export const HOURS = [
  { days: "Sunday – Wednesday", hours: "11:00 AM – 8:00 PM" },
  { days: "Thursday", hours: "11:00 AM – 9:00 PM" },
  { days: "Friday – Saturday", hours: "11:00 AM – 10:00 PM" },
];

// schema.org openingHoursSpecification day codes
export const OPENING_HOURS_SPEC = [
  { dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday"], opens: "11:00", closes: "20:00" },
  { dayOfWeek: ["Thursday"], opens: "11:00", closes: "21:00" },
  { dayOfWeek: ["Friday", "Saturday"], opens: "11:00", closes: "22:00" },
];

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/tonyspizzariaventura/",
  instagram: "https://www.instagram.com/tonys_pizzaria/",
};

export const ORDER_LINKS = {
  pickup: "https://ordering.chownow.com/order/4809/locations",
  delivery: "https://eat.chownow.com/discover/restaurant/6235",
  menu: "https://www.chownow.com/order/4809/locations/6235",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-history", label: "Our History" },
  { href: "/events", label: "Events & News" },
  { href: "/fundraisers", label: "Fundraisers" },
  { href: "/merchandise", label: "Merchandise" },
  { href: "/contact", label: "Contact" },
];
