import type {
  MenubarItemData,
} from "./menubar.types";

export function findMenubarItem(
  items: MenubarItemData[],
  id: string,
): MenubarItemData | undefined {
  return items.find(
    (item) => item.id === id,
  );
}

export function flattenMenubarItems(
  items: MenubarItemData[],
): MenubarItemData[] {
  return items.flatMap((item) => [
    item,
    ...(item.children
      ? flattenMenubarItems(
          item.children,
        )
      : []),
  ]);
}

export function getEnabledMenubarItems(
  items: MenubarItemData[],
): MenubarItemData[] {
  return flattenMenubarItems(
    items,
  ).filter(
    (item) => !item.disabled,
  );
}