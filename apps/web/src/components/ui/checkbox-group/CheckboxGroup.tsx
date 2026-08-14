"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useCheckboxGroup } from "./useCheckboxGroup";

export interface CheckboxGroupProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CheckboxGroup({
  className,
  children,
  ...props
}: CheckboxGroupProps) {
  const { disabled } =
    useCheckboxGroup();

  return (
    <div
      role="group"
      aria-disabled={disabled}
      className={cn(
        "flex flex-col gap-3",
        disabled &&
          "cursor-not-allowed opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}