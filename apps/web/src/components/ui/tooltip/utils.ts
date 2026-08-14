import type {
  TooltipPlacement,
} from "./tooltip.types";

export function getTooltipPlacementClasses(
  placement: TooltipPlacement,
) {
  switch (placement) {
    case "top":
      return "bottom-full left-1/2 -translate-x-1/2 mb-2";

    case "bottom":
      return "top-full left-1/2 -translate-x-1/2 mt-2";

    case "left":
      return "right-full top-1/2 -translate-y-1/2 mr-2";

    case "right":
      return "left-full top-1/2 -translate-y-1/2 ml-2";

    default:
      return "top-full left-1/2 -translate-x-1/2 mt-2";
  }
}