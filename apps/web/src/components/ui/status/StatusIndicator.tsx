"use client";

import { cn } from "@/lib/utils";

import type {
  StatusIndicatorProps,
} from "./status.types";

const indicatorVariants: Record<
  NonNullable<StatusIndicatorProps["variant"]>,
  string
> = {
  success: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  neutral: "bg-slate-400",
  pending: "bg-cyan-500 animate-pulse",
};

export function StatusIndicator({
  variant = "neutral",
  className,
  ...props
}: StatusIndicatorProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block h-2 w-2 shrink-0 rounded-full",
        indicatorVariants[variant],
        className,
      )}
      {...props}
    />
  );
}