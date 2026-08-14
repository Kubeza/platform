"use client";

import { useContext } from "react";

import { CommandHistoryContext } from "./CommandHistoryContext";

export function useCommandHistory() {
  const context = useContext(
    CommandHistoryContext,
  );

  if (!context) {
    throw new Error(
      "useCommandHistory must be used within a CommandHistoryProvider.",
    );
  }

  return context;
}