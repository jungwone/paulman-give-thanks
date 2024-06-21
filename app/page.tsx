import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { fetchJournals } from "./_lib/getJournalList";
import JournalListWrapper from "@/components/journal-list-wrapper";
import { getEndTimeOfToday, getStartTimeOfToday } from "@/utils/utils";

export default async function Home() {
  const client = createClient();
  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) {
    return redirect("/auth");
  }

  const startDate = getStartTimeOfToday().toISOString();
  const endDate = getEndTimeOfToday().toISOString();

  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["journal-list", startDate],
    queryFn: ({ pageParam }) =>
      fetchJournals({ pageParam, client, startDate, endDate }),
    initialPageParam: 0,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="w-full">
      <HydrationBoundary state={dehydratedState}>
        <JournalListWrapper />
      </HydrationBoundary>
    </div>
  );
}
