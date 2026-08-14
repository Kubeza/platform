import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type ResultStatus =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "default";

export interface ResultProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  status?: ResultStatus;
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}