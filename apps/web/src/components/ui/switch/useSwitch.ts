"use client";

import { useContext } from "react";

import { SwitchContext } from "./SwitchContext";

export function useSwitch() {
  const context = useContext(
    SwitchContext,
  );

  if (!context) {
    throw new Error(
      "useSwitch must be used within a SwitchProvider.",
    );
  }

  return context;
}