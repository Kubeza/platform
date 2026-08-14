"use client";

import { createContext } from "react";

import type {
  AccordionContextValue,
} from "./accordion.types";

export const AccordionContext =
  createContext<AccordionContextValue | null>(
    null,
  );