"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Card } from "../card";

export interface NotificationCenterProps
  extends HTMLAttributes<HTMLDivElement> {}

export function NotificationCenter({
  className,
  children,
  ...props
}: NotificationCenterProps) {
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