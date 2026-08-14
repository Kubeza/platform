import { forwardRef } from "react";

import { MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/cn";

import type {
  KanbanHeaderProps,
} from "./kanban.types";

const KanbanHeader = forwardRef<
  HTMLDivElement,
  KanbanHeaderProps
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
      <header
        ref={ref}
        className={cn(
          "flex items-center justify-between border-b border-slate-800 px-4 py-3",
          className,
        )}
        {...props}
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            {column.color && (
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor:
                    column.color,
                }}
              />
            )}

            <h2 className="truncate text-sm font-semibold text-slate-100">
              {column.title}
            </h2>

            <span className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
              {column.cards.length}
            </span>
          </div>

          {column.limit && (
            <p className="mt-1 text-xs text-slate-500">
              WIP {column.cards.length}/
              {column.limit}
            </p>
          )}
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </header>
    );
  },
);

KanbanHeader.displayName =
  "KanbanHeader";

export default KanbanHeader;