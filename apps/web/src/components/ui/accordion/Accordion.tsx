"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface AccordionProps
  extends HTMLAttributes<HTMLDivElement> {}

export function Accordion({
  className,
  children,
  ...props
}: AccordionProps) {
  return (
    <div
      className={cn(
        "w-full divide-y rounded-lg border",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}