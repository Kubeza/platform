import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export interface SwitchContextValue {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  disabled: boolean;
}

export interface SwitchProviderProps {
  children: ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export interface SwitchProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onChange"
  > {}