"use client";

import { useMemo, useState } from "react";

import { BreadcrumbContext } from "./BreadcrumbContext";
import type {
  BreadcrumbItemData,
  BreadcrumbProviderProps,
} from "./breadcrumb.types";

export function BreadcrumbProvider({
  children,
  items = [],
}: BreadcrumbProviderProps) {
  const [breadcrumbItems, setBreadcrumbItems] =
    useState<BreadcrumbItemData[]>(items);

  const value = useMemo(
    () => ({
      items: breadcrumbItems,
      setItems: setBreadcrumbItems,
    }),
    [breadcrumbItems],
  );

  return (
    <BreadcrumbContext.Provider value={value}>
      {children}
    </BreadcrumbContext.Provider>
  );
}