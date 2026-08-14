"use client";

import { useContext } from "react";

import { DropdownMenuContext } from "./DropdownMenuContext";

export function useDropdownMenu() {
  const context = useContext(
    DropdownMenuContext,
  );

  if (!context) {
    throw new Error(
      "useDropdownMenu must be used within a DropdownMenuProvider.",
    );
  }

  return context;
}