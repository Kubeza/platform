import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface ErrorStateProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
}

export interface ErrorStateIconProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface ErrorStateContentProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  title?: ReactNode;
  description?: ReactNode;
}