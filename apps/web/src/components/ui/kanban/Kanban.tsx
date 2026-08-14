import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import KanbanColumn from "./KanbanColumn";

import type { KanbanProps } from "./kanban.types";

const Kanban = forwardRef<
  HTMLDivElement,
  KanbanProps
>(({ columns, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-6 overflow-x-auto pb-4",
        className,
      )}
      {...props}
    >
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          column={column}
        />
      ))}
    </div>
  );
});

Kanban.displayName = "Kanban";

export default Kanban;