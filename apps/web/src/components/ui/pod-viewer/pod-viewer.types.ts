import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type PodStatus =
  | "Pending"
  | "Running"
  | "Succeeded"
  | "Failed"
  | "Unknown";

export interface PodContainer {
  name: string;
  image?: string;
  ready?: boolean;
  restartCount?: number;
}

export interface PodViewerProps
  extends HTMLAttributes<HTMLDivElement> {
  name: string;
  namespace?: string;
  status?: PodStatus;
  node?: string;
  containers?: PodContainer[];
  age?: ReactNode;
}