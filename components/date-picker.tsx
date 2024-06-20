"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { isAfterToday } from "@/utils/utils";

type Props = {
  date: Date;
  onClickCladendar: (date: Date) => void;
};

export function DatePicker({ date, onClickCladendar }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal p-3",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="h-4 w-4" />
          {/* {date ? dayjs(date).format("YY-MM-DD") : <span>날짜 선택</span>} */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          initialFocus
          onSelect={(date) => {
            const d = date || new Date();

            if (isAfterToday(d)) {
              return alert("오늘이나 과거의 날짜만 선택 가능합니다😉");
            }

            onClickCladendar(d);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

// w-[280px]
