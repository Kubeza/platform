"use client";

import { useContext } from "react";

import { NavigationMenuContext } from "./NavigationMenuContext";

export function useNavigationMenu() {
  const context = useContext(
    NavigationMenuContext,
  );

  if (!context) {
    throw new Error(
      "useNavigationMenu must be used within a NavigationMenuProvider.",
    );
  }

  return context;
}