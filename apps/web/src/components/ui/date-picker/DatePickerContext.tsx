"use client";

import { createContext } from "react";

import type {
  DatePickerContextValue,
} from "./date-picker.types";

export const DatePickerContext =
  createContext<DatePickerContextValue | null>(
    null,
  );