import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface DropdownProps
  extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (
    open: boolean,
  ) => void;

  children: ReactNode;
}

export interface DropdownTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface DropdownContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DropdownItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  inset?: boolean;

  destructive?: boolean;

  icon?: ReactNode;
}

export interface DropdownSeparatorProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DropdownLabelProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DropdownShortcutProps
  extends HTMLAttributes<HTMLSpanElement> {}

export interface DropdownSubmenuProps
  extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;

  children: ReactNode;
}