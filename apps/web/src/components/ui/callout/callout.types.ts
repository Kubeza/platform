import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type CalloutVariant =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface CalloutProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  variant?: CalloutVariant;
  icon?: ReactNode;
  title?: ReactNode;
}