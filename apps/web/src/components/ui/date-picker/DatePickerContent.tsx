"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { useDatePicker } from "./useDatePicker";

export interface DatePickerContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export function DatePickerContent({
  className,
  children,
  ...props
}: DatePickerContentProps) {
  const { open } =
    useDatePicker();

  if (!open) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      className={cn(
        "absolute left-0 top-full z-50 mt-2 rounded-md border bg-popover p-3 shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}