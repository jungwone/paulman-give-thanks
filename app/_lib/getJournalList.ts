import { ITEMS_PER_PAGE } from "@/constants";
import { TypedSupabaseClient } from "@/types/types";

type Props = { pageParam: number; client: TypedSupabaseClient };

export async function fetchJournals({ pageParam, client }: Props) {
  const from = pageParam * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  const { data } = await client
    .from("thanks")
    .select("id, title, content, created_at, profiles(username)")
    .eq("is_hidden", false)
    .range(from, to);

  // .lte("created_at", "2024-06-14");

  return data || [];
}
