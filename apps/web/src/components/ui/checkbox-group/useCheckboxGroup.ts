"use client";

import { useContext } from "react";

import { CheckboxGroupContext } from "./CheckboxGroupContext";

export function useCheckboxGroup() {
  const context = useContext(
    CheckboxGroupContext,
  );

  if (!context) {
    throw new Error(
      "useCheckboxGroup must be used within a CheckboxGroupProvider.",
    );
  }

  return context;
}