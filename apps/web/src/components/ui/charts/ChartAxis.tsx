import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

interface ChartAxisProps
  extends HTMLAttributes<HTMLDivElement> {
  orientation?:
    | "top"
    | "right"
    | "bottom"
    | "left";

  labels?: Array<
    string | number
  >;
}

export function ChartAxis({
  className,
  orientation = "bottom",
  labels = [],
  ...props
}: ChartAxisProps) {
  const isVertical =
    orientation === "left" ||
    orientation === "right";

  return (
    <div
      className={cn(
        "flex text-xs text-muted-foreground",
        isVertical
          ? "h-full flex-col justify-between"
          : "w-full justify-between",
        className,
      )}
      {...props}
    >
      {labels.map((label, index) => (
        <span key={index}>
          {label}
        </span>
      ))}
    </div>
  );
}