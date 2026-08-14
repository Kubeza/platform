import type {
  SheetSide,
} from "./sheet.types";

export function getSheetPositionClasses(
  side: SheetSide,
) {
  switch (side) {
    case "left":
      return "left-0 top-0 h-full";

    case "right":
      return "right-0 top-0 h-full";

    case "top":
      return "top-0 left-0 w-full";

    case "bottom":
      return "bottom-0 left-0 w-full";

    default:
      return "right-0 top-0 h-full";
  }
}