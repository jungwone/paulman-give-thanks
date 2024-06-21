"use client";

import {
  getEndTimeOfToday,
  getNextDay,
  getPreviousDay,
  getStartTimeOfToday,
} from "@/utils/utils";
import JournalList from "./journal-list";
import dayjs from "dayjs";
import DateSelector from "./date-selector";
import { useState } from "react";

export default function JournalListWrapper() {
  const [date, setDate] = useState(() => {
    return dayjs().startOf("day");
  });

  const onClickPrev = () => {
    setDate(getPreviousDay(date));
  };

  const onClickNext = () => {
    setDate(getNextDay(date));
  };

  const onClickCalender = (date: Date) => {
    setDate(dayjs(date));
  };

  return (
    <>
      <DateSelector
        date={date.toDate()}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        onClickCalendar={onClickCalender}
      />
      <JournalList
        startDate={date.startOf("day").toISOString()}
        endDate={date.endOf("day").toISOString()}
      />
    </>
  );
}
