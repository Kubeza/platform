"use client";

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

export interface CommandPaletteEmptyProps
  extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  title?: string;
  description?: string;
}

export function CommandPaletteEmpty({
  icon,
  title = "No commands found",
  description = "Try searching with a different keyword.",
  className,
  ...props
}: CommandPaletteEmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 py-12 text-center",
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border">
          {icon}
        </div>
      )}

      <h3 className="text-sm font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}