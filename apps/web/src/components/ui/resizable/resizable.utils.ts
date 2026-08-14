export function clampPanelSize(
  size: number,
  minSize: number,
  maxSize: number,
): number {
  return Math.min(
    maxSize,
    Math.max(minSize, size),
  );
}

export function isValidPanelSize(
  size: number,
): boolean {
  return (
    Number.isFinite(size) &&
    size >= 0 &&
    size <= 100
  );
}

export function getRemainingPanelSize(
  size: number,
): number {
  return Math.max(0, 100 - size);
}