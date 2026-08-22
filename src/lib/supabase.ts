import { createClient } from "@supabase/supabase-js";

// The Supabase anon/publishable key is safe to ship in client bundles by design —
// access is governed by the row-level security policies on each table, not by
// keeping this key secret. Hardcoded fallbacks keep the site buildable without
// requiring Vercel project env vars to be configured first.
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://wcqqgboarylkmrspoepy.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjcXFnYm9hcnlsa21yc3BvZXB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0MTg3OTgsImV4cCI6MjEwMjk5NDc5OH0.KtSVg95D9IvWe4snr_Qtyc7yg4pB9nPgR3IohFlEVD8";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});
