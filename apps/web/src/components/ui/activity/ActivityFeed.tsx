"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Card } from "../card";

export interface ActivityFeedProps
  extends HTMLAttributes<HTMLDivElement> {}

export function ActivityFeed({
  className,
  children,
  ...props
}: ActivityFeedProps) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  );
}