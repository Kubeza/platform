import type {
  Cell,
  Table,
} from "@tanstack/react-table";
import {
  flexRender,
} from "@tanstack/react-table";

import { useVirtualRows } from "../hooks/useVirtualRows";

interface DataGridVirtualBodyProps<TData> {
  table: Table<TData>;
}

export default function DataGridVirtualBody<TData>({
  table,
}: DataGridVirtualBodyProps<TData>) {
  const rows =
    table.getRowModel().rows;

  const {
    parentRef,
    virtualRows,
    totalSize,
  } = useVirtualRows({
    rows,
  });

  return (
    <div
      ref={parentRef}
      className="max-h-[600px] overflow-auto"
    >
      <div
        style={{
          height: totalSize,
          position: "relative",
        }}
      >
        {virtualRows.map(
          (virtualRow) => {
            const row =
              rows[
                virtualRow.index
              ];

            return (
              <div
                key={row.id}
                className="absolute left-0 top-0 flex w-full border-b bg-background"
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {row
                  .getVisibleCells()
                  .map(
                    (
                      cell: Cell<
                        TData,
                        unknown
                      >,
                    ) => (
                      <div
                        key={cell.id}
                        className="flex-1 px-4 py-3"
                      >
                        {flexRender(
                          cell.column
                            .columnDef
                            .cell,
                          cell.getContext(),
                        )}
                      </div>
                    ),
                  )}
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}