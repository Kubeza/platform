"use client";

import type {
  ChangeEvent,
} from "react";

import { Clock3 } from "lucide-react";

import { cn } from "@/lib/utils";

import { useTimePicker } from "./useTimePicker";

import type {
  TimePickerInputProps,
} from "./time-picker.types";

function parseTime(
  value: string,
) {
  const [hours, minutes, seconds] =
    value.split(":").map(Number);

  if (
    Number.isNaN(hours) ||
    Number.isNaN(minutes)
  ) {
    return null;
  }

  return {
    hours,
    minutes,
    seconds: Number.isNaN(seconds)
      ? 0
      : seconds,
  };
}

export function TimePickerInput({
  className,
  onChange,
  ...props
}: TimePickerInputProps) {
  const {
    value,
    setValue,
    setOpen,
  } = useTimePicker();

  const inputValue = value
    ? [
        String(value.hours).padStart(
          2,
          "0",
        ),
        String(value.minutes).padStart(
          2,
          "0",
        ),
        String(
          value.seconds ?? 0,
        ).padStart(2, "0"),
      ].join(":")
    : "";

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const nextValue =
      parseTime(event.target.value);

    if (nextValue) {
      setValue(nextValue);
    } else if (
      !event.target.value
    ) {
      setValue(null);
    }

    setOpen(true);
    onChange?.(event);
  }

  return (
    <div className="relative">
      <Clock3 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <input
        type="time"
        step="1"
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