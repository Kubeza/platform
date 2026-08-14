"use client";

import { useContext } from "react";

import { ColorPickerContext } from "./ColorPickerContext";

export function useColorPicker() {
  const context = useContext(
    ColorPickerContext,
  );

  if (!context) {
    throw new Error(
      "useColorPicker must be used within a ColorPickerProvider.",
    );
  }

  return context;
}