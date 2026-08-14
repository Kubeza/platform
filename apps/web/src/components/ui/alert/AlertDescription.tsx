import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export interface AlertDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export default function AlertDescription({
  className,
  children,
  ...props
}: AlertDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm leading-6 opacity-90",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}