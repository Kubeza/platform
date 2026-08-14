"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useInputOTP } from "./useInputOTP";

export interface InputOTPProps
  extends HTMLAttributes<HTMLDivElement> {}

export function InputOTP({
  className,
  children,
  ...props
}: InputOTPProps) {
  const { disabled } =
    useInputOTP();

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