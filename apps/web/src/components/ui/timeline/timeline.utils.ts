import type {
  TimelineItemData,
  TimelineSeverity,
} from "./timeline.types";

export function formatTimelineTimestamp(
  value: Date | string,
  locale = "en-IN",
): string {
  const date =
    value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function sortTimelineItems(
  items: TimelineItemData[],
): TimelineItemData[] {
  return [...items].sort((a, b) => {
    const first = new Date(a.timestamp).getTime();
    const second = new Date(b.timestamp).getTime();

    return second - first;
  });
}

export function groupTimelineItems(
  items: TimelineItemData[],
): Record<string, TimelineItemData[]> {
  return items.reduce<
    Record<string, TimelineItemData[]>
  >((groups, item) => {
    const key = item.group ?? "General";

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(item);

    return groups;
  }, {});
}

export function filterTimelineItems(
  items: TimelineItemData[],
  severity?: TimelineSeverity,
): TimelineItemData[] {
  if (!severity) {
    return items;
  }

  return items.filter(
    (item) => item.severity === severity,
  );
}