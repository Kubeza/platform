"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface DatePickerProps
  extends HTMLAttributes<HTMLDivElement> {}

export function DatePicker({
  className,
  children,
  ...props
}: DatePickerProps) {
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