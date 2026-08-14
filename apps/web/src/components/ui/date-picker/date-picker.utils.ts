export function isValidDate(
  value: Date | null,
): value is Date {
  return (
    value instanceof Date &&
    !Number.isNaN(value.getTime())
  );
}

export function formatDateValue(
  value: Date | null,
): string {
  if (!isValidDate(value)) {
    return "";
  }

  return value.toISOString().slice(0, 10);
}

export function isSameDate(
  first: Date | null,
  second: Date | null,
): boolean {
  if (!first || !second) {
    return first === second;
  }

  return (
    first.getFullYear() ===
      second.getFullYear() &&
    first.getMonth() ===
      second.getMonth() &&
    first.getDate() ===
      second.getDate()
  );
}