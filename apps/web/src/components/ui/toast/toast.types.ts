import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

export type ToastVariant =
  | "default"
  | "success"
  | "error"
  | "warning"
  | "info";

export interface ToastData {
  id: string;

  title?: string;

  description?: string;

  duration?: number;

  variant?: ToastVariant;

  action?: ReactNode;
}

export interface ToastProps
  extends HTMLAttributes<HTMLDivElement> {
  toast: ToastData;
}

export interface ToastTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export interface ToastDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export interface ToastActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ToastCloseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ToastContextValue {
  toasts: ToastData[];

  show: (
    toast: Omit<ToastData, "id">,
  ) => void;

  remove: (
    id: string,
  ) => void;
}