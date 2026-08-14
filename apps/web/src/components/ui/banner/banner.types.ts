import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type BannerVariant =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface BannerProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  variant?: BannerVariant;
  title?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}