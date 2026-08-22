export type MenuCategory = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  group: "food" | "pizza";
  sort_order: number;
};

export type MenuItem = {
  id: string;
  category_id: string;
  name: string;
  description: string | null;
  price: number | null;
  size_label: string | null;
  is_featured: boolean;
  sort_order: number;
};

export type MenuCategoryWithItems = MenuCategory & { items: MenuItem[] };

export type EventItem = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  body: string | null;
  event_date: string | null;
  start_time: string | null;
  end_time: string | null;
  external_url: string | null;
  image_url: string | null;
  is_published: boolean;
  sort_order: number;
};
