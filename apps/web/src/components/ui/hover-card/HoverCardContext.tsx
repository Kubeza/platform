"use client";

import { createContext } from "react";

import type {
  HoverCardContextValue,
} from "./hover-card.types";

export const HoverCardContext =
  createContext<HoverCardContextValue | null>(
    null,
  );