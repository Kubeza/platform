"use client";

import type { HTMLAttributes, ReactNode } from "react";

import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface BreadcrumbSeparatorProps
  extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
}

export function BreadcrumbSeparator({
  className,
  children,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn(
        "inline-flex items-center text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children ?? (
        <ChevronRight className="h-4 w-4" />
      )}
    </li>
  );
}