"use client";

import {
  ActivityActions,
  ActivityAvatar,
  ActivityBadge,
  ActivityDescription,
  ActivityFeed,
  ActivityGroup,
  ActivityIcon,
  ActivityItem,
  ActivityList,
  ActivityProvider,
  ActivityTimestamp,
  ActivityTitle,
} from ".";

import type { ActivityItemData } from "./activity.types";

const activities: ActivityItemData[] = [
  {
    id: "deploy-1",
    title: "Production deployment completed",
    description: "Version v2.5.1 deployed successfully.",
    timestamp: new Date(),
    severity: "success",
    group: "Today",
    icon: "🚀",
    actions: [
      {
        id: "view-deployment",
        label: "View",
        onClick: () => console.log("View deployment"),
      },
    ],
  },
  {
    id: "pipeline-1",
    title: "CI Pipeline Failed",
    description: "Terraform validation failed in GitHub Actions.",
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    severity: "error",
    group: "Today",
    icon: "❌",
    actions: [
      {
        id: "retry-pipeline",
        label: "Retry",
        onClick: () => console.log("Retry pipeline"),
      },
    ],
  },
  {
    id: "login-1",
    title: "Administrator Login",
    description: "Signed in from Hyderabad, India.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
    severity: "info",
    group: "Earlier",
    avatar: "NR",
  },
];

export default function ActivityExamples() {
  return (
    <ActivityProvider activities={activities}>
      <ActivityFeed className="max-w-3xl">
        <ActivityGroup title="Recent Activity">
          <ActivityList>
            {activities.map((activity) => (
              <ActivityItem key={activity.id}>
                {activity.avatar ? (
                  <ActivityAvatar avatar={activity.avatar} />
                ) : (
                  <ActivityIcon icon={activity.icon} />
                )}

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <ActivityTitle>{activity.title}</ActivityTitle>

                    <ActivityBadge severity={activity.severity}>
                      {activity.severity}
                    </ActivityBadge>
                  </div>

                  {activity.description ? (
                    <ActivityDescription>
                      {activity.description}
                    </ActivityDescription>
                  ) : null}

                  <ActivityTimestamp value={activity.timestamp} />

                  {activity.actions ? (
                    <ActivityActions actions={activity.actions} />
                  ) : null}
                </div>
              </ActivityItem>
            ))}
          </ActivityList>
        </ActivityGroup>
      </ActivityFeed>
    </ActivityProvider>
  );
}