"use client";

import type { ReactNode } from "react";

export interface HoverCardPortalProps {
  children: ReactNode;
}

export function HoverCardPortal({
  children,
}: HoverCardPortalProps) {
  return <>{children}</>;
}