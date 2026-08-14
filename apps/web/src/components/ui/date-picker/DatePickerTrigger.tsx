"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";

import { CalendarDays } from "lucide-react";

import { cn } from "@/lib/utils";

import { useDatePicker } from "./useDatePicker";

export interface DatePickerTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function DatePickerTrigger({
  className,
  children,
  onClick,
  ...props
}: DatePickerTriggerProps) {
  const {
    open,
    setOpen,
  } = useDatePicker();

  function handleClick(
    event: MouseEvent<HTMLButtonElement>,
  ) {
    setOpen(!open);
    onClick?.(event);
  }

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={handleClick}
      className={cn(
        "inline-flex h-10 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm transition-colors hover:bg-accent",
        "focus:outline-none focus:ring-2 focus:ring-ring",
        className,
      )}
      {...props}
    >
      <CalendarDays className="h-4 w-4" />
      {children}
    </button>
  );
}