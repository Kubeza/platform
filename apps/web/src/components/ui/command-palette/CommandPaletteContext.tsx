"use client";

import { createContext } from "react";

import type {
  CommandPaletteContextValue,
} from "./command-palette.types";

export const CommandPaletteContext =
  createContext<CommandPaletteContextValue | null>(
    null,
  );