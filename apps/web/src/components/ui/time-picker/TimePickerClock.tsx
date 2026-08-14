"use client";

import { cn } from "@/lib/utils";

import { useTimePicker } from "./useTimePicker";

export interface TimePickerClockProps {
  className?: string;
}

export function TimePickerClock({
  className,
}: TimePickerClockProps) {
  const {
    value,
    setValue,
  } = useTimePicker();

  const hours = value?.hours ?? 0;
  const minutes = value?.minutes ?? 0;
  const seconds = value?.seconds ?? 0;

  function updateTime(
    field:
      | "hours"
      | "minutes"
      | "seconds",
    nextValue: number,
  ) {
    setValue({
      hours,
      minutes,
      seconds,
      [field]: nextValue,
    });
  }

  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-2",
        className,
      )}
    >
      <label className="space-y-1">
        <span className="text-xs text-muted-foreground">
          Hours
        </span>

        <input
          type="number"
          min={0}
          max={23}
          value={hours}
          onChange={(event) =>
            updateTime(
              "hours",
              Math.min(
                23,
                Math.max(
                  0,
                  Number(event.target.value),
                ),
              ),
            )
          }
          className="h-9 w-full rounded-md border bg-background px-2 text-sm"
        />
      </label>

      <label className="space-y-1">
        <span className="text-xs text-muted-foreground">
          Minutes
        </span>

        <input
          type="number"
          min={0}
          max={59}
          value={minutes}
          onChange={(event) =>
            updateTime(
              "minutes",
              Math.min(
                59,
                Math.max(
                  0,
                  Number(event.target.value),
                ),
              ),
            )
          }
          className="h-9 w-full rounded-md border bg-background px-2 text-sm"
        />
      </label>

      <label className="space-y-1">
        <span className="text-xs text-muted-foreground">
          Seconds
        </span>

        <input
          type="number"
          min={0}
          max={59}
          value={seconds}
          onChange={(event) =>
            updateTime(
              "seconds",
              Math.min(
                59,
                Math.max(
                  0,
                  Number(event.target.value),
                ),
              ),
            )
          }
          className="h-9 w-full rounded-md border bg-background px-2 text-sm"
        />
      </label>
    </div>
  );
}