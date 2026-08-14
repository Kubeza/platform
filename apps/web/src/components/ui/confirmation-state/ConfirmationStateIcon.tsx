"use client";

import { cn } from "@/lib/utils";

import type {
  ConfirmationStateIconProps,
} from "./confirmation-state.types";

export function ConfirmationStateIcon({
  className,
  children,
  ...props
}: ConfirmationStateIconProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}