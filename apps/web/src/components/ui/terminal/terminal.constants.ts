import type { TerminalStatus } from "./terminal.types";

export const DEFAULT_TERMINAL_STATUS: TerminalStatus =
  "disconnected";

export const TERMINAL_STATUSES: readonly TerminalStatus[] =
  [
    "disconnected",
    "connecting",
    "connected",
    "error",
  ] as const;

export const DEFAULT_PROMPT_USER = "user";

export const DEFAULT_PROMPT_HOST =
  "localhost";

export const DEFAULT_PROMPT_PATH = "~";

export const DEFAULT_EMPTY_TITLE =
  "Terminal is empty";

export const DEFAULT_EMPTY_DESCRIPTION =
  "Run a command to start the session.";