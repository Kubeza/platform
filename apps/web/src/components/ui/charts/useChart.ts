import { useContext } from "react";

import { ChartContext } from "./ChartContext";

export function useChart() {
  const context = useContext(ChartContext);

  if (context === null) {
    throw new Error(
      "useChart must be used within a ChartProvider.",
    );
  }

  return context;
}