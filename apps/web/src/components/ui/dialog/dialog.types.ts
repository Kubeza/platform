import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface DialogProps
  extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (
    open: boolean,
  ) => void;

  children: ReactNode;
}

export interface DialogOverlayProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DialogPortalProps {
  children: ReactNode;
}

export interface DialogContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DialogHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DialogTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export interface DialogDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export interface DialogBodyProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DialogFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DialogCloseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}