export function sanitizePinValue(
  value: string,
  length: number,
): string {
  return value
    .replace(/\D/g, "")
    .slice(0, length);
}

export function isPinComplete(
  value: string,
  length: number,
): boolean {
  return (
    sanitizePinValue(
      value,
      length,
    ).length === length
  );
}

export function getPinCharacter(
  value: string,
  index: number,
): string {
  return value[index] ?? "";
}