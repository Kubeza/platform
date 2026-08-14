"use client";

import {
  useMemo,
  useState,
} from "react";

import { CheckboxContext } from "./CheckboxContext";

import type {
  CheckboxProviderProps,
} from "./checkbox.types";

export function CheckboxProvider({
  children,
  defaultChecked = false,
  disabled = false,
}: CheckboxProviderProps) {
  const [checked, setChecked] =
    useState(defaultChecked);

  const value = useMemo(
    () => ({
      checked,
      setChecked,
      disabled,
    }),
    [checked, disabled],
  );

  return (
    <CheckboxContext.Provider value={value}>
      {children}
    </CheckboxContext.Provider>
  );
}