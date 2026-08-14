"use client";

import { useContext } from "react";

import { TimePickerContext } from "./TimePickerContext";

export function useTimePicker() {
  const context = useContext(
    TimePickerContext,
  );

  if (!context) {
    throw new Error(
      "useTimePicker must be used within a TimePickerProvider.",
    );
  }

  return context;
}