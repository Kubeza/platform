export function normalizeSearchQuery(
  value: string,
): string {
  return value.trim().toLowerCase();
}

export function isSearchQueryEmpty(
  value: string,
): boolean {
  return normalizeSearchQuery(value).length === 0;
}

export function hasSearchQuery(
  value: string,
): boolean {
  return !isSearchQueryEmpty(value);
}

export function matchesSearchQuery(
  value: string,
  query: string,
): boolean {
  return normalizeSearchQuery(
    value,
  ).includes(
    normalizeSearchQuery(query),
  );
}