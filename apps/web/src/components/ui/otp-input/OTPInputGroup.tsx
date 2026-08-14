"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface OTPInputGroupProps
  extends HTMLAttributes<HTMLDivElement> {}

export function OTPInputGroup({
  className,
  children,
  ...props
}: OTPInputGroupProps) {
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