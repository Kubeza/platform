import type {
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface PinInputContextValue {
  value: string;
  setValue: (value: string) => void;
  length: number;
  disabled: boolean;
}

export interface PinInputProviderProps {
  children: ReactNode;
  length?: number;
  defaultValue?: string;
  disabled?: boolean;
}

export interface PinInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "size"
  > {}

export interface PinInputGroupProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface PinInputSlotProps
  extends HTMLAttributes<HTMLDivElement> {
  index: number;
}