import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export interface CardHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export default function CardHeader({
  className,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 border-b border-slate-800 px-6 py-5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}