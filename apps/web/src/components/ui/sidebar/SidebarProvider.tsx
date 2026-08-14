"use client";

import { useMemo } from "react";

import { SidebarContext } from "./SidebarContext";

import type {
  SidebarProviderProps,
} from "./sidebar.types";

export function SidebarProvider({
  children,
  open = true,
  variant = "default",
  collapsible = "icon",
  items = [],
}: SidebarProviderProps) {
  const value = useMemo(
    () => ({
      open,
      variant,
      collapsible,
      items,
    }),
    [
      open,
      variant,
      collapsible,
      items,
    ],
  );

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}