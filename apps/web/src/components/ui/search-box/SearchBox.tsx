"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface SearchBoxProps
  extends HTMLAttributes<HTMLDivElement> {}

export function SearchBox({
  className,
  children,
  ...props
}: SearchBoxProps) {
  return (
    <div
      className={cn(
        "relative w-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}