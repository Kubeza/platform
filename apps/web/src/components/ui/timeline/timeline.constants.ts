import type { TimelineSeverity } from "./timeline.types";

export const DEFAULT_TIMELINE_SEVERITY: TimelineSeverity =
  "info";

export const TIMELINE_SEVERITIES: readonly TimelineSeverity[] =
  [
    "info",
    "success",
    "warning",
    "error",
  ] as const;

export const DEFAULT_TIMELINE_GROUP =
  "General";

export const DEFAULT_EMPTY_TITLE =
  "No timeline events";

export const DEFAULT_EMPTY_DESCRIPTION =
  "There are no events to display.";