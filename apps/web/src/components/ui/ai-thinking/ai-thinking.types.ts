import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface AIThinkingProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  title?: ReactNode;
  detail?: ReactNode;
  active?: boolean;
}