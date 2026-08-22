# Tony's Pizzaria

Next.js 16 + Tailwind CSS + Supabase rebuild of [Tony's Pizzaria](https://www.tonyspizzaria.net), a family-owned pizzeria at Surfer's Point, Ventura, CA (est. 1959).

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS 4**
- **Supabase** — menu, events, and fundraiser lead storage (Postgres + RLS)
- **Vercel** — hosting

## Local development

```bash
npm install
npm run dev
```

Requires `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` env vars (see `.env.local.example` or the Supabase project dashboard). The anon key is safe to expose client-side — access is governed by row-level security policies, not secrecy.

## Pages

Home, Menu, Our History, Events & News, Fundraisers, Merchandise, Contact — see `src/app/`.

## SEO / GEO

- Per-page metadata, JSON-LD (`Restaurant`, `Menu`, `FAQPage`, `Event`)
- `sitemap.xml`, `robots.txt`, dynamic OG image
- `public/llms.txt` — structured facts for AI answer engines
