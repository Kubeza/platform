"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface NotificationDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export function NotificationDescription({
  className,
  children,
  ...props
}: NotificationDescriptionProps) {
  return (
    <p
      className={cn(
        "mt-1 line-clamp-2 text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}