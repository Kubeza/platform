"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useCollapsible } from "./useCollapsible";

export interface CollapsibleContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CollapsibleContent({
  className,
  children,
  ...props
}: CollapsibleContentProps) {
  const { open } =
    useCollapsible();

  if (!open) {
    return null;
  }

  return (
    <div
      data-state="open"
      className={cn(
        "w-full overflow-hidden px-3 py-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}