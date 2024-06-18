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

export default function JournalList() {
  const client = useSupabaseBrowser();

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
    JournalType[],
    Object,
    InfiniteData<JournalType[]>,
    [_1: string],
    number
  >({
    queryKey: ["journal-list"],
    queryFn: ({ pageParam }) => fetchJournals({ pageParam, client }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length < ITEMS_PER_PAGE ? undefined : allPages.length,
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
        {/* {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map((journal) => (
              <JournalCard key={journal.id} {...journal} />
            ))}
          </Fragment>
        ))} */}
      </div>

      {/* 무한스크롤 용도 div */}
      <div className="h-14" ref={ref}></div>
    </>
  );
}

{
  /* {Array.from({ length: 5 }, () => 0).map((value, index) => (
          <JournalCard
            key={index}
            author_id="sadf"
            content="한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나한글로 했을 때는 어떤 느낌이려나"
            created_at="sadfsa"
            id="fasdfda"
            is_anonymous={false}
            is_hidden={false}
            title="감사 제목"
            updated_at={"12313"}
          />
        ))} */
}
