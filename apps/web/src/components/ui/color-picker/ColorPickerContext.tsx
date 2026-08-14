"use client";

import { createContext } from "react";

import type {
  ColorPickerContextValue,
} from "./color-picker.types";

export const ColorPickerContext =
  createContext<ColorPickerContextValue | null>(
    null,
  );