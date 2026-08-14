"use client";

import { createContext } from "react";

import type { TerminalContextValue } from "./terminal.types";

export const TerminalContext =
  createContext<TerminalContextValue | null>(
    null,
  );