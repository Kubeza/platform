"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useAccordion } from "./useAccordion";

export interface AccordionItemProps
  extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionItem({
  value,
  className,
  children,
  ...props
}: AccordionItemProps) {
  const {
    value: activeValue,
  } = useAccordion();

  return (
    <div
      data-state={
        activeValue === value
          ? "open"
          : "closed"
      }
      className={cn(
        "overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}