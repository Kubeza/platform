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
        "flex h-full min-h-0 flex-col overflow-hidden rounded-2xl",
        "border border-white/[0.10] bg-[#02040A]",
        "shadow-[0_24px_80px_rgba(0,0,0,0.45)]",
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  );
}