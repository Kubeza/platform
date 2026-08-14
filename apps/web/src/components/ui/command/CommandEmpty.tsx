"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useCommand } from "./useCommand";

export interface CommandEmptyProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CommandEmpty({
  className,
  children = "No results found.",
  ...props
}: CommandEmptyProps) {
  const {
    query,
    items,
  } = useCommand();

  const normalizedQuery =
    query.trim().toLowerCase();

  const hasResults = items.some(
    (item) =>
      item.label
        .toLowerCase()
        .includes(normalizedQuery) ||
      item.value
        .toLowerCase()
        .includes(normalizedQuery),
  );

  if (!query || hasResults) {
    return null;
  }

  return (
    <div
      role="status"
      className={cn(
        "py-6 text-center text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}