"use client";

import { GripVertical } from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  SplitterHandleProps,
} from "./splitter.types";

export function SplitterHandle({
  withHandle = false,
  className,
  ...props
}: SplitterHandleProps) {
  return (
    <div
      role="separator"
      aria-orientation="vertical"
      className={cn(
        "relative flex w-px shrink-0 items-center justify-center bg-border",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-8 w-4 items-center justify-center rounded-sm border bg-background">
          <GripVertical className="h-3 w-3 text-muted-foreground" />
        </div>
      )}
    </div>
  );
}