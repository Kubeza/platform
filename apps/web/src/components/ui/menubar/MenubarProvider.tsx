"use client";

import { useMemo, useState } from "react";

import { MenubarContext } from "./MenubarContext";

import type { MenubarProviderProps } from "./menubar.types";

export function MenubarProvider({
  children,
  defaultValue = null,
}: MenubarProviderProps) {
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
    <MenubarContext.Provider
      value={contextValue}
    >
      {children}
    </MenubarContext.Provider>
  );
}