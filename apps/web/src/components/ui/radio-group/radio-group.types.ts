import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface RadioGroupContextValue {
  value: string;
  setValue: (value: string) => void;
  disabled: boolean;
}

export interface RadioGroupProviderProps {
  children: ReactNode;
  defaultValue?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  children: ReactNode;
}

export interface RadioGroupItemProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {
  value: string;
}