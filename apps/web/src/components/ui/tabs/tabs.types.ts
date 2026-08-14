import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface TabItemData {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface TabsContextValue {
  value: string;
  setValue: (value: string) => void;
}

export interface TabsProviderProps {
  children: ReactNode;
  defaultValue: string;
}

export interface TabsProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface TabsListProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface TabsTriggerProps
  extends HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export interface TabsContentProps
  extends HTMLAttributes<HTMLDivElement> {
  value: string;
}