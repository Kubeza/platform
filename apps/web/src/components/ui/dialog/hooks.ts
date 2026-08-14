import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  CLOSE_ON_ESCAPE,
} from "./constants";

interface UseDialogOptions {
  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (
    open: boolean,
  ) => void;
}

export function useDialog({
  open,
  defaultOpen = false,
  onOpenChange,
}: UseDialogOptions) {
  const [
    internalOpen,
    setInternalOpen,
  ] = useState(defaultOpen);

  const currentOpen =
    open ?? internalOpen;

  const setOpen =
    useCallback(
      (next: boolean) => {
        if (open === undefined) {
          setInternalOpen(next);
        }

        onOpenChange?.(next);
      },
      [
        open,
        onOpenChange,
      ],
    );

  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (
        event.key === "Escape" &&
        CLOSE_ON_ESCAPE
      ) {
        setOpen(false);
      }
    }

    if (currentOpen) {
      window.addEventListener(
        "keydown",
        handleKeyDown,
      );
    }

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    currentOpen,
    setOpen,
  ]);

  return {
    open: currentOpen,
    setOpen,
  };
}