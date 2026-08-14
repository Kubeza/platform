"use client";

import { cn } from "@/lib/utils";

import type {
  DescriptionListItemProps,
} from "./description-list.types";

export function DescriptionListItem({
  label,
  value,
  description,
  className,
  ...props
}: DescriptionListItemProps) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-md border border-border p-4",
        className,
      )}
      {...props}
    >
      <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>

      <dd className="mt-1 text-sm font-medium">
        {value}
      </dd>

      {description && (
        <dd className="mt-1 text-xs text-muted-foreground">
          {description}
        </dd>
      )}
    </div>
  );
}