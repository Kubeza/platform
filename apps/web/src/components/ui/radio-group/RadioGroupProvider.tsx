"use client";

import {
  useMemo,
  useState,
} from "react";

import { RadioGroupContext } from "./RadioGroupContext";

import type {
  RadioGroupProviderProps,
} from "./radio-group.types";

export function RadioGroupProvider({
  children,
  defaultValue = "",
  disabled = false,
}: RadioGroupProviderProps) {
  const [value, setValue] =
    useState(defaultValue);

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      disabled,
    }),
    [value, disabled],
  );

  return (
    <RadioGroupContext.Provider
      value={contextValue}
    >
      {children}
    </RadioGroupContext.Provider>
  );
}