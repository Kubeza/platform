import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface SplitterProps
  extends HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
}

export interface SplitterPanelProps
  extends HTMLAttributes<HTMLDivElement> {
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
}

export interface SplitterHandleProps
  extends HTMLAttributes<HTMLDivElement> {
  withHandle?: boolean;
}

export interface SplitterPanelGroupProps {
  children: ReactNode;
}