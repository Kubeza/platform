import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement> {
  circle?: boolean;

  animate?: boolean;
}

export default function Skeleton({
  className,
  circle = false,
  animate = true,
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-slate-800/80",
        animate && "animate-pulse",
        circle ? "rounded-full" : "rounded-xl",
        className,
      )}
      {...props}
    />
  );
}