"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Card } from "../card";

export interface MetricCardProps
  extends HTMLAttributes<HTMLDivElement> {}

export function MetricCard({
  className,
  children,
  ...props
}: MetricCardProps) {
  return (
    <Card
      className={cn(
        "p-6 transition-all duration-200 hover:shadow-md",
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  );
}