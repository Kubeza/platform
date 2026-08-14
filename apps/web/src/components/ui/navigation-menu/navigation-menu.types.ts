import type { ReactNode } from "react";

export interface NavigationMenuItemData {
  id: string;
  label: string;
  href?: string;
  disabled?: boolean;
  children?: NavigationMenuItemData[];
}

export interface NavigationMenuContextValue {
  value: string | null;
  setValue: (value: string | null) => void;
}

export interface NavigationMenuProviderProps {
  children: ReactNode;
  defaultValue?: string | null;
}