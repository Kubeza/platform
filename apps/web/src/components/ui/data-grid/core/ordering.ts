export function reorderArray<T>(
  items: T[],
  fromIndex: number,
  toIndex: number,
): T[] {
  const updated = [...items];

  const [item] =
    updated.splice(
      fromIndex,
      1,
    );

  updated.splice(
    toIndex,
    0,
    item,
  );

  return updated;
}

export function moveLeft(
  index: number,
) {
  return Math.max(
    index - 1,
    0,
  );
}

export function moveRight(
  index: number,
  length: number,
) {
  return Math.min(
    index + 1,
    length - 1,
  );
}