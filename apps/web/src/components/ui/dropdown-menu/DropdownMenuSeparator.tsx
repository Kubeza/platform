"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface DropdownMenuSeparatorProps
  extends HTMLAttributes<HTMLHRElement> {}

export function DropdownMenuSeparator({
  className,
  ...props
}: DropdownMenuSeparatorProps) {
  return (
    <hr
      role="separator"
      className={cn(
        "-mx-1 my-1 h-px border-0 bg-border",
        className,
      )}
      {...props}
    />
  );
}