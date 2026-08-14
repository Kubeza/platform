"use client";

import {
  useMemo,
  useState,
} from "react";

import { OTPInputContext } from "./OTPInputContext";

import type {
  OTPInputProviderProps,
} from "./otp-input.types";

export function OTPInputProvider({
  children,
  length = 6,
  defaultValue = "",
  disabled = false,
}: OTPInputProviderProps) {
  const [value, setValue] =
    useState(defaultValue.slice(0, length));

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
    <OTPInputContext.Provider
      value={contextValue}
    >
      {children}
    </OTPInputContext.Provider>
  );
}