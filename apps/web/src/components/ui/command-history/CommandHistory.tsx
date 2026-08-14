"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Card } from "../card";

export interface CommandHistoryProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CommandHistory({
  className,
  children,
  ...props
}: CommandHistoryProps) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden rounded-xl",
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  );
}