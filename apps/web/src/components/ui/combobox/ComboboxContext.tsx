"use client";

import { createContext } from "react";

import type {
  ComboboxContextValue,
} from "./combobox.types";

export const ComboboxContext =
  createContext<ComboboxContextValue | null>(
    null,
  );