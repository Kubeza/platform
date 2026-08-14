import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface CheckboxGroupOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CheckboxGroupContextValue {
  value: string[];
  setValue: (value: string[]) => void;
  options: CheckboxGroupOption[];
  disabled: boolean;
}

export interface CheckboxGroupProviderProps {
  children: ReactNode;
  options: CheckboxGroupOption[];
  defaultValue?: string[];
  disabled?: boolean;
}

export interface CheckboxGroupProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface CheckboxGroupItemProps
  extends HTMLAttributes<HTMLLabelElement> {
  value: string;
  label: string;
  disabled?: boolean;
}