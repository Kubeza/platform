"use client";

import { useMemo } from "react";

import { TerminalContext } from "./TerminalContext";
import type {
  TerminalProviderProps,
} from "./terminal.types";

export function TerminalProvider({
  commands,
  status = "disconnected",
  children,
}: TerminalProviderProps) {
  const value = useMemo(
    () => ({
      commands,
      status,
    }),
    [commands, status],
  );

  return (
    <TerminalContext.Provider value={value}>
      {children}
    </TerminalContext.Provider>
  );
}