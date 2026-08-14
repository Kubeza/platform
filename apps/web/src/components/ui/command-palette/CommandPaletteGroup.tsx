"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandPaletteGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

export function CommandPaletteGroup({
  heading,
  className,
  children,
  ...props
}: CommandPaletteGroupProps) {
  return (
    <section
      className={cn("py-2", className)}
      {...props}
    >
      {heading ? (
        <div className="px-4 pb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {heading}
        </div>
      ) : null}

      <div>{children}</div>
    </section>
  );
}