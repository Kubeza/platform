"use client";

import {
  useMemo,
  useState,
} from "react";

import { DropdownMenuContext } from "./DropdownMenuContext";

import type {
  DropdownMenuProviderProps,
} from "./dropdown-menu.types";

export function DropdownMenuProvider({
  children,
  defaultOpen = false,
}: DropdownMenuProviderProps) {
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
    <DropdownMenuContext.Provider
      value={value}
    >
      {children}
    </DropdownMenuContext.Provider>
  );
}