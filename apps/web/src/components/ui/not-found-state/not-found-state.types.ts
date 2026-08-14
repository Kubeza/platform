import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface NotFoundStateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
}

export interface NotFoundStateIconProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface NotFoundStateContentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
}