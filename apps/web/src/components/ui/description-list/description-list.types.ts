import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface DescriptionListItemData {
  id: string;
  label: ReactNode;
  value: ReactNode;
  description?: ReactNode;
}

export interface DescriptionListProps
  extends HTMLAttributes<HTMLDListElement> {
  items?: DescriptionListItemData[];
  columns?: 1 | 2 | 3;
}

export interface DescriptionListItemProps
  extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  description?: ReactNode;
}