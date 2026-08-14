"use client";

import { useMemo, useState } from "react";

import { NavigationMenuContext } from "./NavigationMenuContext";

import type { NavigationMenuProviderProps } from "./navigation-menu.types";

export function NavigationMenuProvider({
  children,
  defaultValue = null,
}: NavigationMenuProviderProps) {
  const [value, setValue] =
    useState<string | null>(defaultValue);

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
    }),
    [value],
  );

  return (
    <NavigationMenuContext.Provider
      value={contextValue}
    >
      {children}
    </NavigationMenuContext.Provider>
  );
}