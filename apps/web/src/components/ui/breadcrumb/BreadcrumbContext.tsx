"use client";

import { createContext } from "react";

import type { BreadcrumbContextValue } from "./breadcrumb.types";

export const BreadcrumbContext =
  createContext<BreadcrumbContextValue | null>(
    null,
  );