"use client";

import { useMemo } from "react";

import { NotificationContext } from "./NotificationContext";
import type { NotificationProviderProps } from "./notification.types";

export function NotificationProvider({
  notifications,
  children,
}: NotificationProviderProps) {
  const value = useMemo(
    () => ({
      notifications,
      unreadCount: notifications.filter(
        (notification) => !notification.read,
      ).length,
    }),
    [notifications],
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}