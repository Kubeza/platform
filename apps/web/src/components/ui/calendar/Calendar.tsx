"use client";

import { useMemo } from "react";

import { cn } from "@/lib/utils";

import type {
  CalendarProps,
} from "./calendar.types";

const WEEKDAYS = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

function startOfMonth(date: Date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    1,
  );
}

function getDays(date: Date) {
  const first = startOfMonth(date);
  const start = first.getDay();

  const daysInMonth =
    new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0,
    ).getDate();

  const previousDays =
    new Date(
      date.getFullYear(),
      date.getMonth(),
      0,
    ).getDate();

  return Array.from(
    { length: 42 },
    (_, index) => {
      const offset =
        index - start;

      if (offset < 0) {
        return new Date(
          date.getFullYear(),
          date.getMonth() - 1,
          previousDays + offset + 1,
        );
      }

      if (offset >= daysInMonth) {
        return new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          offset - daysInMonth + 1,
        );
      }

      return new Date(
        date.getFullYear(),
        date.getMonth(),
        offset + 1,
      );
    },
  );
}

export function Calendar({
  value,
  events = [],
  month,
  onChange,
  onMonthChange,
  className,
  ...props
}: CalendarProps) {
  const currentMonth =
    month ?? value ?? new Date();

  const days = useMemo(
    () => getDays(currentMonth),
    [currentMonth],
  );

  return (
    <div
      className={cn(
        "w-full rounded-lg border border-border bg-background p-4",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          className="rounded-md px-2 py-1 text-sm hover:bg-accent"
          onClick={() =>
            onMonthChange?.(
              new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() - 1,
                1,
              ),
            )
          }
        >
          Previous
        </button>

        <div className="text-sm font-semibold">
          {currentMonth.toLocaleDateString(
            undefined,
            {
              month: "long",
              year: "numeric",
            },
          )}
        </div>

        <button
          type="button"
          className="rounded-md px-2 py-1 text-sm hover:bg-accent"
          onClick={() =>
            onMonthChange?.(
              new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() + 1,
                1,
              ),
            )
          }
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {WEEKDAYS.map(
          (day) => (
            <div
              key={day}
              className="py-2 text-center text-xs font-medium text-muted-foreground"
            >
              {day}
            </div>
          ),
        )}

        {days.map(
          (day) => {
            const isCurrentMonth =
              day.getMonth() ===
              currentMonth.getMonth();

            const selected =
              value?.toDateString() ===
              day.toDateString();

            const dayEvents =
              events.filter(
                (event) =>
                  event.date.toDateString() ===
                  day.toDateString(),
              );

            return (
              <button
                key={day.toISOString()}
                type="button"
                onClick={() =>
                  onChange?.(day)
                }
                className={cn(
                  "min-h-16 rounded-md p-1 text-left transition-colors hover:bg-accent",
                  !isCurrentMonth &&
                    "text-muted-foreground/50",
                  selected &&
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                )}
              >
                <div className="text-xs font-medium">
                  {day.getDate()}
                </div>

                {dayEvents.length > 0 && (
                  <div className="mt-1 space-y-0.5">
                    {dayEvents
                      .slice(0, 2)
                      .map(
                        (event) => (
                          <div
                            key={event.id}
                            className="truncate rounded bg-current/10 px-1 text-[10px]"
                          >
                            {event.title}
                          </div>
                        ),
                      )}
                  </div>
                )}
              </button>
            );
          },
        )}
      </div>
    </div>
  );
}