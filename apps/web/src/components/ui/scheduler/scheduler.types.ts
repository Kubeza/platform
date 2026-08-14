import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface SchedulerResource {
  id: string;
  name: string;
  description?: string;
}

export interface SchedulerEvent {
  id: string;
  resourceId: string;
  start: Date;
  end: Date;
  title: string;
  content?: ReactNode;
}

export interface SchedulerProps
  extends HTMLAttributes<HTMLDivElement> {
  resources?: SchedulerResource[];
  events?: SchedulerEvent[];
  startHour?: number;
  endHour?: number;
}