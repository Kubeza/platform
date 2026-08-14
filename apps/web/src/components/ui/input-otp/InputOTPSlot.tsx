"use client";

import { cn } from "@/lib/utils";

import { useInputOTP } from "./useInputOTP";

export interface InputOTPSlotProps {
  index: number;
  className?: string;
}

export function InputOTPSlot({
  index,
  className,
}: InputOTPSlotProps) {
  const {
    value,
    length,
    disabled,
  } = useInputOTP();

  const character =
    value[index] ?? "";

  return (
    <div
      role="textbox"
      aria-label={`OTP digit ${index + 1} of ${length}`}
      aria-disabled={disabled}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium",
        disabled &&
          "cursor-not-allowed opacity-50",
        className,
      )}
    >
      {character}
    </div>
  );
}