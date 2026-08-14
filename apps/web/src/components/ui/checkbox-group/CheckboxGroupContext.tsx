"use client";

import { createContext } from "react";

import type {
  CheckboxGroupContextValue,
} from "./checkbox-group.types";

export const CheckboxGroupContext =
  createContext<CheckboxGroupContextValue | null>(
    null,
  );