"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface TabsListProps
  extends HTMLAttributes<HTMLDivElement> {}

export function TabsList({
  className,
  children,
  ...props
}: TabsListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex h-10 items-center rounded-md bg-muted p-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}