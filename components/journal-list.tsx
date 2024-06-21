"use client";

import useSupabaseBrowser from "@/hooks/useSupabaseBrowser";
import { JournalType } from "@/types/journal";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import JournalCard from "./journal-card";
import { ITEMS_PER_PAGE } from "@/constants";
import { fetchJournals } from "@/app/_lib/getJournalList";
import styles from "./journal-list.module.css";

type Props = {
  startDate: string;
  endDate: string;
};

export default function JournalList({ startDate, endDate }: Props) {
  const client = useSupabaseBrowser();

  console.log(startDate);

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
    JournalType[],
    Object,
    InfiniteData<JournalType[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ["journal-list", startDate],
    queryFn: ({ pageParam }) =>
      fetchJournals({ pageParam, client, startDate, endDate }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length < ITEMS_PER_PAGE ? undefined : allPages.length,
    staleTime: 60 * 3 * 1000, //
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage]);

  return (
    <>
      {/* <div className="flex gap-x-8 gap-y-8 flex-wrap pt-16"> */}
      <div className={styles["list-wrapper"]}>
        {data?.pages
          .flatMap((page) => page)
          .map((journal) => (
            <JournalCard key={journal.id} {...journal} />
          ))}
      </div>

      {/* 무한스크롤 용도 div */}
      <div className="h-14" ref={ref}></div>
    </>
  );
}
