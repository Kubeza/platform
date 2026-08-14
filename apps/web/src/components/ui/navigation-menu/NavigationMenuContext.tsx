"use client";

import { createContext } from "react";

import type { NavigationMenuContextValue } from "./navigation-menu.types";

export const NavigationMenuContext =
  createContext<NavigationMenuContextValue | null>(
    null,
  );