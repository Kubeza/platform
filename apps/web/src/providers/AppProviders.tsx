"use client";

import type { PropsWithChildren } from "react";

export default function AppProviders({
  children,
}: PropsWithChildren): React.JSX.Element {
  return <>{children}</>;
}