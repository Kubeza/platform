"use client";

import { createContext } from "react";

import type {
  CommandContextValue,
} from "./command.types";

export const CommandContext =
  createContext<CommandContextValue | null>(
    null,
  );