import type { HTMLAttributes } from "react";

export interface StackProps
  extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly";
}