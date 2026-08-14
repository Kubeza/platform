import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type AIMessageRole =
  | "user"
  | "assistant"
  | "system";

export interface AIMessageProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "content"
  > {
  role: AIMessageRole;
  content: ReactNode;
  timestamp?: ReactNode;
  actions?: ReactNode;
}