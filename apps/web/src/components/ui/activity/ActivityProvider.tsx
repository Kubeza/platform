"use client";

import { useMemo } from "react";

import { ActivityContext } from "./ActivityContext";
import type { ActivityProviderProps } from "./activity.types";

export function ActivityProvider({
  activities,
  children,
}: ActivityProviderProps) {
  const value = useMemo(
    () => ({
      activities,
    }),
    [activities],
  );

  return (
    <ActivityContext.Provider value={value}>
      {children}
    </ActivityContext.Provider>
  );
}