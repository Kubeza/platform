import {
  useCallback,
  useState,
} from "react";

interface UseTooltipOptions {
  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (
    open: boolean,
  ) => void;
}

export function useTooltip({
  open,
  defaultOpen = false,
  onOpenChange,
}: UseTooltipOptions) {
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

  return {
    open: currentOpen,
    show: () => setOpen(true),
    hide: () => setOpen(false),
    setOpen,
  };
}