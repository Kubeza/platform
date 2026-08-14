"use client";

import { cn } from "@/lib/utils";

import type { ActivityAction } from "./activity.types";

export interface ActivityActionsProps {
  actions: ActivityAction[];
  className?: string;
}

export function ActivityActions({
  actions,
  className,
}: ActivityActionsProps) {
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