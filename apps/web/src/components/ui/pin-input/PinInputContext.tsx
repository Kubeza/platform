"use client";

import { createContext } from "react";

import type {
  PinInputContextValue,
} from "./pin-input.types";

export const PinInputContext =
  createContext<PinInputContextValue | null>(
    null,
  );