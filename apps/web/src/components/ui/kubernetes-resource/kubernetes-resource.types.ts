import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type KubernetesResourceStatus =
  | "healthy"
  | "warning"
  | "error"
  | "unknown";

export interface KubernetesResourceProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  kind: string;
  name: string;
  namespace?: string;
  status?: KubernetesResourceStatus;
  metadata?: ReactNode;
  children?: ReactNode;
}