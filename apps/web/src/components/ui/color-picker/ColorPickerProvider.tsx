"use client";

import {
  useMemo,
  useState,
} from "react";

import { ColorPickerContext } from "./ColorPickerContext";

import type {
  ColorPickerProviderProps,
} from "./color-picker.types";

export function ColorPickerProvider({
  children,
  defaultValue = "#000000",
  defaultOpen = false,
}: ColorPickerProviderProps) {
  const [value, setValue] =
    useState(defaultValue);

  const [open, setOpen] =
    useState(defaultOpen);

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      open,
      setOpen,
    }),
    [value, open],
  );

  return (
    <ColorPickerContext.Provider
      value={contextValue}
    >
      {children}
    </ColorPickerContext.Provider>
  );
}