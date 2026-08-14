"use client";

import { createContext } from "react";

import type {
  ContextMenuContextValue,
} from "./context-menu.types";

export const ContextMenuContext =
  createContext<ContextMenuContextValue | null>(
    null,
  );