import type {
  NavigationMenuItemData,
} from "./navigation-menu.types";

export function findNavigationMenuItem(
  items: NavigationMenuItemData[],
  id: string,
): NavigationMenuItemData | undefined {
  return items.find(
    (item) => item.id === id,
  );
}

export function flattenNavigationMenuItems(
  items: NavigationMenuItemData[],
): NavigationMenuItemData[] {
  return items.flatMap((item) => [
    item,
    ...(item.children
      ? flattenNavigationMenuItems(
          item.children,
        )
      : []),
  ]);
}

export function getEnabledNavigationMenuItems(
  items: NavigationMenuItemData[],
): NavigationMenuItemData[] {
  return flattenNavigationMenuItems(
    items,
  ).filter(
    (item) => !item.disabled,
  );
}