"use client";

import {
  useMemo,
  useState,
} from "react";

import { CommandContext } from "./CommandContext";

import type {
  CommandProviderProps,
} from "./command.types";

export function CommandProvider({
  children,
  items = [],
  defaultValue = "",
  defaultQuery = "",
  defaultOpen = false,
}: CommandProviderProps) {
  const [value, setValue] =
    useState(defaultValue);

  const [query, setQuery] =
    useState(defaultQuery);

  const [open, setOpen] =
    useState(defaultOpen);

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      query,
      setQuery,
      items,
      open,
      setOpen,
    }),
    [
      value,
      query,
      items,
      open,
    ],
  );

  return (
    <CommandContext.Provider
      value={contextValue}
    >
      {children}
    </CommandContext.Provider>
  );
}