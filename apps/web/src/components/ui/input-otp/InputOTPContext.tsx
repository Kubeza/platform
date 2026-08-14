"use client";

import { createContext } from "react";

import type {
  InputOTPContextValue,
} from "./input-otp.types";

export const InputOTPContext =
  createContext<InputOTPContextValue | null>(
    null,
  );