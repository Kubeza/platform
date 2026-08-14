import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type KanbanPriority =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type KanbanCardStatus =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "running"
  | "blocked"
  | "ai";

export interface KanbanUser {
  id: string;
  name: string;
  avatar?: string;
}

export interface KanbanLabelData {
  id: string;
  name: string;
  color?: string;
}

export interface KanbanCardData {
  id: string;

  title: ReactNode;

  description?: ReactNode;

  priority?: KanbanPriority;

  status?: KanbanCardStatus;

  labels?: KanbanLabelData[];

  assignees?: KanbanUser[];

  comments?: number;

  attachments?: number;

  dueDate?: ReactNode;

  footer?: ReactNode;
}

export interface KanbanColumnData {
  id: string;

  title: ReactNode;

  color?: string;

  limit?: number;

  cards: KanbanCardData[];
}

export interface KanbanProps
  extends HTMLAttributes<HTMLDivElement> {
  columns: KanbanColumnData[];
}

export interface KanbanColumnProps
  extends HTMLAttributes<HTMLDivElement> {
  column: KanbanColumnData;
}

export interface KanbanCardProps
  extends HTMLAttributes<HTMLDivElement> {
  card: KanbanCardData;
}

export interface KanbanHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  column: KanbanColumnData;
}

export interface KanbanFooterProps
  extends HTMLAttributes<HTMLDivElement> {
  column: KanbanColumnData;
}

export interface KanbanBadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  status?: KanbanCardStatus;
}

export interface KanbanPriorityProps
  extends HTMLAttributes<HTMLDivElement> {
  priority?: KanbanPriority;
}

export interface KanbanAvatarGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  users?: KanbanUser[];
}

export interface KanbanLabelProps
  extends HTMLAttributes<HTMLSpanElement> {
  label: KanbanLabelData;
}