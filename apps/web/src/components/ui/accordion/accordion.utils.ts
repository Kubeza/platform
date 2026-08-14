export function isAccordionOpen(
  activeValue: string | null,
  itemValue: string,
): boolean {
  return activeValue === itemValue;
}

export function toggleAccordionValue(
  activeValue: string | null,
  itemValue: string,
): string | null {
  return activeValue === itemValue
    ? null
    : itemValue;
}

export function hasAccordionValue(
  value: string | null,
): value is string {
  return value !== null;
}