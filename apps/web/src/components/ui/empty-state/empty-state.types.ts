import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface EmptyStateProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}

export interface EmptyStateIconProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface EmptyStateContentProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  title?: ReactNode;
  description?: ReactNode;
}