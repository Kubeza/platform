"use client";

import type { ButtonHTMLAttributes } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { useDatePicker } from "./useDatePicker";

export interface DatePickerCalendarProps {
  className?: string;
}

function formatDate(
  date: Date | null,
): string {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );
}

function CalendarButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-md p-1.5 transition-colors hover:bg-accent",
        className,
      )}
      {...props}
    />
  );
}

export function DatePickerCalendar({
  className,
}: DatePickerCalendarProps) {
  const {
    value,
    setValue,
  } = useDatePicker();

  const displayDate =
    value ?? new Date();

  function changeMonth(
    offset: number,
  ) {
    const nextDate = new Date(
      displayDate,
    );

    nextDate.setMonth(
      nextDate.getMonth() + offset,
    );

    setValue(nextDate);
  }

  return (
    <div
      className={cn(
        "w-72 space-y-3",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <CalendarButton
          aria-label="Previous month"
          onClick={() =>
            changeMonth(-1)
          }
        >
          <ChevronLeft className="h-4 w-4" />
        </CalendarButton>

        <span className="text-sm font-medium">
          {displayDate.toLocaleDateString(
            "en-US",
            {
              month: "long",
              year: "numeric",
            },
          )}
        </span>

        <CalendarButton
          aria-label="Next month"
          onClick={() =>
            changeMonth(1)
          }
        >
          <ChevronRight className="h-4 w-4" />
        </CalendarButton>
      </div>

      <button
        type="button"
        onClick={() =>
          setValue(new Date())
        }
        className="w-full rounded-md border px-3 py-2 text-sm hover:bg-accent"
      >
        {value
          ? formatDate(value)
          : "Select today"}
      </button>
    </div>
  );
}