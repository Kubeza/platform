"use client";

import { cn } from "@/lib/utils";

import type {
  MasonryItemProps,
} from "./masonry.types";

export function MasonryItem({
  className,
  children,
  ...props
}: MasonryItemProps) {
  return (
    <div
      className={cn(
        "mb-4 break-inside-avoid",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}