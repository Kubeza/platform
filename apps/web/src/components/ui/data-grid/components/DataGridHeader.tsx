import {
  flexRender,
} from "@tanstack/react-table";

import { cn } from "@/lib/utils";

import DataGridColumnHeader from "./DataGridColumnHeader";

import {
  useDataGridContext,
} from "./DataGrid";

export default function DataGridHeader() {
  const { table } =
    useDataGridContext<any>();

  return (
    <thead className="sticky top-0 z-20 bg-background">
      {table
        .getHeaderGroups()
        .map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="border-b"
          >
            {headerGroup.headers.map(
              (header) => {
                const column =
                  header.column;

                const canSort =
                  column.getCanSort();

                const sorted =
                  column.getIsSorted();

                return (
                  <th
                    key={header.id}
                    colSpan={
                      header.colSpan
                    }
                    className={cn(
                      "h-12 whitespace-nowrap border-r px-4 text-left text-sm font-semibold last:border-r-0",
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : canSort ? (
                          <DataGridColumnHeader
                            title={String(
                              flexRender(
                                column.columnDef
                                  .header,
                                header.getContext(),
                              ),
                            )}
                            sortable
                            direction={
                              sorted ===
                              "asc"
                                ? "asc"
                                : sorted ===
                                    "desc"
                                  ? "desc"
                                  : null
                            }
                            onSort={column.getToggleSortingHandler()}
                          />
                        ) : (
                          flexRender(
                            column.columnDef
                              .header,
                            header.getContext(),
                          )
                        )}
                  </th>
                );
              },
            )}
          </tr>
        ))}
    </thead>
  );
}