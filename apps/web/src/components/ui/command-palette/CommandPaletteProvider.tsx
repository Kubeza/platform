"use client";

import {
  useCallback,
  useMemo,
  useState,
} from "react";

import { CommandPaletteContext } from "./CommandPaletteContext";

import type {
  CommandPaletteItem,
  CommandPaletteProviderProps,
} from "./command-palette.types";

export function CommandPaletteProvider({
  open: defaultOpen = false,
  query: defaultQuery = "",
  commands,
  children,
}: CommandPaletteProviderProps) {
  const [open, setOpen] =
    useState(defaultOpen);

  const [query, setQuery] =
    useState(defaultQuery);

  const [
    items,
    setItems,
  ] = useState<
    CommandPaletteItem[]
  >([]);

  const [
    selected,
    setSelected,
  ] = useState(0);

  const registerItem =
    useCallback(
      (item: CommandPaletteItem) => {
        setItems(
          (current) => {
            const existingIndex =
              current.findIndex(
                (entry) =>
                  entry.id === item.id,
              );

            if (
              existingIndex ===
              -1
            ) {
              return [
                ...current,
                item,
              ];
            }

            const next = [
              ...current,
            ];

            next[
              existingIndex
            ] = item;

            return next;
          },
        );
      },
      [],
    );

  const unregisterItem =
    useCallback(
      (id: string) => {
        setItems(
          (current) =>
            current.filter(
              (entry) =>
                entry.id !== id,
            ),
        );
      },
      [],
    );

  const value = useMemo(
    () => ({
      open,
      setOpen,
      query,
      setQuery,
      commands,
      items,
      registerItem,
      unregisterItem,
      selected,
      setSelected,
    }),
    [
      open,
      query,
      commands,
      items,
      registerItem,
      unregisterItem,
      selected,
    ],
  );

  return (
    <CommandPaletteContext.Provider
      value={value}
    >
      {children}
    </CommandPaletteContext.Provider>
  );
}