import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type {
  KanbanLabelProps,
} from "./kanban.types";

const KanbanLabel = forwardRef<
  HTMLSpanElement,
  KanbanLabelProps
>(
  (
    {
      label,
      className,
      ...props
    },
    ref,
  ) => (
    <span
      ref={ref}
      className={cn(
        "rounded-md px-2 py-1 text-xs font-medium",
        className,
      )}
      style={{
        backgroundColor:
          label.color ??
          "#334155",
      }}
      {...props}
    >
      {label.name}
    </span>
  ),
);

KanbanLabel.displayName =
  "KanbanLabel";

export default KanbanLabel;