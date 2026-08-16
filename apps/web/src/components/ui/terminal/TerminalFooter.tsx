"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TerminalFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export function TerminalFooter({
  className,
  children,
  ...props
}: TerminalFooterProps) {
  return (
    <div
      className={cn(
        "shrink-0 bg-black px-5 pb-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}