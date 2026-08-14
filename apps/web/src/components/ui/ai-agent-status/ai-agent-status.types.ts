import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type AIAgentStatusValue =
  | "idle"
  | "planning"
  | "running"
  | "waiting"
  | "completed"
  | "failed";

export interface AIAgentStatusProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  name?: ReactNode;
  status: AIAgentStatusValue;
  task?: ReactNode;
  detail?: ReactNode;
}