import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export interface AlertTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export default function AlertTitle({
  className,
  children,
  ...props
}: AlertTitleProps) {
  return (
    <h5
      className={cn(
        "text-base font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </h5>
  );
}