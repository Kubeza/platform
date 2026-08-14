"use client";

import {
  useMemo,
  useState,
} from "react";

import { DateRangePickerContext } from "./DateRangePickerContext";

import type {
  DateRange,
  DateRangePickerProviderProps,
} from "./date-range-picker.types";

const EMPTY_RANGE: DateRange = {
  from: null,
  to: null,
};

export function DateRangePickerProvider({
  children,
  defaultValue = EMPTY_RANGE,
  defaultOpen = false,
}: DateRangePickerProviderProps) {
  const [value, setValue] =
    useState<DateRange>(defaultValue);

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
    <DateRangePickerContext.Provider
      value={contextValue}
    >
      {children}
    </DateRangePickerContext.Provider>
  );
}