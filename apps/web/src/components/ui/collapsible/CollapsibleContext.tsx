"use client";

import { createContext } from "react";

import type { CollapsibleContextValue } from "./collapsible.types";

export const CollapsibleContext =
  createContext<CollapsibleContextValue | null>(
    null,
  );