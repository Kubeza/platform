import {
  createPortal,
} from "react-dom";

import type {
  DialogPortalProps,
} from "./dialog.types";

const DialogPortal = ({
  children,
}: DialogPortalProps) => {
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

export default DialogPortal;