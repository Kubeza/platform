export function toggleCollapsible(
  open: boolean,
): boolean {
  return !open;
}

export function getCollapsibleState(
  open: boolean,
): "open" | "closed" {
  return open ? "open" : "closed";
}

export function isCollapsibleOpen(
  open: boolean,
): boolean {
  return open;
}