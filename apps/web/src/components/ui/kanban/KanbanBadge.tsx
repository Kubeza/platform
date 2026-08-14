import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type {
  KanbanBadgeProps,
} from "./kanban.types";

const variants = {
  default:
    "bg-slate-800 text-slate-300",

  success:
    "bg-emerald-500/10 text-emerald-400",

  warning:
    "bg-amber-500/10 text-amber-400",

  error:
    "bg-red-500/10 text-red-400",

  running:
    "bg-sky-500/10 text-sky-400",

  blocked:
    "bg-rose-500/10 text-rose-400",

  ai:
    "bg-cyan-500/10 text-cyan-400",
};

const labels = {
  default: "Open",
  success: "Done",
  warning: "Review",
  error: "Failed",
  running: "Running",
  blocked: "Blocked",
  ai: "AI",
};

const KanbanBadge = forwardRef<
  HTMLSpanElement,
  KanbanBadgeProps
>(
  (
    {
      status = "default",
      className,
      ...props
    },
    ref,
  ) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variants[status],
        className,
      )}
      {...props}
    >
      {labels[status]}
    </span>
  ),
);

KanbanBadge.displayName =
  "KanbanBadge";

export default KanbanBadge;