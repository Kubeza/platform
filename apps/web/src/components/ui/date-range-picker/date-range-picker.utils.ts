import type {
  DateRange,
} from "./date-range-picker.types";

export function isValidDate(
  value: Date | null,
): value is Date {
  return (
    value instanceof Date &&
    !Number.isNaN(value.getTime())
  );
}

export function isValidDateRange(
  range: DateRange,
): boolean {
  if (!range.from || !range.to) {
    return true;
  }

  return (
    range.from.getTime() <=
    range.to.getTime()
  );
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

export function formatDateRange(
  range: DateRange,
): string {
  const from = isValidDate(range.from)
    ? range.from.toISOString().slice(0, 10)
    : "";

  const to = isValidDate(range.to)
    ? range.to.toISOString().slice(0, 10)
    : "";

  if (!from && !to) {
    return "";
  }

  if (!to) {
    return from;
  }

  return `${from} – ${to}`;
}