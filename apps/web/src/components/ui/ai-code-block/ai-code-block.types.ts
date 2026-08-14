import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface AICodeBlockProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  code: string;
  language?: string;
  title?: ReactNode;
  actions?: ReactNode;
}