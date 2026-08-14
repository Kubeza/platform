"use client";

import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface BreadcrumbLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function BreadcrumbLink({
  className,
  children,
  ...props
}: BreadcrumbLinkProps) {
  return (
    <a
      className={cn(
        "transition-colors hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}