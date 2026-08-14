"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";

import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { useCarousel } from "./useCarousel";

export interface CarouselNextProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CarouselNext({
  className,
  onClick,
  ...props
}: CarouselNextProps) {
  const {
    currentIndex,
    setCurrentIndex,
    totalItems,
  } = useCarousel();

  function handleClick(
    event: MouseEvent<HTMLButtonElement>,
  ) {
    setCurrentIndex(
      Math.min(
        currentIndex + 1,
        totalItems - 1,
      ),
    );

    onClick?.(event);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background p-2 shadow-sm transition-colors hover:bg-accent",
        className,
      )}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}