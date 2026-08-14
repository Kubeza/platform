import type { BreadcrumbItemData } from "./breadcrumb.types";

import {
  DEFAULT_BREADCRUMB_COLLAPSE_AFTER,
} from "./breadcrumb.constants";

export function findCurrentBreadcrumb(
  items: BreadcrumbItemData[],
): BreadcrumbItemData | undefined {
  return items.find((item) => item.current);
}

export function normalizeBreadcrumbItems(
  items: BreadcrumbItemData[],
): BreadcrumbItemData[] {
  return items.map((item, index) => ({
    ...item,
    current:
      item.current ?? index === items.length - 1,
  }));
}

export function collapseBreadcrumbItems(
  items: BreadcrumbItemData[],
  maxItems = DEFAULT_BREADCRUMB_COLLAPSE_AFTER,
): BreadcrumbItemData[] {
  if (items.length <= maxItems) {
    return items;
  }

  return [
    items[0],
    {
      id: "__ellipsis__",
      label: "...",
    },
    ...items.slice(-(maxItems - 2)),
  ];
}