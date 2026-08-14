import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

export type SheetSide =
  | "left"
  | "right"
  | "top"
  | "bottom";

export interface SheetProps
  extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (
    open: boolean,
  ) => void;

  side?: SheetSide;

  children: ReactNode;
}

export interface SheetOverlayProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface SheetPortalProps {
  children: ReactNode;
}

export interface SheetContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface SheetHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface SheetTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export interface SheetDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export interface SheetBodyProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface SheetFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface SheetCloseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}