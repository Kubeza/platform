"use client";

import type {
  ChangeEvent,
} from "react";

import { CalendarDays } from "lucide-react";

import { cn } from "@/lib/utils";

import { useDatePicker } from "./useDatePicker";

import type {
  DatePickerInputProps,
} from "./date-picker.types";

export function DatePickerInput({
  className,
  onChange,
  ...props
}: DatePickerInputProps) {
  const {
    value,
    setValue,
    setOpen,
  } = useDatePicker();

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const nextValue =
      event.target.value;

    if (!nextValue) {
      setValue(null);
      onChange?.(event);
      return;
    }

    const parsed = new Date(
      `${nextValue}T00:00:00`,
    );

    if (!Number.isNaN(parsed.getTime())) {
      setValue(parsed);
    }

    setOpen(true);
    onChange?.(event);
  }

  const inputValue = value
    ? value.toISOString().slice(0, 10)
    : "";

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