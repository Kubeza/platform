"use client";

import type {
  ButtonHTMLAttributes,
} from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { useAccordion } from "./useAccordion";

export interface AccordionTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function AccordionTrigger({
  value,
  className,
  children,
  onClick,
  ...props
}: AccordionTriggerProps) {
  const {
    value: activeValue,
    setValue,
  } = useAccordion();

  const open =
    activeValue === value;

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    setValue(
      open ? null : value,
    );

    onClick?.(event);
  }

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={handleClick}
      className={cn(
        "flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium transition-colors hover:bg-accent",
        className,
      )}
      {...props}
    >
      <span>{children}</span>

      <ChevronDown
        className={cn(
          "h-4 w-4 transition-transform duration-200",
          open &&
            "rotate-180",
        )}
      />
    </button>
  );
}