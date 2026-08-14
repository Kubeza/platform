import {
  useCallback,
  useMemo,
} from "react";

import type {
  Column,
  Table,
} from "@tanstack/react-table";

export interface UseColumnPinningReturn<T> {
  leftPinnedColumns: Column<T, unknown>[];
  rightPinnedColumns: Column<T, unknown>[];
  centerColumns: Column<T, unknown>[];

  pinLeft: (
    column: Column<T, unknown>,
  ) => void;

  pinRight: (
    column: Column<T, unknown>,
  ) => void;

  unpin: (
    column: Column<T, unknown>,
  ) => void;
}

export function useColumnPinning<T>(
  table: Table<T>,
): UseColumnPinningReturn<T> {
  const columns =
    table.getAllLeafColumns();

  const leftPinnedColumns =
    useMemo(
      () =>
        columns.filter(
          (column) =>
            column.getIsPinned() ===
            "left",
        ),
      [columns],
    );

  const rightPinnedColumns =
    useMemo(
      () =>
        columns.filter(
          (column) =>
            column.getIsPinned() ===
            "right",
        ),
      [columns],
    );

  const centerColumns =
    useMemo(
      () =>
        columns.filter(
          (column) =>
            !column.getIsPinned(),
        ),
      [columns],
    );

  const pinLeft =
    useCallback(
      (
        column: Column<
          T,
          unknown
        >,
      ) => {
        column.pin("left");
      },
      [],
    );

  const pinRight =
    useCallback(
      (
        column: Column<
          T,
          unknown
        >,
      ) => {
        column.pin("right");
      },
      [],
    );

  const unpin =
    useCallback(
      (
        column: Column<
          T,
          unknown
        >,
      ) => {
        column.pin(false);
      },
      [],
    );

  return {
    leftPinnedColumns,
    rightPinnedColumns,
    centerColumns,
    pinLeft,
    pinRight,
    unpin,
  };
}