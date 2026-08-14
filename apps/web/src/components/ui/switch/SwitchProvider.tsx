"use client";

import {
  useMemo,
  useState,
} from "react";

import { SwitchContext } from "./SwitchContext";

import type {
  SwitchProviderProps,
} from "./switch.types";

export function SwitchProvider({
  children,
  defaultChecked = false,
  disabled = false,
}: SwitchProviderProps) {
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
    <SwitchContext.Provider value={value}>
      {children}
    </SwitchContext.Provider>
  );
}