import {
  useEffect,
} from "react";

import {
  shouldCloseOnEscape,
} from "./utils";

export function useModal(
  open: boolean,
  onClose: () => void,
) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handler = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key === "Escape" &&
        shouldCloseOnEscape()
      ) {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handler,
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handler,
      );
  }, [
    open,
    onClose,
  ]);
}