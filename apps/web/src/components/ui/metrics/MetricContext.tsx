"use client";

import { createContext } from "react";

import type { MetricContextValue } from "./metric.types";

export const MetricContext =
  createContext<MetricContextValue | null>(null);