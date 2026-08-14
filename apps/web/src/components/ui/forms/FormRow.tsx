import * as React from "react";

import { cn } from "@/lib/utils";

interface FormRowProps
  extends React.HTMLAttributes<HTMLDivElement> {
  align?:
    | "start"
    | "center"
    | "end"
    | "stretch";
}

const alignments = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

export function FormRow({
  align = "start",
  className,
  children,
  ...props
}: FormRowProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-4",
        alignments[align],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}