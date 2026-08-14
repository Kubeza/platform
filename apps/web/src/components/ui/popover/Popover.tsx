import {
  createContext,
  useContext,
} from "react";

import { usePopover } from "./hooks";

import type {
  PopoverProps,
} from "./popover.types";

interface PopoverContextValue {
  open: boolean;

  setOpen: (
    open: boolean,
  ) => void;

  toggle: () => void;
}

const PopoverContext =
  createContext<
    PopoverContextValue | undefined
  >(undefined);

export function usePopoverContext() {
  const context =
    useContext(
      PopoverContext,
    );

  if (!context) {
    throw new Error(
      "Popover components must be used inside <Popover>.",
    );
  }

  return context;
}

const Popover = ({
  open,
  defaultOpen,
  onOpenChange,
  children,
  ...props
}: PopoverProps) => {
  const popover =
    usePopover({
      open,
      defaultOpen,
      onOpenChange,
    });

  return (
    <PopoverContext.Provider
      value={popover}
    >
      <div
        className="relative inline-block"
        {...props}
      >
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

export default Popover;