"use client";

import { useContext } from "react";

import { DateRangePickerContext } from "./DateRangePickerContext";

export function useDateRangePicker() {
  const context = useContext(
    DateRangePickerContext,
  );

  if (!context) {
    throw new Error(
      "useDateRangePicker must be used within a DateRangePickerProvider.",
    );
  }

  return context;
}