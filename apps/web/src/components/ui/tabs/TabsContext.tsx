"use client";

import { createContext } from "react";

import type {
  TabsContextValue,
} from "./tabs.types";

export const TabsContext =
  createContext<TabsContextValue | null>(
    null,
  );