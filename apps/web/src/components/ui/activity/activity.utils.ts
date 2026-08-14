import type { ActivityItemData, ActivitySeverity } from "./activity.types";

export function formatActivityTimestamp(
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

export function groupActivities(
  activities: ActivityItemData[],
): Record<string, ActivityItemData[]> {
  return activities.reduce<Record<string, ActivityItemData[]>>(
    (groups, activity) => {
      const key = activity.group ?? "General";

      if (!groups[key]) {
        groups[key] = [];
      }

      groups[key].push(activity);

      return groups;
    },
    {},
  );
}

export function sortActivities(
  activities: ActivityItemData[],
): ActivityItemData[] {
  return [...activities].sort((a, b) => {
    const first = new Date(a.timestamp).getTime();
    const second = new Date(b.timestamp).getTime();

    return second - first;
  });
}

export function filterActivities(
  activities: ActivityItemData[],
  severity?: ActivitySeverity,
): ActivityItemData[] {
  if (!severity) {
    return activities;
  }

  return activities.filter(
    (activity) => activity.severity === severity,
  );
}