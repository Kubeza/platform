import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type PipelineStageStatus =
  | "pending"
  | "running"
  | "success"
  | "failed"
  | "skipped";

export interface PipelineStage {
  id: string;
  name: string;
  status?: PipelineStageStatus;
  description?: ReactNode;
  duration?: string;
}

export interface PipelineProps
  extends HTMLAttributes<HTMLDivElement> {
  stages: PipelineStage[];
  orientation?: "horizontal" | "vertical";
}