import { ITEMS_PER_PAGE } from "@/constants";
import { TypedSupabaseClient } from "@/types/types";

type Props = {
  pageParam: number;
  client: TypedSupabaseClient;
  startDate: string;
  endDate: string;
};

export async function fetchJournals({
  pageParam,
  client,
  startDate,
  endDate,
}: Props) {
  const from = pageParam * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  const { data } = await client
    .from("thanks")
    .select("id, title, content, created_at, profiles(id, username)")
    .eq("is_hidden", false)
    .range(from, to)
    .gte("created_at", startDate)
    .lte("created_at", endDate);

  return data || [];
}
