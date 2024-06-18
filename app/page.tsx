import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import JournalList from "@/components/journal-list";
import { fetchJournals } from "./_lib/getJournalList";

export default async function Home() {
  const client = createClient();
  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) {
    return redirect("/auth");
  }

  // // 특정 날짜 설정 (예: 2023년 6월 11일)
  // const year = 2024;
  // const month = 5; // JavaScript의 month는 0부터 시작하므로 6월은 5
  // const day = 13;

  // // 6월 13일 00시 00분 00초
  // const startOfDate = new Date(year, month, day, 18, 0, 0, 0);
  // const startOfDateISOString = startOfDate.toISOString();

  // const date = new Date();
  // date.setHours(18, 0, 0, 0);

  // console.log("스타또 데이트", startOfDateISOString);
  // console.log("새로 만든 객체", date);

  // // 6월 13일 23시 59분 59초
  // const endOfDate = new Date(year, month, day, 23, 59, 59, 0);
  // const endOfDateISOString = endOfDate.toISOString();

  // console.log("End of 2023-06-11:", endOfDateISOString);

  // console.log("==========");

  // console.log(new Date().toISOString());
  // const today = new Date().toISOString();

  // const posts = await client
  //   .from("thanks")
  //   .select("*")
  //   .gte("created_at", startOfDateISOString)
  //   .lte("created_at", endOfDateISOString);

  // console.log(posts);

  // const posts = await client
  //   .from("thanks")
  //   .select("*")
  //   .gte("created_at", "2023-06-13 17:00:00")
  //   .lte("created_at", "2024-06-13 23:59:59");

  // console.log(posts);

  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["journal-list"],
    queryFn: ({ pageParam }) => fetchJournals({ pageParam, client }),
    initialPageParam: 0,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="w-full">
      <HydrationBoundary state={dehydratedState}>
        <JournalList />
        {/* <JournalCard /> */}
      </HydrationBoundary>
    </div>
  );
}
