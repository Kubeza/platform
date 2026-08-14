import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export interface CardBodyProps
  extends HTMLAttributes<HTMLDivElement> {}

export default function CardBody({
  className,
  children,
  ...props
}: CardBodyProps) {
  return (
    <div
      className={cn(
        "px-6 py-5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}