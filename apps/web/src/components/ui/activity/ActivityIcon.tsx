"use client";

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

export interface ActivityIconProps
  extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
}

export function ActivityIcon({
  icon,
  className,
  ...props
}: ActivityIconProps) {
  return (
    <div
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-muted/50 text-primary",
        className,
      )}
      {...props}
    >
      {icon}
    </div>
  );
}