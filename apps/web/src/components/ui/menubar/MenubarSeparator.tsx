"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface MenubarSeparatorProps
  extends HTMLAttributes<HTMLHRElement> {}

export function MenubarSeparator({
  className,
  ...props
}: MenubarSeparatorProps) {
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