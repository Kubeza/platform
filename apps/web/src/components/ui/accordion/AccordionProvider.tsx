"use client";

import {
  useMemo,
  useState,
} from "react";

import { AccordionContext } from "./AccordionContext";

import type {
  AccordionProviderProps,
} from "./accordion.types";

export function AccordionProvider({
  children,
  defaultValue = null,
}: AccordionProviderProps) {
  const [value, setValue] =
    useState<string | null>(
      defaultValue,
    );

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
    }),
    [value],
  );

  return (
    <AccordionContext.Provider
      value={contextValue}
    >
      {children}
    </AccordionContext.Provider>
  );
}