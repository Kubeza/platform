import {
  useMemo,
  type PropsWithChildren,
} from "react";

import { ChartContext } from "./ChartContext";

import type {
  ChartContextValue,
  ChartDataPoint,
  ChartSeries,
} from "./chart.types";

interface ChartProviderProps
  extends PropsWithChildren {
  data: ChartDataPoint[];
  series: ChartSeries[];
  loading?: boolean;
  empty?: boolean;
}

export function ChartProvider({
  children,
  data,
  series,
  loading = false,
  empty = false,
}: ChartProviderProps) {
  const value =
    useMemo<ChartContextValue>(
      () => ({
        data,
        series,
        loading,
        empty,
      }),
      [
        data,
        series,
        loading,
        empty,
      ],
    );

  return (
    <ChartContext.Provider
      value={value}
    >
      {children}
    </ChartContext.Provider>
  );
}