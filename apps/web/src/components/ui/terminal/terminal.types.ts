import type { ReactNode } from "react";

export type TerminalStatus =
  | "disconnected"
  | "connecting"
  | "connected"
  | "error";

export interface TerminalCommand {
  id: string;
  command: string;
  output?: string;
  timestamp: Date | string;
}

export interface TerminalContextValue {
  commands: TerminalCommand[];
  status: TerminalStatus;
}

export interface TerminalProviderProps {
  commands: TerminalCommand[];
  status?: TerminalStatus;
  children: ReactNode;
}