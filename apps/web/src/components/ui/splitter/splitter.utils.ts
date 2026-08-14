export function clampSplitterSize(
  size: number,
  minSize: number,
  maxSize: number,
): number {
  return Math.min(
    maxSize,
    Math.max(minSize, size),
  );
}

export function isValidSplitterSize(
  size: number,
): boolean {
  return (
    Number.isFinite(size) &&
    size >= 0 &&
    size <= 100
  );
}

export function getRemainingSplitterSize(
  size: number,
): number {
  return Math.max(0, 100 - size);
}