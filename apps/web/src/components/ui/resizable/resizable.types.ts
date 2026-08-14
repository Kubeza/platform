import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface ResizableProps
  extends HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
}

export interface ResizablePanelProps
  extends HTMLAttributes<HTMLDivElement> {
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
}

export interface ResizableHandleProps
  extends HTMLAttributes<HTMLDivElement> {
  withHandle?: boolean;
}

export interface ResizablePanelGroupProps {
  children: ReactNode;
}