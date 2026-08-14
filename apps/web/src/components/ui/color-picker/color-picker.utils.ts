export function isValidHexColor(
  value: string,
): boolean {
  return /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(
    value,
  );
}

export function normalizeHexColor(
  value: string,
): string {
  const normalized =
    value.trim().toLowerCase();

  if (!normalized) {
    return "#000000";
  }

  if (!normalized.startsWith("#")) {
    return `#${normalized}`;
  }

  return normalized;
}

export function isSameColor(
  first: string,
  second: string,
): boolean {
  return (
    normalizeHexColor(first) ===
    normalizeHexColor(second)
  );
}