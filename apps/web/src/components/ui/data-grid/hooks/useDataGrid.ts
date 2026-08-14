import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type ColumnDef,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";

import { useState } from "react";

interface UseDataGridProps<T> {
  data: T[];
  columns: ColumnDef<T, unknown>[];
}

export function useDataGrid<T>({
  data,
  columns,
}: UseDataGridProps<T>) {
  const [sorting, setSorting] =
    useState<SortingState>([]);

  const [globalFilter, setGlobalFilter] =
    useState("");

  const [rowSelection, setRowSelection] =
    useState<RowSelectionState>({});

  const [pagination, setPagination] =
    useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const [
    columnVisibility,
    setColumnVisibility,
  ] =
    useState<VisibilityState>(
      {},
    );

  return useReactTable({
    data,
    columns,

    state: {
      sorting,
      globalFilter,
      rowSelection,
      pagination,
      columnVisibility,
    },

    onSortingChange:
      setSorting,

    onGlobalFilterChange:
      setGlobalFilter,

    onRowSelectionChange:
      setRowSelection,

    onPaginationChange:
      setPagination,

    onColumnVisibilityChange:
      setColumnVisibility,

    enableRowSelection: true,

    getCoreRowModel:
      getCoreRowModel(),

    getFilteredRowModel:
      getFilteredRowModel(),

    getSortedRowModel:
      getSortedRowModel(),

    getPaginationRowModel:
      getPaginationRowModel(),
  });
}