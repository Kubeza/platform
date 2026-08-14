import type { ActivitySeverity } from "./activity.types";

export const DEFAULT_ACTIVITY_SEVERITY: ActivitySeverity =
  "info";

export const ACTIVITY_SEVERITIES: readonly ActivitySeverity[] =
  [
    "info",
    "success",
    "warning",
    "error",
  ] as const;

export const DEFAULT_EMPTY_TITLE =
  "No activity";

export const DEFAULT_EMPTY_DESCRIPTION =
  "There is no activity to display.";