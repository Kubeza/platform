"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";

import { cn } from "@/lib/utils";

import { useTabs } from "./useTabs";

export interface TabsTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function TabsTrigger({
  value,
  className,
  children,
  onClick,
  ...props
}: TabsTriggerProps) {
  const {
    value: activeValue,
    setValue,
  } = useTabs();

  const active =
    activeValue === value;

  function handleClick(
    event: MouseEvent<HTMLButtonElement>,
  ) {
    setValue(value);
    onClick?.(event);
  }

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      data-state={
        active ? "active" : "inactive"
      }
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}