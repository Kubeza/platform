"use client";

import { useContext } from "react";

import { PinInputContext } from "./PinInputContext";

export function usePinInput() {
  const context = useContext(
    PinInputContext,
  );

  if (!context) {
    throw new Error(
      "usePinInput must be used within a PinInputProvider.",
    );
  }

  return context;
}