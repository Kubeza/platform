"use client";

import { createContext } from "react";

import type {
  DateRangePickerContextValue,
} from "./date-range-picker.types";

export const DateRangePickerContext =
  createContext<DateRangePickerContextValue | null>(
    null,
  );