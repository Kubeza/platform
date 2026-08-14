"use client";

import {
  useMemo,
  useState,
} from "react";

import { ContextMenuContext } from "./ContextMenuContext";

import type {
  ContextMenuProviderProps,
} from "./context-menu.types";

export function ContextMenuProvider({
  children,
  defaultOpen = false,
  defaultPosition = {
    x: 0,
    y: 0,
  },
}: ContextMenuProviderProps) {
  const [open, setOpen] =
    useState(defaultOpen);

  const [x, setX] =
    useState(
      defaultPosition.x,
    );

  const [y, setY] =
    useState(
      defaultPosition.y,
    );

  const setPosition = (
    nextX: number,
    nextY: number,
  ) => {
    setX(nextX);
    setY(nextY);
  };

  const value = useMemo(
    () => ({
      open,
      setOpen,
      x,
      y,
      setPosition,
    }),
    [
      open,
      x,
      y,
    ],
  );

  return (
    <ContextMenuContext.Provider
      value={value}
    >
      {children}
    </ContextMenuContext.Provider>
  );
}