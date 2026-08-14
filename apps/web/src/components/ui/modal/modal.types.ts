import type {
  HTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export interface ModalProps
  extends HTMLAttributes<HTMLDivElement> {
  open: boolean;

  onClose: () => void;

  children: ReactNode;
}

export interface ModalOverlayProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface ModalContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface ModalHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface ModalTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export interface ModalDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export interface ModalBodyProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface ModalFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface ModalCloseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}