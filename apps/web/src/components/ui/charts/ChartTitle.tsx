import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

interface ChartTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export function ChartTitle({
  className,
  children,
  ...props
}: ChartTitleProps) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold tracking-tight text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}