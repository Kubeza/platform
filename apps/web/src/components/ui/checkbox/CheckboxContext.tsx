"use client";

import { createContext } from "react";

import type {
  CheckboxContextValue,
} from "./checkbox.types";

export const CheckboxContext =
  createContext<CheckboxContextValue | null>(
    null,
  );