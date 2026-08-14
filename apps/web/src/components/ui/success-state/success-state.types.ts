import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface SuccessStateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
}

export interface SuccessStateIconProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface SuccessStateContentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
}