"use client";

import {
  useMemo,
  useState,
} from "react";

import { PinInputContext } from "./PinInputContext";

import type {
  PinInputProviderProps,
} from "./pin-input.types";

export function PinInputProvider({
  children,
  length = 4,
  defaultValue = "",
  disabled = false,
}: PinInputProviderProps) {
  const [value, setValue] =
    useState(
      defaultValue.slice(0, length),
    );

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      length,
      disabled,
    }),
    [
      value,
      length,
      disabled,
    ],
  );

  return (
    <PinInputContext.Provider
      value={contextValue}
    >
      {children}
    </PinInputContext.Provider>
  );
}