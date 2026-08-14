import type {
  VirtualItem,
} from "@tanstack/react-virtual";

export function getPaddingTop(
  items: VirtualItem[],
): number {
  if (!items.length) {
    return 0;
  }

  return items[0].start;
}

export function getPaddingBottom(
  items: VirtualItem[],
  totalSize: number,
): number {
  if (!items.length) {
    return 0;
  }

  return (
    totalSize -
    items[
      items.length - 1
    ].end
  );
}

export function getVirtualItem<T>(
  items: T[],
  index: number,
): T | undefined {
  return items[index];
}