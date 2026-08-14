"use client";

import type { OlHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface BreadcrumbListProps
  extends OlHTMLAttributes<HTMLOListElement> {}

export function BreadcrumbList({
  className,
  children,
  ...props
}: BreadcrumbListProps) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </ol>
  );
}