import type {
  HTMLAttributes,
} from "react";

export interface GanttTask {
  id: string;
  name: string;
  start: Date;
  end: Date;
  progress?: number;
  group?: string;
}

export interface GanttProps
  extends HTMLAttributes<HTMLDivElement> {
  tasks?: GanttTask[];
  startDate?: Date;
  endDate?: Date;
}