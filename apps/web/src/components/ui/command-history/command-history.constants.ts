import type {
  CommandHistoryStatus,
} from "./command-history.types";

export const DEFAULT_COMMAND_HISTORY_STATUS: CommandHistoryStatus =
  "success";

export const COMMAND_HISTORY_STATUSES: readonly CommandHistoryStatus[] =
  [
    "success",
    "running",
    "failed",
    "cancelled",
  ] as const;

export const DEFAULT_EMPTY_TITLE =
  "No command history";

export const DEFAULT_EMPTY_DESCRIPTION =
  "Executed commands will appear here.";

export const DEFAULT_SEARCH_PLACEHOLDER =
  "Search command history...";

export const DEFAULT_HISTORY_LIMIT = 100;