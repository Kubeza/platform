"use client";

import { cn } from "@/lib/utils";

import {
  DescriptionListItem,
} from "./DescriptionListItem";

import type {
  DescriptionListProps,
} from "./description-list.types";

export function DescriptionList({
  items = [],
  columns = 1,
  className,
  children,
  ...props
}: DescriptionListProps) {
  return (
    <dl
      className={cn(
        "grid gap-x-6 gap-y-4",
        columns === 1 &&
          "grid-cols-1",
        columns === 2 &&
          "grid-cols-1 sm:grid-cols-2",
        columns === 3 &&
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <DescriptionListItem
          key={item.id}
          label={item.label}
          value={item.value}
          description={
            item.description
          }
        />
      ))}

      {children}
    </dl>
  );
}