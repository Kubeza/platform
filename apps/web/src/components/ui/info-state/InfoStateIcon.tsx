"use client";

import { cn } from "@/lib/utils";

import type {
  InfoStateIconProps,
} from "./info-state.types";

export function InfoStateIcon({
  className,
  children,
  ...props
}: InfoStateIconProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-600",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}