"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { useDateRangePicker } from "./useDateRangePicker";

export interface DateRangePickerCalendarProps {
  className?: string;
}

export function DateRangePickerCalendar({
  className,
}: DateRangePickerCalendarProps) {
  const {
    value,
    setValue,
  } = useDateRangePicker();

  const displayDate =
    value.from ?? value.to ?? new Date();

  function changeMonth(
    offset: number,
  ) {
    const nextDate = new Date(
      displayDate,
    );

    nextDate.setMonth(
      nextDate.getMonth() + offset,
    );

    setValue({
      from: nextDate,
      to: value.to,
    });
  }

  return (
    <div
      className={cn(
        "w-72 space-y-3",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() =>
            changeMonth(-1)
          }
          className="rounded-md p-1.5 hover:bg-accent"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <span className="text-sm font-medium">
          {displayDate.toLocaleDateString(
            "en-US",
            {
              month: "long",
              year: "numeric",
            },
          )}
        </span>

        <button
          type="button"
          aria-label="Next month"
          onClick={() =>
            changeMonth(1)
          }
          className="rounded-md p-1.5 hover:bg-accent"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="rounded-md border p-2">
          <span className="text-xs text-muted-foreground">
            From
          </span>

          <div className="mt-1 font-medium">
            {value.from
              ? value.from.toLocaleDateString()
              : "Not selected"}
          </div>
        </div>

        <div className="rounded-md border p-2">
          <span className="text-xs text-muted-foreground">
            To
          </span>

          <div className="mt-1 font-medium">
            {value.to
              ? value.to.toLocaleDateString()
              : "Not selected"}
          </div>
        </div>
      </div>
    </div>
  );
}