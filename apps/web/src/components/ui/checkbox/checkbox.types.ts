import type { InputHTMLAttributes, ReactNode } from "react";

export interface CheckboxContextValue {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  disabled: boolean;
}

export interface CheckboxProviderProps {
  children: ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {}