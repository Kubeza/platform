"use client";

import { useMemo, useState } from "react";

import { CollapsibleContext } from "./CollapsibleContext";

import type { CollapsibleProviderProps } from "./collapsible.types";

export function CollapsibleProvider({
  children,
  defaultOpen = false,
}: CollapsibleProviderProps) {
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
    <CollapsibleContext.Provider value={value}>
      {children}
    </CollapsibleContext.Provider>
  );
}