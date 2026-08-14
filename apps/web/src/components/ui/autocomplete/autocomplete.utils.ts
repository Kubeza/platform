import type {
  AutocompleteItemData,
} from "./autocomplete.types";

export function filterAutocompleteItems(
  items: AutocompleteItemData[],
  query: string,
): AutocompleteItemData[] {
  const normalizedQuery =
    query.trim().toLowerCase();

  if (!normalizedQuery) {
    return items;
  }

  return items.filter((item) =>
    item.label
      .toLowerCase()
      .includes(normalizedQuery),
  );
}

export function findAutocompleteItem(
  items: AutocompleteItemData[],
  value: string,
): AutocompleteItemData | undefined {
  return items.find(
    (item) => item.value === value,
  );
}

export function isAutocompleteItemSelected(
  currentValue: string,
  itemValue: string,
): boolean {
  return currentValue === itemValue;
}