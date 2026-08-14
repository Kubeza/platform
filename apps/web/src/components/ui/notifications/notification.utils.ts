import type {
  NotificationItemData,
  NotificationSeverity,
} from "./notification.types";

export function getUnreadNotifications(
  notifications: NotificationItemData[],
): NotificationItemData[] {
  return notifications.filter(
    (notification) => !notification.read,
  );
}

export function getUnreadCount(
  notifications: NotificationItemData[],
): number {
  return getUnreadNotifications(
    notifications,
  ).length;
}

export function filterNotifications(
  notifications: NotificationItemData[],
  severity: NotificationSeverity | "all",
): NotificationItemData[] {
  if (severity === "all") {
    return notifications;
  }

  return notifications.filter(
    (notification) =>
      notification.severity === severity,
  );
}

export function groupNotifications(
  notifications: NotificationItemData[],
): Record<string, NotificationItemData[]> {
  return notifications.reduce<
    Record<string, NotificationItemData[]>
  >((groups, notification) => {
    const key =
      notification.group ?? "Other";

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(notification);

    return groups;
  }, {});
}

export function sortNotifications(
  notifications: NotificationItemData[],
): NotificationItemData[] {
  return [...notifications].sort(
    (a, b) =>
      new Date(b.timestamp).getTime() -
      new Date(a.timestamp).getTime(),
  );
}