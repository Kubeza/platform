"use client";

import { useContext } from "react";

import { CheckboxContext } from "./CheckboxContext";

export function useCheckbox() {
  const context = useContext(
    CheckboxContext,
  );

  if (!context) {
    throw new Error(
      "useCheckbox must be used within a CheckboxProvider.",
    );
  }

  return context;
}