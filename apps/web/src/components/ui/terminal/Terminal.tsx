"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Card } from "../card";

export interface TerminalProps
  extends HTMLAttributes<HTMLDivElement> {}

export function Terminal({
  className,
  children,
  ...props
}: TerminalProps) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl bg-black text-green-400",
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  );
}