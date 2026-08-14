import type {
  CommandItemData,
} from "./command.types";

export function filterCommandItems(
  items: CommandItemData[],
  query: string,
): CommandItemData[] {
  const normalizedQuery =
    query.trim().toLowerCase();

  if (!normalizedQuery) {
    return items;
  }

  return items.filter((item) => {
    const label =
      item.label.toLowerCase();

    const value =
      item.value.toLowerCase();

    return (
      label.includes(normalizedQuery) ||
      value.includes(normalizedQuery)
    );
  });
}

export function findCommandItem(
  items: CommandItemData[],
  value: string,
): CommandItemData | undefined {
  return items.find(
    (item) => item.value === value,
  );
}

export function isCommandItemSelected(
  currentValue: string,
  itemValue: string,
): boolean {
  return currentValue === itemValue;
}