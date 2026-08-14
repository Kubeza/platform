import type { ReactNode } from "react";

export interface BreadcrumbItemData {
  id: string;
  label: string;
  href?: string;
  icon?: ReactNode;
  current?: boolean;
}

export interface BreadcrumbContextValue {
  items: BreadcrumbItemData[];
  setItems: (items: BreadcrumbItemData[]) => void;
}

export interface BreadcrumbProviderProps {
  children: ReactNode;
  items?: BreadcrumbItemData[];
}