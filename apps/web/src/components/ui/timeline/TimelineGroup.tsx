"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TimelineGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function TimelineGroup({
  title,
  className,
  children,
  ...props
}: TimelineGroupProps) {
  return (
    <section
      className={cn("space-y-4", className)}
      {...props}
    >
      <h3 className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>

      <div className="space-y-0">
        {children}
      </div>
    </section>
  );
}