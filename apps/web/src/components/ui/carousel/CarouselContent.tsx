"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface CarouselContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CarouselContent({
  className,
  children,
  ...props
}: CarouselContentProps) {
  return (
    <div
      className={cn(
        "flex w-full transition-transform duration-300 ease-in-out",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}