import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type DeploymentStatusValue =
  | "pending"
  | "deploying"
  | "success"
  | "failed"
  | "cancelled"
  | "rollback";

export interface DeploymentStatusProps
  extends HTMLAttributes<HTMLDivElement> {
  status: DeploymentStatusValue;
  name?: ReactNode;
  version?: ReactNode;
  environment?: ReactNode;
  message?: ReactNode;
  duration?: ReactNode;
}