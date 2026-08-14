import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  PAGE_SIZE_OPTIONS,
} from "./constants";

import type {
  TablePaginationProps,
} from "./table.types";

const TablePagination = ({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
}: TablePaginationProps) => {
  const totalPages = Math.max(
    1,
    Math.ceil(total / pageSize),
  );

  return (
    <div className="flex flex-col gap-4 border-t border-border p-4 md:flex-row md:items-center md:justify-between">
      <div className="text-sm text-muted-foreground">
        {total} records
      </div>

      <div className="flex items-center gap-3">
        <select
          value={pageSize}
          onChange={(event) =>
            onPageSizeChange(
              Number(event.target.value),
            )
          }
          className="rounded-md border border-border bg-background px-2 py-1 text-sm"
        >
          {PAGE_SIZE_OPTIONS.map(
            (size) => (
              <option
                key={size}
                value={size}
              >
                {size} / page
              </option>
            ),
          )}
        </select>

        <button
          type="button"
          onClick={() =>
            onPageChange(
              Math.max(1, page - 1),
            )
          }
          disabled={page === 1}
          className="rounded-md border border-border p-2 disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <span className="text-sm">
          {page} / {totalPages}
        </span>

        <button
          type="button"
          onClick={() =>
            onPageChange(
              Math.min(
                totalPages,
                page + 1,
              ),
            )
          }
          disabled={
            page === totalPages
          }
          className="rounded-md border border-border p-2 disabled:opacity-50"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;