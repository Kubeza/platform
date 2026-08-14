import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export interface CardDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export default function CardDescription({
  className,
  children,
  ...props
}: CardDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm leading-6 text-slate-400",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}