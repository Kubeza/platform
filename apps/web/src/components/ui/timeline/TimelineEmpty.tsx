"use client";

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

export interface TimelineEmptyProps
  extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  title?: string;
  description?: string;
}

export function TimelineEmpty({
  icon,
  title = "No timeline events",
  description = "There are no events to display.",
  className,
  ...props
}: TimelineEmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 py-12 text-center",
        className,
      )}
      {...props}
    >
      {icon ? (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border bg-muted">
          {icon}
        </div>
      ) : null}

      <h3 className="text-base font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}