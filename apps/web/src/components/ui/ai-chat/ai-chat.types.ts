import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface AIChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: ReactNode;
  timestamp?: ReactNode;
}

export interface AIChatProps
  extends HTMLAttributes<HTMLDivElement> {
  messages?: AIChatMessage[];
  emptyMessage?: ReactNode;
  footer?: ReactNode;
}