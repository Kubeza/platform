"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface InputOTPGroupProps
  extends HTMLAttributes<HTMLDivElement> {}

export function InputOTPGroup({
  className,
  children,
  ...props
}: InputOTPGroupProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}