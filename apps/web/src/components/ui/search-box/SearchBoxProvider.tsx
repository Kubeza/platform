"use client";

import {
  useCallback,
  useMemo,
  useState,
} from "react";

import { SearchBoxContext } from "./SearchBoxContext";

import type {
  SearchBoxProviderProps,
} from "./search-box.types";

export function SearchBoxProvider({
  children,
  defaultValue = "",
}: SearchBoxProviderProps) {
  const [value, setValue] =
    useState(defaultValue);

  const clear = useCallback(() => {
    setValue("");
  }, []);

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      clear,
    }),
    [value, clear],
  );

  return (
    <SearchBoxContext.Provider
      value={contextValue}
    >
      {children}
    </SearchBoxContext.Provider>
  );
}