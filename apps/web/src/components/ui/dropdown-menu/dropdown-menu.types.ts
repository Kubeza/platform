import type { ReactNode } from "react";

export interface DropdownMenuItemData {
  id: string;
  label: string;
  disabled?: boolean;
  children?: DropdownMenuItemData[];
}

export interface DropdownMenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface DropdownMenuProviderProps {
  children: ReactNode;
  defaultOpen?: boolean;
}