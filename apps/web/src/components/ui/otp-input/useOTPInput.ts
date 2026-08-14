"use client";

import { useContext } from "react";

import { OTPInputContext } from "./OTPInputContext";

export function useOTPInput() {
  const context = useContext(
    OTPInputContext,
  );

  if (!context) {
    throw new Error(
      "useOTPInput must be used within an OTPInputProvider.",
    );
  }

  return context;
}