"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface RadioGroupProps
  extends HTMLAttributes<HTMLDivElement> {}

export function RadioGroup({
  className,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <div
      role="radiogroup"
      className={cn(
        "flex flex-col gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}