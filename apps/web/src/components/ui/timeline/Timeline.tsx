"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Card } from "../card";

export interface TimelineProps
  extends HTMLAttributes<HTMLDivElement> {}

export function Timeline({
  className,
  children,
  ...props
}: TimelineProps) {
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