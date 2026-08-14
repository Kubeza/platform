import type {
  ContextMenuItemData,
} from "./context-menu.types";

export function findContextMenuItem(
  items: ContextMenuItemData[],
  id: string,
): ContextMenuItemData | undefined {
  return items.find(
    (item) => item.id === id,
  );
}

export function flattenContextMenuItems(
  items: ContextMenuItemData[],
): ContextMenuItemData[] {
  return items.flatMap((item) => [
    item,
    ...(item.children
      ? flattenContextMenuItems(
          item.children,
        )
      : []),
  ]);
}

export function getEnabledContextMenuItems(
  items: ContextMenuItemData[],
): ContextMenuItemData[] {
  return flattenContextMenuItems(
    items,
  ).filter(
    (item) => !item.disabled,
  );
}