import {
  useCallback,
  useState,
} from "react";

interface UsePopoverOptions {
  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (
    open: boolean,
  ) => void;
}

export function usePopover({
  open,
  defaultOpen = false,
  onOpenChange,
}: UsePopoverOptions) {
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

  const toggle =
    useCallback(() => {
      setOpen(!currentOpen);
    }, [
      currentOpen,
      setOpen,
    ]);

  return {
    open: currentOpen,
    setOpen,
    toggle,
  };
}