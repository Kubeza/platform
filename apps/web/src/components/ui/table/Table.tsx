import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import TableBody from "./TableBody";
import TableEmpty from "./TableEmpty";
import TableHeader from "./TableHeader";
import TableLoading from "./TableLoading";

import { useTable } from "./hooks";

import type { TableProps } from "./table.types";

const Table = forwardRef(
  <T,>(
    {
      data,
      columns,
      loading = false,
      className,
      emptyMessage,
      ...props
    }: TableProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const {
      rows,
    } = useTable(
      data,
      columns,
    );

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-xl border border-border bg-background",
          className,
        )}
        {...props}
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <TableHeader
              columns={columns}
            />

            {loading ? (
              <TableLoading />
            ) : rows.length ===
              0 ? (
              <TableEmpty
                message={
                  emptyMessage
                }
                colSpan={
                  columns.length
                }
              />
            ) : (
              <TableBody
                rows={rows}
                columns={
                  columns
                }
              />
            )}
          </table>
        </div>
      </div>
    );
  },
);

Table.displayName =
  "Table";

export default Table;