"use client";

import { useContext } from "react";

import { ComboboxContext } from "./ComboboxContext";

export function useCombobox() {
  const context = useContext(
    ComboboxContext,
  );

  if (!context) {
    throw new Error(
      "useCombobox must be used within a ComboboxProvider.",
    );
  }

  return context;
}