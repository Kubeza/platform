"use client";

import { createContext } from "react";

import type {
  AutocompleteContextValue,
} from "./autocomplete.types";

export const AutocompleteContext =
  createContext<AutocompleteContextValue | null>(
    null,
  );