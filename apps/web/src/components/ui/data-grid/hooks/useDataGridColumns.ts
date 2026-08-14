"use client";

import { useMemo } from "react";

import type {
  DataGridColumn,
} from "../data-grid.types";

export function useDataGridColumns<
  T = unknown,
>(
  columns: DataGridColumn<T>[],
) {
  return useMemo(
    () => columns,
    [columns],
  );
}