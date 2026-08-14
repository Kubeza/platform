"use client";

import { cn } from "@/lib/utils";

import type { TimelineAction } from "./timeline.types";

export interface TimelineActionsProps {
  actions: TimelineAction[];
  className?: string;
}

export function TimelineActions({
  actions,
  className,
}: TimelineActionsProps) {
  if (actions.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "mt-3 flex flex-wrap items-center gap-2",
        className,
      )}
    >
      {actions.map((action) => (
        <button
          key={action.id}
          type="button"
          onClick={action.onClick}
          className="inline-flex items-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}