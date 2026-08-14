export const chartTheme = {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--chart-1))",
  success: "hsl(var(--chart-2))",
  warning: "hsl(var(--chart-3))",
  danger: "hsl(var(--destructive))",
  muted: "hsl(var(--muted-foreground))",
  border: "hsl(var(--border))",
  background: "hsl(var(--background))",
} as const;

export type ChartThemeTokens = typeof chartTheme;