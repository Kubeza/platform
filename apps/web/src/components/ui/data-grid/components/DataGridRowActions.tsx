import type { Row } from "@tanstack/react-table";
import {
  Edit,
  Eye,
  MoreHorizontal,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface DataGridRowActionsProps<TData> {
  row: Row<TData>;
  onView?: (row: TData) => void;
  onEdit?: (row: TData) => void;
  onDelete?: (row: TData) => void;
}

export default function DataGridRowActions<TData>({
  row,
  onView,
  onEdit,
  onDelete,
}: DataGridRowActionsProps<TData>) {
  return (
    <details className="relative">
      <summary className="list-none">
        <Button
          type="button"
          size="icon"
          variant="ghost"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </summary>

      <div className="absolute right-0 z-50 mt-2 w-44 rounded-lg border bg-background p-2 shadow-lg">
        <button
          type="button"
          onClick={() =>
            onView?.(row.original)
          }
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          type="button"
          onClick={() =>
            onEdit?.(row.original)
          }
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
        >
          <Edit className="h-4 w-4" />
          Edit
        </button>

        <button
          type="button"
          onClick={() =>
            onDelete?.(row.original)
          }
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-destructive hover:bg-muted"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </div>
    </details>
  );
}