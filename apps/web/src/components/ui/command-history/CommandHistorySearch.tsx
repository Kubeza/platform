"use client";

import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Input } from "../input";

export interface CommandHistorySearchProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {}

export function CommandHistorySearch({
  className,
  ...props
}: CommandHistorySearchProps) {
  return (
    <Input
      type="search"
      autoComplete="off"
      placeholder="Search command history..."
      className={cn(
        "w-full",
        className,
      )}
      {...props}
    />
  );
}