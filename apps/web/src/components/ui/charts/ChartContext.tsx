import { createContext } from "react";

import type {
  ChartContextValue,
} from "./chart.types";

export const ChartContext =
  createContext<ChartContextValue | null>(
    null,
  );