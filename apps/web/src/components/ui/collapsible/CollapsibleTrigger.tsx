"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { useCollapsible } from "./useCollapsible";

export interface CollapsibleTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CollapsibleTrigger({
  className,
  children,
  onClick,
  ...props
}: CollapsibleTriggerProps) {
  const {
    open,
    setOpen,
  } = useCollapsible();

  function handleClick(
    event: MouseEvent<HTMLButtonElement>,
  ) {
    setOpen(!open);
    onClick?.(event);
  }

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={handleClick}
      className={cn(
        "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
        className,
      )}
      {...props}
    >
      <span>{children}</span>

      <ChevronDown
        className={cn(
          "h-4 w-4 transition-transform duration-200",
          open && "rotate-180",
        )}
      />
    </button>
  );
}