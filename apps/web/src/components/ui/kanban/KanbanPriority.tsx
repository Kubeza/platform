import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type {
  KanbanPriorityProps,
} from "./kanban.types";

const colors = {
  low: "bg-slate-500",
  medium: "bg-amber-500",
  high: "bg-orange-500",
  critical: "bg-red-500",
};

const KanbanPriority = forwardRef<
  HTMLDivElement,
  KanbanPriorityProps
>(
  (
    {
      priority = "medium",
      className,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-2 text-xs font-medium text-slate-400",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "h-2.5 w-2.5 rounded-full",
          colors[priority],
        )}
      />

      {priority.charAt(0).toUpperCase() +
        priority.slice(1)}
    </div>
  ),
);

KanbanPriority.displayName =
  "KanbanPriority";

export default KanbanPriority;