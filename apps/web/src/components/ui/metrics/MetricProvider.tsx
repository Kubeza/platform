"use client";

import { MetricContext } from "./MetricContext";
import type { MetricProviderProps } from "./metric.types";

export function MetricProvider({
  metrics,
  loading = false,
  children,
}: MetricProviderProps) {
  return (
    <MetricContext.Provider
      value={{
        metrics,
        loading,
      }}
    >
      {children}
    </MetricContext.Provider>
  );
}