import type {
  SidebarMenuItemData,
} from "./sidebar.types";

export function flattenSidebarItems(
  items: SidebarMenuItemData[],
): SidebarMenuItemData[] {
  return items.flatMap((item) => [
    item,
    ...(item.children
      ? flattenSidebarItems(item.children)
      : []),
  ]);
}

export function findActiveSidebarItem(
  items: SidebarMenuItemData[],
): SidebarMenuItemData | undefined {
  for (const item of items) {
    if (item.active) {
      return item;
    }

    if (item.children) {
      const child =
        findActiveSidebarItem(item.children);

      if (child) {
        return child;
      }
    }
  }

  return undefined;
}

export function filterSidebarItems(
  items: SidebarMenuItemData[],
  query: string,
): SidebarMenuItemData[] {
  const keyword = query.trim().toLowerCase();

  if (!keyword) {
    return items;
  }

  return flattenSidebarItems(items).filter(
    (item) =>
      item.label
        .toLowerCase()
        .includes(keyword),
  );
}