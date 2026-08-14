"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useAccordion } from "./useAccordion";

export interface AccordionContentProps
  extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionContent({
  value,
  className,
  children,
  ...props
}: AccordionContentProps) {
  const {
    value: activeValue,
  } = useAccordion();

  if (activeValue !== value) {
    return null;
  }

  return (
    <div
      className={cn(
        "px-4 pb-4 pt-0 text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}