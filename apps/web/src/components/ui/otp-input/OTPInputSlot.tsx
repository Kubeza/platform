"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useOTPInput } from "./useOTPInput";

export interface OTPInputSlotProps
  extends HTMLAttributes<HTMLDivElement> {
  index: number;
}

export function OTPInputSlot({
  index,
  className,
  ...props
}: OTPInputSlotProps) {
  const {
    value,
    length,
    disabled,
  } = useOTPInput();

  const character =
    value[index] ?? "";

  return (
    <div
      role="textbox"
      aria-label={`OTP digit ${index + 1} of ${length}`}
      aria-disabled={disabled}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium",
        "transition-colors",
        !disabled &&
          "focus-within:border-primary",
        disabled &&
          "cursor-not-allowed opacity-50",
        className,
      )}
      {...props}
    >
      {character}
    </div>
  );
}