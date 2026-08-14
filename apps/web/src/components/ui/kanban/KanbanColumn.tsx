import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import KanbanCard from "./KanbanCard";
import KanbanEmpty from "./KanbanEmpty";
import KanbanHeader from "./KanbanHeader";
import KanbanFooter from "./KanbanFooter";

import type {
  KanbanColumnProps,
} from "./kanban.types";

const KanbanColumn = forwardRef<
  HTMLDivElement,
  KanbanColumnProps
>(
  (
    {
      column,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "flex w-80 shrink-0 flex-col rounded-xl border border-slate-800 bg-slate-950",
          className,
        )}
        {...props}
      >
        <KanbanHeader column={column} />

        <div className="flex flex-1 flex-col gap-3 p-3">
          {column.cards.length === 0 ? (
            <KanbanEmpty />
          ) : (
            column.cards.map((card) => (
              <KanbanCard
                key={card.id}
                card={card}
              />
            ))
          )}
        </div>

        <KanbanFooter column={column} />
      </section>
    );
  },
);

KanbanColumn.displayName =
  "KanbanColumn";

export default KanbanColumn;