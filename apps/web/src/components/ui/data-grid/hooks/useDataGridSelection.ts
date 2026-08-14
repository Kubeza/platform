import { useCallback, useMemo, useState } from "react";

export function useDataGridSelection<T>(
  rows: T[],
) {
  const [selectedRows, setSelectedRows] =
    useState<Set<number>>(new Set());

  const toggleRow = useCallback(
    (index: number) => {
      setSelectedRows((previous) => {
        const next = new Set(previous);

        if (next.has(index)) {
          next.delete(index);
        } else {
          next.add(index);
        }

        return next;
      });
    },
    [],
  );

  const selectAll = useCallback(() => {
    setSelectedRows(
      new Set(rows.map((_, index) => index)),
    );
  }, [rows]);

  const clearSelection = useCallback(() => {
    setSelectedRows(new Set());
  }, []);

  const toggleAll = useCallback(() => {
    if (selectedRows.size === rows.length) {
      clearSelection();
    } else {
      selectAll();
    }
  }, [
    selectedRows,
    rows,
    clearSelection,
    selectAll,
  ]);

  const selectedCount = useMemo(
    () => selectedRows.size,
    [selectedRows],
  );

  return {
    selectedRows,
    selectedCount,
    toggleRow,
    toggleAll,
    selectAll,
    clearSelection,
    allSelected:
      rows.length > 0 &&
      selectedRows.size === rows.length,
  };
}