"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface NotificationTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export function NotificationTitle({
  className,
  children,
  ...props
}: NotificationTitleProps) {
  return (
    <h4
      className={cn(
        "truncate text-sm font-semibold leading-none",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
}