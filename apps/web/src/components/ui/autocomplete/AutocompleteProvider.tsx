"use client";

import {
  useMemo,
  useState,
} from "react";

import { AutocompleteContext } from "./AutocompleteContext";

import type {
  AutocompleteProviderProps,
} from "./autocomplete.types";

export function AutocompleteProvider({
  children,
  items,
  defaultValue = "",
}: AutocompleteProviderProps) {
  const [value, setValue] =
    useState(defaultValue);

  const [open, setOpen] =
    useState(false);

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      items,
      open,
      setOpen,
    }),
    [
      value,
      items,
      open,
    ],
  );

  return (
    <AutocompleteContext.Provider
      value={contextValue}
    >
      {children}
    </AutocompleteContext.Provider>
  );
}