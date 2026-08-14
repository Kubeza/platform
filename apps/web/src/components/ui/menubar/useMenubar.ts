"use client";

import { useContext } from "react";

import { MenubarContext } from "./MenubarContext";

export function useMenubar() {
  const context = useContext(
    MenubarContext,
  );

  if (!context) {
    throw new Error(
      "useMenubar must be used within a MenubarProvider.",
    );
  }

  return context;
}