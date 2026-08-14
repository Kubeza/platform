"use client";

import {
  Activity,
  Cpu,
  Database,
  HardDrive,
} from "lucide-react";

import {
  MetricCard,
  MetricDelta,
  MetricGrid,
  MetricIcon,
  MetricLabel,
  MetricProgress,
  MetricProvider,
  MetricSparkline,
  MetricStatus,
  MetricTrend,
  MetricValue,
} from ".";

const metrics = [
  {
    id: "cpu",
    label: "CPU Usage",
    value: 62,
    previousValue: 54,
    suffix: "%",
    status: "healthy" as const,
    icon: <Cpu className="h-5 w-5" />,
    trend: [
      { label: "Jan", value: 40 },
      { label: "Feb", value: 48 },
      { label: "Mar", value: 44 },
      { label: "Apr", value: 60 },
      { label: "May", value: 58 },
      { label: "Jun", value: 62 },
    ],
  },
  {
    id: "memory",
    label: "Memory",
    value: 74,
    previousValue: 71,
    suffix: "%",
    status: "warning" as const,
    icon: <Database className="h-5 w-5" />,
    trend: [
      { label: "Jan", value: 50 },
      { label: "Feb", value: 58 },
      { label: "Mar", value: 63 },
      { label: "Apr", value: 66 },
      { label: "May", value: 70 },
      { label: "Jun", value: 74 },
    ],
  },
  {
    id: "disk",
    label: "Disk",
    value: 83,
    previousValue: 79,
    suffix: "%",
    status: "critical" as const,
    icon: <HardDrive className="h-5 w-5" />,
    trend: [
      { label: "Jan", value: 66 },
      { label: "Feb", value: 70 },
      { label: "Mar", value: 72 },
      { label: "Apr", value: 78 },
      { label: "May", value: 81 },
      { label: "Jun", value: 83 },
    ],
  },
];

export function MetricsExamples() {
  return (
    <MetricProvider metrics={metrics}>
      <MetricGrid columns={3}>
        {metrics.map((metric) => (
          <MetricCard key={metric.id}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <MetricIcon icon={metric.icon} />
                <MetricStatus status={metric.status} />
              </div>

              <MetricLabel>{metric.label}</MetricLabel>

              <MetricValue
                value={metric.value}
                suffix="%"
              />

              <MetricTrend
                current={metric.value}
                previous={metric.previousValue}
              />

              <MetricDelta
                current={metric.value}
                previous={metric.previousValue}
              />

              <MetricProgress
                value={metric.value}
              />

              <MetricSparkline
                data={metric.trend}
              />
            </div>
          </MetricCard>
        ))}

        <MetricCard>
          <div className="space-y-4">
            <MetricIcon
              icon={<Activity className="h-5 w-5" />}
            />

            <MetricLabel>
              Requests / Second
            </MetricLabel>

            <MetricValue value={1284} />

            <MetricTrend
              current={1284}
              previous={1172}
            />
          </div>
        </MetricCard>
      </MetricGrid>
    </MetricProvider>
  );
}