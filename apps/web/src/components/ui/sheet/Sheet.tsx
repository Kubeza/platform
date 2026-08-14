import {
  createContext,
  useContext,
} from "react";

import { useSheet } from "./hooks";

import type {
  SheetProps,
  SheetSide,
} from "./sheet.types";

interface SheetContextValue {
  open: boolean;

  side: SheetSide;

  setOpen: (
    open: boolean,
  ) => void;
}

const SheetContext =
  createContext<
    SheetContextValue | undefined
  >(undefined);

export function useSheetContext() {
  const context =
    useContext(
      SheetContext,
    );

  if (!context) {
    throw new Error(
      "Sheet components must be used inside <Sheet>.",
    );
  }

  return context;
}

const Sheet = ({
  open,
  defaultOpen,
  onOpenChange,
  side = "right",
  children,
  ...props
}: SheetProps) => {
  const sheet =
    useSheet({
      open,
      defaultOpen,
      onOpenChange,
    });

  return (
    <SheetContext.Provider
      value={{
        ...sheet,
        side,
      }}
    >
      <div
        className="relative"
        {...props}
      >
        {children}
      </div>
    </SheetContext.Provider>
  );
};

export default Sheet;