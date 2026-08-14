"use client";

import {
  useMemo,
  useState,
} from "react";

import { SliderContext } from "./SliderContext";

import type {
  SliderProviderProps,
} from "./slider.types";

export function SliderProvider({
  children,
  defaultValue = 0,
  min = 0,
  max = 100,
  disabled = false,
}: SliderProviderProps) {
  const [value, setValue] =
    useState(defaultValue);

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      min,
      max,
      disabled,
    }),
    [
      value,
      min,
      max,
      disabled,
    ],
  );

  return (
    <SliderContext.Provider
      value={contextValue}
    >
      {children}
    </SliderContext.Provider>
  );
}