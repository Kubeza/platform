"use client";

import { createContext } from "react";

import type {
  RadioGroupContextValue,
} from "./radio-group.types";

export const RadioGroupContext =
  createContext<RadioGroupContextValue | null>(
    null,
  );