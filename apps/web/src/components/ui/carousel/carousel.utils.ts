export function clampCarouselIndex(
  index: number,
  totalItems: number,
): number {
  if (totalItems <= 0) {
    return 0;
  }

  return Math.min(
    Math.max(index, 0),
    totalItems - 1,
  );
}

export function hasNextSlide(
  currentIndex: number,
  totalItems: number,
): boolean {
  return currentIndex < totalItems - 1;
}

export function hasPreviousSlide(
  currentIndex: number,
): boolean {
  return currentIndex > 0;
}