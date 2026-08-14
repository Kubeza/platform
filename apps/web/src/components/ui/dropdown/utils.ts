export function getItemClasses(
  destructive = false,
) {
  return destructive
    ? "text-destructive hover:bg-destructive/10"
    : "hover:bg-muted";
}