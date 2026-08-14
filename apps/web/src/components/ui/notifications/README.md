# Notifications

A reusable enterprise notification system for dashboards, DevOps platforms, AI applications, SaaS products, and admin panels.

## Components

- NotificationProvider
- NotificationCenter
- NotificationList
- NotificationItem
- NotificationBadge
- NotificationAvatar
- NotificationTitle
- NotificationDescription
- NotificationTimestamp
- NotificationActions
- NotificationFilter
- NotificationGroup
- NotificationEmpty
- NotificationSkeleton

## Features

- Context-based state management
- Read / unread notifications
- Severity badges
- Notification grouping
- Filtering support
- Action buttons
- Empty state
- Loading skeletons
- Type-safe APIs
- React 19 compatible
- Tailwind CSS v4 compatible
- shadcn/ui compatible

## Basic Usage

```tsx
<NotificationProvider notifications={notifications}>
  <NotificationCenter>
    <NotificationList>
      {/* NotificationItem components */}
    </NotificationList>
  </NotificationCenter>
</NotificationProvider>
```

## Exports

```ts
import {
  NotificationCenter,
  NotificationItem,
  NotificationProvider,
} from "@/components/ui/notifications";
```