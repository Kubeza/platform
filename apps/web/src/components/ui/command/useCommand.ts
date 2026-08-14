"use client";

import { useContext } from "react";

import { CommandContext } from "./CommandContext";

export function useCommand() {
  const context = useContext(
    CommandContext,
  );

  if (!context) {
    throw new Error(
      "useCommand must be used within a CommandProvider.",
    );
  }

  return context;
}