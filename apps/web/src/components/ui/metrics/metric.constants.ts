export const DEFAULT_METRIC_COLUMNS = 4;

export const DEFAULT_PROGRESS_MAX = 100;

export const DEFAULT_TREND_PRECISION = 1;

export const DEFAULT_SPARKLINE_HEIGHT = 56;

export const DEFAULT_CARD_PADDING = "p-6";

export const METRIC_STATUS = {
  HEALTHY: "healthy",
  WARNING: "warning",
  CRITICAL: "critical",
  OFFLINE: "offline",
} as const;

export const METRIC_COLORS = {
  primary: "hsl(var(--primary))",
  success: "hsl(var(--chart-2))",
  warning: "hsl(var(--chart-3))",
  danger: "hsl(var(--destructive))",
  muted: "hsl(var(--muted-foreground))",
} as const;