"use client";

import { createContext } from "react";

import type { MenubarContextValue } from "./menubar.types";

export const MenubarContext =
  createContext<MenubarContextValue | null>(
    null,
  );