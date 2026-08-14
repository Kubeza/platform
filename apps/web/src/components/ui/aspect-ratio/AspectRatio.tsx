"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface AspectRatioProps
  extends HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

export function AspectRatio({
  ratio = 16 / 9,
  className,
  children,
  style,
  ...props
}: AspectRatioProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        className,
      )}
      style={{
        aspectRatio: ratio,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}