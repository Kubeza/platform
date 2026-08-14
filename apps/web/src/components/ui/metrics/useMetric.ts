"use client";

import { useContext } from "react";

import { MetricContext } from "./MetricContext";

export function useMetric() {
  const context = useContext(MetricContext);

  if (!context) {
    throw new Error(
      "useMetric must be used within a MetricProvider.",
    );
  }

  return context;
}