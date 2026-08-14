import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

export interface ContextMenuItemData {
  id: string;
  label: ReactNode;
  disabled?: boolean;
  children?: ContextMenuItemData[];
  onSelect?: () => void;
}

export interface ContextMenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;

  x: number;
  y: number;

  setPosition: (
    x: number,
    y: number,
  ) => void;
}

export interface ContextMenuProviderProps {
  children: ReactNode;

  defaultOpen?: boolean;

  defaultPosition?: {
    x: number;
    y: number;
  };
}

export interface ContextMenuProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface ContextMenuTriggerProps
  extends HTMLAttributes<HTMLDivElement> {
  onContextMenu?: MouseEventHandler<HTMLDivElement>;
}

export interface ContextMenuContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface ContextMenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export interface ContextMenuLabelProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface ContextMenuSeparatorProps
  extends HTMLAttributes<HTMLDivElement> {}