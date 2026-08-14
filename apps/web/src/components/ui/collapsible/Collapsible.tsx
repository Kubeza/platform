"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useCollapsible } from "./useCollapsible";

export interface CollapsibleProps
  extends HTMLAttributes<HTMLDivElement> {}

export function Collapsible({
  className,
  children,
  ...props
}: CollapsibleProps) {
  const { open } =
    useCollapsible();

  return (
    <div
      data-state={
        open ? "open" : "closed"
      }
      className={cn(
        "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}