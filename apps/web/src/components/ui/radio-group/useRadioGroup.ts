"use client";

import { useContext } from "react";

import { RadioGroupContext } from "./RadioGroupContext";

export function useRadioGroup() {
  const context = useContext(
    RadioGroupContext,
  );

  if (!context) {
    throw new Error(
      "useRadioGroup must be used within a RadioGroupProvider.",
    );
  }

  return context;
}