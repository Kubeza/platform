"use client";

import type { HTMLAttributes } from "react";

import { MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

export interface BreadcrumbEllipsisProps
  extends HTMLAttributes<HTMLSpanElement> {}

export function BreadcrumbEllipsis({
  className,
  ...props
}: BreadcrumbEllipsisProps) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn(
        "inline-flex h-6 w-6 items-center justify-center text-muted-foreground",
        className,
      )}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">
        More
      </span>
    </span>
  );
}