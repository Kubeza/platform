"use client";

import type { LiHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface BreadcrumbItemProps
  extends LiHTMLAttributes<HTMLLIElement> {}

export function BreadcrumbItem({
  className,
  children,
  ...props
}: BreadcrumbItemProps) {
  return (
    <li
      className={cn(
        "inline-flex items-center gap-1.5",
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
}