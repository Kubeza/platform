"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { useMenubar } from "./useMenubar";

export interface MenubarTriggerProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "value"
  > {
  value: string;
}

export function MenubarTrigger({
  value,
  className,
  children,
  disabled,
  onClick,
  ...props
}: MenubarTriggerProps) {
  const {
    value: activeValue,
    setValue,
  } = useMenubar();

  const open = activeValue === value;

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

    setValue(
      open ? null : value,
    );
  }

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-disabled={disabled}
      disabled={disabled}
      data-state={
        open ? "open" : "closed"
      }
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        open &&
          "bg-accent text-accent-foreground",
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