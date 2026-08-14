"use client";

import { createContext } from "react";

import type {
  DropdownMenuContextValue,
} from "./dropdown-menu.types";

export const DropdownMenuContext =
  createContext<DropdownMenuContextValue | null>(
    null,
  );