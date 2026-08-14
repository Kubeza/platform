"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface DateRangePickerProps
  extends HTMLAttributes<HTMLDivElement> {}

export function DateRangePicker({
  className,
  children,
  ...props
}: DateRangePickerProps) {
  return (
    <div
      className={cn(
        "relative w-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}