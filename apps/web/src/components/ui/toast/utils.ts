import type {
  ToastVariant,
} from "./toast.types";

export function generateToastId() {
  return Math.random()
    .toString(36)
    .slice(2);
}

export function getToastClasses(
  variant: ToastVariant = "default",
) {
  switch (variant) {
    case "success":
      return "border-green-500";

    case "error":
      return "border-red-500";

    case "warning":
      return "border-yellow-500";

    case "info":
      return "border-blue-500";

    default:
      return "border-border";
  }
}