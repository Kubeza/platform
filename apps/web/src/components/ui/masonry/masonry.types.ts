import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface MasonryProps
  extends HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: number;
  children?: ReactNode;
}

export interface MasonryItemProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}