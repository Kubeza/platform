"use client";

import { createContext } from "react";

import type { ActivityContextValue } from "./activity.types";

export const ActivityContext =
  createContext<ActivityContextValue | null>(
    null,
  );