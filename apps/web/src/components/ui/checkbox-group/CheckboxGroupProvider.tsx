"use client";

import {
  useMemo,
  useState,
} from "react";

import { CheckboxGroupContext } from "./CheckboxGroupContext";

import type {
  CheckboxGroupProviderProps,
} from "./checkbox-group.types";

export function CheckboxGroupProvider({
  children,
  options,
  defaultValue = [],
  disabled = false,
}: CheckboxGroupProviderProps) {
  const [value, setValue] =
    useState<string[]>(defaultValue);

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      options,
      disabled,
    }),
    [
      value,
      options,
      disabled,
    ],
  );

  return (
    <CheckboxGroupContext.Provider
      value={contextValue}
    >
      {children}
    </CheckboxGroupContext.Provider>
  );
}