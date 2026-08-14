import { useMemo } from "react";

import type {
  ChartDataPoint,
  ChartSeries,
} from "./chart.types";

export function useChartSeries(
  series: ChartSeries[],
) {
  return useMemo(
    () =>
      series.filter(
        (item) => !item.hidden,
      ),
    [series],
  );
}

export function useChartData(
  data: ChartDataPoint[],
) {
  return useMemo(
    () => data,
    [data],
  );
}