"use client";

import { createContext } from "react";

import type {
  SliderContextValue,
} from "./slider.types";

export const SliderContext =
  createContext<SliderContextValue | null>(
    null,
  );