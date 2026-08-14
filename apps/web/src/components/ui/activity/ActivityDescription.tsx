"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface ActivityDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export function ActivityDescription({
  className,
  children,
  ...props
}: ActivityDescriptionProps) {
  return (
    <p
      className={cn(
        "mt-1 text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}