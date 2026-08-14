"use client";

import { useMemo } from "react";

import { TimelineContext } from "./TimelineContext";
import type { TimelineProviderProps } from "./timeline.types";

export function TimelineProvider({
  items,
  children,
}: TimelineProviderProps) {
  const value = useMemo(
    () => ({
      items,
    }),
    [items],
  );

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  );
}