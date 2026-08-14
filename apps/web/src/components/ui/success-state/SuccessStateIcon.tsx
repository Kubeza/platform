"use client";

import { cn } from "@/lib/utils";

import type {
  SuccessStateIconProps,
} from "./success-state.types";

export function SuccessStateIcon({
  className,
  children,
  ...props
}: SuccessStateIconProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-600",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}