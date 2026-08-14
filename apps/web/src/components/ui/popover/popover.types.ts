import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface PopoverProps
  extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (
    open: boolean,
  ) => void;

  children: ReactNode;
}

export interface PopoverTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface PopoverContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface PopoverArrowProps
  extends HTMLAttributes<HTMLDivElement> {}