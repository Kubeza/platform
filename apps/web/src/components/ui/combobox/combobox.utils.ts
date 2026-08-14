import type {
  ComboboxItemData,
} from "./combobox.types";

export function filterComboboxItems(
  items: ComboboxItemData[],
  query: string,
): ComboboxItemData[] {
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

export function findComboboxItem(
  items: ComboboxItemData[],
  value: string,
): ComboboxItemData | undefined {
  return items.find(
    (item) => item.value === value,
  );
}

export function isComboboxItemSelected(
  value: string,
  itemValue: string,
): boolean {
  return value === itemValue;
}