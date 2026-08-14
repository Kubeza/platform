"use client";

import {
  useMemo,
  useState,
} from "react";

import { InputOTPContext } from "./InputOTPContext";

import type {
  InputOTPProviderProps,
} from "./input-otp.types";

export function InputOTPProvider({
  children,
  length = 6,
  defaultValue = "",
  disabled = false,
}: InputOTPProviderProps) {
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
    <InputOTPContext.Provider
      value={contextValue}
    >
      {children}
    </InputOTPContext.Provider>
  );
}