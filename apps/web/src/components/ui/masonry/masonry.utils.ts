export function clampMasonryColumns(
  columns: number,
): number {
  if (!Number.isFinite(columns)) {
    return 1;
  }

  return Math.max(
    1,
    Math.min(12, Math.floor(columns)),
  );
}

export function getMasonryGap(
  gap: number,
): string {
  return `${Math.max(0, gap) * 0.25}rem`;
}