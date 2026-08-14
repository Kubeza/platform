import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type AIToolResultStatus =
  | "running"
  | "success"
  | "error";

export interface AIToolResultProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  tool: string;
  status?: AIToolResultStatus;
  title?: ReactNode;
  result?: ReactNode;
  duration?: ReactNode;
}