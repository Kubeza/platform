"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface CarouselItemProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CarouselItem({
  className,
  children,
  ...props
}: CarouselItemProps) {
  return (
    <div
      className={cn(
        "min-w-full shrink-0 grow-0 basis-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}