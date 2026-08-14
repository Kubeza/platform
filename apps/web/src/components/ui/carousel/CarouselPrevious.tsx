"use client";

import type {
  ButtonHTMLAttributes,
} from "react";

import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";

import { useCarousel } from "./useCarousel";

export interface CarouselPreviousProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CarouselPrevious({
  className,
  onClick,
  ...props
}: CarouselPreviousProps) {
  const {
    currentIndex,
    setCurrentIndex,
  } = useCarousel();

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    setCurrentIndex(
      Math.max(currentIndex - 1, 0),
    );

    onClick?.(event);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background p-2 shadow-sm transition-colors hover:bg-accent",
        className,
      )}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </button>
  );
}