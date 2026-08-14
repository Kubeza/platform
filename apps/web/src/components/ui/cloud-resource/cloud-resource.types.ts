import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type CloudResourceStatus =
  | "available"
  | "provisioning"
  | "degraded"
  | "failed"
  | "stopped";

export interface CloudResourceProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  provider: string;
  type: string;
  name: string;
  region?: string;
  status?: CloudResourceStatus;
  identifier?: ReactNode;
  metadata?: ReactNode;
}