import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface MaintenanceStateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
}

export interface MaintenanceStateIconProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface MaintenanceStateContentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
}