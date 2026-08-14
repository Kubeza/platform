import {
  createPortal,
} from "react-dom";

import type {
  SheetPortalProps,
} from "./sheet.types";

const SheetPortal = ({
  children,
}: SheetPortalProps) => {
  if (
    typeof document ===
    "undefined"
  ) {
    return null;
  }

  return createPortal(
    children,
    document.body,
  );
};

export default SheetPortal;