"use client";

import {
  useMemo,
  useState,
} from "react";

import { HoverCardContext } from "./HoverCardContext";

import type {
  HoverCardProviderProps,
} from "./hover-card.types";

export function HoverCardProvider({
  children,
  defaultOpen = false,
}: HoverCardProviderProps) {
  const [open, setOpen] =
    useState(defaultOpen);

  const value = useMemo(
    () => ({
      open,
      setOpen,
    }),
    [open],
  );

  return (
    <HoverCardContext.Provider value={value}>
      {children}
    </HoverCardContext.Provider>
  );
}