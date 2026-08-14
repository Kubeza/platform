import type {
  DropdownMenuItemData,
} from "./dropdown-menu.types";

export function findDropdownMenuItem(
  items: DropdownMenuItemData[],
  id: string,
): DropdownMenuItemData | undefined {
  return items.find(
    (item) => item.id === id,
  );
}

export function flattenDropdownMenuItems(
  items: DropdownMenuItemData[],
): DropdownMenuItemData[] {
  return items.flatMap((item) => [
    item,
    ...(item.children
      ? flattenDropdownMenuItems(
          item.children,
        )
      : []),
  ]);
}

export function getEnabledDropdownMenuItems(
  items: DropdownMenuItemData[],
): DropdownMenuItemData[] {
  return flattenDropdownMenuItems(
    items,
  ).filter(
    (item) => !item.disabled,
  );
}