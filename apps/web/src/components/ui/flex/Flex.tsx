"use client";

import { cn } from "@/lib/utils";

import type {
  FlexProps,
} from "./flex.types";

const directions = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  column: "flex-col",
  "column-reverse": "flex-col-reverse",
};

const gaps = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
};

const alignments = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifications = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

export function Flex({
  direction = "row",
  wrap = false,
  gap = 4,
  align = "center",
  justify = "start",
  className,
  ...props
}: FlexProps) {
  return (
    <div
      className={cn(
        "flex",
        directions[direction],
        wrap && "flex-wrap",
        gaps[gap],
        alignments[align],
        justifications[justify],
        className,
      )}
      {...props}
    />
  );
}