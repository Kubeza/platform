"use client";

import {
  useMemo,
  useState,
} from "react";

import { CarouselContext } from "./CarouselContext";

import type {
  CarouselProviderProps,
} from "./carousel.types";

export function CarouselProvider({
  children,
  totalItems,
  defaultIndex = 0,
}: CarouselProviderProps) {
  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(defaultIndex);

  const contextValue = useMemo(
    () => ({
      currentIndex,
      setCurrentIndex,
      totalItems,
    }),
    [
      currentIndex,
      totalItems,
    ],
  );

  return (
    <CarouselContext.Provider
      value={contextValue}
    >
      {children}
    </CarouselContext.Provider>
  );
}