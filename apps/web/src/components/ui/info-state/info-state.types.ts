import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface InfoStateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
}

export interface InfoStateIconProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface InfoStateContentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
}