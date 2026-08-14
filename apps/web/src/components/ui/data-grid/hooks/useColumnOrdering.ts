import {
  useCallback,
  useState,
} from "react";

import type {
  Table,
} from "@tanstack/react-table";

export interface UseColumnOrderingReturn {
  columnOrder: string[];
  moveColumn: (
    fromIndex: number,
    toIndex: number,
  ) => void;
  resetColumnOrder: () => void;
}

export function useColumnOrdering<T>(
  table: Table<T>,
): UseColumnOrderingReturn {
  const initialOrder =
    table
      .getAllLeafColumns()
      .map((column) => column.id);

  const [
    columnOrder,
    setColumnOrder,
  ] = useState(initialOrder);

  const moveColumn =
    useCallback(
      (
        fromIndex: number,
        toIndex: number,
      ) => {
        setColumnOrder((previous) => {
          const updated = [
            ...previous,
          ];

          const [item] =
            updated.splice(
              fromIndex,
              1,
            );

          updated.splice(
            toIndex,
            0,
            item,
          );

          table.setColumnOrder(
            updated,
          );

          return updated;
        });
      },
      [table],
    );

  const resetColumnOrder =
    useCallback(() => {
      table.resetColumnOrder();

      setColumnOrder(
        table
          .getAllLeafColumns()
          .map(
            (column) =>
              column.id,
          ),
      );
    }, [table]);

  return {
    columnOrder,
    moveColumn,
    resetColumnOrder,
  };
}