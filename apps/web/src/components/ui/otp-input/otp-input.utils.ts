export function sanitizeOTPValue(
  value: string,
  length: number,
): string {
  return value
    .replace(/\D/g, "")
    .slice(0, length);
}

export function isOTPComplete(
  value: string,
  length: number,
): boolean {
  return (
    sanitizeOTPValue(
      value,
      length,
    ).length === length
  );
}

export function getOTPCharacter(
  value: string,
  index: number,
): string {
  return value[index] ?? "";
}

export function getOTPRemainingLength(
  value: string,
  length: number,
): number {
  return Math.max(
    length -
      sanitizeOTPValue(
        value,
        length,
      ).length,
    0,
  );
}