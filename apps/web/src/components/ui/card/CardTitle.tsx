import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export interface CardTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export default function CardTitle({
  className,
  children,
  ...props
}: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold tracking-tight text-white",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}