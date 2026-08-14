# Charts

Enterprise React 19 chart library built on top of Recharts 3.10.

## Features

- React 19
- TypeScript
- Recharts 3.10
- Responsive layouts
- Context-based data management
- Enterprise dashboard components
- Custom SVG charts
- Dark mode compatible

## Available Charts

- Line
- Area
- Bar
- Horizontal Bar
- Stacked Bar
- Pie
- Donut
- Radar
- Radial
- Scatter
- Bubble
- Composed
- Funnel
- Treemap
- Sparkline
- Mini Area
- Mini Bar
- Gauge (Custom SVG)
- Heatmap (Custom Grid)

## Example

```tsx
<ChartProvider
  data={data}
  series={[
    {
      dataKey: "value",
      label: "Requests",
    },
  ]}
>
  <LineChart xAxisKey="date" />
</ChartProvider>
```

## Browser Support

- Chrome
- Edge
- Firefox
- Safari

## Requirements

- React 19
- TypeScript 5
- Recharts 3.10