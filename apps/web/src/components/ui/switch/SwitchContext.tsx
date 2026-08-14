"use client";

import { createContext } from "react";

import type {
  SwitchContextValue,
} from "./switch.types";

export const SwitchContext =
  createContext<SwitchContextValue | null>(
    null,
  );