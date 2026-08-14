"use client";

import { createContext } from "react";

import type {
  CarouselContextValue,
} from "./carousel.types";

export const CarouselContext =
  createContext<CarouselContextValue | null>(
    null,
  );