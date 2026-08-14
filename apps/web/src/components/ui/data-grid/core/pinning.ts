import type {
  Column,
} from "@tanstack/react-table";

export function isPinnedLeft(
  column: Column<any, unknown>,
) {
  return (
    column.getIsPinned() ===
    "left"
  );
}

export function isPinnedRight(
  column: Column<any, unknown>,
) {
  return (
    column.getIsPinned() ===
    "right"
  );
}

export function getPinnedStyles(
  column: Column<any, unknown>,
) {
  const pinned =
    column.getIsPinned();

  if (pinned === "left") {
    return {
      position:
        "sticky" as const,
      left: 0,
      zIndex: 30,
      background:
        "var(--background)",
    };
  }

  if (pinned === "right") {
    return {
      position:
        "sticky" as const,
      right: 0,
      zIndex: 30,
      background:
        "var(--background)",
    };
  }

  return {};
}