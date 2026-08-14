"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Card } from "../card";

export interface CommandPaletteProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CommandPalette({
  className,
  children,
  ...props
}: CommandPaletteProps) {
  return (
    <Card
      className={cn(
        "flex w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-border bg-background shadow-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  );
}