"use client";

import { createContext } from "react";

import type {
  OTPInputContextValue,
} from "./otp-input.types";

export const OTPInputContext =
  createContext<OTPInputContextValue | null>(
    null,
  );