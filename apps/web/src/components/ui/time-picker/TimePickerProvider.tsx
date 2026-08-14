"use client";

import {
  useMemo,
  useState,
} from "react";

import { TimePickerContext } from "./TimePickerContext";

import type {
  TimePickerProviderProps,
  TimeValue,
} from "./time-picker.types";

export function TimePickerProvider({
  children,
  defaultValue = null,
  defaultOpen = false,
}: TimePickerProviderProps) {
  const [value, setValue] =
    useState<TimeValue | null>(
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
    <TimePickerContext.Provider
      value={contextValue}
    >
      {children}
    </TimePickerContext.Provider>
  );
}