import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

export type DrawerPosition =
  | "left"
  | "right"
  | "top"
  | "bottom";

export interface DrawerProps
  extends HTMLAttributes<HTMLDivElement> {
  open: boolean;

  onClose: () => void;

  children: ReactNode;

  position?: DrawerPosition;
}

export interface DrawerOverlayProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DrawerContentProps
  extends HTMLAttributes<HTMLDivElement> {
  position?: DrawerPosition;
}

export interface DrawerHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DrawerTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export interface DrawerDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export interface DrawerBodyProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DrawerFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DrawerCloseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}