import type { ReactNode } from "react";

export interface MenubarItemData {
  id: string;
  label: string;
  disabled?: boolean;
  children?: MenubarItemData[];
}

export interface MenubarContextValue {
  value: string | null;
  setValue: (value: string | null) => void;
}

export interface MenubarProviderProps {
  children: ReactNode;
  defaultValue?: string | null;
}