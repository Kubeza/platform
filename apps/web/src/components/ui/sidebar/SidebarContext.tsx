"use client";

import { createContext } from "react";

import type {
  SidebarContextValue,
} from "./sidebar.types";

export const SidebarContext =
  createContext<SidebarContextValue | null>(
    null,
  );