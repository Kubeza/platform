import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface CalendarEvent {
  id: string;
  date: Date;
  title: string;
  description?: string;
  allDay?: boolean;
  content?: ReactNode;
}

export interface CalendarProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "onChange"
  > {
  value?: Date;
  events?: CalendarEvent[];
  onChange?: (date: Date) => void;
  month?: Date;
  onMonthChange?: (date: Date) => void;
}