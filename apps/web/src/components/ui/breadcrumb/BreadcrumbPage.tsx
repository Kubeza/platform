"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface BreadcrumbPageProps
  extends HTMLAttributes<HTMLSpanElement> {}

export function BreadcrumbPage({
  className,
  children,
  ...props
}: BreadcrumbPageProps) {
  return (
    <span
      aria-current="page"
      className={cn(
        "font-medium text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}