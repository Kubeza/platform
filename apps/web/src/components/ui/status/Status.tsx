"use client";

import { cn } from "@/lib/utils";

import { StatusIndicator } from "./StatusIndicator";
import { StatusLabel } from "./StatusLabel";

import type {
  StatusProps,
} from "./status.types";

export function Status({
  variant = "neutral",
  label,
  className,
  children,
  ...props
}: StatusProps) {
  return (
    <div
      role="status"
      className={cn(
        "inline-flex items-center gap-2",
        className,
      )}
      {...props}
    >
      <StatusIndicator
        variant={variant}
      />

      {label ? (
        <StatusLabel>
          {label}
        </StatusLabel>
      ) : (
        children
      )}
    </div>
  );
}