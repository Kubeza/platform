"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface PinInputGroupProps
  extends HTMLAttributes<HTMLDivElement> {}

export function PinInputGroup({
  className,
  children,
  ...props
}: PinInputGroupProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}