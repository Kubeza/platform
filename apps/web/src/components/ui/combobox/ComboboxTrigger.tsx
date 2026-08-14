"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { useCombobox } from "./useCombobox";

export interface ComboboxTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ComboboxTrigger({
  className,
  children,
  onClick,
  ...props
}: ComboboxTriggerProps) {
  const {
    open,
    setOpen,
  } = useCombobox();

  function handleClick(
    event: MouseEvent<HTMLButtonElement>,
  ) {
    setOpen(!open);
    onClick?.(event);
  }

  return (
    <button
      {...props}
      type="button"
      aria-expanded={open}
      onClick={handleClick}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-sm transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring",
        className,
      )}
    >
      <span className="truncate">
        {children}
      </span>

      <ChevronDown
        className={cn(
          "h-4 w-4 transition-transform",
          open && "rotate-180",
        )}
      />
    </button>
  );
}