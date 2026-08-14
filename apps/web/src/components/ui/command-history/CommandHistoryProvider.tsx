"use client";

import { useMemo } from "react";

import { CommandHistoryContext } from "./CommandHistoryContext";

import type {
  CommandHistoryProviderProps,
} from "./command-history.types";

export function CommandHistoryProvider({
  commands,
  children,
}: CommandHistoryProviderProps) {
  const value = useMemo(
    () => ({
      commands,
    }),
    [commands],
  );

  return (
    <CommandHistoryContext.Provider value={value}>
      {children}
    </CommandHistoryContext.Provider>
  );
}