import { supabase } from "./supabase";
import type { MenuCategoryWithItems, EventItem } from "./types";

export async function getMenu(): Promise<MenuCategoryWithItems[]> {
  const [{ data: categories, error: catError }, { data: items, error: itemError }] =
    await Promise.all([
      supabase.from("menu_categories").select("*").order("sort_order"),
      supabase.from("menu_items").select("*").order("sort_order"),
    ]);

  if (catError) throw catError;
  if (itemError) throw itemError;

  return (categories ?? []).map((category) => ({
    ...category,
    items: (items ?? []).filter((item) => item.category_id === category.id),
  }));
}

export async function getEvents(): Promise<EventItem[]> {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("is_published", true)
    .order("event_date", { ascending: false, nullsFirst: true })
    .order("sort_order");

  if (error) throw error;
  return data ?? [];
}
