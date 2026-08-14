import type { HTMLAttributes } from "react";

export function mergeHoverCardProps(
  ...props: Array<HTMLAttributes<HTMLDivElement> | undefined>
): HTMLAttributes<HTMLDivElement> {
  return Object.assign({}, ...props);
}

export function getHoverCardPosition(
  offset = 8,
) {
  return {
    top: `calc(100% + ${offset}px)`,
    left: "0",
  };
}

export function isHoverCardOpen(
  open: boolean,
) {
  return open;
}