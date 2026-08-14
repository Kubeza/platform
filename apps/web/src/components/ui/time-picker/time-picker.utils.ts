import type {
  TimeValue,
} from "./time-picker.types";

export function isValidTime(
  value: TimeValue | null,
): value is TimeValue {
  if (!value) {
    return false;
  }

  return (
    Number.isInteger(value.hours) &&
    value.hours >= 0 &&
    value.hours <= 23 &&
    Number.isInteger(value.minutes) &&
    value.minutes >= 0 &&
    value.minutes <= 59 &&
    (value.seconds === undefined ||
      (Number.isInteger(value.seconds) &&
        value.seconds >= 0 &&
        value.seconds <= 59))
  );
}

export function formatTime(
  value: TimeValue | null,
): string {
  if (!isValidTime(value)) {
    return "";
  }

  const hours = String(
    value.hours,
  ).padStart(2, "0");

  const minutes = String(
    value.minutes,
  ).padStart(2, "0");

  const seconds =
    value.seconds === undefined
      ? ""
      : `:${String(
          value.seconds,
        ).padStart(2, "0")}`;

  return `${hours}:${minutes}${seconds}`;
}

export function isSameTime(
  first: TimeValue | null,
  second: TimeValue | null,
): boolean {
  if (!first || !second) {
    return first === second;
  }

  return (
    first.hours === second.hours &&
    first.minutes === second.minutes &&
    (first.seconds ?? 0) ===
      (second.seconds ?? 0)
  );
}