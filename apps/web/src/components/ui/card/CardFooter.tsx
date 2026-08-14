import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export interface CardFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export default function CardFooter({
  className,
  children,
  ...props
}: CardFooterProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-3 border-t border-slate-800 px-6 py-5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}