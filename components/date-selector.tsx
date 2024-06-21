import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { DatePicker } from "./date-picker";
import dayjs from "dayjs";
import { isToday } from "@/utils/utils";

type Props = {
  date: Date;
  onClickPrev: VoidFunction;
  onClickNext: VoidFunction;
  onClickCalendar: (date: Date) => void;
};

export default function DateSelector({
  date,
  onClickPrev,
  onClickNext,
  onClickCalendar,
}: Props) {
  return (
    <div className="flex justify-end relative pt-5 items-center mx-auto">
      <div className="flex justify-center w-full h-full">
        <span className="font-bold text-xl">
          {dayjs(date).format("YY년 MM월 DD일")}
        </span>
      </div>

      <div className="flex absolute">
        <Button variant={"ghost"} onClick={onClickPrev}>
          <ChevronLeft />
        </Button>
        <Button
          variant={"ghost"}
          onClick={onClickNext}
          disabled={isToday(date)}
        >
          <ChevronRight />
        </Button>
        <DatePicker date={date} onClickCladendar={onClickCalendar} />
      </div>
    </div>
  );
}
