import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type ClusterNodeStatus =
  | "healthy"
  | "warning"
  | "error"
  | "unknown";

export interface ClusterNode {
  id: string;
  name: string;
  type: string;
  status?: ClusterNodeStatus;
  description?: ReactNode;
}

export interface ClusterMapProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  nodes: ClusterNode[];
  title?: ReactNode;
}