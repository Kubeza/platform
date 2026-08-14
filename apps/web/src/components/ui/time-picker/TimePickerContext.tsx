"use client";

import { createContext } from "react";

import type {
  TimePickerContextValue,
} from "./time-picker.types";

export const TimePickerContext =
  createContext<TimePickerContextValue | null>(
    null,
  );