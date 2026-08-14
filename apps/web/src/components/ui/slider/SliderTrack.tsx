"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface SliderTrackProps
  extends HTMLAttributes<HTMLDivElement> {}

export function SliderTrack({
  className,
  children,
  ...props
}: SliderTrackProps) {
  return (
    <div
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-muted",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}