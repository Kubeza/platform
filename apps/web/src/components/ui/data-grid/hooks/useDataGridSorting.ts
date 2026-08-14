import {
  useMemo,
  useState,
} from "react";

export type SortDirection =
  | "asc"
  | "desc"
  | null;

export function useDataGridSorting<T>(
  rows: T[],
) {
  const [sortKey, setSortKey] =
    useState<string | null>(null);

  const [direction, setDirection] =
    useState<SortDirection>(null);

  const toggleSort = (
    key: string,
  ) => {
    if (sortKey !== key) {
      setSortKey(key);
      setDirection("asc");
      return;
    }

    if (direction === "asc") {
      setDirection("desc");
      return;
    }

    if (direction === "desc") {
      setSortKey(null);
      setDirection(null);
      return;
    }

    setDirection("asc");
  };

  const sortedRows = useMemo(() => {
    if (
      !sortKey ||
      !direction
    ) {
      return rows;
    }

    return [...rows].sort(
      (a: any, b: any) => {
        const left =
          a[sortKey];

        const right =
          b[sortKey];

        if (left < right)
          return direction === "asc"
            ? -1
            : 1;

        if (left > right)
          return direction === "asc"
            ? 1
            : -1;

        return 0;
      },
    );
  }, [
    rows,
    sortKey,
    direction,
  ]);

  return {
    sortedRows,
    sortKey,
    direction,
    toggleSort,
  };
}