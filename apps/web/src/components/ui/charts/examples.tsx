"use client";

import {
  AreaChart,
  BarChart,
  BubbleChart,
  ChartProvider,
  ComposedChart,
  DonutChart,
  FunnelChart,
  GaugeChart,
  HeatmapChart,
  LineChart,
  MiniAreaChart,
  MiniBarChart,
  PieChart,
  RadarChart,
  RadialChart,
  ScatterChart,
  SparklineChart,
  StackedBarChart,
  TreemapChart,
} from ".";

const chartData = [
  { month: "Jan", revenue: 4200, users: 120, sessions: 3200 },
  { month: "Feb", revenue: 5100, users: 150, sessions: 3700 },
  { month: "Mar", revenue: 4800, users: 142, sessions: 3500 },
  { month: "Apr", revenue: 6300, users: 181, sessions: 4300 },
];

const bubbleData = [
  { x: 12, y: 30, size: 120 },
  { x: 20, y: 45, size: 240 },
  { x: 35, y: 20, size: 180 },
];

const heatmapData = [
  { x: "Mon", y: "API", value: 12 },
  { x: "Tue", y: "API", value: 24 },
  { x: "Wed", y: "API", value: 30 },
  { x: "Mon", y: "Web", value: 8 },
  { x: "Tue", y: "Web", value: 18 },
  { x: "Wed", y: "Web", value: 22 },
];

const series = [
  {
    id: "revenue",
    dataKey: "revenue",
    label: "Revenue",
    color: "hsl(var(--primary))",
  },
  {
    id: "users",
    dataKey: "users",
    label: "Users",
    color: "hsl(var(--chart-2))",
  },
  {
    id: "sessions",
    dataKey: "sessions",
    label: "Sessions",
    color: "hsl(var(--chart-3))",
  },
];

export function ChartsExamples() {
  return (
    <div className="grid gap-8">
      <ChartProvider data={chartData} series={series}>
        <div className="grid gap-6 md:grid-cols-2">
          <LineChart xAxisKey="month" />
          <AreaChart xAxisKey="month" />
          <BarChart xAxisKey="month" />
          <StackedBarChart xAxisKey="month" />
          <PieChart nameKey="month" />
          <DonutChart nameKey="month" />
          <RadarChart angleKey="month" />
          <RadialChart />
          <ScatterChart xAxisKey="users" yAxisKey="revenue" />
          <ComposedChart xAxisKey="month" />
          <TreemapChart nameKey="month" />
          <FunnelChart nameKey="month" />
          <SparklineChart />
          <MiniAreaChart />
          <MiniBarChart />
          <GaugeChart value={72} />
        </div>
      </ChartProvider>

      <ChartProvider
        data={bubbleData}
        series={[
          {
            id: "size",
            dataKey: "size",
            label: "Size",
          },
        ]}
      >
        <BubbleChart
          xAxisKey="x"
          yAxisKey="y"
          zAxisKey="size"
        />
      </ChartProvider>

      <HeatmapChart
        data={heatmapData}
        showValues
      />
    </div>
  );
}

export default ChartsExamples;