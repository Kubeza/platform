"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface CommandPaletteItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  title: string;
  description?: string;
  active?: boolean;
}

export function CommandPaletteItem({
  icon,
  title,
  description,
  active = false,
  className,
  children,
  ...props
}: CommandPaletteItemProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        active && "bg-accent text-accent-foreground",
        className,
      )}
      {...props}
    >
      {icon ? (
        <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border">
          {icon}
        </div>
      ) : null}

      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium">
          {title}
        </div>

        {description ? (
          <div className="truncate text-xs text-muted-foreground">
            {description}
          </div>
        ) : null}
      </div>

      {children}
    </button>
  );
}