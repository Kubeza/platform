"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface TimePickerProps
  extends HTMLAttributes<HTMLDivElement> {}

export function TimePicker({
  className,
  children,
  ...props
}: TimePickerProps) {
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