"use client";

import {
  useMemo,
  useState,
} from "react";

import { DatePickerContext } from "./DatePickerContext";

import type {
  DatePickerProviderProps,
} from "./date-picker.types";

export function DatePickerProvider({
  children,
  defaultValue = null,
  defaultOpen = false,
}: DatePickerProviderProps) {
  const [value, setValue] =
    useState<Date | null>(
      defaultValue,
    );

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
    <DatePickerContext.Provider
      value={contextValue}
    >
      {children}
    </DatePickerContext.Provider>
  );
}