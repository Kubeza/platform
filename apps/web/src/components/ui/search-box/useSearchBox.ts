"use client";

import { useContext } from "react";

import { SearchBoxContext } from "./SearchBoxContext";

export function useSearchBox() {
  const context = useContext(
    SearchBoxContext,
  );

  if (!context) {
    throw new Error(
      "useSearchBox must be used within a SearchBoxProvider.",
    );
  }

  return context;
}