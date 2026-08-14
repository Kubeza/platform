export function sanitizeInputOTPValue(
  value: string,
  length: number,
): string {
  return value
    .replace(/\D/g, "")
    .slice(0, length);
}

export function isInputOTPComplete(
  value: string,
  length: number,
): boolean {
  return (
    sanitizeInputOTPValue(
      value,
      length,
    ).length === length
  );
}

export function getInputOTPCharacter(
  value: string,
  index: number,
): string {
  return value[index] ?? "";
}