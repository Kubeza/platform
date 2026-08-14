"use client";

import { useContext } from "react";

import { InputOTPContext } from "./InputOTPContext";

export function useInputOTP() {
  const context = useContext(
    InputOTPContext,
  );

  if (!context) {
    throw new Error(
      "useInputOTP must be used within an InputOTPProvider.",
    );
  }

  return context;
}