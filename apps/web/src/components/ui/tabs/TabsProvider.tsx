"use client";

import {
  useMemo,
  useState,
} from "react";

import { TabsContext } from "./TabsContext";

import type {
  TabsProviderProps,
} from "./tabs.types";

export function TabsProvider({
  children,
  defaultValue,
}: TabsProviderProps) {
  const [value, setValue] =
    useState(defaultValue);

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
    }),
    [value],
  );

  return (
    <TabsContext.Provider
      value={contextValue}
    >
      {children}
    </TabsContext.Provider>
  );
}