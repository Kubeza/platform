"use client";

import {
  Timeline,
  TimelineActions,
  TimelineBadge,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineGroup,
  TimelineItem,
  TimelineList,
  TimelineMarker,
  TimelineProvider,
  TimelineTimestamp,
  TimelineTitle,
} from ".";

import type { TimelineItemData } from "./timeline.types";

const items: TimelineItemData[] = [
  {
    id: "deploy",
    title: "Production Deployment",
    description: "Version v2.4.0 deployed successfully.",
    timestamp: new Date(),
    severity: "success",
    marker: "🚀",
    group: "Today",
    actions: [
      {
        id: "view",
        label: "View",
        onClick: () => console.log("View Deployment"),
      },
    ],
  },
  {
    id: "pipeline",
    title: "CI Pipeline Failed",
    description: "Terraform validation failed.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    severity: "error",
    marker: "❌",
    group: "Today",
    actions: [
      {
        id: "retry",
        label: "Retry",
        onClick: () => console.log("Retry"),
      },
    ],
  },
  {
    id: "release",
    title: "Release Created",
    description: "Release v2.3.9 published.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
    severity: "info",
    marker: "📦",
    group: "Earlier",
  },
];

export default function TimelineExamples() {
  return (
    <TimelineProvider items={items}>
      <Timeline className="max-w-3xl">
        <TimelineGroup title="Deployment Timeline">
          <TimelineList>
            {items.map((item, index) => (
              <TimelineItem
                key={item.id}
                active={index === 0}
              >
                <div className="relative flex flex-col items-center">
                  <TimelineMarker>
                    {item.marker}
                  </TimelineMarker>

                  <TimelineConnector
                    hidden={index === items.length - 1}
                  />
                </div>

                <TimelineContent>
                  <div className="flex items-center justify-between gap-3">
                    <TimelineTitle>
                      {item.title}
                    </TimelineTitle>

                    <TimelineBadge severity={item.severity}>
                      {item.severity}
                    </TimelineBadge>
                  </div>

                  {item.description && (
                    <TimelineDescription>
                      {item.description}
                    </TimelineDescription>
                  )}

                  <TimelineTimestamp value={item.timestamp} />

                  {item.actions && (
                    <TimelineActions
                      actions={item.actions}
                    />
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineList>
        </TimelineGroup>
      </Timeline>
    </TimelineProvider>
  );
}