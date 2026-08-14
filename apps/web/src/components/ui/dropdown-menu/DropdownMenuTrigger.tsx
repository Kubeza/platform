"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { useDropdownMenu } from "./useDropdownMenu";

export interface DropdownMenuTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function DropdownMenuTrigger({
  className,
  children,
  disabled,
  onClick,
  ...props
}: DropdownMenuTriggerProps) {
  const {
    open,
    setOpen,
  } = useDropdownMenu();

  function handleClick(
    event: MouseEvent<HTMLButtonElement>,
  ) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      disabled
    ) {
      return;
    }

    setOpen(!open);
  }

  return (
    <button
      type="button"
      aria-haspopup="menu"
      aria-expanded={open}
      aria-disabled={disabled}
      disabled={disabled}
      data-state={
        open ? "open" : "closed"
      }
      className={cn(
        "inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm font-medium transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        disabled &&
          "cursor-not-allowed opacity-50",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}

      <ChevronDown
        className={cn(
          "h-4 w-4 transition-transform",
          open && "rotate-180",
        )}
      />
    </button>
  );
}