import { useRef } from "react";

import type { Row } from "@tanstack/react-table";
import {
  useVirtualizer,
  type VirtualItem,
} from "@tanstack/react-virtual";

export interface UseVirtualRowsOptions<T> {
  rows: Row<T>[];
  estimateSize?: number;
  overscan?: number;
}

export interface UseVirtualRowsReturn<T> {
  parentRef: React.RefObject<HTMLDivElement | null>;
  virtualRows: VirtualItem[];
  totalSize: number;
  rows: Row<T>[];
}

export function useVirtualRows<T>({
  rows,
  estimateSize = 44,
  overscan = 10,
}: UseVirtualRowsOptions<T>): UseVirtualRowsReturn<T> {
  const parentRef =
    useRef<HTMLDivElement>(null);

  const virtualizer =
    useVirtualizer({
      count: rows.length,
      getScrollElement: () =>
        parentRef.current,
      estimateSize: () =>
        estimateSize,
      overscan,
    });

  return {
    parentRef,
    virtualRows:
      virtualizer.getVirtualItems(),
    totalSize:
      virtualizer.getTotalSize(),
    rows,
  };
}