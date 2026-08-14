"use client";

import { createContext } from "react";

import type {
  CommandHistoryContextValue,
} from "./command-history.types";

export const CommandHistoryContext =
  createContext<CommandHistoryContextValue | null>(
    null,
  );