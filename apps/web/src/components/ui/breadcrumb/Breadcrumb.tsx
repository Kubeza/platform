"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface BreadcrumbProps
  extends HTMLAttributes<HTMLElement> {}

export function Breadcrumb({
  className,
  children,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex w-full items-center",
        className,
      )}
      {...props}
    >
      {children}
    </nav>
  );
}