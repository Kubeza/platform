import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface LoadingStateProps
  extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  description?: ReactNode;
  size?: "sm" | "md" | "lg";
}

export interface LoadingStateSpinnerProps
  extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export interface LoadingStateContentProps
  extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  description?: ReactNode;
}