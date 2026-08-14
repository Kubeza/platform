"use client";

import {
  useMemo,
  useState,
} from "react";

import { ComboboxContext } from "./ComboboxContext";

import type {
  ComboboxProviderProps,
} from "./combobox.types";

export function ComboboxProvider({
  children,
  items,
  defaultValue = "",
  defaultOpen = false,
}: ComboboxProviderProps) {
  const [open, setOpen] =
    useState(defaultOpen);

  const [value, setValue] =
    useState(defaultValue);

  const contextValue = useMemo(
    () => ({
      open,
      setOpen,
      value,
      setValue,
      items,
    }),
    [
      open,
      value,
      items,
    ],
  );

  return (
    <ComboboxContext.Provider
      value={contextValue}
    >
      {children}
    </ComboboxContext.Provider>
  );
}