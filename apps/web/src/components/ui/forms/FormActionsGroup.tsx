import * as React from "react";

import { cn } from "@/lib/utils";

interface FormActionsGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
  align?: "start" | "center" | "end";
}

const directionClasses = {
  horizontal: "flex-row",
  vertical: "flex-col",
} as const;

const alignmentClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
} as const;

export function FormActionsGroup({
  direction = "horizontal",
  align = "end",
  className,
  children,
  ...props
}: FormActionsGroupProps) {
  return (
    <div
      className={cn(
        "flex gap-3",
        directionClasses[direction],
        alignmentClasses[align],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}