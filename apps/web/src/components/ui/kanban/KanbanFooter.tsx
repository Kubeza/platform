import { forwardRef } from "react";

import { Plus } from "lucide-react";

import { cn } from "@/lib/cn";

import type {
  KanbanFooterProps,
} from "./kanban.types";

const KanbanFooter = forwardRef<
  HTMLDivElement,
  KanbanFooterProps
>(
  (
    {
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "border-t border-slate-800 p-3",
          className,
        )}
        {...props}
      >
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-700 px-3 py-2 text-sm font-medium text-slate-400 transition-all hover:border-slate-500 hover:bg-slate-900 hover:text-white"
        >
          <Plus className="h-4 w-4" />
          Add Card
        </button>
      </footer>
    );
  },
);

KanbanFooter.displayName =
  "KanbanFooter";

export default KanbanFooter;