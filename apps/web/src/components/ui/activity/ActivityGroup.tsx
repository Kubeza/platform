"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface ActivityGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function ActivityGroup({
  title,
  className,
  children,
  ...props
}: ActivityGroupProps) {
  return (
    <section
      className={cn("space-y-4", className)}
      {...props}
    >
      <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>

      <div>{children}</div>
    </section>
  );
}