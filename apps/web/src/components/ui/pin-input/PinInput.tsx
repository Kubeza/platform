"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { usePinInput } from "./usePinInput";

export interface PinInputProps
  extends HTMLAttributes<HTMLDivElement> {}

export function PinInput({
  className,
  children,
  ...props
}: PinInputProps) {
  const { disabled } =
    usePinInput();

  return (
    <div
      role="group"
      aria-disabled={disabled}
      className={cn(
        "flex items-center gap-2",
        disabled &&
          "cursor-not-allowed opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}