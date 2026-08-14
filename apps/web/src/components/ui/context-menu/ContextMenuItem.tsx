"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";

import { cn } from "@/lib/utils";

import { useContextMenu } from "./useContextMenu";

export interface ContextMenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export function ContextMenuItem({
  className,
  children,
  disabled = false,
  onClick,
  ...props
}: ContextMenuItemProps) {
  const { setOpen } =
    useContextMenu();

  function handleClick(
    event: MouseEvent<HTMLButtonElement>,
  ) {
    if (disabled) {
      return;
    }

    onClick?.(event);

    if (!event.defaultPrevented) {
      setOpen(false);
    }
  }

  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        "flex w-full items-center rounded-sm px-3 py-2 text-left text-sm outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}