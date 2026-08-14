"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface NotificationGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function NotificationGroup({
  title,
  className,
  children,
  ...props
}: NotificationGroupProps) {
  return (
    <section
      className={cn("space-y-3", className)}
      {...props}
    >
      <h3 className="px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>

      <div className="space-y-px">
        {children}
      </div>
    </section>
  );
}