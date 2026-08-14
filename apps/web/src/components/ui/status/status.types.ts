import type {
  HTMLAttributes,
} from "react";

export type StatusVariant =
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral"
  | "pending";

export interface StatusProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: StatusVariant;
  label?: string;
}

export interface StatusIndicatorProps
  extends HTMLAttributes<HTMLSpanElement> {
  variant?: StatusVariant;
}

export interface StatusLabelProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}