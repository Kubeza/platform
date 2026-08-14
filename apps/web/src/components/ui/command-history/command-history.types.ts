import type { ReactNode } from "react";

export type CommandHistoryStatus =
  | "success"
  | "running"
  | "failed"
  | "cancelled";

export interface CommandHistoryEntry {
  id: string;
  command: string;
  output?: string;
  shell?: string;
  workingDirectory?: string;
  duration?: number;
  status: CommandHistoryStatus;
  timestamp: Date | string;
}

export interface CommandHistoryContextValue {
  commands: CommandHistoryEntry[];
}

export interface CommandHistoryProviderProps {
  commands: CommandHistoryEntry[];
  children: ReactNode;
}