"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface ActivityTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export function ActivityTitle({
  className,
  children,
  ...props
}: ActivityTitleProps) {
  return (
    <h4
      className={cn(
        "text-sm font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
}