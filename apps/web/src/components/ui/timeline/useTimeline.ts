"use client";

import { useContext } from "react";

import { TimelineContext } from "./TimelineContext";

export function useTimeline() {
  const context = useContext(TimelineContext);

  if (!context) {
    throw new Error(
      "useTimeline must be used within a TimelineProvider.",
    );
  }

  return context;
}