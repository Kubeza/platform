"use client";

import { createContext } from "react";

import type {
  SearchBoxContextValue,
} from "./search-box.types";

export const SearchBoxContext =
  createContext<SearchBoxContextValue | null>(
    null,
  );