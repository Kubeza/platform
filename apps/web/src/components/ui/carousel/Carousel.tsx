"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface CarouselProps
  extends HTMLAttributes<HTMLDivElement> {}

export function Carousel({
  className,
  children,
  ...props
}: CarouselProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}