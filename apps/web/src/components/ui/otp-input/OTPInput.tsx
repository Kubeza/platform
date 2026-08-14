"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useOTPInput } from "./useOTPInput";

export interface OTPInputProps
  extends HTMLAttributes<HTMLDivElement> {}

export function OTPInput({
  className,
  children,
  ...props
}: OTPInputProps) {
  const { disabled } =
    useOTPInput();

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