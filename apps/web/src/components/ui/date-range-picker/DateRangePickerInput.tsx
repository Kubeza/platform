"use client";

import type { ChangeEvent } from "react";

import { CalendarDays } from "lucide-react";

import { cn } from "@/lib/utils";

import { useDateRangePicker } from "./useDateRangePicker";

import type {
  DateRangePickerInputProps,
} from "./date-range-picker.types";

export function DateRangePickerInput({
  range,
  className,
  onChange,
  ...props
}: DateRangePickerInputProps) {
  const {
    value,
    setValue,
    setOpen,
  } = useDateRangePicker();

  const currentValue =
    range === "from"
      ? value.from
      : value.to;

  const inputValue = currentValue
    ? currentValue
        .toISOString()
        .slice(0, 10)
    : "";

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const nextValue =
      event.target.value;

    const parsedValue = nextValue
      ? new Date(
          `${nextValue}T00:00:00`,
        )
      : null;

    if (
      parsedValue &&
      Number.isNaN(
        parsedValue.getTime(),
      )
    ) {
      return;
    }

    setValue({
      ...value,
      [range]: parsedValue,
    });

    setOpen(true);

    onChange?.(event);
  }

  return (
    <div className="relative">
      <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <input
        type="date"
        value={inputValue}
        onChange={handleChange}
        className={cn(
          "h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm outline-none",
          "focus:border-primary focus:ring-2 focus:ring-ring",
          className,
        )}
        {...props}
      />
    </div>
  );
}