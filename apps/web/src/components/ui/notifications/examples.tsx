"use client";

import {
  Bell,
  Check,
  Clock,
  RefreshCw,
  Server,
  ShieldAlert,
} from "lucide-react";

import {
  NotificationActions,
  NotificationAvatar,
  NotificationBadge,
  NotificationCenter,
  NotificationDescription,
  NotificationEmpty,
  NotificationFilter,
  NotificationGroup,
  NotificationItem,
  NotificationList,
  NotificationProvider,
  NotificationSkeleton,
  NotificationTimestamp,
  NotificationTitle,
} from ".";

const notifications = [
  {
    id: "1",
    title: "Deployment Completed",
    description:
      "Production deployment finished successfully.",
    timestamp: new Date(),
    severity: "success" as const,
    read: false,
    group: "Today",
    avatar: <Check className="h-5 w-5" />,
    actions: [
      {
        id: "view-deployment",
        label: "View",
        onClick: () => console.log("View deployment"),
      },
    ],
  },
  {
    id: "2",
    title: "High CPU Usage",
    description:
      "CPU usage exceeded 90% on api-server-01.",
    timestamp: new Date(),
    severity: "warning" as const,
    read: false,
    group: "Today",
    avatar: <Server className="h-5 w-5" />,
    actions: [
      {
        id: "investigate",
        label: "Investigate",
        onClick: () => console.log("Investigate"),
      },
    ],
  },
  {
    id: "3",
    title: "Security Alert",
    description:
      "Multiple failed login attempts detected.",
    timestamp: new Date(),
    severity: "error" as const,
    read: true,
    group: "Yesterday",
    avatar: <ShieldAlert className="h-5 w-5" />,
    actions: [
      {
        id: "review-security",
        label: "Review",
        onClick: () => console.log("Review"),
      },
    ],
  },
];

export function NotificationsExamples() {
  return (
    <NotificationProvider notifications={notifications}>
      <div className="grid gap-8 lg:grid-cols-2">
        <NotificationCenter className="max-h-[520px]">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              <h2 className="font-semibold">
                Notifications
              </h2>
            </div>

            <NotificationFilter
              value="all"
              onChange={(value) =>
                console.log(value)
              }
            />
          </div>

          <NotificationList>
            <NotificationGroup title="Today">
              {notifications
                .filter(
                  (item) => item.group === "Today",
                )
                .map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    unread={!notification.read}
                  >
                    <div className="flex gap-4">
                      <NotificationAvatar
                        avatar={notification.avatar}
                      />

                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <NotificationTitle>
                              {notification.title}
                            </NotificationTitle>

                            <NotificationDescription>
                              {notification.description}
                            </NotificationDescription>
                          </div>

                          <NotificationBadge
                            severity={notification.severity}
                          />
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <NotificationTimestamp
                            value={notification.timestamp}
                          />

                          <NotificationActions
                            actions={notification.actions}
                          />
                        </div>
                      </div>
                    </div>
                  </NotificationItem>
                ))}
            </NotificationGroup>

            <NotificationGroup title="Yesterday">
              {notifications
                .filter(
                  (item) =>
                    item.group === "Yesterday",
                )
                .map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    unread={!notification.read}
                  >
                    <div className="flex gap-4">
                      <NotificationAvatar
                        avatar={notification.avatar}
                      />

                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <NotificationTitle>
                              {notification.title}
                            </NotificationTitle>

                            <NotificationDescription>
                              {notification.description}
                            </NotificationDescription>
                          </div>

                          <NotificationBadge
                            severity={notification.severity}
                          />
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <NotificationTimestamp
                            value={notification.timestamp}
                          />

                          <NotificationActions
                            actions={notification.actions}
                          />
                        </div>
                      </div>
                    </div>
                  </NotificationItem>
                ))}
            </NotificationGroup>
          </NotificationList>
        </NotificationCenter>

        <div className="space-y-6">
          <NotificationSkeleton />
          <NotificationSkeleton />

          <NotificationEmpty />

          <div className="rounded-lg border p-4">
            <div className="mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="font-medium">
                Refresh Example
              </span>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh Notifications
            </button>
          </div>
        </div>
      </div>
    </NotificationProvider>
  );
}