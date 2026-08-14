import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface CollapsibleContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface CollapsibleProviderProps {
  children: ReactNode;
  defaultOpen?: boolean;
}

export interface CollapsibleProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface CollapsibleTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface CollapsibleContentProps
  extends HTMLAttributes<HTMLDivElement> {}