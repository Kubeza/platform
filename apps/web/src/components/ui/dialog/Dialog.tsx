import {
  createContext,
  useContext,
} from "react";

import { useDialog } from "./hooks";

import type {
  DialogProps,
} from "./dialog.types";

interface DialogContextValue {
  open: boolean;

  setOpen: (
    open: boolean,
  ) => void;
}

const DialogContext =
  createContext<
    DialogContextValue | undefined
  >(undefined);

export function useDialogContext() {
  const context =
    useContext(
      DialogContext,
    );

  if (!context) {
    throw new Error(
      "Dialog components must be used inside <Dialog>.",
    );
  }

  return context;
}

const Dialog = ({
  open,
  defaultOpen,
  onOpenChange,
  children,
  ...props
}: DialogProps) => {
  const dialog =
    useDialog({
      open,
      defaultOpen,
      onOpenChange,
    });

  return (
    <DialogContext.Provider
      value={dialog}
    >
      <div
        className="relative"
        {...props}
      >
        {children}
      </div>
    </DialogContext.Provider>
  );
};

export default Dialog;