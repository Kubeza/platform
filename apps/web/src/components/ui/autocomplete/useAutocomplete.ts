"use client";

import { useContext } from "react";

import { AutocompleteContext } from "./AutocompleteContext";

export function useAutocomplete() {
  const context = useContext(
    AutocompleteContext,
  );

  if (!context) {
    throw new Error(
      "useAutocomplete must be used within an AutocompleteProvider.",
    );
  }

  return context;
}