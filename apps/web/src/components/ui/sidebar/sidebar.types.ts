import type { ReactNode } from "react";

export type SidebarVariant =
  | "default"
  | "floating"
  | "inset";

export type SidebarCollapsible =
  | "offcanvas"
  | "icon"
  | "none";

export interface SidebarMenuItemData {
  id: string;
  label: string;
  href?: string;
  icon?: ReactNode;
  badge?: string | number;
  active?: boolean;
  disabled?: boolean;
  children?: SidebarMenuItemData[];
}

export interface SidebarContextValue {
  open: boolean;
  variant: SidebarVariant;
  collapsible: SidebarCollapsible;
  items: SidebarMenuItemData[];
}

export interface SidebarProviderProps {
  children: ReactNode;
  open?: boolean;
  variant?: SidebarVariant;
  collapsible?: SidebarCollapsible;
  items?: SidebarMenuItemData[];
}