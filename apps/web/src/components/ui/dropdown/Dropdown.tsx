import {
  createContext,
  useContext,
} from "react";

import { useDropdown } from "./hooks";

import type {
  DropdownProps,
} from "./dropdown.types";

interface DropdownContextValue {
  open: boolean;

  setOpen: (
    open: boolean,
  ) => void;

  toggle: () => void;
}

const DropdownContext =
  createContext<
    DropdownContextValue | undefined
  >(undefined);

export function useDropdownContext() {
  const context =
    useContext(
      DropdownContext,
    );

  if (!context) {
    throw new Error(
      "Dropdown components must be used inside <Dropdown>."
    );
  }

  return context;
}

const Dropdown = ({
  open,
  defaultOpen,
  onOpenChange,
  children,
  ...props
}: DropdownProps) => {
  const dropdown =
    useDropdown({
      open,
      defaultOpen,
      onOpenChange,
    });

  return (
    <DropdownContext.Provider
      value={dropdown}
    >
      <div
        className="relative inline-block"
        {...props}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;