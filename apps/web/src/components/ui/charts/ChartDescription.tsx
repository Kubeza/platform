import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

interface ChartDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export function ChartDescription({
  className,
  children,
  ...props
}: ChartDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}